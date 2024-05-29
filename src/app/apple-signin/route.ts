import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const formData = await request.formData()
    const authToken = formData.get("id_token")?.toString()

    if (!authToken) {
        console.log("no auth token")
        return NextResponse.json("Hello, Post")
    }

    
    
    const destinationUrl = new URL("/", new URL(request.url).origin);
    const response = NextResponse.redirect(destinationUrl, { status: 302 });

    response.cookies.set('auth', JSON.stringify({authToken}))

    return response;
  }