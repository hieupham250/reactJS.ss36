import React, { useEffect, useRef } from "react";

export default function B4() {
  const useRef1 = useRef(0);
  const forcusInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    forcusInput.current?.focus();
  }, []);
  return (
    <div>
      B4 <br />
      <input type="text" ref={forcusInput} placeholder="focus me..." />
    </div>
  );
}
