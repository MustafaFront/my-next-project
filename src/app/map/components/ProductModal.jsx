import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import Image from "next/image";

const ProductModal = ({ onClose }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "سماعة بلوتوث",
      price: "150",
      image: "/Saudi_Arabia_map-ar.png"
    },
    {
      id: 2,
      name: "ساعة ذكية",
      price: "220",
      image: "/Saudi_Arabia_map-ar.png"
    },
    {
      id: 3,
      name: "باور بانك",
      price: "95",
      image: "/Saudi_Arabia_map-ar.png"
    },
  ]);

  const handleAddToCart = (product) => {
    Swal.fire({
      icon: "success",
      title: "تمت الإضافة بنجاح!",
      text: `${product.name} تم إضافته إلى السلة`,
      confirmButtonText: "تمام",
      timer: 2000,
    });
  };

  const handleDelete = (id, name) => {
    Swal.fire({
      icon: "success",
      title: "تم الحذف!",
      text: `${name} تم حذفه من القائمة`,
      showConfirmButton: false,
      timer: 1500,
    });

    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <motion.div
        dir="rtl"
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-6 overflow-y-auto max-h-[90vh]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">المنتجات المتاحة</h2>

        <AnimatePresence>
          {items.map((product) => (
            <motion.div
              key={product.id}
              className="flex items-center justify-between bg-gray-50 rounded-xl shadow-sm p-4 mb-4 hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -50 }}
              layout
            >
              {/* Right: image + name + price */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 relative rounded-xl overflow-hidden border">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="text-right">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-gray-600 mt-1">السعر: {product.price} ر.س</p>
                </div>
              </div>

              {/* Left: buttons */}
              <div className="flex flex-col gap-2 items-center">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex items-center gap-2 bg-[#ff914d] hover:bg-[#ff911d] text-white px-3 py-1 rounded-full text-sm shadow"
                >
                  <FaShoppingCart /> أضف للسلة
                </button>
                <button
                  onClick={() => handleDelete(product.id, product.name)}
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-sm shadow"
                >
                  <FaTrash /> حذف
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <div className="text-center mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-700"
          >
            إغلاق
          </button>
        </div>
      </motion.div>
    </div>

            
          
    </>
    
  );
};

export default ProductModal;
