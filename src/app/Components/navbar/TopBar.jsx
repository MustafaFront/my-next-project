// src/components/navbar/TopBar.jsx
"use client";

import { useState } from "react";
import { Heart, ShoppingCart, ChevronDown } from "lucide-react";
import UserMenu from "./UserMenu";
import DeliverToModal from "./DeliverToModal";
import AmazonSearchBar from "./AmazonSearchBar";
import SearchModal from "./SearchModal";
import { useCartAnimation } from "@/contexts/CartAnimationContext";

const TopBar = ({ userName, cartItemCount }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const { cartIconRef } = useCartAnimation();
  return (
    <>
      <div className="bg-[#EA4C36] text-white">
        <div className="container mx-auto px-4 flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            <a href="/">
              <img className="h-8" src="/images/wLogo.svg" alt="Matryal Logo" />
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden md:flex items-center gap-2 text-sm  font-semibold"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg"
                alt="KSA Flag"
                className="w-6 rounded"
              />
              <div>
                <span className="block text-xs text-[#1C1F1E]">
                  التوصيل إلى
                </span>
                <span>المدينة المنورة شركة عمر الزرعة</span>
              </div>
              <ChevronDown size={16} />
            </button>
          </div>
          <AmazonSearchBar onClick={() => setIsSearchModalOpen(true)} />
          <div className="flex items-center gap-4 ">
            <button className="text-sm font-bold cursor-pointer hover:text-[#1C1F1E] transition-colors">
              English
            </button>
            <div className="w-px h-6 bg-gray-300"></div>
            <UserMenu userName={userName} />
            <a href="/" className="hover:text-[#1C1F1E]">
              <Heart />
            </a>
            <a
              href="/"
              className="relative flex items-center gap-2  rounded-md transition-colors"
            >
              <button ref={cartIconRef} id="header-cart-icon">
                <ShoppingCart size={23} />
              </button>
              {/* <ShoppingCart  /> */}
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold bg-red-500 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </a>
          </div>
        </div>
      </div>
      <DeliverToModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />{" "}
    </>
  );
};

export default TopBar;
