"use client";
import { useParams } from "next/navigation";
import React from "react";
// URL: /context/[id]
export default function ContextIdPage() {
  const { id } = useParams();

  return <>Id: {id}</>;
}
