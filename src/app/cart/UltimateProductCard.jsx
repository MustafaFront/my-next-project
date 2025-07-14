// مسار الملف: src/components/ProductCard.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Bell,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

// --- مكون مساعد للأيقونات الديناميكية ---
const DynamicIcon = ({ name, ...props }) => {
  const icons = { Crown, Rocket, TrendingUp };
  const IconComponent = icons[name];
  return IconComponent ? <IconComponent {...props} /> : null;
};

// ===================================================================
// --- الكومبوننت الرئيسي - التحفة الفنية الكاملة ---
// ===================================================================
const ProductCard = ({ product }) => {
  const [quantityInCart, setQuantityInCart] = useState(0);
  const [notifyMeClicked, setNotifyMeClicked] = useState(false);

  // --- دوال التحكم في الحالة ---
  const handleAddToCart = () => setQuantityInCart(1);
  const handleIncrease = () => setQuantityInCart((prev) => prev + 1);
  const handleDecrease = () =>
    setQuantityInCart((prev) => (prev > 0 ? prev - 1 : 0));
  const handleNotifyMe = () => {
    // في الواقع، هنا ستفتح نافذة منبثقة لجمع البريد الإلكتروني
    setNotifyMeClicked(true);
  };

  // ======================================================================
  // === الحالة الأولى: المنتج نفدت كميته (بتصميم احترافي مُحسَّن) ===
  // ======================================================================
  if (product.isOutOfStock) {
    return (
      <div className="relative group bg-white border border-gray-200 rounded-2xl overflow-hidden h-full flex flex-col">
        <div className="relative overflow-hidden bg-gray-100">
          <div className="block aspect-square relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain p-2 filter grayscale"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4">
              <span className="bg-white text-gray-800 text-sm text-center font-bold px-4 py-2 rounded-lg shadow-md">
                نفدت الكمية
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-semibold text-gray-600 text-sm leading-tight h-10 mb-2">
            {product.name}
          </h3>
          <p className="text-xl font-bold text-gray-400 mb-4">
            {product.price.toFixed(2)}
            <span className="text-sm font-normal"> ر.س</span>
          </p>
          <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-3">
            <AnimatePresence mode="wait">
              {notifyMeClicked ? (
                <motion.div
                  key="notified"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 text-center text-green-700 font-bold py-3 rounded-lg bg-green-100 border border-green-200"
                >
                  <CheckCircle size={20} />
                  <span>تم التسجيل بنجاح!</span>
                </motion.div>
              ) : (
                <motion.button
                  key="notify"
                  onClick={handleNotifyMe}
                  className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all"
                  whileTap={{ scale: 0.95 }}
                >
                  <Bell size={20} />
                  <span>أعلمني عند التوفر</span>
                </motion.button>
              )}
            </AnimatePresence>
            <motion.button
              className="w-full flex items-center justify-center gap-2 bg-transparent text-orange-600 font-bold py-3 rounded-lg border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
              whileTap={{ scale: 0.95 }}
            >
              <span>عرض منتجات مشابهة</span>
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  // ===============================================
  // === الحالة العادية: المنتج متوفر (بدون تغيير) ===
  // ===============================================
  return (
    <div className="relative group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm h-full flex flex-col transition-all duration-300 hover:shadow-lg">
      <div className="relative overflow-hidden bg-gray-50">
        <a href="#" className="block aspect-square">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
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
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-gray-700 text-sm leading-tight h-10 mb-2 hover:text-orange-600 transition-colors">
          <a href="#">{product.name}</a>
        </h3>
        <div className="flex items-center gap-1 text-sm text-gray-400 mb-2">
          <Star size={16} className="text-amber-400 fill-current" />
          <span className="font-semibold text-gray-700">{product.rating}</span>
          <span>({product.reviews})</span>
        </div>
        <div className="flex items-end gap-2 mb-3">
          <p className="text-xl font-bold text-gray-900 leading-none">
            {product.price.toFixed(2)}
          </p>
          <span className="text-sm font-semibold text-gray-800 leading-none">
            ر.س
          </span>
          {product.oldPrice && (
            <p className="text-xs text-gray-400 line-through leading-none">
              {product.oldPrice.toFixed(2)}
            </p>
          )}
        </div>
        <div className="h-6 mb-2">
          {product.isLowOnStock ? (
            <div className="flex items-center gap-1.5 text-red-600">
              <AlertTriangle size={16} />
              <span className="text-xs font-bold">
                على وشك النفاذ! ({product.stock} متبقية)
              </span>
            </div>
          ) : (
            product.status && (
              <div className="flex items-center gap-1.5">
                <DynamicIcon
                  name={product.status.icon}
                  className={product.status.color}
                  size={16}
                />
                <span className={`text-xs font-bold ${product.status.color}`}>
                  {product.status.text}
                </span>
              </div>
            )
          )}
        </div>
        <div className="mt-auto h-12">
          <AnimatePresence mode="wait">
            {quantityInCart === 0 ? (
              <motion.button
                key="add"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onClick={handleAddToCart}
                className="w-full h-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 font-bold rounded-lg border-2 border-gray-200 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all"
              >
                <ShoppingCart size={20} />
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

export default ProductCard;
