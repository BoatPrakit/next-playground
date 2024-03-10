import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>Hello World</div>
      <div>Count: {count}</div>
      <div>
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  );
}
