import React, { useEffect, useRef, useState } from "react";

export function NotReRender() {
  const ref = useRef(0);
  const [isReRender, setIsReRender] = useState(false);

  useEffect(() => {
    if (isReRender) {
      setIsReRender(false);
    }
  }, [isReRender]);

  const add = () => {
    ref.current = ref.current + 1;
  };

  const decrease = () => {
    ref.current = ref.current - 1;
  };

  return (
    <>
      <div>Current value: {ref.current}</div>
      <button onClick={add}>Increment</button> <br />
      <button onClick={decrease}>Decrement</button>
      <br />
      <button onClick={() => setIsReRender(true)}>Rerender</button>
      <br />
    </>
  );
}
