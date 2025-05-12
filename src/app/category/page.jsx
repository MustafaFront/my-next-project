"use client";

import About from "./components/About";
import AboutSection from "./components/AboutSection";
import Hero from "./components/Hero";
import HowItWorksFinal from "./components/HowItWorksFinal";
import JoinUsSection from "./components/JoinUsSection";
import PartnersSection from "./components/PartnersSection";
import ServicesCards from "./components/ServicesCards";
import WhyUsSection from "./components/WhyUsSection";

export default function Home() {
  return (
    <>
    <Hero />

    <AboutSection />
    <WhyUsSection />
      <HowItWorksFinal />

      <JoinUsSection />
<ServicesCards />
    <PartnersSection />
    </>

  );
}
