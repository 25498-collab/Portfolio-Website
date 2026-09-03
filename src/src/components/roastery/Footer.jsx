import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="bg-[#2B1D14] text-[#F5EFE6]">
      <div className="mx-auto max-w-[1300px] px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-bold md:text-4xl">Get a free bag with your first order.</h2>
            <p className="mt-3 max-w-sm text-[#F5EFE6]/60">Join the Driftwood list for roasting notes, new origins, and a free bag on your first subscription.</p>
            {done ? (
              <p className="mt-6 font-medium text-[#B8654A]">Thanks — check your inbox for your free-bag code. ☕</p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }} className="mt-6 flex max-w-md gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@morning.com"
                  className="flex-1 rounded-full border border-[#F5EFE6]/20 bg-[#3A2A1E] px-5 py-3 text-sm text-[#F5EFE6] placeholder:text-[#F5EFE6]/40 focus:border-[#B8654A] focus:outline-none"
                />
                <button type="submit" className="rounded-full bg-[#B8654A] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90">Join</button>
              </form>
            )}
          </div>
          <div className="grid grid-cols-2 gap-8 md:justify-self-end">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#F5EFE6]/40">Shop</p>
              <ul className="mt-4 space-y-2 text-sm text-[#F5EFE6]/70">
                <li><a href="#beans" className="hover:text-[#B8654A]">Beans</a></li>
                <li><a href="#subscribe" className="hover:text-[#B8654A]">Subscriptions</a></li>
                <li><a href="#brewing" className="hover:text-[#B8654A]">Brewing guide</a></li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-[#F5EFE6]/40">Roastery</p>
              <ul className="mt-4 space-y-2 text-sm text-[#F5EFE6]/70">
                <li><a href="#origin" className="hover:text-[#B8654A]">Our origin</a></li>
                <li><a href="#" className="hover:text-[#B8654A]">Wholesale</a></li>
                <li><a href="#" className="hover:text-[#B8654A]">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[#F5EFE6]/15 pt-6 text-xs text-[#F5EFE6]/40 md:flex-row md:items-center">
          <span>© 2026 Driftwood Coffee Roasters — a demo storefront.</span>
          <span>Roasted with care in Aotearoa NZ</span>
        </div>
      </div>
    </footer>
  );
}