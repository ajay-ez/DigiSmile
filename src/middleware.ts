import { NextResponse, NextRequest } from "next/server";
import { redirect } from "next/navigation";

export async function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*"]
};
