import React from "react";
import { Image } from "@/components/ui/image";

export default function Origin({ farmImage }) {
  return (
    <section id="origin" className="bg-[#F5EFE6] py-20 md:py-28">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-10">
        <div className="order-2 overflow-hidden rounded-2xl md:order-1">
          <div className="aspect-[3/2] w-full">
            <Image src={farmImage} alt="Coffee farm at dawn" className="h-full w-full object-cover" fittingType="fill" />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8654A]">Our origin</span>
          <h2 className="mt-2 font-serif text-4xl font-bold leading-tight text-[#2B1D14] md:text-5xl">
            From the mountainside to your morning.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#2B1D14]/70">
            We work directly with smallholder farmers across Ethiopia, Colombia, and Guatemala —
            paying above fair-trade prices and roasting each lot to honour where it was grown.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { t: "Direct trade", d: "We know every farm by name and pay 30% above fair-trade." },
              { t: "Roasted to order", d: "Beans rest 5 days after roasting, then ship at peak flavour." },
              { t: "Compostable packaging", d: "Every bag is fully home-compostable. Nothing to landfill." },
            ].map((f) => (
              <div key={f.t} className="flex gap-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B8654A]" />
                <div>
                  <p className="font-medium text-[#2B1D14]">{f.t}</p>
                  <p className="text-sm text-[#2B1D14]/60">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}