import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const consultationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  company: z.string().optional(),
  industry: z.string(),
  projectType: z.string(),
  preferredDate: z.string().optional(),
  message: z.string().min(20),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = consultationSchema.parse(body);

    // Save to DB and send emails when configured
    console.log("Consultation booking:", data);

    return NextResponse.json(
      { success: true, message: "Consultation booked! We'll confirm your slot within 2 hours." },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.issues }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
