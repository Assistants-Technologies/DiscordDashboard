import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { TokenService } from "@/services/tokenService";
import { StripeEnvironment as Environment } from "@prisma/client";

export async function GET() {
    const session = await auth();
    if (!session?.user?.id) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const tokens = await TokenService.getEnvironmentsWithToken(session.user.id);

    return NextResponse.json({
        TEST: tokens.includes("TEST"),
        LIVE: tokens.includes("LIVE"),
    });
}

export async function POST(req: Request) {
    const session = await auth();
    if (!session?.user?.id) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { environment } = await req.json();

    if (!["TEST", "LIVE"].includes(environment)) {
        return NextResponse.json({ error: "Invalid environment" }, { status: 400 });
    }

    const rawToken = await TokenService.generate(session.user.id, environment as Environment);
    return NextResponse.json({ token: rawToken });
}