"use client";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Review from "@/components/Review";
import Satisfaction from "@/components/Satisfaction";
import Services from "@/components/Services";
import FormPop from "../common/FormPop";

// import CaseStudies from "@/components/Home/CaseStudies";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <Hero setIsOpen={setIsOpen} />
      <Portfolio />
      <Services />
      <Satisfaction />
      <Review />
      <Footer />
      {isOpen && <FormPop onClose={() => setIsOpen(false)} />}
    </main>
  );
}
