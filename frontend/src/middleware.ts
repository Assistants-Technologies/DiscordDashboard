import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    if(request.nextUrl.pathname.startsWith("/dashboard")) {
        const headers = new Headers(request.headers);
        headers.set("x-callback-url", `${request.nextUrl.pathname}${request.nextUrl.search}`);
        return NextResponse.next({ headers });
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: ["/:d*"],
};