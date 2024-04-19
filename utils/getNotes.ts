import { supabase } from "@/utils/supabase/supabase";

export const getNotes = async () => {
  const { data, error } = await supabase.from("notes").select();
  return { data, error };
};
