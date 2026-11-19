"use client";

import { useEffect, useState } from "react";
import { wardName } from "@/lib/meetings-db";

export default function Header() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDate(
        new Intl.DateTimeFormat("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        }).format(new Date()),
      );
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="ward-mark" aria-hidden="true">SM</div>
        <div>
          <p className="eyebrow">Sacramento Stake</p>
          <h1>{wardName}</h1>
        </div>
        <p className="header-date">{date}</p>
      </div>
    </header>
  );
}
