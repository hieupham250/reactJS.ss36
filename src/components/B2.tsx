import React, { useState } from "react";

export default function B2() {
  const [count, setCount] = useState<number>(0);
  document.title = `Click ${count} lần`;
  return (
    <>
      B2 <br />
      <button onClick={() => setCount(count + 1)}>
        Click {count} lần
      </button>{" "}
      <br />
    </>
  );
}
