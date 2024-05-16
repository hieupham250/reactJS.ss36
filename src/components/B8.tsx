import React, { useState, useEffect } from "react";

export default function B8() {
  const [currentMonth, setCurrentMonth] = useState<number>(1);
  const [currentSeason, setCurrentSeason] = useState<string>("");

  useEffect(() => {
    setCurrentMonth(new Date().getMonth() + 1);
  }, []);

  useEffect(() => {
    const getSeason = (month: number) => {
      switch (month) {
        case 1:
        case 2:
        case 3:
          return "mùa xuân";
        case 4:
        case 5:
        case 6:
          return "mùa hạ";
        case 7:
        case 8:
        case 9:
          return "mùa thu";
        case 10:
        case 11:
        case 12:
          return "mùa đông";
        default:
          return "Không xác định";
      }
    };

    setCurrentSeason(getSeason(currentMonth));
  }, [currentMonth]);

  return (
    <div>
      <p>Bây giờ là tháng: {currentMonth}</p>
      <p>Mùa hiện tại: {currentSeason}</p>
    </div>
  );
}
