"use client";
import { useParams } from "next/navigation";
import React, { useContext } from "react";
import { useMyContext } from "@/components/UseContext/Context";
// URL: /context/[id]
export default function ContextIdPage() {
  const { id } = useParams();
  const { value } = useMyContext();

  return (
    <>
      <div>Id: {id}</div>
      <div>value: {value}</div>
    </>
  );
}
