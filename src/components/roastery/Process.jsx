import React from "react";
import { Image } from "@/components/ui/image";

const STEPS = [
  { num: "01", t: "Weigh & grind", d: "18g of beans, ground medium-fine — fresh is non-negotiable." },
  { num: "02", t: "Bloom 30s", d: "Pour 50g of water and let the coffee breathe. The bloom reveals the roast." },
  { num: "03", t: "Pour to 250g", d: "Slow, steady spirals. Total brew time around 2:45." },
];

export default function Process({ brewImage }) {
  return (
    <section id="brewing" className="bg-[#F5EFE6] py-20 md:py-28">
      <div className="mx-auto max-w-[1300px] px-6 md:px-10">
        <div className="mb-12 text-center">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8654A]">The ritual</span>
          <h2 className="mt-2 font-serif text-4xl font-bold text-[#2B1D14] md:text-5xl">A perfect pour-over</h2>
        </div>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="order-2 overflow-hidden rounded-2xl md:order-1">
            <div className="aspect-[4/3] w-full">
              <Image src={brewImage} alt="Pour-over brewing" className="h-full w-full object-cover" fittingType="fill" />
            </div>
          </div>
          <div className="order-1 space-y-8 md:order-2">
            {STEPS.map((s) => (
              <div key={s.num} className="flex gap-6">
                <span className="font-serif text-3xl font-bold text-[#B8654A]">{s.num}</span>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2B1D14]">{s.t}</h3>
                  <p className="mt-1 text-[#2B1D14]/60">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}