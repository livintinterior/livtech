import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = newsletterSchema.parse(body);

    // Save subscriber (when Prisma is configured)
    // await prisma.newsletterSubscriber.upsert({
    //   where: { email: data.email },
    //   update: { active: true },
    //   create: { email: data.email, name: data.name },
    // });

    console.log("Newsletter subscription:", data);

    return NextResponse.json(
      { success: true, message: "Successfully subscribed to our newsletter." },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.issues }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Failed to subscribe" }, { status: 500 });
  }
}
