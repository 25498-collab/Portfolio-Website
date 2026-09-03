import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import { ArrowUpRight } from "lucide-react";

// Add new demo sites here. Set `to` to the route (internal) or `href` for an external URL.
// Leave `to` null and `comingSoon: true` to show a "Coming soon" placeholder.
export const PROJECTS = [
  {
    title: "Driftwood Coffee Roasters",
    category: "E-commerce · Coffee",
    to: "/roastery-demo",
    image: "https://media.base44.com/images/public/6a97b82e23d8276a71eb4cad/baa4fa581_generated_image.png",
    blurb: "A small-batch coffee roastery storefront with subscriptions, origin storytelling, and a brewing ritual.",
    stat: "3 origins · subscription-ready",
  },
  {
    title: "Maison Ceramica",
    category: "E-commerce · Homewares",
    to: null,
    comingSoon: true,
    image: "https://media.base44.com/images/public/6a97b82e23d8276a71eb4cad/0978c2fc1_generated_fcd26605.jpg",
    blurb: "A boutique ceramics studio with a lookbook-style product catalog and editorial product pages.",
    stat: "Coming soon",
  },
  {
    title: "Northbound Apparel",
    category: "E-commerce · Fashion",
    to: null,
    comingSoon: true,
    image: "https://media.base44.com/images/public/6a97b82e23d8276a71eb4cad/98d18d3c6_generated_999e1a92.jpg",
    blurb: "An independent fashion label with seasonal collections, a slide-out cart, and one-tap checkout.",
    stat: "Coming soon",
  },
];

export default function WorkShowcase() {
  return (
    <section id="work" className="w-full bg-gallery py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <span className="font-mono-tech text-[11px] tracking-[0.25em] uppercase text-onyx/60">Selected Work / Live Demos</span>
            <h2 className="mt-4 max-w-2xl font-heading text-5xl leading-[0.95] text-onyx md:text-7xl">
              Storefronts, shipped.
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-onyx/50 md:block">
            Each demo is a complete, deployable storefront built to convert. Open one, click around — it's the real thing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROJECTS.map((p) => {
            const inner = (
              <>
                <div className="group relative h-72 w-full overflow-hidden md:h-80">
                  <Image
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[0.98]"
                    fittingType="fill"
                  />
                  {p.comingSoon && (
                    <div className="absolute inset-0 flex items-center justify-center bg-onyx/55">
                      <span className="font-mono-tech text-[11px] tracking-[0.3em] uppercase text-gallery">Coming soon</span>
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 border border-onyx/0 transition-all duration-500 group-hover:border-onyx/30" />
                  <div className="pointer-events-none absolute bottom-3 left-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="bg-gallery/90 px-2 py-1 font-mono-tech text-[9px] tracking-wider text-onyx">{p.stat}</span>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4 pt-5">
                  <div>
                    <p className="font-mono-tech text-[10px] tracking-wider uppercase text-onyx/45">{p.category}</p>
                    <h3 className="mt-1 font-heading text-2xl leading-tight text-onyx md:text-3xl">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-onyx/60">{p.blurb}</p>
                  </div>
                  <span className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${p.comingSoon ? "bg-cement text-onyx/30" : "bg-onyx text-gallery transition-colors group-hover:bg-vermillion"}`}>
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                </div>
              </>
            );

            return p.to ? (
              <Link key={p.title} to={p.to} className="group block">{inner}</Link>
            ) : (
              <div key={p.title} className="group cursor-default opacity-80">{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}