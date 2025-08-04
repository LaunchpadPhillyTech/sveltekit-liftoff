import { json } from "@sveltejs/kit";
import { p as prisma } from "../../../../chunks/db.js";
async function GET() {
  try {
    const socialProofs = await prisma.socialProof.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "desc" }
    });
    return json({ socialProofs });
  } catch (error) {
    return json({ error: "Failed to fetch social proof" }, { status: 500 });
  }
}
export {
  GET
};
