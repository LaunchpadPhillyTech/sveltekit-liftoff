// src/routes/api/leads/+server.js
import { json } from "@sveltejs/kit";
import prisma from "$lib/db.js";
import { leadSchema } from "$lib/validation.js";
import { sendWelcomeEmail } from "$lib/email.js";

export async function POST({ request }) {
  try {
    const body = await request.json();
    const validatedData = leadSchema.parse(body);

    // Check if lead already exists
    const existingLead = await prisma.lead.findUnique({
      where: { email: validatedData.email },
    });

    if (existingLead) {
      return json(
        {
          success: false,
          message: "Email already registered",
        },
        { status: 400 }
      );
    }

    // Create new lead
    const lead = await prisma.lead.create({
      data: validatedData,
    });

    // Send welcome email
    await sendWelcomeEmail(validatedData.email, validatedData.businessName);

    // Track analytics
    await prisma.analytics.create({
      data: {
        event: "lead_created",
        data: { source: validatedData.source },
      },
    });

    return json({
      success: true,
      message: "Revenue Robot reserved successfully!",
      leadId: lead.id,
    });
  } catch (error) {
    console.error("Lead creation error:", error);

    if (error.name === "ZodError") {
      return json(
        {
          success: false,
          message: "Invalid form data",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
