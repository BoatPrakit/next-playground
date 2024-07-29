"use client";
import { UseContextDemo } from "@/components/UseContext/UseContextDemo";
import Counter from "@/components/UseEffect/ClassComponent";
import { UseEffectDemo } from "@/components/UseEffect/UseEffectDemo";
import { UseRefDemo } from "@/components/UseRef/UseRefDemo";
import { UseStateDemo } from "@/components/UseState/UseStateDemo";
import { useState } from "react";

export default function Home() {
  const [hideCounter, setHideCounter] = useState(false);
  return (
    <div>
      <UseStateDemo />
      {/* <UseEffectDemo /> */}
      {/* <UseContextDemo /> */}
      {/* <UseRefDemo /> */}
      {/* <UseEffectDemo /> */}
      {/* <div>
        {!hideCounter && <Counter />}
        <div onClick={() => setHideCounter(!hideCounter)}>Toggle Counter</div>
      </div> */}
    </div>
  );
}
