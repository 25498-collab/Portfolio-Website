import React from "react";

const PLANS = [
  { name: "The Drip", freq: "Every 2 weeks", bags: "1 × 250g", price: "22", desc: "Perfect for the solo sipper.", popular: false },
  { name: "The Pour", freq: "Every week", bags: "2 × 250g", price: "40", desc: "For the daily ritual drinker.", popular: true },
  { name: "The Batch", freq: "Every week", bags: "3 × 250g", price: "58", desc: "For a house full of coffee lovers.", popular: false },
];

export default function Subscription() {
  return (
    <section id="subscribe" className="bg-[#2B1D14] py-20 text-[#F5EFE6] md:py-28">
      <div className="mx-auto max-w-[1300px] px-6 md:px-10">
        <div className="mb-12 text-center">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8654A]">Never run out</span>
          <h2 className="mt-2 font-serif text-4xl font-bold md:text-5xl">Pick your subscription</h2>
          <p className="mx-auto mt-3 max-w-md text-[#F5EFE6]/60">Fresh-roasted beans delivered on your schedule. Skip, pause, or cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-7 ${
                p.popular ? "bg-[#B8654A] text-white" : "border border-[#F5EFE6]/15 bg-[#3A2A1E]"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#F5EFE6] px-4 py-1 text-[10px] uppercase tracking-wider text-[#2B1D14]">Most popular</span>
              )}
              <h3 className="font-serif text-2xl font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-[#F5EFE6]/60">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-serif text-4xl font-bold">${p.price}</span>
                <span className="text-sm text-[#F5EFE6]/50">/ delivery</span>
              </div>
              <p className="mt-3 text-sm text-[#F5EFE6]/70">{p.bags} · {p.freq}</p>
              <button className={`mt-7 w-full rounded-full py-3 text-sm font-medium transition-colors ${
                p.popular ? "bg-[#2B1D14] text-[#F5EFE6] hover:opacity-90" : "bg-[#F5EFE6] text-[#2B1D14] hover:bg-[#B8654A]"
              }`}>
                Choose {p.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}