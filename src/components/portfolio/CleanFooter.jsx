import React from "react";

export default function CleanFooter() {
  return (
    <footer className="w-full bg-gallery border-t border-cement">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="font-heading text-xl text-onyx">Website<span className="text-vermillion">.</span></p>
          <p className="mt-1 text-sm text-onyx/50">Clean websites for small businesses — $200 flat.</p>
        </div>
        <div className="flex items-center gap-6 text-sm text-onyx/60">
          <a href="#work" className="hover:text-vermillion">Examples</a>
          <a href="#pricing" className="hover:text-vermillion">Pricing</a>
          <a href="#contact" className="hover:text-vermillion">Get started</a>
        </div>
      </div>
      <div className="border-t border-cement px-6 py-4">
        <p className="mx-auto max-w-5xl text-xs text-onyx/40">© 2026 — Demo portfolio. Built to show what your site could look like.</p>
      </div>
    </footer>
  );
}