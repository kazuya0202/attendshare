import { createBrowserClient } from "@supabase/ssr"
import type { Provider } from "@supabase/supabase-js"

export const supabase = createBrowserClient(
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:54321"
    : process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
)

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.log(error)
    return
  }

  console.log("sign out successfully")
}

export const singIn = async (providerName: Provider) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: providerName,
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  })

  if (error) {
    console.error(error)
    return
  }
}
