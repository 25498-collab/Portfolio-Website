import React from "react";
import { Image } from "@/components/ui/image";

export default function Hero({ heroImage }) {
  return (
    <section id="top" className="relative w-full overflow-hidden bg-[#F5EFE6]">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E0D5C7] px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B8654A]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#2B1D14]/60">Small-batch · Roasted weekly</span>
          </div>
          <h1 className="font-serif text-5xl font-bold leading-[1.05] text-[#2B1D14] md:text-7xl">
            Coffee that<br />
            <span className="text-[#B8654A]">travels well.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#2B1D14]/70">
            We roast single-origin beans in small batches and ship them at peak freshness —
            so every cup tastes like the mountainside it came from.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#beans" className="rounded-full bg-[#2B1D14] px-7 py-3.5 text-sm font-medium text-[#F5EFE6] transition-colors hover:bg-[#B8654A]">
              Shop the beans
            </a>
            <a href="#subscribe" className="text-sm font-medium text-[#2B1D14] underline-offset-4 hover:underline">
              Start a subscription →
            </a>
          </div>
          <div className="mt-10 flex gap-8">
            {[
              { k: "Origins", v: "12" },
              { k: "Roasts / wk", v: "3" },
              { k: "Rating", v: "4.9★" },
            ].map((m) => (
              <div key={m.k}>
                <p className="font-serif text-2xl font-bold text-[#2B1D14]">{m.v}</p>
                <p className="text-xs uppercase tracking-wider text-[#2B1D14]/50">{m.k}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[420px] overflow-hidden rounded-2xl md:h-[560px]">
          <Image src={heroImage} alt="Inside the Driftwood roastery" className="h-full w-full object-cover" fittingType="fill" />
        </div>
      </div>
    </section>
  );
}