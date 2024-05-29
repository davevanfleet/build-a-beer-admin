import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const payload = await request.json()
    console.log("payload", payload)

    const user = await prisma.user.create({data: payload});
    const response = NextResponse.json(user);

    return response
  }