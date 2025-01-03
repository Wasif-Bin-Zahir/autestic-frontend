import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value;

  // List of protected routes
  const protectedRoutes = ["/dashboard"];

  // If accessing a protected route and no token is found, redirect to login
  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route)) && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If token exists and user is accessing login, redirect to dashboard
  if (req.nextUrl.pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
