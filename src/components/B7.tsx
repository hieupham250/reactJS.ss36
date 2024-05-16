import React, { useState, useEffect, useRef } from "react";

export default function B7() {
  const [count, setCount] = useState<number>(0);
  const prevCountRef = useRef(0);
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);
  return (
    <div>
      B7
      <p>Giá trị trước: {prevCountRef.current}</p>
      <p>Giả trị hiện tại: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
}
