import React from "react";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="w-full bg-gallery py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-2xl border border-cement bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* left: price */}
            <div className="flex flex-col justify-between border-b border-cement p-8 md:border-b-0 md:border-r">
              <div>
                <span className="font-mono-tech text-[11px] tracking-[0.15em] uppercase text-onyx/60">Flat price</span>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-heading text-6xl font-normal text-onyx">$400</span>
                  <span className="text-sm text-onyx/50">one-time</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-onyx/60">
                  One simple price. No surprises, no monthly fees, no lock-in.
                  Pay when you're happy with the result.
                </p>
              </div>
              <a href="#contact" className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-onyx px-6 py-3 text-sm font-medium text-gallery transition-colors hover:bg-vermillion">
                Start your site
              </a>
            </div>
            {/* right: what's covered */}
            <div className="p-8">
              <p className="font-mono-tech text-[11px] tracking-[0.15em] uppercase text-onyx/60">Your $400 covers</p>
              <ul className="mt-4 space-y-3">
                {[
                  "A custom 5-page website",
                  "Mobile + desktop design",
                  "Contact form setup",
                  "Google search setup",
                  "2 rounds of edits",
                  "Launch and hosting help",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm text-onyx/80">
                    <Check className="h-4 w-4 text-vermillion" strokeWidth={2.5} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}