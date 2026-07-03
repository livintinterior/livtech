import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(20),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // Save to database (when Prisma is configured)
    // const lead = await prisma.lead.create({
    //   data: {
    //     name: data.name,
    //     email: data.email,
    //     phone: data.phone,
    //     company: data.company,
    //     service: data.service,
    //     message: data.message,
    //     source: "CONTACT_FORM",
    //   },
    // });

    // Send email notification (when Resend is configured)
    // await sendContactNotification(data);
    // await sendContactConfirmation(data);

    // Log for development
    console.log("Contact form submission:", data);

    return NextResponse.json(
      { success: true, message: "Message received. We'll get back to you within 24 hours." },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }

    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
