"use client";
import { BaseSyntheticEvent, SyntheticEvent, useEffect, useState } from "react";
import { Item } from "./Item";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [item, setItem] = useState<string>("");
  const [items, setItems] = useState<string[]>([
    "initial",
    "initial",
    "initial",
  ]);

  useEffect(() => {
    const callApi = () => 10;
    setCount(callApi());
  }, []);

  const handleClick = () => {
    setCount(count + 1);
    setItems([...items, item]);
  };

  const handleChange = (e: BaseSyntheticEvent) => {
    const value = e.target.value;
    setItem(value);
  };

  const receiveFromChild = (input: string) => {
    console.log(input);
  };

  return (
    <div>
      <div>Count: {count}</div>
      <div>
        <input
          className="text-black"
          onChange={handleChange}
          type="text"
          placeholder="input some thing"
        />
        <button onClick={handleClick}>Add</button>
      </div>
      <div>
        {items.map((it, index) => {
          return <Item key={index} item={it} somethingFn={receiveFromChild} />;
        })}
      </div>
    </div>
  );
};
