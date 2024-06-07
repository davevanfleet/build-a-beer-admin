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

  const otherFermentable = await prisma.otherFermentable.create({
    data: payload,
  });
  const response = NextResponse.json(otherFermentable);

  return response;
}

export async function GET(request: NextRequest) {
  const sortByParam = request.nextUrl.searchParams.get("sort");
  const [sortBy, sortOrder] = sortByParam
    ? JSON.parse(sortByParam)
    : ["id", "ASC"];

  const filterParam = Boolean(request.nextUrl.searchParams.get("filter"))
    ? JSON.parse(request.nextUrl.searchParams.get("filter")!)
    : {};
  const searchQuery = filterParam?.q;

  const otherFermentables = await prisma.otherFermentable.findMany({
    where: {
      name: {
        contains: searchQuery,
        mode: "insensitive",
      },
    },
    orderBy: { [sortBy]: sortOrder.toLowerCase() },
  });
  const response = NextResponse.json(otherFermentables);

  const count = await prisma.otherFermentable.count();
  response.headers.set("Content-Range", count.toString());

  return response;
}
