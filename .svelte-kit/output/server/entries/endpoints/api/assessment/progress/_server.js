import { json } from "@sveltejs/kit";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function GET({ url }) {
  try {
    const assessmentId = url.searchParams.get("assessmentId");
    const email = url.searchParams.get("email");
    if (!assessmentId && !email) {
      return json(
        { error: "Missing assessmentId or email parameter" },
        { status: 400 }
      );
    }
    let assessment;
    if (assessmentId) {
      assessment = await prisma.assessment.findUnique({
        where: { id: assessmentId },
        include: {
          submissions: true,
          candidate: true
        }
      });
    } else if (email) {
      const candidate = await prisma.candidate.findUnique({
        where: { email },
        include: {
          assessments: {
            where: { status: "IN_PROGRESS" },
            include: { submissions: true },
            orderBy: { createdAt: "desc" },
            take: 1
          }
        }
      });
      if (candidate && candidate.assessments.length > 0) {
        assessment = candidate.assessments[0];
        assessment.candidate = candidate;
      }
    }
    if (!assessment) {
      return json({ error: "Assessment not found" }, { status: 404 });
    }
    const sectionProgress = {};
    const sectionMapping = {
      CLIENT_ACQUISITION: "clientAcquisition",
      TECHNICAL_SOLUTION: "technicalSolution",
      PROMPT_ENGINEERING: "promptEngineering",
      IMPLEMENTATION: "implementation"
    };
    assessment.submissions.forEach((submission) => {
      const sectionKey = sectionMapping[submission.section];
      if (sectionKey) {
        sectionProgress[sectionKey] = {
          progress: submission.progress,
          completed: submission.completed
        };
      }
    });
    const completedSections = Object.values(sectionProgress).filter(
      (s) => s.completed
    ).length;
    const overallProgress = Math.round(completedSections / 4 * 100);
    return json({
      success: true,
      assessment: {
        id: assessment.id,
        status: assessment.status,
        startTime: assessment.startTime,
        submissionTime: assessment.submissionTime,
        overallProgress,
        sections: sectionProgress
      },
      candidate: {
        id: assessment.candidate.id,
        firstName: assessment.candidate.firstName,
        lastName: assessment.candidate.lastName,
        email: assessment.candidate.email
      }
    });
  } catch (error) {
    console.error("Progress retrieval error:", error);
    return json({ error: "Failed to retrieve progress" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
async function POST({ request }) {
  try {
    const { assessmentId, section, progress, completed, data } = await request.json();
    if (!assessmentId || !section) {
      return json(
        { error: "Missing required fields: assessmentId or section" },
        { status: 400 }
      );
    }
    const submission = await prisma.submission.upsert({
      where: {
        assessmentId_section: {
          assessmentId,
          section
        }
      },
      create: {
        assessmentId,
        section,
        data: data || {},
        progress: progress || 0,
        completed: completed || false
      },
      update: {
        data: data || {},
        progress: progress || 0,
        completed: completed || false
      }
    });
    const allSubmissions = await prisma.submission.findMany({
      where: { assessmentId }
    });
    const completedCount = allSubmissions.filter((s) => s.completed).length;
    const overallProgress = Math.round(completedCount / 4 * 100);
    await prisma.assessment.update({
      where: { id: assessmentId },
      data: { overallProgress }
    });
    return json({
      success: true,
      submission: {
        id: submission.id,
        progress: submission.progress,
        completed: submission.completed
      },
      overallProgress
    });
  } catch (error) {
    console.error("Progress update error:", error);
    return json({ error: "Failed to update progress" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
export {
  GET,
  POST
};
