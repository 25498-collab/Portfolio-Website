import React from "react";
import Nav from "@/components/roastery/Nav";
import Hero from "@/components/roastery/Hero";
import ProductGrid from "@/components/roastery/ProductGrid";
import Subscription from "@/components/roastery/Subscription";
import Origin from "@/components/roastery/Origin";
import Process from "@/components/roastery/Process";
import Testimonials from "@/components/roastery/Testimonials";
import Footer from "@/components/roastery/Footer";

const HERO = "https://media.base44.com/images/public/6a97b82e23d8276a71eb4cad/baa4fa581_generated_image.png";
const FARM = "https://media.base44.com/images/public/6a97b82e23d8276a71eb4cad/a86069e44_generated_image.png";
const BREW = "https://media.base44.com/images/public/6a97b82e23d8276a71eb4cad/dede13fb8_generated_image.png";

export default function Roastery() {
  return (
    <div className="min-h-screen bg-[#F5EFE6] font-body antialiased">
      <Nav />
      <Hero heroImage={HERO} />
      <ProductGrid />
      <Subscription />
      <Origin farmImage={FARM} />
      <Process brewImage={BREW} />
      <Testimonials />
      <Footer />
    </div>
  );
}
