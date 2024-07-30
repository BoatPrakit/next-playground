import React, { useState } from "react";
import { RenderEveryRender } from "./RenderEveryRender";
import Counter from "./ClassComponent";
import { RefVsStateWhenUnmount } from "./RefVsStateWhenUnmount";

export function UseEffectDemo() {
  const [hide, setHide] = useState(false);
  return (
    <>
      <RenderEveryRender />

      {/* <div>
        {!hide && <Counter />}
        <div onClick={() => setHide(!hide)}>Toggle Counter</div>
      </div> */}

      {/* <div>
        <div className="cursor-pointer" onClick={() => setHide(!hide)}>
          Toggle Component
        </div>
        {!hide && <RefVsStateWhenUnmount />}
      </div> */}
    </>
  );
}
