import { handlers } from "@/auth"
export { auth as middleware } from "@/auth"
export const runtime = "edge"
export const { GET, POST } = handlers