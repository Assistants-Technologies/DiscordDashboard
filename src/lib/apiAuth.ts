import { TokenService } from "@/lib/tokenService";

export async function getUserFromHeader(authHeader?: string) {
    if (!authHeader?.startsWith("Bearer ")) return null;
    const rawToken = authHeader.slice(7);
    return await TokenService.validate(rawToken);
}