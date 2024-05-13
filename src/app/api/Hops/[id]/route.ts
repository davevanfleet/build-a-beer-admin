import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";
import { authorize } from "../../auth";

export async function PUT(request: NextRequest, { params }: { params: { id: number }}) {
    try {
        authorize(request)
    } catch (error: unknown) {
        return NextResponse.json("Unauthorized", {status: 401})
    }

    const payload = await request.json()

    const hop = await prisma.hop.update({data: payload, where: {id: params.id}});
    const response = NextResponse.json(hop);

    return response
  }

export async function GET(_request: NextRequest, { params }: { params: { id: number }}) {    
    const hop = await prisma.hop.findFirstOrThrow({where: {id: params.id}});
    const response = NextResponse.json(hop);

    return response
  }