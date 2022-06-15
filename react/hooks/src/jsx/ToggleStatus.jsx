import React, { useState } from "react";

export default function ToggleStatus() {
  const [status, setStatus] = useState(false);

  function toggleStatus() {
    status ? setStatus(false) : setStatus(true);
  }

  return (
    <>
      <h2>Toggle Status with useState</h2>
      <h3>status is {`${status}`}</h3>
      <button onClick={toggleStatus}>Toggle Status</button>
    </>
  );
}
