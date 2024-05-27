import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    cookies().delete('auth')
    
    const destinationUrl = new URL("/", new URL(request.url).origin);
    const response = NextResponse.redirect(destinationUrl, { status: 302 });

    return response;
  }