// src/components/NoonProductCard.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import {
  Heart,
  ShoppingCart,
  Star,
  Plus,
  Minus,
  Trash2,
  Crown,
  Rocket,
  TrendingUp,
  Loader,
} from "lucide-react";
import { useCartAnimation } from "@/contexts/CartAnimationContext";
import { toast } from "sonner";

// --- مكون صغير للأيقونات الديناميكية ---
const DynamicIcon = ({ name, ...props }) => {
  const icons = { Crown, Rocket, TrendingUp };
  const IconComponent = icons[name];
  return IconComponent ? <IconComponent {...props} /> : null;
};

const NoonProductCard = ({ product }) => {
  const { name, price, oldPrice, image, rating, reviews, status } = product;
  const { triggerAnimation } = useCartAnimation();
  const [scope] = useAnimate(); // الـ scope هنا هو الـ ref بتاع الصورة

  // --- الحالة الداخلية للكارت ---
  const [quantityInCart, setQuantityInCart] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = () => {
    if (isLoading) return;
    setIsLoading(true);

    // 1. هات إحداثيات الصورة
    const rect = scope.current.getBoundingClientRect();

    // 2. أطلق الأنيميشن من الـ Context
    triggerAnimation(rect, image);

    // 3. حدث الحالة واعرض التوست (بعد فترة قصيرة عشان الأنيميشن يبدأ)
    setTimeout(() => {
      setQuantityInCart(1);
      toast("تمت إضافة المنتج بنجاح!", {
        description: `"${name}"`,
        // ====> هنا الإضافة الجامدة <====
        icon: <ShoppingCart size={20} className="text-orange-400" />,
        action: {
          label: "عرض السلة",
          onClick: () => console.log("اذهب إلى صفحة السلة"),
        },
        duration: 3000,
      });
      setIsLoading(false);
    }, 100); // 100ms كافية جدًا
  };

  const handleIncrease = () => setQuantityInCart((prev) => prev + 1);
  const handleDecrease = () =>
    setQuantityInCart((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="relative group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm h-full flex flex-col transition-all duration-300 hover:shadow-lg">
      {/* --- الصورة والأيقونات العلوية --- */}
      <div className="relative overflow-hidden bg-gray-50">
        <a href="#" className="block aspect-square">
          <img
            ref={scope}
            src={image}
            alt={name}
            className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
          />
        </a>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="absolute top-3 right-3 bg-white/70 backdrop-blur-sm p-2 rounded-full text-gray-500 hover:text-red-500 hover:bg-white transition-all"
        >
          <Heart size={22} />
        </motion.button>
      </div>

      {/* --- المحتوى النصي --- */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-gray-700 text-sm leading-tight h-10 mb-2 hover:text-orange-600 transition-colors">
          <a href="#">{name}</a>
        </h3>
        <div className="flex items-center gap-1 text-sm text-gray-400 mb-2">
          <Star size={16} className="text-amber-400 fill-current" />
          <span className="font-semibold text-gray-700">{rating}</span>
          <span>({reviews})</span>
        </div>

        {/* السعر */}
        <div className="flex items-end gap-2 mb-3">
          <p className="text-xl font-bold text-gray-900 leading-none">
            {price.toFixed(2)}
          </p>
          <span className="text-sm font-semibold text-gray-800 leading-none">
            ر.س
          </span>
          {oldPrice && (
            <p className="text-xs text-gray-400 line-through leading-none">
              {oldPrice.toFixed(2)}
            </p>
          )}
        </div>

        {/* --- سطر الحالة الديناميكي (زي نون) --- */}
        {status && (
          <div className="flex items-center gap-1.5 mb-4">
            <DynamicIcon
              name={status.icon}
              className={status.color}
              size={16}
            />
            <span className={`text-xs font-bold ${status.color}`}>
              {status.text}
            </span>
          </div>
        )}

        {/* --- نظام السلة التفاعلي (السحر كله هنا) --- */}
        <div className="mt-auto h-12">
          <AnimatePresence mode="wait">
            {quantityInCart === 0 ? (
              <motion.button
                key="add"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onClick={handleAddToCart}
                disabled={isLoading}
                className="w-full h-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 font-bold rounded-lg border-2 border-gray-200 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  <Loader className="animate-spin" size={20} />
                ) : (
                  <ShoppingCart size={20} />
                )}
                <span>إضافة للسلة</span>
              </motion.button>
            ) : (
              <motion.div
                key="quantity"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="w-full h-full flex items-center justify-between bg-orange-500 text-white font-bold rounded-lg px-2"
              >
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={handleIncrease}
                  className="p-2 rounded-md hover:bg-orange-600"
                >
                  <Plus size={20} />
                </motion.button>
                <span className="text-lg">{quantityInCart}</span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={handleDecrease}
                  className="p-2 rounded-md hover:bg-orange-600"
                >
                  {quantityInCart === 1 ? (
                    <Trash2 size={20} />
                  ) : (
                    <Minus size={20} />
                  )}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default NoonProductCard;
