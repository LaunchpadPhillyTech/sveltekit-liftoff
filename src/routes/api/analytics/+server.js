import { json } from "@sveltejs/kit";
import prisma from "$lib/db.js";

export async function POST({ request }) {
  try {
    const { event, data } = await request.json();

    await prisma.analytics.create({
      data: {
        event,
        data: data || {},
        userAgent: request.headers.get("user-agent"),
        ip: request.headers.get("x-forwarded-for") || "unknown",
      },
    });

    return json({ success: true });
  } catch (error) {
    return json({ error: "Failed to track event" }, { status: 500 });
  }
}
