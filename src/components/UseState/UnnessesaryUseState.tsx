import React, { useEffect, useRef, useState } from "react";

export function UnnessesaryUseState() {
  console.log("render");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  const submit = (e: any) => {
    e.preventDefault();

    // console.log("firstName", firstName);
    // console.log("lastName", lastName);
    console.log("firstName", firstNameRef?.current?.value);
    console.log("lastName", lastNameRef?.current?.value);
  };
  return (
    <>
      <div>
        <label htmlFor="">firstName: </label>
        <input
          // value={firstName}
          // onChange={(e) => setFirstName(e.target.value)}
          ref={firstNameRef}
          type="text"
          className="text-black"
        />
        <br />
        <label htmlFor="">lastName: </label>
        <input
          // value={lastName}
          // onChange={(e) => setLastName(e.target.value)}
          ref={lastNameRef}
          type="text"
          className="text-black"
        />{" "}
        <br />
        <button onClick={submit}>Submit</button>
      </div>
    </>
  );
}
