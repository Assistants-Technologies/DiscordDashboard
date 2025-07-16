import Stripe from "stripe";

const stripeTest = new Stripe(process.env.STRIPE_TEST_SECRET_KEY!, { apiVersion: "2022-11-15" });
const stripeLive = new Stripe(process.env.STRIPE_LIVE_SECRET_KEY!, { apiVersion: "2022-11-15" });

export function getStripeClient(env: "TEST" | "LIVE") {
    return env === "LIVE" ? stripeLive : stripeTest;
}