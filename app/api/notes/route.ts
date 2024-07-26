import { supabase } from "@/utils/supabase"

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function GET(request: any) {
  const { data, error } = await supabase.from("notes").select()

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
