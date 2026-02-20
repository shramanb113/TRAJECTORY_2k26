import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { tokenBucket } from "./lib/rateLimiter";

export async function middleware(req: NextRequest) {

  const ip =
    req.headers.get("x-forwarded-for") ??
    "anonymous";

  const allowed = await tokenBucket(ip);

  if (!allowed) {

    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429 }
    );

  }

  return NextResponse.next();
}

export const config = {

  matcher: "/api/:path*",

};
