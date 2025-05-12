"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqList = [
  {
    question: "كيف يمكنني طلب خدمة شحن عبر الموقع؟",
    answer:
      "يمكنك طلب خدمة الشحن بسهولة عن طريق إنشاء حساب وتحديد تفاصيل الشحنة مثل الوزن والأبعاد والعنوانين (المرسل والمستلم) ثم اختيار السائق المناسب بناءً على التقييمات والأسعار.",
  },
  {
    question: "ما هي خيارات الدفع المتاحة لخدمات الشحن؟",
  },
  {
    question: "هل يمكنني تعديل أو إلغاء طلب الشحن بعد تأكيده؟",
  },
  {
    question: "ماذا أفعل إذا واجهت مشكلة مع السائق أو الخدمة؟",
  },
  {
    question: "كيف أتأكد من أمان الشحنة أثناء النقل؟",
  },
];

export default function CustomAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 text-right" dir="rtl">
      <h2 className="text-xl font-bold mb-4">الأسئلة الشائعة</h2>
      <div className="space-y-3">
        {faqList.map((item, index) => {
          const isOpen = index === openIndex;
          const hasAnswer = !!item.answer;

          return (
            <div
              key={index}
              className={`bg-white rounded-md shadow-sm border ${
                index === 0
                  ? "border-dashed border-2 border-gray-300"
                  : "border border-gray-200"
              }`}
            >
              <button
                onClick={() => hasAnswer && toggle(index)}
                className={`w-full flex items-center justify-between p-4 text-sm font-medium text-gray-800 hover:bg-gray-50 transition ${
                  hasAnswer ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <span>{item.question}</span>
                {hasAnswer && (
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm text-gray-600 px-4 ${
                  isOpen ? "grid-rows-[1fr] py-2" : "grid-rows-[0fr] py-0"
                }`}
              >
                <div className="overflow-hidden leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
