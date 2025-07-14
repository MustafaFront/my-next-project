// src/contexts/CartAnimationContext.js
"use client";

import { createContext, useContext, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 1. إنشاء الـ Context
const CartAnimationContext = createContext(null);

// 2. إنشاء الـ Provider اللي هيحتوي على كل اللوجيك
export const CartAnimationProvider = ({ children }) => {
  const cartIconRef = useRef(null);
  const [flyingProducts, setFlyingProducts] = useState([]);

  const triggerAnimation = (startRect, imageSrc) => {
    const id = Date.now(); // ID فريد لكل أنيميشن
    setFlyingProducts((prev) => [...prev, { id, startRect, imageSrc }]);
  };

  const onAnimationComplete = (id) => {
    setFlyingProducts((prev) => prev.filter((p) => p.id !== id));

    // هز أيقونة السلة بعد ما الصورة توصل
    if (cartIconRef.current) {
      const cartIcon = cartIconRef.current;
      const keyframes = {
        scale: [1, 1.4, 1],
        rotate: [0, -10, 10, 0],
      };
      const options = { duration: 0.5, type: "spring" };
      motion.animate(cartIcon, keyframes, options);
    }
  };

  return (
    <CartAnimationContext.Provider value={{ cartIconRef, triggerAnimation }}>
      {children}
      <AnimatePresence>
        {flyingProducts.map(({ id, startRect, imageSrc }) => (
          <FlyingProduct
            key={id}
            startRect={startRect}
            imageSrc={imageSrc}
            cartIconRef={cartIconRef}
            onComplete={() => onAnimationComplete(id)}
          />
        ))}
      </AnimatePresence>
    </CartAnimationContext.Provider>
  );
};

// 3. Custom Hook عشان نستخدم الـ Context بسهولة
export const useCartAnimation = () => {
  const context = useContext(CartAnimationContext);
  if (!context) {
    throw new Error(
      "useCartAnimation must be used within a CartAnimationProvider"
    );
  }
  return context;
};

// 4. كومبوننت الصورة الطائرة
function FlyingProduct({ startRect, imageSrc, cartIconRef, onComplete }) {
  const endRect = cartIconRef.current?.getBoundingClientRect();

  if (!endRect) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        left: startRect.left,
        top: startRect.top,
        width: startRect.width,
        height: startRect.height,
        zIndex: 9999,
      }}
      initial={{
        opacity: 1,
        scale: 1,
      }}
      animate={{
        left: endRect.left + endRect.width / 2 - 16,
        top: endRect.top + endRect.height / 2 - 16,
        width: 32,
        height: 32,
        scale: 0.2,
        rotate: 360,
        opacity: 0,
      }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      <img
        src={imageSrc}
        alt="Flying product"
        className="w-full h-full object-contain rounded-md"
      />
    </motion.div>
  );
}
