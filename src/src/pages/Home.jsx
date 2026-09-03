import React from "react";
import CleanNav from "@/components/portfolio/CleanNav";
import CleanHero from "@/components/portfolio/CleanHero";
import Included from "@/components/portfolio/Included";
import Pricing from "@/components/portfolio/Pricing";
import WorkShowcase from "@/components/portfolio/WorkShowcase";
import ContactCTA from "@/components/portfolio/ContactCTA";
import CleanFooter from "@/components/portfolio/CleanFooter";

export default function Home() {
  return (
    <main className="w-full bg-gallery">
      <CleanNav />
      <CleanHero />
      <Included />
      <WorkShowcase />
      <Pricing />
      <ContactCTA />
      <CleanFooter />
    </main>
  );
}
