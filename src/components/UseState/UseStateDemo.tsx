import React, { useState } from "react";
import { StateNotUpdateImmediately } from "./StateNotUpdateImmediately";
import { UnnessesaryUseEffect } from "./UnnessesaryUseEffect";
import { UnnessesaryUseState } from "./UnnessesaryUseState";

export function UseStateDemo() {
  return (
    <>
      <UnnessesaryUseState />
      {/* <UnnessesaryUseEffect /> */}
      {/* <StateNotUpdateImmediately /> */}
    </>
  );
}
