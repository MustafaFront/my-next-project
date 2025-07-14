// مسار الملف: src/data/productsData.js

export const ultimateProducts = [
  {
    id: 1,
    name: "طقم أثاث حديقة من الراتان الفاخر (4 قطع)",
    price: 1150.0,
    oldPrice: 1500.0,
    image: "/images/download (3).jpeg",
    rating: 4.7,
    reviews: 43,
    status: null,
    isOutOfStock: true,
    isLowOnStock: false,
  },
  {
    id: 2,
    name: "كرسي مكتب مريح بمسند ظهر شبكي قابل للتعديل",
    price: 450.0,
    oldPrice: 600.0,
    image: "/images/download (2).jpeg",
    rating: 4.8,
    reviews: 215,
    status: null,
    isOutOfStock: true, // <-- منتج خلصان
    isLowOnStock: false,
  },
  {
    id: 3,
    name: "ماكينة قهوة اسبريسو احترافية بضغط 20 بار",
    price: 1899.0,
    oldPrice: 2499.0,
    image: "/images/download (1).jpeg",
    rating: 4.9,
    reviews: 75,
    status: {
      text: "الأكثر مبيعاً",
      icon: "TrendingUp",
      color: "text-green-600",
    },
    isOutOfStock: false,
    isLowOnStock: true, // <-- منتج على وشك النفاذ
    stock: 3,
  },
  {
    id: 4,
    name: "مرآة حمام دائرية بإضاءة LED ذكية",
    price: 349.99,
    oldPrice: null,
    image: "/images/download.jpeg",
    rating: 4.6,
    reviews: 78,
    status: { text: "توصيل Express", icon: "Rocket", color: "text-blue-600" },
    isOutOfStock: false,
    isLowOnStock: false,
  },
];
