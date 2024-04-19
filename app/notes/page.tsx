// import { createClient } from "@/utils/supabase/client";
import { supabase } from "@/utils/supabase/supabase";

export default async function Notes() {
  // const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  return <pre>{JSON.stringify(notes, null, 2)}</pre>;
}
