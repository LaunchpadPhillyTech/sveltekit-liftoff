import { json } from "@sveltejs/kit";
import { p as prisma } from "../../../../chunks/db.js";
import { z } from "zod";
import sgMail from "@sendgrid/mail";
const leadSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  businessName: z.string().min(1, "Business name is required"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  source: z.string().default("hero")
});
z.object({
  email: z.string().email("Please enter a valid email address")
});
const SENDGRID_API_KEY = "SG.your_sendgrid_api_key_here";
const SENDGRID_FROM_EMAIL = "hello@GY6AI.com";
sgMail.setApiKey(SENDGRID_API_KEY);
async function sendWelcomeEmail(email, businessName) {
  const msg = {
    to: email,
    from: SENDGRID_FROM_EMAIL,
    subject: "🚀 Your Revenue Robot Setup Begins Now!",
    html: `
      <h1>Welcome ${businessName}!</h1>
      <p>Your Revenue Robot is being prepared...</p>
      <p>Next steps:</p>
      <ul>
        <li>Our specialist will call you within 24 hours</li>
        <li>Your chatbot will be live in 24 hours</li>
        <li>Start seeing results immediately</li>
      </ul>
    `
  };
  await sgMail.send(msg);
}
async function POST({ request }) {
  try {
    const body = await request.json();
    const validatedData = leadSchema.parse(body);
    const existingLead = await prisma.lead.findUnique({
      where: { email: validatedData.email }
    });
    if (existingLead) {
      return json(
        {
          success: false,
          message: "Email already registered"
        },
        { status: 400 }
      );
    }
    const lead = await prisma.lead.create({
      data: validatedData
    });
    await sendWelcomeEmail(validatedData.email, validatedData.businessName);
    await prisma.analytics.create({
      data: {
        event: "lead_created",
        data: { source: validatedData.source }
      }
    });
    return json({
      success: true,
      message: "Revenue Robot reserved successfully!",
      leadId: lead.id
    });
  } catch (error) {
    console.error("Lead creation error:", error);
    if (error.name === "ZodError") {
      return json(
        {
          success: false,
          message: "Invalid form data",
          errors: error.errors
        },
        { status: 400 }
      );
    }
    return json(
      {
        success: false,
        message: "Something went wrong. Please try again."
      },
      { status: 500 }
    );
  }
}
export {
  POST
};
