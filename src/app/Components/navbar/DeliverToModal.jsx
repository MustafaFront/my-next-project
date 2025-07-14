// src/components/navbar/DeliverToModal.jsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Search } from "lucide-react";

const DeliverToModal = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="bg-white rounded-lg w-full max-w-md p-6 text-right"
          onClick={(e) => e.stopPropagation()} // منع إغلاق المودال عند النقر داخله
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">اختر موقعك</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800"
            >
              <X />
            </button>
          </div>
          <p className="text-gray-600 mb-4">
            اختر مدينتك وسيتم توصيل طلبك بشكل أسرع!
          </p>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="ابحث عن مدينتك"
              className="w-full h-11 pr-10 pl-4 border rounded-md"
            />
            <Search
              className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          {/* يمكنك إضافة قائمة بالمدن هنا */}
          <button className="w-full bg-yellow-400 text-gray-800 font-bold py-3 rounded-md hover:bg-yellow-500 transition-colors">
            تأكيد الموقع
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default DeliverToModal;
