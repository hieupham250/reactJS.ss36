import React, { useState, useEffect } from "react";

export default function B5() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const tick = () => {
      setTime(new Date());
    };

    const intervalId = setInterval(tick, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div>
      B5
      <p>Thời gian hiện tại:{formattedTime}</p>
    </div>
  );
}
