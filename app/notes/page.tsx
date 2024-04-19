"use client";

import { getNotes } from "@/utils/getNotes";
import { useEffect, useState } from "react";

// import { createClient } from "@/utils/supabase/client";
// import { supabase } from "@/utils/supabase/supabase";

export default function Notes() {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const [data, setData] = useState<any[]>([]);

  const fetchData = async () => {
    const { data: notes, error } = await getNotes();
    console.log(notes);
    console.log(error);
    if (notes) setData(notes);
  };
  // const supabase = createClient();
  // const { data: notes } = await supabase.from("notes").select();

  useEffect(() => {
    fetchData();
  });
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
