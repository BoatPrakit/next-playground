import React, { createContext, useContext, useRef, useState } from "react";

export const MyContext = createContext<{
  value: string;
  setValue: (v: string) => void;
}>({ value: "", setValue: () => {} });

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
      <MyContext.Provider value={{ value, setValue }}>
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
  const { value } = useContext(MyContext);
  return (
    <>
      <p>Value: {value}</p>
    </>
  );
}
