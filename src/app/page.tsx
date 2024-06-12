"use client";
import api from "@/api/instance";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const callApi = async () => {
      const posts = await api.get("/posts");
      console.log(posts);
    };
    callApi();
  }, []);

  const handleClick = async () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>Hello World</div>
      <div>Count: {count}</div>
      <div>
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  );
}
