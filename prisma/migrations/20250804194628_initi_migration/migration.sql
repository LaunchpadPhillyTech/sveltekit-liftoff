-- CreateEnum
CREATE TYPE "public"."LeadStatus" AS ENUM ('NEW', 'CONTACTED', 'QUALIFIED', 'CONVERTED', 'LOST');

-- CreateEnum
CREATE TYPE "public"."ProofType" AS ENUM ('SIGNUP', 'SUCCESS', 'LEADS', 'BOOKING', 'SALES', 'CONVERSION');

-- CreateTable
CREATE TABLE "public"."leads" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "businessName" TEXT,
    "phone" TEXT,
    "source" TEXT NOT NULL DEFAULT 'hero',
    "status" "public"."LeadStatus" NOT NULL DEFAULT 'NEW',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "leads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."analytics" (
    "id" TEXT NOT NULL,
    "event" TEXT NOT NULL,
    "data" JSONB,
    "userAgent" TEXT,
    "ip" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "analytics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."social_proof" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "type" "public"."ProofType" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "social_proof_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "leads_email_key" ON "public"."leads"("email");
