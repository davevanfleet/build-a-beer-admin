import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";
import { authorize } from "../auth";

export async function POST(request: NextRequest) {
  try {
      authorize(request)
  } catch (error: unknown) {
      return NextResponse.json("Unauthorized", {status: 401})
  }

  const payload = await request.json()

  const yeast = await prisma.yeast.create({data: payload});
  const response = NextResponse.json(yeast);

  return response
}

export async function GET(request: NextRequest) {
    const sortByParam = request.nextUrl.searchParams.get("sort")
    const [sortBy, sortOrder] = sortByParam ? JSON.parse(sortByParam) : ["id", "ASC"]

    const yeasts = await prisma.yeast.findMany({orderBy: {[sortBy]: sortOrder}});
    const response = NextResponse.json(yeasts);

    const count = await prisma.yeast.count()
    response.headers.set("Content-Range", count.toString())
    
    return response
  }