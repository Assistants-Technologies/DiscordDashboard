import NextAuth from "next-auth";
import IdentityProvider from "@/identityprovider";
import { StripeService, Environment } from "@/services/stripeService";

export const { handlers, signIn, signOut, auth } = NextAuth({
    debug: true,
    providers: [
        IdentityProvider({
            clientId: process.env.DBD_OIDC_CLIENT_ID!,
            clientSecret: process.env.DBD_OIDC_CLIENT_SECRET!,
            issuer: process.env.IDP_ISSUER!,
        }),
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.AUTH_SECRET!,
    callbacks: {
        async jwt({ token, user, profile }) {
            console.log("🔐 jwt callback (server):", { token, user, profile })
            if (user && profile && (profile as CoreIdentityProfile).country) {
                token.country = (profile as CoreIdentityProfile).country
            }
            return token
        },

        async session({ session, token }) {
            console.log("🔑 session callback (server):", { session, token })
            if (token.country) {
                session.user = {
                    id: token.sub as string,
                    email: token.email as string,
                    name: token.name as string,
                    country: token.country as string
                }
            }
            return session
        }
    }
});