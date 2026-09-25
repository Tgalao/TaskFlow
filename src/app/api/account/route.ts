import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { updateAccountSchema } from "@/lib/validations/account";

export async function PATCH(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = updateAccountSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid data" },
      { status: 400 }
    );
  }

  const { name, email } = parsed.data;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing && existing.id !== session.user.id) {
    return NextResponse.json(
      { error: "This email is already in use" },
      { status: 409 }
    );
  }

  const user = await prisma.user.update({
    where: { id: session.user.id },
    data: { name, email },
    select: { id: true, name: true, email: true },
  });

  return NextResponse.json({ user });
}

export async function DELETE() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  await prisma.user.delete({ where: { id: session.user.id } });

  return NextResponse.json({ success: true });
}
