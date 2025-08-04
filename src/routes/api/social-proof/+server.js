// src/routes/api/social-proof/+server.js
import { json } from '@sveltejs/kit';
import prisma from '$lib/db.js';

export async function GET() {
    try {
        const socialProofs = await prisma.socialProof.findMany({
            where: { isActive: true },
            orderBy: { createdAt: 'desc' }
        });

        return json({ socialProofs });
    } catch (error) {
        return json({ error: 'Failed to fetch social proof' }, { status: 500 });
    }
}