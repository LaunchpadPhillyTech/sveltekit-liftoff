import { json } from "@sveltejs/kit";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function POST({ request }) {
  try {
    const submissionData = await request.json();
    if (!submissionData.candidate?.email) {
      return json({ error: "Missing candidate information" }, { status: 400 });
    }
    const candidate = await prisma.candidate.findUnique({
      where: { email: submissionData.candidate.email },
      include: {
        assessments: {
          where: { status: "IN_PROGRESS" },
          orderBy: { createdAt: "desc" },
          take: 1
        }
      }
    });
    if (!candidate || candidate.assessments.length === 0) {
      return json(
        { error: "No active assessment found for this candidate" },
        { status: 404 }
      );
    }
    const assessment = candidate.assessments[0];
    await prisma.candidate.update({
      where: { id: candidate.id },
      data: {
        firstName: submissionData.candidate.firstName || candidate.firstName,
        lastName: submissionData.candidate.lastName || candidate.lastName,
        phone: submissionData.candidate.phone || candidate.phone,
        linkedin: submissionData.candidate.linkedin || candidate.linkedin,
        portfolio: submissionData.candidate.portfolio || candidate.portfolio,
        additionalNotes: submissionData.candidate.additionalNotes || candidate.additionalNotes,
        consent: submissionData.candidate.consent || candidate.consent
      }
    });
    await prisma.assessment.update({
      where: { id: assessment.id },
      data: {
        status: "SUBMITTED",
        submissionTime: /* @__PURE__ */ new Date(),
        timeRemaining: submissionData.timeRemaining,
        overallProgress: submissionData.progress?.overallProgress || 0
      }
    });
    const sectionMapping = {
      clientAcquisition: "CLIENT_ACQUISITION",
      technicalSolution: "TECHNICAL_SOLUTION",
      promptEngineering: "PROMPT_ENGINEERING",
      implementation: "IMPLEMENTATION"
    };
    for (const [sectionKey, sectionData] of Object.entries(
      submissionData.sections || {}
    )) {
      const sectionName = sectionMapping[sectionKey];
      if (sectionName && sectionData) {
        const progressData = submissionData.progress?.sections?.[sectionKey];
        await prisma.submission.upsert({
          where: {
            assessmentId_section: {
              assessmentId: assessment.id,
              section: sectionName
            }
          },
          create: {
            assessmentId: assessment.id,
            section: sectionName,
            data: sectionData,
            progress: progressData?.progress || 0,
            completed: progressData?.completed || false
          },
          update: {
            data: sectionData,
            progress: progressData?.progress || 0,
            completed: progressData?.completed || false
          }
        });
      }
    }
    const submissionId = `ASM-${assessment.id.slice(-8).toUpperCase()}`;
    return json({
      success: true,
      submissionId,
      assessmentId: assessment.id,
      message: "Assessment submitted successfully"
    });
  } catch (error) {
    console.error("Assessment submission error:", error);
    return json({ error: "Failed to submit assessment" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
export {
  POST
};
