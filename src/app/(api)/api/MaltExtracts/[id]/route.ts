import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";
import { authorize } from "../../auth";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    authorize(request);
  } catch (error: unknown) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const payload = await request.json();

  const maltExtract = await prisma.maltExtract.update({
    data: payload,
    where: { id: params.id },
  });
  const response = NextResponse.json(maltExtract);

  return response;
}

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } },
) {
  const maltExtract = await prisma.maltExtract.findFirstOrThrow({
    where: { id: params.id },
  });
  const response = NextResponse.json(maltExtract);

  return response;
}
