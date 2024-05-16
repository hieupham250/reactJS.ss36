import React, { useState } from "react";
import "./B3.css";
export default function B3() {
  const [active, setActive] = useState<string>("Trang chủ");
  const [tabs, setTabs] = useState<string[]>([
    "Trang chủ",
    "Sản phẩm",
    "Giới thiệu",
    "Liên hệ",
  ]);
  return (
    <>
      B3
      <nav className="navbar">
        {tabs.map((tab, index) => {
          return (
            <button
              key={index}
              className={tab === active ? "active" : ""}
              onClick={() => {
                setActive(tab);
              }}
            >
              {tab}
            </button>
          );
        })}
      </nav>
    </>
  );
}
