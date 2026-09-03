import React from "react";
import { Image } from "@/components/ui/image";

const BEANS = [
  {
    name: "Morning Mist",
    origin: "Ethiopia · Yirgacheffe",
    notes: "Jasmine · Stone Fruit · Bergamot",
    roast: "Light",
    price: "24",
    img: "https://media.base44.com/images/public/6a97b82e23d8276a71eb4cad/38cf85774_generated_image.png",
  },
  {
    name: "Midnight Roast",
    origin: "Colombia · Huila",
    notes: "Dark Chocolate · Hazelnut · Brown Sugar",
    roast: "Dark",
    price: "22",
    img: "https://media.base44.com/images/public/6a97b82e23d8276a71eb4cad/3f4f725fc_generated_image.png",
  },
  {
    name: "Canopy Gold",
    origin: "Guatemala · Antigua",
    notes: "Cocoa · Citrus · Caramel",
    roast: "Medium",
    price: "23",
    img: "https://media.base44.com/images/public/6a97b82e23d8276a71eb4cad/d0091208b_generated_image.png",
  },
];

export default function ProductGrid() {
  return (
    <section id="beans" className="bg-[#F5EFE6] py-20 md:py-28">
      <div className="mx-auto max-w-[1300px] px-6 md:px-10">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#B8654A]">This week's roast</span>
            <h2 className="mt-2 font-serif text-4xl font-bold text-[#2B1D14] md:text-5xl">Featured beans</h2>
          </div>
          <a href="#subscribe" className="hidden text-sm font-medium text-[#2B1D14]/70 hover:text-[#B8654A] md:block">View all →</a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BEANS.map((b) => (
            <article key={b.name} className="group overflow-hidden rounded-2xl border border-[#E0D5C7] bg-white transition-shadow hover:shadow-lg">
              <div className="relative aspect-square overflow-hidden bg-[#F5EFE6]">
                <Image src={b.img} alt={b.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" fittingType="fill" />
                <span className="absolute left-3 top-3 rounded-full bg-[#2B1D14] px-3 py-1 text-[10px] uppercase tracking-wider text-[#F5EFE6]">{b.roast} roast</span>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wider text-[#2B1D14]/50">{b.origin}</p>
                <h3 className="mt-1 font-serif text-2xl font-bold text-[#2B1D14]">{b.name}</h3>
                <p className="mt-2 text-sm text-[#2B1D14]/60">{b.notes}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-serif text-2xl font-bold text-[#2B1D14]">${b.price}</span>
                  <button className="rounded-full bg-[#2B1D14] px-5 py-2.5 text-xs font-medium text-[#F5EFE6] transition-colors hover:bg-[#B8654A]">Add to cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}