import { json } from "@sveltejs/kit";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function POST({ request }) {
  try {
    const { candidateInfo } = await request.json();
    if (!candidateInfo.firstName || !candidateInfo.lastName || !candidateInfo.email) {
      return json(
        { error: "Missing required candidate information" },
        { status: 400 }
      );
    }
    let candidate = await prisma.candidate.findUnique({
      where: { email: candidateInfo.email }
    });
    if (!candidate) {
      candidate = await prisma.candidate.create({
        data: {
          firstName: candidateInfo.firstName,
          lastName: candidateInfo.lastName,
          email: candidateInfo.email,
          phone: candidateInfo.phone || null,
          linkedin: candidateInfo.linkedin || null,
          portfolio: candidateInfo.portfolio || null,
          additionalNotes: candidateInfo.additionalNotes || null,
          consent: candidateInfo.consent || false
        }
      });
    } else {
      candidate = await prisma.candidate.update({
        where: { id: candidate.id },
        data: {
          firstName: candidateInfo.firstName,
          lastName: candidateInfo.lastName,
          phone: candidateInfo.phone || candidate.phone,
          linkedin: candidateInfo.linkedin || candidate.linkedin,
          portfolio: candidateInfo.portfolio || candidate.portfolio,
          additionalNotes: candidateInfo.additionalNotes || candidate.additionalNotes,
          consent: candidateInfo.consent || candidate.consent
        }
      });
    }
    const existingAssessment = await prisma.assessment.findFirst({
      where: {
        candidateId: candidate.id,
        status: "IN_PROGRESS"
      }
    });
    let assessment;
    if (existingAssessment) {
      assessment = existingAssessment;
    } else {
      assessment = await prisma.assessment.create({
        data: {
          candidateId: candidate.id,
          startTime: /* @__PURE__ */ new Date(),
          status: "IN_PROGRESS"
        }
      });
      const sections = [
        "CLIENT_ACQUISITION",
        "TECHNICAL_SOLUTION",
        "PROMPT_ENGINEERING",
        "IMPLEMENTATION"
      ];
      await Promise.all(
        sections.map(
          (section) => prisma.submission.create({
            data: {
              assessmentId: assessment.id,
              section,
              data: {},
              progress: 0,
              completed: false
            }
          })
        )
      );
    }
    return json({
      success: true,
      assessment: {
        id: assessment.id,
        startTime: assessment.startTime,
        status: assessment.status
      },
      candidate: {
        id: candidate.id,
        firstName: candidate.firstName,
        lastName: candidate.lastName,
        email: candidate.email
      }
    });
  } catch (error) {
    console.error("Assessment start error:", error);
    return json({ error: "Failed to start assessment" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
export {
  POST
};
