import React from "react";

const QUOTES = [
  { q: "The Canopy Gold changed my mornings. It arrives fresh, every single week.", a: "Maya R.", r: "Subscriber · 14 months" },
  { q: "Finally a roastery that tells me where the beans actually come from.", a: "James T.", r: "Auckland" },
  { q: "Best coffee I've had outside of a café. The subscription pays for itself.", a: "Priya K.", r: "Wellington" },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F5EFE6] py-16">
      <div className="mx-auto max-w-[1300px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {QUOTES.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-[#E0D5C7] bg-white p-7">
              <div className="mb-4 text-[#B8654A]">★★★★★</div>
              <blockquote className="font-serif text-lg italic leading-relaxed text-[#2B1D14]">"{t.q}"</blockquote>
              <figcaption className="mt-5">
                <p className="font-medium text-[#2B1D14]">{t.a}</p>
                <p className="text-xs uppercase tracking-wider text-[#2B1D14]/50">{t.r}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}