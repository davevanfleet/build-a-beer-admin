import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";
import { authorize } from "../auth";


export async function GET(request: NextRequest) {
    let appleId: string | undefined;
    try {
        appleId = authorize(request)
    } catch (error) {
        console.error(error)
        return new Response(null, {status: 204})
    }

    const user = await prisma.user.findUniqueOrThrow({where: { appleId }})
    const response = NextResponse.json(user);

    return response
  }