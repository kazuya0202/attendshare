"use client";

import { useEffect, useState } from "react";

export default function Notes() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/notes");
      setData(await data.json());
    };
    fetchData();
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
