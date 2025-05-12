"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react"; // أيقونة السهم من مكتبة lucide
import ProductModal from "./components/ProductModal";

// الأسئلة الشائعة مع الإجابات
const faqList = [
  {
    question: "كيف يمكنني طلب خدمة شحن عبر الموقع؟",
    answer:
      "يمكنك طلب خدمة الشحن بسهولة عن طريق إنشاء حساب وتحديد تفاصيل الشحنة مثل الوزن والأبعاد والعنوانين (المرسل والمستلم) ثم اختيار السائق المناسب بناءً على التقييمات والأسعار.",
  },
  {
    question: "ما هي خيارات الدفع المتاحة لخدمات الشحن؟",
    answer: "نحن نوفر خيارات متعددة للدفع مثل الدفع عند الاستلام أو البطاقة.",
  },
  {
    question: "هل يمكنني تعديل أو إلغاء طلب الشحن بعد تأكيده؟",
    answer: "نعم يمكنك ذلك خلال أول 30 دقيقة من تأكيد الطلب.",
  },
  {
    question: "ماذا أفعل إذا واجهت مشكلة مع السائق أو الخدمة؟",
    answer: "تواصل مع الدعم الفني من خلال مركز المساعدة.",
  },
  {
    question: "كيف أتأكد من أمان الشحنة أثناء النقل؟",
    answer: "جميع شحناتنا مغطاة بالتأمين وتتم متابعتها عبر نظام التتبع.",
  },
];

export default function CustomAccordion() {
  const [openIndex, setOpenIndex] = useState(null); // حالة لتحديد السؤال المفتوح حاليًا
  const [showModal, setShowModal] = useState(false);


  // وظيفة لتبديل السؤال المفتوح
  const toggle = (index) => {
    // إذا ضغطت على نفس السؤال، يقفله - غير كده، يفتح السؤال الجديد
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // <div className="max-w-2xl mx-auto p-4 text-right" dir="rtl">
    //   {/* العنوان الرئيسي */}
    //   <h2 className="text-xl font-bold mb-4">الأسئلة الشائعة</h2>

    //   {/* قائمة الأسئلة */}
    //   <div className="space-y-3">
    //     {faqList.map((item, index) => {
    //       const isOpen = index === openIndex; // هل السؤال مفتوح حاليًا

    //       return (
    //         <div
    //           key={index}
    //           className={`bg-white rounded-md shadow-sm border border-gray-200`}
    //         >
    //           {/* رأس السؤال */}
    //           <button
    //             onClick={() => toggle(index)} // فتح/إغلاق عند الضغط
    //             className="w-full flex items-center justify-between p-4 text-sm font-medium text-gray-800 hover:bg-gray-50 transition"
    //           >
    //             <span>{item.question}</span>
    //             {/* أيقونة السهم مع دوران عند الفتح */}
    //             <ChevronDown
    //               className={`w-5 h-5 transition-transform duration-300 ${
    //                 isOpen ? "rotate-180" : ""
    //               }`}
    //             />
    //           </button>

    //           {/* خط فاصل منقط بين السؤال والإجابة */}
    //           <div
    //             className={`transition-all duration-300 ease-in-out ${
    //               isOpen ? "border-t border-dashed border-gray-300" : ""
    //             }`}
    //           />

    //           {/* محتوى الإجابة */}
    //           <div
    //             className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm text-gray-600 px-4 ${
    //               isOpen ? "grid-rows-[1fr] py-2" : "grid-rows-[0fr] py-0"
    //             }`}
    //           >
    //             <div className="overflow-hidden leading-relaxed">
    //               {item.answer}
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  //   <div className="min-h-screen flex items-center justify-center">
  //   <button
  //     onClick={() => setShowModal(true)}
  //     className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700"
  //   >
  // 🔥 حبيبي يا عجوه
  //   </button>

  //   {showModal && <ProductModal onClose={() => setShowModal(false)} />}
  // </div>

  <>
  {/* <ChatBox/> */}
  
  </>
  );
}
