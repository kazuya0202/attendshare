import { createBrowserClient } from "@supabase/ssr"

export const supabase = createBrowserClient(
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:54321"
    : process.env.VITE_SUPABASE_URL ?? "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
)
