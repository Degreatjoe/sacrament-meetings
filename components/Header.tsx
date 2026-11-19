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
    <header className="border-b border-ward-line bg-white print:hidden">
      <div className="mx-auto grid min-h-[92px] max-w-6xl grid-cols-[48px_1fr_auto] items-center gap-4 px-6 py-3 max-sm:grid-cols-[40px_1fr]">
        <div className="grid size-12 place-items-center rounded-full bg-ward-green font-serif text-base text-white max-sm:size-10" aria-hidden="true">SM</div>
        <div>
          <p className="m-0 text-[11px] font-extrabold uppercase tracking-[.14em] text-ward-gold">Sacramento Stake</p>
          <p className="m-0 mt-0.5 font-serif text-2xl text-foreground">{wardName}</p>
        </div>
        <p className="m-0 text-sm text-ward-muted max-sm:hidden">{date}</p>
      </div>
    </header>
  );
}
