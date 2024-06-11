import { prisma } from "@/utils/prisma";
import { type User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const payload = await request.json();
  let user: User | null = null;

  user = await prisma.user.findUnique({ where: { appleId: payload.appleId } });

  if (!!user) {
    await prisma.user.update({
      where: { appleId: payload.appleId },
      data: [payload],
    });
  } else {
    user = await prisma.user.create({ data: payload });
  }

  const response = NextResponse.json(user);

  return response;
}
