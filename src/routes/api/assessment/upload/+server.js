import { json } from "@sveltejs/kit";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST({ request }) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const assessmentId = formData.get("assessmentId");
    const section = formData.get("section");
    const submissionId = formData.get("submissionId");

    if (!file || !assessmentId || !section) {
      return json(
        { error: "Missing required fields: file, assessmentId, or section" },
        { status: 400 }
      );
    }

    // Validate file size (10MB max)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return json(
        { error: "File too large. Maximum size is 10MB." },
        { status: 400 }
      );
    }

    // Validate file type (allow common document, image, and archive types)
    const allowedTypes = [
      "image/",
      "video/",
      "audio/",
      "application/pdf",
      "application/zip",
      "application/x-zip-compressed",
      "text/plain",
      "application/json",
      "application/javascript",
      "text/javascript",
      "text/html",
      "text/css",
      "application/python",
      "text/python",
    ];

    const isValidType =
      allowedTypes.some((type) => file.type.startsWith(type)) ||
      file.name.match(
        /\.(py|js|jsx|html|css|txt|md|json|zip|rar|7z|drawio|vsd|vsdx)$/i
      );

    if (!isValidType) {
      return json({ error: "File type not allowed" }, { status: 400 });
    }

    // Create upload directory
    const uploadDir = join(
      process.cwd(),
      "uploads",
      "assessments",
      assessmentId,
      section
    );
    if (!existsSync(uploadDir)) {
      mkdirSync(uploadDir, { recursive: true });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const filename = `${timestamp}_${safeName}`;
    const filepath = join(uploadDir, filename);

    // Write file to disk
    const bytes = await file.arrayBuffer();
    writeFileSync(filepath, Buffer.from(bytes));

    // Store file info in database if submissionId is provided
    let fileRecord = null;
    if (submissionId) {
      fileRecord = await prisma.submissionFile.create({
        data: {
          submissionId: submissionId,
          fileName: file.name,
          filePath: filepath,
          fileType: file.type,
          fileSize: file.size,
        },
      });
    }

    return json({
      success: true,
      filename: filename,
      originalName: file.name,
      size: file.size,
      type: file.type,
      fileId: fileRecord?.id,
      message: "File uploaded successfully",
    });
  } catch (error) {
    console.error("File upload error:", error);
    return json({ error: "Failed to upload file" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
