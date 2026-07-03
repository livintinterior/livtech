import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  company: z.string().optional(),
  projectType: z.string(),
  budget: z.string(),
  timeline: z.string(),
  description: z.string().min(50),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = quoteSchema.parse(body);

    // Save to DB and send emails when configured
    console.log("Quote request:", data);

    return NextResponse.json(
      { success: true, message: "Quote request received. We'll send you a proposal within 24 hours." },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.issues }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
