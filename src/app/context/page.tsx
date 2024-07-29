"use client";
import { useRouter } from "next/navigation";

// URL: /context
export default function ContextPage() {
  const router = useRouter();

  return (
    <>
      <h1>Context Page!</h1>
      <button
        className="bg-red-400"
        onClick={() => router.push("/context/100")}
      >
        Go to id 100
      </button>
    </>
  );
}
