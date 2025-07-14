// src/data/noonStyleProducts.js (ملف جديد أو في نفس الصفحة)

export const noonStyleProducts = [
  {
    id: 1,
    name: "طقم أثاث حديقة من الراتان الفاخر (4 قطع)",
    price: 1150.0,
    oldPrice: 1500.0,
    image: "/images/download (1).jpeg",
    rating: 4.7,
    reviews: 43,
    status: {
      text: "#1 في أثاث الحدائق",
      icon: "Crown", // اسم أيقونة من lucide-react
      color: "text-purple-600", // لون النص والأيقونة
    },
  },
  {
    id: 2,
    name: "مرآة حمام دائرية بإضاءة LED ذكية",
    price: 349.99,
    oldPrice: null,
    image: "/images/download (2).jpeg",
    rating: 4.6,
    reviews: 78,
    status: {
      text: "توصيل Express خلال 24 ساعة",
      icon: "Rocket",
      color: "text-blue-600",
    },
  },
  {
    id: 3,
    name: "ماكينة قهوة اسبريسو احترافية بضغط 20 بار",
    price: 1899.0,
    oldPrice: 2499.0,
    image: "/images/download (3).jpeg",
    rating: 4.9,
    reviews: 75,
    status: {
      text: "الأكثر مبيعاً هذا الأسبوع",
      icon: "TrendingUp",
      color: "text-green-600",
    },
  },
  {
    id: 4,
    name: "بلوك بناء خرساني معزول للحوائط",
    price: 15.5,
    oldPrice: null,
    image: "/images/download (4).jpeg",
    rating: 4.7,
    reviews: 189,
    status: null, // منتج بدون حالة خاصة
  },
];
