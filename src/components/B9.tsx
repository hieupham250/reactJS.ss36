import React, { useState, useEffect } from "react";

export default function B9() {
  const [timeElapsed, setTimeElapsed] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeElapsed((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      B9
      <div>Thời gian đã trôi qua {timeElapsed} giây</div>;
    </div>
  );
}
