import { prisma } from "@/lib/prisma";
import crypto from "crypto";
import { StripeEnvironment as Environment } from "@prisma/client";

export class TokenService {
    static async generate(userId: string, environment: Environment = "TEST") {
        const existingToken = await prisma.apiToken.findFirst({
            where: {
                userId,
                environment,
            },
        });
        if (existingToken) {
            await TokenService.revoke(existingToken.tokenHash)
        }
        const rawToken = crypto.randomBytes(32).toString("hex");
        const tokenHash = crypto.createHash("sha256").update(rawToken).digest("hex");

        await prisma.apiToken.create({
            data: {
                userId,
                tokenHash,
                environment,
            },
        });

        return rawToken;
    }

    static async validate(rawToken: string): Promise<{ userId: string; environment: Environment } | null> {
        const tokenHash = crypto.createHash("sha256").update(rawToken).digest("hex");

        const token = await prisma.apiToken.findUnique({
            where: { tokenHash },
        });

        if (!token) return null;

        await prisma.apiToken.update({
            where: { id: token.id },
            data: { lastUsedAt: new Date() },
        });

        return { userId: token.userId, environment: token.environment };
    }

    static async list(userId: string) {
        return prisma.apiToken.findMany({
            where: { userId },
            orderBy: { createdAt: "desc" },
        });
    }

    static async getEnvironmentsWithToken(userId: string): Promise<("TEST" | "LIVE")[]> {
        const tokens = await prisma.apiToken.findMany({
            where: { userId },
            select: { environment: true },
            distinct: ["environment"],
        });

        return tokens.map(t => t.environment);
    }

    static async revoke(rawToken: string) {
        const tokenHash = crypto.createHash("sha256").update(rawToken).digest("hex");
        await prisma.apiToken.deleteMany({ where: { tokenHash } });
    }
}