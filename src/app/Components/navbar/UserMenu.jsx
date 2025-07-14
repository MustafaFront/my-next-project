// src/components/navbar/UserMenu.jsx
"use client";

import { Fragment } from "react";
import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import { User } from "lucide-react";

const UserMenu = ({ userName }) => (
  <HeadlessMenu as="div" className="relative">
    <HeadlessMenu.Button className="flex items-center gap-2  cursor-pointer hover:text-[#1C1F1E] transition-colors">
      <User size={24} />
      <span className="hidden lg:inline font-semibold">حياك {userName}</span>
      <span className="inline-block font-semibold animate-wave origin-[70%_70%] text-xl">
        👋
      </span>
    </HeadlessMenu.Button>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <HeadlessMenu.Items className="absolute left-0 mt-2 w-48 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-30">
        <div className="py-1">
          <HeadlessMenu.Item>
            <a
              href="/profile"
              className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-100 text-right"
            >
              حسابي
            </a>
          </HeadlessMenu.Item>
          <HeadlessMenu.Item>
            <a
              href="/orders"
              className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-100 text-right"
            >
              طلباتي
            </a>
          </HeadlessMenu.Item>
          <HeadlessMenu.Item>
            <button className="w-full text-right block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
              تسجيل الخروج
            </button>
          </HeadlessMenu.Item>
        </div>
      </HeadlessMenu.Items>
    </Transition>
  </HeadlessMenu>
);

export default UserMenu;
