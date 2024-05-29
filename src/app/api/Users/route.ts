import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const payload = await request.json()
    console.log("payload", payload)

    try {
      const user = await prisma.user.create({data: payload});
      const response = NextResponse.json(user);

      return response
    } catch {
      console.error("payload from failed request", payload)
      return NextResponse.json("invalid payload", {status: 422})
    }
  }