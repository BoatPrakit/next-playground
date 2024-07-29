import React, { useEffect, useState } from "react";

export function UnnessesaryUseEffect() {
  console.log("render");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  //   const fullName = `${firstName} ${lastName}`;
  useEffect(() => {
    setFullName(`${firstName} ${lastName}`);
  }, [firstName, lastName]); // render twice
  return (
    <>
      <div>
        <label htmlFor="">firstName: </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="text-black"
        />
        <br />
        <br />
        <label htmlFor="">lastName: </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="text-black"
        />
      </div>
      <div>
        <h2>Full Name: {fullName}</h2>
      </div>
    </>
  );
}
