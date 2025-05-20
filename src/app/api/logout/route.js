import { NextResponse } from "next/server";

export async function POST(request) {
  const origin = request.headers.get("origin") || "http://localhost:3000";
  const response = NextResponse.redirect(new URL("/login", origin));

  response.cookies.set("auth", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    expires: new Date(0),
    path: "/",
  });

  return response;
}
