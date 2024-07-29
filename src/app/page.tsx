"use client";
import { UseContextDemo } from "@/components/UseContext/UseContextDemo";
import { UseEffectDemo } from "@/components/UseEffect/UseEffectDemo";
import { UseRefDemo } from "@/components/UseRef/UseRefDemo";
import { UseStateDemo } from "@/components/UseState/UseStateDemo";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* <UseStateDemo /> */}
      {/* <UseEffectDemo /> */}
      {/* <UseContextDemo /> */}
      <UseRefDemo />
    </div>
  );
}
