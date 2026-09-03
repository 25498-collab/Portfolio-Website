import React from "react";
import { ArrowRight, Check } from "lucide-react";

export default function CleanHero() {
  return (
    <section id="top" className="w-full bg-gallery">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-cement px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-vermillion" />
          <span className="font-mono-tech text-[11px] tracking-[0.15em] uppercase text-onyx/60">A website for your business · from $200</span>
        </div>

        <h1 className="mt-7 font-heading text-5xl leading-[1.05] tracking-tight text-onyx md:text-7xl">
          A clean website<br />
          that sells your<br />
          <span className="italic text-vermillion">business.</span>
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-relaxed text-onyx/70">
          I design and build simple, fast, professional websites for small businesses —
          complete and ready to launch, for a flat <strong className="text-onyx">$200</strong>.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-onyx px-7 py-3.5 text-sm font-medium text-gallery transition-colors hover:bg-vermillion">
            Get started for $200
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#work" className="text-sm font-medium text-onyx/70 underline-offset-4 hover:text-vermillion hover:underline">
            See examples →
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2">
          {["Fixed $200 price", "Ready in a week", "Mobile-friendly", "No ongoing fees"].map((t) => (
            <span key={t} className="inline-flex items-center gap-2 text-sm text-onyx/60">
              <Check className="h-4 w-4 text-vermillion" strokeWidth={2} />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}