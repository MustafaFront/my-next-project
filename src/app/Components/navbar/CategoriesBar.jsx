// src/components/navbar/CategoriesBar.jsx (النسخة النهائية)
"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";

import MegaMenu from "./MegaMenu";
import SidebarMenu from "./SidebarMenu"; // استيراد السايدبار
import { categoriesData } from "../../../data/categoriesData";

const CategoriesBar = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // State للميجا منيو بتاعت الديسكتوب
  const [hoveredCategory, setHoveredCategory] = useState(null);
  // State للسيدبار بتاع الموبايل
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      checkScrollability();
      ref.addEventListener("scroll", checkScrollability);
      window.addEventListener("resize", checkScrollability);
      return () => {
        if (ref) ref.removeEventListener("scroll", checkScrollability);
        window.removeEventListener("resize", checkScrollability);
      };
    }
  }, []);

  const scroll = (direction) => {
    scrollRef.current.scrollBy({ left: direction * 300, behavior: "smooth" });
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <>
      <div className="relative" onMouseLeave={handleMouseLeave}>
        <div className="bg-[#1C1F1E] border-b sticky top-0 z-20">
          {" "}
          {/* غيرت اللون عشان يليق على نون أكتر */}
          <div className="container mx-auto px-4 flex items-center h-12 text-gray-200">
            {/* === زرار المنيو للموبايل (هام جداً) === */}
            <div className="md:hidden">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="flex items-center gap-2 p-2 -mr-2"
              >
                <Menu size={24} />
                <span className="font-bold">القائمة</span>
              </button>
            </div>

            {/* === شريط التصنيفات للديسكتوب (هام جداً) === */}
            <div className="hidden md:flex flex-grow overflow-hidden relative">
              {canScrollLeft && (
                <button
                  onClick={() => scroll(-1)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow-md z-10"
                >
                  <ChevronRight />
                </button>
              )}
              <div
                ref={scrollRef}
                className="flex items-center gap-6 px-4 overflow-x-auto scrollbar-hide"
              >
                {categoriesData.map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.path}
                    className="text-sm font-semibold whitespace-nowrap py-3 border-b-2 border-transparent hover:text-[#EA4C36] hover:border-gray-500"
                    onMouseEnter={() => setHoveredCategory(cat)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
              {canScrollRight && (
                <button
                  onClick={() => scroll(1)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow-md z-10"
                >
                  <ChevronLeft />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* عرض الميجا منيو للديسكتوب */}
        {hoveredCategory && <MegaMenu category={hoveredCategory} />}
      </div>

      {/* عرض السايدبار للموبايل */}
      <SidebarMenu
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        categories={categoriesData}
      />
    </>
  );
};

export default CategoriesBar;
