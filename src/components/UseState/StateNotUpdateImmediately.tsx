import { useState } from "react";

export function StateNotUpdateImmediately() {
  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter(counter + 1);
    console.log("Counter", counter); // 0
  };

  return (
    <>
      <div>Counter {counter}</div>
      <div className="flex gap-4">
        <button onClick={add}>Add</button>
      </div>
    </>
  );
}
