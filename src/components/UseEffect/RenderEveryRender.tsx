import React, { useEffect, useState } from "react";

export function RenderEveryRender() {
  console.log("render");
  const [count, setCount] = useState(0);

  useEffect(() => {
    // run every render
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  useEffect(() => {
    // run once
  }, []);

  useEffect(() => {
    // run once and when count changes
  }, [count]);

  return <p>I've rendered {count} times!</p>;
}
