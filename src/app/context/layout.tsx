"use client";
import { MyContext } from "@/components/UseContext/Context";
import { useState } from "react";

export default function Layout({ children }: any) {
  const [value, setValue] = useState("");
  return (
    <div className="bg-gray-700">
      <h1>Layout</h1>
      <MyContext.Provider value={{ value, setValue }}>
        {children}
      </MyContext.Provider>
    </div>
  );
}
