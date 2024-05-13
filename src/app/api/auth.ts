import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

export const authorize = (request: NextRequest) => {
    const authHeader = request.headers.get("authorization")
    if (!authHeader){
        throw new Error("No Auth Token")
    }
    const decoded = jwtDecode(authHeader)
    console.log("decoded", decoded)
}