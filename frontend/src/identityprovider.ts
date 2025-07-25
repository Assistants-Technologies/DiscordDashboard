import type { OAuthConfig, OAuthUserConfig } from "next-auth/providers"


export interface CoreIdentityProfile {
    sub: string
    email: string
    name: string
    country?: string
    [key: string]: any
}

export default function IdentityProvider(
    config: OAuthUserConfig<CoreIdentityProfile>
): OAuthConfig<CoreIdentityProfile> {
    const issuer = config.issuer!.replace(/\/$/, "")

    return {
        id: "identityprovider",
        name: "IdentityProvider",
        type: "oauth",
        version: "2.0",
        clientId:     config.clientId!,
        clientSecret: config.clientSecret!,

        pages: {
            signIn: "/",
            signOut: "/",
            error: "/",
            verifyRequest: "/",
            newUser: "/",
        },

        authorization: {
            url:    `${issuer}/connect/authorize`,
            params: { scope: "openid profile email offline_access" },
        },
        token:    { url: `${issuer}/connect/token` },
        userinfo: {
            url: `${issuer}/connect/userinfo`,
            async request({ tokens }) {
                const res = await fetch(this.url, {
                    headers: { Authorization: `Bearer ${tokens.access_token}` },
                })
                console.log("userinfo response:", res.status, res.statusText)
                console.log("access_token:", tokens.access_token)
                if (!res.ok) throw new Error("userinfo failed: " + res.status)
                return res.json() as Promise<CoreIdentityProfile>
            },
        },

        checks: ["pkce", "state"],

        profile(profile) {
            console.log("CoreIdentity profile:", profile)
            return {
                id:    profile.sub,
                email: profile.email,
                name:  profile.name,
                country: profile.country,
                image: null,
            }
        },

        style: {
            logo:     "/coreidentity-logo.svg",
            logoDark: "/coreidentity-logo-dark.svg",
            bg:       "#3466C2",
            text:     "#fff",
        },

        options: config,
    }
}