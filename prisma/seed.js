// prisma/seed.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  // Clear existing data
  await prisma.analytics.deleteMany();
  await prisma.socialProof.deleteMany();
  await prisma.lead.deleteMany();

  console.log("🗑️  Cleared existing data");

  // Create social proof entries
  const socialProofs = [
    {
      message: "🎉 Sarah from Denver just got her Revenue Robot setup!",
      location: "Denver, CO",
      type: "SIGNUP",
    },
    {
      message: "💰 Mike's Restaurant increased bookings by 47% this week!",
      location: "Miami, FL",
      type: "SUCCESS",
    },
    {
      message: "⚡ Jessica's Revenue Robot generated 23 leads yesterday!",
      location: "Austin, TX",
      type: "LEADS",
    },
    {
      message: "🚀 Tom's Auto Shop booked 15 appointments while he slept!",
      location: "Phoenix, AZ",
      type: "BOOKING",
    },
    {
      message: "📈 Lisa's boutique saw 31% more sales since setup!",
      location: "Seattle, WA",
      type: "SALES",
    },
    {
      message: "🔥 David's gym signed 12 new members via chatbot today!",
      location: "Chicago, IL",
      type: "CONVERSION",
    },
    {
      message:
        "💡 Rachel's consulting firm automated 80% of lead qualification!",
      location: "San Francisco, CA",
      type: "SUCCESS",
    },
    {
      message: "🎯 Mark's plumbing service booked 28 jobs this weekend!",
      location: "Dallas, TX",
      type: "BOOKING",
    },
    {
      message: "🌟 Jennifer's beauty salon doubled online bookings!",
      location: "Los Angeles, CA",
      type: "CONVERSION",
    },
    {
      message:
        "⚡ Kevin's HVAC company got 15 emergency calls handled automatically!",
      location: "Atlanta, GA",
      type: "LEADS",
    },
    {
      message: "💰 Maria's catering business increased orders by 52%!",
      location: "New York, NY",
      type: "SALES",
    },
    {
      message: "🚀 James's law firm qualified 19 new clients this month!",
      location: "Boston, MA",
      type: "CONVERSION",
    },
  ];

  for (const proof of socialProofs) {
    await prisma.socialProof.create({
      data: proof,
    });
  }

  console.log(`✅ Created ${socialProofs.length} social proof entries`);

  // Create some sample leads for testing
  const sampleLeads = [
    {
      email: "sarah.johnson@example.com",
      businessName: "Denver Marketing Solutions",
      phone: "+1-303-555-0123",
      source: "hero",
      status: "QUALIFIED",
    },
    {
      email: "mike.restaurant@example.com",
      businessName: "Mike's Italian Bistro",
      phone: "+1-305-555-0456",
      source: "final-cta",
      status: "CONVERTED",
    },
    {
      email: "jessica.leads@example.com",
      businessName: "Austin Lead Generation",
      phone: "+1-512-555-0789",
      source: "hero",
      status: "NEW",
    },
    {
      email: "tom.auto@example.com",
      businessName: "Tom's Auto Repair",
      phone: "+1-602-555-0321",
      source: "social-proof",
      status: "CONTACTED",
    },
    {
      email: "lisa.boutique@example.com",
      businessName: "Lisa's Fashion Boutique",
      phone: "+1-206-555-0654",
      source: "final-cta",
      status: "QUALIFIED",
    },
  ];

  for (const lead of sampleLeads) {
    await prisma.lead.create({
      data: lead,
    });
  }

  console.log(`✅ Created ${sampleLeads.length} sample leads`);

  // Create some sample analytics data
  const analyticsEvents = [
    {
      event: "page_view",
      data: { path: "/", referrer: "https://google.com" },
    },
    {
      event: "cta_clicked",
      data: { location: "hero", action: "get_started" },
    },
    {
      event: "social_proof_shown",
      data: { message: "Sarah from Denver just got setup!", type: "SIGNUP" },
    },
    {
      event: "lead_created",
      data: { source: "hero" },
    },
    {
      event: "urgency_timer_shown",
      data: { timerText: "Price increases in 3d 22h 45m", scarcityCount: 23 },
    },
    {
      event: "value_calculator_used",
      data: { salary: 3500, savings: 3403, roi: 3506 },
    },
    {
      event: "time_milestone",
      data: { milestone: 30, scrollDepth: 45, interactions: 5 },
    },
    {
      event: "exit_intent",
      data: { timeOnPage: 125000, scrollDepth: 78, interactions: 12 },
    },
  ];
}
