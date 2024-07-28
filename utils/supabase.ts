import { createBrowserClient } from "@supabase/ssr"

export const supabase = createBrowserClient(
  process.env.NODE_ENV === "development"
    ? process.env.SUPABASE_LOCAL_DEV_URL || ""
    : process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
)
