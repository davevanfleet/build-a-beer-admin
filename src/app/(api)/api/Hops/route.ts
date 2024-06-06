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

  const hop = await prisma.hop.create({ data: payload });
  const response = NextResponse.json(hop);

  return response;
}

export async function GET(request: NextRequest) {
  const sortByParam = request.nextUrl.searchParams.get("sort");
  const [sortBy, sortOrder] = sortByParam
    ? JSON.parse(sortByParam)
    : ["id", "ASC"];

  const hops = await prisma.hop.findMany({
    orderBy: { [sortBy]: sortOrder.toLowerCase() },
  });
  const response = NextResponse.json(hops);

  const count = await prisma.hop.count();
  response.headers.set("Content-Range", count.toString());

  return response;
}
