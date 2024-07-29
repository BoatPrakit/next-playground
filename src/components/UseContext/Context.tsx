import React, { createContext, useContext, useRef, useState } from "react";

const MyContext = createContext<{
  value: string;
}>({ value: "" });

export const useMyContext = () => {
  return useContext(MyContext);
};

export function Context() {
  const [value, setValue] = useState("");
  return (
    <>
      <h1>Use Context hook</h1>
      <input
        className="text-black"
        type="text"
        onChange={(e: any) => setValue(e.target.value)}
      />
      <MyContext.Provider value={{ value }}>
        <ChildOne />
      </MyContext.Provider>
    </>
  );
}

function ChildOne() {
  return (
    <>
      <ChildTwo />
    </>
  );
}

function ChildTwo() {
  return (
    <>
      <ChildThree />
    </>
  );
}

function ChildThree() {
  const { value } = useMyContext();
  return (
    <>
      <p>Value: {value}</p>
    </>
  );
}
