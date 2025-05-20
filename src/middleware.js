import { NextResponse } from "next/server";

export async function middleware(request) {
  const authCookie = request.cookies.get("auth");
  const isAuthenticated = authCookie?.value === "true";

  const protectedRoutes = ["/dashboard"];
  const authRoutes = ["/login"];

  if (
    protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (authRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  return NextResponse.next();
}
