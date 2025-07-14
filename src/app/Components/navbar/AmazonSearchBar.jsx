// src/components/navbar/AmazonSearchBar.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";

// استبدلها ببياناتك الحقيقية
const CATEGORIES = [
  { id: "all", name: "الكل" },
  { id: "electronics", name: "الإلكترونيات" },
  { id: "fashion", name: "أزياء" },
  { id: "home", name: "المنزل والمطبخ" },
  { id: "books", name: "الكتب" },
  { id: "beauty", name: "الجمال والعطور" },
  { id: "sports", name: "الرياضة" },
  { id: "toys", name: "الألعاب والدمى" },
  { id: "automotive", name: "السيارات" },
  { id: "grocery", name: "السوبر ماركت" },
];

const AmazonSearchBar = ({ onClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [categorySearchTerm, setCategorySearchTerm] = useState("");
  const dropdownRef = useRef(null);

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCategories = CATEGORIES.filter((category) =>
    category.name.toLowerCase().includes(categorySearchTerm.toLowerCase())
  );

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
    setCategorySearchTerm("");
  };

  return (
    <div className="flex-grow max-w-2xl mx-8 hidden lg:block" ref={dropdownRef}>
      <form
        className="relative flex w-full h-12 bg-white rounded-lg shadow-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* زر البحث البرتقالي */}
        <button
          onClick={onClick}
          type="submit"
          className="flex-shrink-0 flex items-center justify-center w-14 h-full text-gray-800 cursor-pointer bg-[#1C1F1E] hover:bg-[#EA4C36]  rounded-r-lg transition-colors"
        >
          <Search size={24} color="#fff" />
        </button>

        {/* حقل البحث الرئيسي */}
        <input
          type="text"
          placeholder={`ابحث في ${selectedCategory.name}...`}
          className="w-full h-full px-4 text-gray-800 border-y border-gray-200 focus:outline-none"
        />

        {/* فاصل رمادي */}
        <div className="w-px h-full bg-gray-200"></div>

        {/* زر فتح قائمة الفئات */}
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex-shrink-0 flex items-center justify-between w-32 h-full px-3 text-sm text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-l-lg transition-colors"
        >
          <span>{selectedCategory.name}</span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* القائمة المنسدلة الذكية */}
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.1 }}
              className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-30"
            >
              {/* حقل البحث الداخلي */}
              <div className="p-2 border-b">
                <input
                  type="text"
                  placeholder="ابحث عن فئة..."
                  className="w-full px-3 py-2 text-sm text-right text-black border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                  value={categorySearchTerm}
                  onChange={(e) => setCategorySearchTerm(e.target.value)}
                  autoFocus
                />
              </div>

              {/* قائمة الفئات */}
              <ul className="max-h-60 overflow-y-auto">
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((category) => (
                    <li key={category.id}>
                      <button
                        type="button"
                        className="w-full px-4 py-2 text-right text-sm text-gray-700 hover:bg-orange-100"
                        onClick={() => handleCategorySelect(category)}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-3 text-sm text-center text-gray-500">
                    لا توجد نتائج
                  </li>
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default AmazonSearchBar;
