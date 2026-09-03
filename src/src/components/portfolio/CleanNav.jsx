import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "What's included", href: "#included" },
  { label: "Examples", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Get started", href: "#contact" },
];

export default function CleanNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-cement bg-gallery/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-heading text-xl font-normal tracking-tight text-onyx">
          Website<span className="text-vermillion">.</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-onyx/70 transition-colors hover:text-vermillion">{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden rounded-full bg-onyx px-5 py-2 text-sm font-medium text-gallery transition-colors hover:bg-vermillion md:inline-block">
          Get started
        </a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-3 border-t border-cement px-6 py-4 md:hidden">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-sm text-onyx/80">{l.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}