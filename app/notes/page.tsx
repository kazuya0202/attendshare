"use client";

import { useEffect, useState } from "react";

export default function Notes() {
  const [data, setData] = useState(["init"]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/notes");
      const json = await data.json();
      console.log(json);
      setData(json);
    };
    fetchData();
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
