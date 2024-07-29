"use client";
import { UseStateDemo } from "@/components/UseState/UseStateDemo";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <UseStateDemo />
    </div>
  );
}
