// src/components/navbar/SidebarMenu.jsx
"use client";

import Link from "next/link";
import { X } from "lucide-react";

const SidebarMenu = ({ isOpen, onClose, categories }) => {
  return (
    // Overlay + Container
    <div
      className={`fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      {/* Sidebar Panel */}
      <div
        className={`relative flex flex-col h-full w-4/5 max-w-sm bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full" // For LTR, use '-translate-x-full'. For RTL, this should be 'translate-x-full'
        }`}
        dir="rtl" // Set direction to RTL for the sidebar content
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-bold text-lg text-[#273772]">جميع التصنيفات</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500"
          >
            <X size={24} />
          </button>
        </div>

        {/* Categories List */}
        <nav className="flex-grow overflow-y-auto p-4">
          <ul className="space-y-1">
            {categories.map((cat) => (
              <li key={cat.name}>
                <Link
                  href={cat.path}
                  className="block w-full text-right p-3 rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#273772] transition-colors"
                  onClick={onClose} // Close menu on link click
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SidebarMenu;
