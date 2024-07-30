import React, { useEffect, useRef, useState } from "react";

export function RefVsStateWhenUnmount() {
  const ref = useRef(0);
  const [state, setState] = useState(0);

  const add = () => {
    ref.current += 1;
    setState(state + 1);
  };

  useEffect(() => {
    return () => {
      console.log("Ref: ", ref.current);
      console.log("State: ", state);
    };
  }, []);

  return (
    <>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>
      <button onClick={add}>Add</button>
    </>
  );
}

const save = (x: number) => {
  console.log("Calling Patch API...");
  const callApi = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
    }, 3000);
  });

  callApi.then((res) => {
    console.log("Saved after unmount: ", res);
  });
};
