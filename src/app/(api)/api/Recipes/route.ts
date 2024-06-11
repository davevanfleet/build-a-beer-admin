import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";
import { authorize } from "../auth";
import { Prisma } from "@prisma/client";

type CreatePayload = {
  name: string;
  description: string;
  postBoilGallons: number;
  recipeMaltExtracts: { maltExtractId: string; weightInPounds: number }[];
  recipeGrains: { grainId: number; weightInPounds: number }[];
  recipeHops: {
    hopId: number;
    weightInOunces: number;
    alphaAcidPercent: number;
    boilTimeMinutes: number;
  }[];
  yeastId: number;
};

const transformCreatePayload = (
  payload: CreatePayload,
): Prisma.RecipeCreateInput => {
  return {
    name: payload.name,
    description: payload.description,
    postBoilGallons: payload.postBoilGallons,
    recipeMaltExtracts: {
      create: payload.recipeMaltExtracts.map(
        ({ maltExtractId, weightInPounds }) => ({
          maltExtract: { connect: { id: maltExtractId } },
          weightInPounds,
        }),
      ),
    },
    recipeGrains: {
      create: payload.recipeGrains.map(({ grainId, weightInPounds }) => ({
        grain: { connect: { id: grainId } },
        weightInPounds,
      })),
    },
    recipeHops: {
      create: payload.recipeHops.map(
        ({ hopId, weightInOunces, alphaAcidPercent, boilTimeMinutes }) => ({
          hop: { connect: { id: hopId } },
          weightInOunces,
          alphaAcidPercent,
          boilTimeMinutes,
        }),
      ),
    },
    yeast: {
      connect: {
        id: payload.yeastId,
      },
    },
  };
};

export async function POST(request: NextRequest) {
  try {
    authorize(request);
  } catch (error: unknown) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const payload = await request.json();

  const recipe = await prisma.recipe.create({
    data: transformCreatePayload(payload),
  });
  const response = NextResponse.json(recipe);

  return response;
}

export async function GET(request: NextRequest) {
  const sortByParam = request.nextUrl.searchParams.get("sort");
  const [sortBy, sortOrder] = sortByParam
    ? JSON.parse(sortByParam)
    : ["id", "ASC"];

  const recipe = await prisma.recipe.findMany({
    orderBy: [{ [sortBy]: sortOrder.toLowerCase() }],
  });
  const response = NextResponse.json(recipe);

  const count = await prisma.recipe.count();
  response.headers.set("Content-Range", count.toString());
  return response;
}
