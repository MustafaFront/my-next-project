// import dependencies
"use client";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import { FiX } from "react-icons/fi";

export default function ShipmentDetailsStepperModal({ isOpen, onClose }) {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => setActiveStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setActiveStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="p-4">
      <Dialog
        open={isOpen}
        onClose={onClose}
        className="fixed font inset-0 p-3 z-50 flex items-center justify-center bg-black/40"
      >
        <Dialog.Panel className="w-full max-w-2xl bg-white rounded-lg shadow-xl p-3 space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-yellow-400 text-center">
              تفاصيل الشحنة
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-red-500 text-2xl cursor-pointer transition-colors duration-200"
              aria-label="Close"
            >
              <FiX />
            </button>
          </div>

          <Stepper
            activeStep={activeStep}
            styleConfig={{
              activeBgColor: "#facc15",
              completedBgColor: "#22c55e",
            }}
          >
            <Step label="بيانات الشحنة" />
            <Step label="المرسل والمستلم" />
            <Step label="بيانات المركبة" />
            <Step label="تفاصيل العروض" />
          </Stepper>

          <div className="mt-4 min-h-[300px]">
            {activeStep === 0 && (
              <div className="grid grid-cols-2 gap-4 rtl text-right">
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-1">
                    رقم الشحنة
                  </label>
                  <input
                    type="text"
                    value="#12345"
                    readOnly
                    className="bg-gray-100 rounded-md px-3 py-2 text-sm focus:outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-1">
                    وزن الشحنة
                  </label>
                  <input
                    type="text"
                    value="200 كجم"
                    readOnly
                    className="bg-gray-100 rounded-md px-3 py-2 text-sm focus:outline-none"
                  />
                </div>

                <div className="flex flex-col col-span-2">
                  <label className="text-sm font-semibold text-gray-700 mb-1">
                    وصف الشحنة
                  </label>
                  <input
                    type="text"
                    value="قطع غيار سيارات"
                    readOnly
                    className="bg-gray-100 rounded-md px-3 py-2 text-sm focus:outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-1">
                    نوع الشحنة
                  </label>
                  <input
                    type="text"
                    value="صناعية"
                    readOnly
                    className="bg-gray-100 rounded-md px-3 py-2 text-sm focus:outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-1">
                    تاريخ الشحنة
                  </label>
                  <input
                    type="text"
                    value="2025-06-01"
                    readOnly
                    className="bg-gray-100 rounded-md px-3 py-2 text-sm focus:outline-none"
                  />
                </div>

                <div className="flex flex-col col-span-2">
                  <label className="text-sm font-semibold text-gray-700 mb-1">
                    حالة الشحنة
                  </label>
                  <input
                    type="text"
                    value="قيد التوصيل"
                    readOnly
                    className="bg-gray-100 rounded-md px-3 py-2 text-sm focus:outline-none"
                  />
                </div>
              </div>
            )}

            {activeStep === 1 && (
              <div className="rtl grid grid-cols-1 md:grid-cols-2 gap-4 text-right">
                <div className="bg-green-100 p-4 rounded-xl">
                  <h3 className="font-bold mb-2">تفاصيل المرسل</h3>
                  <p>
                    <strong>الاسم:</strong> أحمد مرسل
                  </p>
                  <p>
                    <strong>رقم الهاتف:</strong> 01000000000
                  </p>
                </div>
                <div className="bg-red-100 p-4 rounded-xl">
                  <h3 className="font-bold mb-2">تفاصيل المستلم</h3>
                  <p>
                    <strong>الاسم:</strong> محمد مستلم
                  </p>
                  <p>
                    <strong>رقم الهاتف:</strong> 01111111111
                  </p>
                </div>
                <div className="col-span-2">
                  <img
                    src="https://via.placeholder.com/600x200"
                    alt="خريطة"
                    className="w-full rounded-xl mt-4"
                  />
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="rtl text-right max-w-md mx-auto space-y-4">
                {/* الحقلين جنب بعض */}
                <div className="flex gap-4">
                  <div className="flex flex-col w-1/2">
                    <label className="text-sm font-semibold text-gray-700 mb-1">
                      اسم المركبة
                    </label>
                    <input
                      type="text"
                      value="شاحنة مان"
                      readOnly
                      className="bg-white rounded-md px-3 py-2 text-sm border border-gray-300 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <label className="text-sm font-semibold text-gray-700 mb-1">
                      نوع الحمولة
                    </label>
                    <input
                      type="text"
                      value="مغلقة"
                      readOnly
                      className="bg-white rounded-md px-3 py-2 text-sm border border-gray-300 focus:outline-none"
                    />
                  </div>
                </div>

                {/* الحقل الثالث تحتهم */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-1">
                    الفئة
                  </label>
                  <input
                    type="text"
                    value="ثقيلة"
                    readOnly
                    className="bg-white rounded-md px-3 py-2 text-sm border border-gray-300 focus:outline-none"
                  />
                </div>

                {/* الصورة */}
                <img
                  src="https://via.placeholder.com/400x200"
                  alt="صورة المركبة"
                  className="rounded-xl w-full object-cover"
                />
              </div>
            )}

            {activeStep === 3 && (
              <div className="h-64 overflow-y-auto rtl text-right pr-3 space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex bg-gray-50 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-col flex-grow">
                      <p className="font-bold text-lg mb-1">عرض {i}</p>
                      <p>
                        <strong>السعر:</strong>{" "}
                        <span className="text-green-600 font-semibold">
                          {i * 1000} ج.م
                        </span>
                      </p>
                      <p className="text-gray-700">
                        <strong>الوصف:</strong> عرض ممتاز لنقل سريع وآمن
                      </p>
                      <p>
                        <strong>تاريخ العرض:</strong> 2025-05-30
                      </p>
                      <p>
                        <strong>التقييم:</strong>{" "}
                        <span className="text-yellow-400">⭐⭐⭐⭐☆</span>
                      </p>
                    </div>
                    <img
                      src="https://via.placeholder.com/60"
                      alt="صورة العرض"
                      className="w-16 h-16 rounded-full ml-4 object-cover self-start"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={prevStep}
              disabled={activeStep === 0}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded disabled:opacity-50"
            >
              السابق
            </button>
            <button
              onClick={nextStep}
              disabled={activeStep === 3}
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
            >
              التالي
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
