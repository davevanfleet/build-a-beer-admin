import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request: Request) { 
    const destinationUrl = new URL("/", new URL(request.url).origin);
    const response = NextResponse.redirect(destinationUrl, { status: 302 });

    response.cookies.delete("auth")

    return response;
  }