import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Dados invalidos" },
      { status: 400 }
    );
  }

  const message = await prisma.contactMessage.create({
    data: parsed.data,
  });

  return NextResponse.json({ message }, { status: 201 });
}
