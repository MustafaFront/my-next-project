"use client";
import { motion } from "framer-motion";
import DocumentsSection from "./components/DocumentsSection";
import DriverBenefitsWithImage from "./components/DriverBenefitsWithImage";
import HeroDriver from "./components/HeroDriver";
import HowItWorksWithImage from "./components/HowItWorksWithImage";
import Navbar from "./components/Navbar";
import HowItWorksFinal from "../category/components/HowItWorksFinal";

export default function Home() {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url(/hiroImage.svg)" }}
      >
        {/* navbar بدون أنيميشن */}
        <Navbar />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <HeroDriver />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <DocumentsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <DriverBenefitsWithImage />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <HowItWorksWithImage />
      </motion.div>
      
    </>
  );
}
