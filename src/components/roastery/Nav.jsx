import React, { useState } from "react";
import { ShoppingBag } from "lucide-react";

const LINKS = [
  { label: "Beans", href: "#beans" },
  { label: "Subscribe", href: "#subscribe" },
  { label: "Our Origin", href: "#origin" },
  { label: "Brewing", href: "#brewing" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[#E0D5C7] bg-[#F5EFE6]/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1300px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-xl font-bold tracking-tight text-[#2B1D14]">Driftwood</span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#B8654A]">Roasters</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-[#2B1D14]/70 transition-colors hover:text-[#B8654A]">{l.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="relative flex items-center gap-2 text-[#2B1D14]">
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#B8654A] text-[10px] text-white">2</span>
          </button>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            <span className="text-xl text-[#2B1D14]">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-3 border-t border-[#E0D5C7] px-6 py-4 md:hidden">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-sm text-[#2B1D14]/80">{l.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}