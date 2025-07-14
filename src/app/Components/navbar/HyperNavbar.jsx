// src/components/navbar/HyperNavbar.jsx
"use client";

import { useState } from "react";
import TopBar from "./TopBar";
import CategoriesBar from "./CategoriesBar";
import MegaMenu from "./MegaMenu";

const HyperNavbar = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <header className="font-cairo relative" dir="rtl">
      <TopBar userName="مصطفى" cartItemCount={5} />
      <CategoriesBar
        onToggleMegaMenu={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
        isMegaMenuOpen={isMegaMenuOpen}
      />
      <MegaMenu isOpen={isMegaMenuOpen} />
    </header>
  );
};

export default HyperNavbar;
