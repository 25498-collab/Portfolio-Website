import React from "react";
import { Check } from "lucide-react";

const INCLUDED = [
  { t: "Custom design", d: "A clean, modern look built around your business and brand colours." },
  { t: "Mobile-friendly", d: "Looks great on every phone, tablet, and desktop." },
  { t: "Up to 5 pages", d: "Home, about, services, gallery, and contact — whatever you need." },
  { t: "Contact form", d: "Customers can message you straight from the site." },
  { t: "Fast & search-ready", d: "Quick to load and set up to be found on Google." },
  { t: "Ready to launch", d: "I handle the setup. You get a site you can show off immediately." },
];

export default function Included() {
  return (
    <section id="included" className="w-full bg-gallery py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10">
          <span className="font-mono-tech text-[11px] tracking-[0.15em] uppercase text-onyx/60">What's included</span>
          <h2 className="mt-2 font-heading text-4xl leading-tight text-onyx md:text-5xl">Everything your site needs.</h2>
        </div>
        <div className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
          {INCLUDED.map((i) => (
            <div key={i.t} className="flex gap-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-vermillion/10">
                <Check className="h-3.5 w-3.5 text-vermillion" strokeWidth={2.5} />
              </span>
              <div>
                <p className="font-medium text-onyx">{i.t}</p>
                <p className="text-sm leading-relaxed text-onyx/60">{i.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}