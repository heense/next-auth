import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl, auth } = req;
  const isLoggedIn = !!auth;

  // Protect routes that start with /admin
  if (nextUrl.pathname.startsWith("/admin") && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", nextUrl.origin));
  }
});

export const config = {
  matcher: ["/admin/:path*"],
};
