"use client";
import { useMyContext } from "@/components/UseContext/Context";
import { useRouter } from "next/navigation";
import { useState } from "react";

// URL: /context
export default function ContextPage() {
  const router = useRouter();
  const { setValue } = useMyContext();
  return (
    <>
      <h1>Context Page!</h1>
      <input
        className="text-black"
        type="text"
        onChange={(e: any) => setValue(e.target.value)}
      />{" "}
      <br />
      <button
        className="bg-red-400"
        onClick={() => router.push("/context/100")}
      >
        Go to id 100
      </button>
    </>
  );
}
