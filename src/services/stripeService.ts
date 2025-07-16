import Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { getStripeClient } from "@/lib/stripe";
import { getNames as getCountryNames, getCode as getCountryCode } from "country-list";

export type Environment = "TEST" | "LIVE";

export interface CreateConnectAccountArgs {
    ssoUserId: string;
    email: string;
    environment: Environment;
    country?: string;
}

export class StripeService {
    static getAvailableCountries() {
        return getCountryNames();
    }

    static lookupCountryCode(name: string) {
        return getCountryCode(name);
    }

    private static async _createStripeAccount({
                                                  ssoUserId,
                                                  email,
                                                  environment,
                                                  country = "US",
                                              }: CreateConnectAccountArgs): Promise<Stripe.Account> {
        const stripe = getStripeClient(environment);
        return stripe.accounts.create({
            type: "express",
            country: country.toUpperCase(),
            email,
            metadata: { ssoUserId },
            capabilities: {
                transfers: { requested: true },
                card_payments: { requested: true },
            },
            settings: {
                payouts: {
                    schedule: { interval: "monthly", monthly_anchor: 1 },
                },
            },
        });
    }

    private static async _retrieveStripeAccount(
        accountId: string,
        environment: Environment
    ): Promise<Stripe.Account> {
        const stripe = getStripeClient(environment);
        // @ts-ignore
        return (await stripe.accounts.retrieve(accountId)) as Stripe.Account;
    }

    /**
     * Returns both the Stripe.Account and the local Prisma record.
     */
    static async getOrCreateAccount({
                                        ssoUserId,
                                        email,
                                        environment,
                                        country,
                                    }: CreateConnectAccountArgs): Promise<{
        account: Stripe.Account;
        record: { id: number; ssoUserId: string; environment: Environment; stripeAccountId: string; createdAt: Date };
    }> {
        // 1) look up local record
        let record = await prisma.stripeAccount.findFirst({
            where: { ssoUserId, environment },
        });

        if (record) {
            const account = await this._retrieveStripeAccount(record.stripeAccountId, environment);
            return { account, record };
        }

        // 2) otherwise create and persist exactly once
        const account = await this._createStripeAccount({ ssoUserId, email, environment, country });
        record = await prisma.stripeAccount.create({
            data: {
                ssoUserId,
                environment,
                stripeAccountId: account.id,
            },
        });

        return { account, record };
    }

    /** Create an onboarding link */
    static async createOnboardingLink(args: {
        stripeAccountId: string;
        environment: Environment;
    }): Promise<string> {
        const stripe = getStripeClient(args.environment);
        const refreshUrl = process.env.DBD_STRIPE_REFRESH_URL!;
        const returnUrl = process.env.DBD_STRIPE_RETURN_URL!;
        if (!refreshUrl || !returnUrl) {
            throw new Error("Missing DBD_STRIPE_REFRESH_URL or DBD_STRIPE_RETURN_URL in env");
        }
        const link = await stripe.accountLinks.create({
            account: args.stripeAccountId,
            refresh_url: refreshUrl,
            return_url: returnUrl,
            type: "account_onboarding",
        });
        return link.url;
    }

    /** Create a one-time login link (only valid if fully onboarded) */
    static async createLoginLink(args: {
        stripeAccountId: string;
        environment: Environment;
    }): Promise<string> {
        const stripe = getStripeClient(args.environment);
        const { url } = await stripe.accounts.createLoginLink(args.stripeAccountId);
        return url;
    }

    /** True if charges + payouts enabled */
    static async isActive(
        stripeAccountId: string,
        environment: Environment
    ): Promise<boolean> {
        const acct = await this._retrieveStripeAccount(stripeAccountId, environment);
        return Boolean(acct.charges_enabled && acct.payouts_enabled);
    }

    /** Human-readable blocking reasons */
    static async getAccountBlocks(
        stripeAccountId: string,
        environment: Environment
    ): Promise<string[]> {
        const stripe = getStripeClient(environment);
        const account = await stripe.accounts.retrieve(stripeAccountId);
        const issues: string[] = [];

        if (account.requirements.disabled_reason) {
            issues.push(
                `Account disabled: ${account.requirements.disabled_reason.replace(/_/g, " ")}`
            );
        }
        if (
            Array.isArray(account.requirements.currently_due) &&
            account.requirements.currently_due.length
        ) {
            issues.push(
                `Missing information: ${account.requirements.currently_due.join(", ")}`
            );
        }
        if (
            Array.isArray(account.requirements.past_due) &&
            account.requirements.past_due.length
        ) {
            issues.push(
                `Overdue requirements: ${account.requirements.past_due.join(", ")}`
            );
        }
        if (
            Array.isArray(account.requirements.eventually_due) &&
            account.requirements.eventually_due.length
        ) {
            issues.push(
                `Upcoming requirements: ${account.requirements.eventually_due.join(", ")}`
            );
        }

        return issues;
    }
}