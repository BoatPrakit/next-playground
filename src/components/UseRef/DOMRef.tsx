import React, { useEffect, useRef, useState } from "react";

export function DOMRef() {
  const divRef = useRef<HTMLDivElement>(null);
  const height = divRef.current?.clientHeight;
  //   const [height, setHeight] = useState(0);

  useEffect(() => {
    console.log(divRef.current?.clientHeight);

    // setHeight(divRef.current ? divRef.current.clientHeight : 0);
  }, [divRef]);

  console.log("render");
  return (
    <>
      <div ref={divRef} className="w-[120px] h-[120px] bg-red-400"></div>
      <>
        <p>Height: {height}</p>
      </>
    </>
  );
}
