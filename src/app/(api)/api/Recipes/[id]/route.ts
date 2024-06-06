import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";
import { authorize } from "../../auth";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  try {
    authorize(request);
  } catch (error: unknown) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const payload = await request.json();

  const recipe = await prisma.recipe.update({
    data: payload,
    where: { id: params.id },
  });
  const response = NextResponse.json(recipe);

  return response;
}

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: number } },
) {
  const recipe = await prisma.recipe.findFirstOrThrow({
    where: { id: +params.id },
  });
  const response = NextResponse.json(recipe);

  return response;
}
