import React, { useState } from "react";

export function PropsHell() {
  const [value, setValue] = useState("");
  return (
    <>
      <h1>Props Hell</h1>
      <input
        className="text-black"
        type="text"
        onChange={(e: any) => setValue(e.target.value)}
      />
      <ChildOne value={value} />
    </>
  );
}

function ChildOne(props: any) {
  return (
    <>
      <ChildTwo value={props.value} />
    </>
  );
}

function ChildTwo(props: any) {
  return (
    <>
      <ChildThree value={props.value} />
    </>
  );
}

function ChildThree(props: any) {
  return (
    <>
      <p>Value: {props.value}</p>
    </>
  );
}
