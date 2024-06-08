import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";
import { authorize } from "../auth";

export async function POST(request: NextRequest) {
  try {
    authorize(request);
  } catch (error: unknown) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const payload = await request.json();

  const beerStyle = await prisma.beerStyle.create({ data: payload });
  const response = NextResponse.json(beerStyle);

  return response;
}

export async function GET(request: NextRequest) {
  const sortByParam = request.nextUrl.searchParams.get("sort");
  const [sortBy, sortOrder] = sortByParam
    ? JSON.parse(sortByParam)
    : ["id", "ASC"];

  const beerStyles = await prisma.beerStyle.findMany({
    orderBy: [{ [sortBy]: sortOrder.toLowerCase() }],
    include: {
      sampleRecipe: {
        include: {
          recipeMaltExtracts: { include: { maltExtract: true } },
          recipeGrains: { include: { grain: true } },
          recipeHops: { include: { hop: true } },
          yeast: true,
        },
      },
    },
  });
  const response = NextResponse.json(beerStyles);

  const count = await prisma.beerStyle.count();
  response.headers.set("Content-Range", count.toString());
  return response;
}
