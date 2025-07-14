// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const steps = [
//   { id: 1, label: "Location" },
//   { id: 2, label: "Order Details" },
//   { id: 3, label: "Price Offers" },
// ];

// export default function ArrowStepperWithButtons() {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [orderSent, setOrderSent] = useState(false);

//   const nextStep = () => {
//     if (currentStep < steps.length) setCurrentStep(currentStep + 1);
//   };

//   const prevStep = () => {
//     if (currentStep > 1) setCurrentStep(currentStep - 1);
//   };

//   const handleSendOrder = () => {
//     setOrderSent(true);
//     setCurrentStep(3);
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6">
//       {/* Stepper Circles */}
//       <div className="flex items-center justify-between mb-8 px-2">
//         {steps.map((step, idx) => {
//           const isActive = currentStep === step.id;
//           const isCompleted = currentStep > step.id;
//           return (
//             <React.Fragment key={step.id}>
//               <div className="flex flex-col items-center">
//                 <motion.div
//                   animate={{
//                     backgroundColor: isActive
//                       ? "#facc15"
//                       : isCompleted
//                       ? "#fde68a"
//                       : "#d1d5db",
//                     color: isActive
//                       ? "#fff"
//                       : isCompleted
//                       ? "#b45309"
//                       : "#374151",
//                     scale: isActive ? 1.15 : 1,
//                   }}
//                   className={`w-10 h-10 flex items-center justify-center rounded-full font-bold shadow transition-all duration-300 border-2 ${
//                     isActive
//                       ? "border-yellow-400"
//                       : isCompleted
//                       ? "border-yellow-200"
//                       : "border-gray-300"
//                   }`}
//                 >
//                   {isCompleted ? "✓" : step.id}
//                 </motion.div>
//                 <span
//                   className={`mt-2 text-xs font-semibold ${
//                     isActive
//                       ? "text-yellow-600"
//                       : isCompleted
//                       ? "text-yellow-700"
//                       : "text-gray-500"
//                   }`}
//                 >
//                   {step.label}
//                 </span>
//               </div>
//               {idx < steps.length - 1 && (
//                 <div className="flex-1 h-1 bg-gray-300 mx-2 relative">
//                   <motion.div
//                     initial={false}
//                     animate={{
//                       width:
//                         currentStep > step.id
//                           ? "100%"
//                           : currentStep === step.id
//                           ? "50%"
//                           : "0%",
//                       backgroundColor:
//                         currentStep > step.id
//                           ? "#fde68a"
//                           : currentStep === step.id
//                           ? "#facc15"
//                           : "#d1d5db",
//                     }}
//                     className="absolute h-1 left-0 top-0 rounded"
//                     style={{ zIndex: 1 }}
//                   />
//                 </div>
//               )}
//             </React.Fragment>
//           );
//         })}
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex justify-between mt-6">
//         <button
//           onClick={prevStep}
//           disabled={currentStep === 1}
//           className="px-5 py-2 bg-gray-300 rounded disabled:opacity-50"
//         >
//           Previous
//         </button>
//         {currentStep === 1 && (
//           <button
//             onClick={nextStep}
//             className="px-5 py-2 bg-yellow-400 text-white rounded"
//           >
//             Next
//           </button>
//         )}
//         {currentStep === 2 && (
//           <button
//             onClick={handleSendOrder}
//             className="px-5 py-2 bg-green-600 text-white rounded"
//           >
//             إرسال الطلب
//           </button>
//         )}
//       </div>

//       {/* Step Content with Animation */}
//       <div className="mt-6 p-4 border rounded bg-gray-50 min-h-[80px] relative overflow-hidden">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentStep}
//             initial={{ opacity: 0, x: 60 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -60 }}
//             transition={{ duration: 0.4 }}
//             className="absolute w-full"
//           >
//             {currentStep === 1 && <p>Here you select the location.</p>}
//             {currentStep === 2 && <p>Fill in your order details.</p>}
//             {currentStep === 3 && orderSent && (
//               <div>
//                 <p className="font-bold text-green-700 mb-2">
//                   تم إرسال الطلب بنجاح! 🎉
//                 </p>
//                 <p>
//                   هذا هو عرض السعر الخاص بطلبك:{" "}
//                   <span className="font-semibold text-yellow-700">
//                     1500 ريال
//                   </span>
//                 </p>
//               </div>
//             )}
//             {currentStep === 3 && !orderSent && (
//               <p>View and choose price offers.</p>
//             )}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { id: 1, label: "Location" },
  { id: 2, label: "Order Details" },
  { id: 3, label: "Price Offers" },
];

export default function ArrowStepperWithButtons() {
  const [currentStep, setCurrentStep] = useState(1);
  const [orderSent, setOrderSent] = useState(false);

  const nextStep = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSendOrder = () => {
    setOrderSent(true);
    setCurrentStep(3);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      {/* Stepper Words with background */}
      <div className="relative mb-12">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-2 bg-yellow-100 rounded-full z-0" />
        <div className="flex items-center justify-between relative z-10">
          {steps.map((step, idx) => {
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;
            return (
              <React.Fragment key={step.id}>
                <motion.div
                  animate={{
                    backgroundColor: isActive
                      ? "#facc15"
                      : isCompleted
                      ? "#fde68a"
                      : "#fff",
                    color: isActive
                      ? "#fff"
                      : isCompleted
                      ? "#b45309"
                      : "#a3a3a3",
                    scale: isActive ? 1.1 : 1,
                    boxShadow: isActive
                      ? "0 2px 12px #facc1555"
                      : "0 1px 2px #0001",
                  }}
                  transition={{ duration: 0.3 }}
                  className={`px-6 py-2 rounded-full font-bold text-base md:text-lg border-2 transition-all duration-300 text-center`}
                  style={{
                    border: isActive
                      ? "2px solid #eab308"
                      : isCompleted
                      ? "2px solid #fde68a"
                      : "2px solid #e5e7eb",
                    minWidth: 120,
                  }}
                >
                  {step.label}
                </motion.div>
                {idx < steps.length - 1 && (
                  <div className="flex-1 h-2 mx-2 relative">
                    <motion.div
                      initial={false}
                      animate={{
                        width:
                          currentStep > step.id
                            ? "100%"
                            : currentStep === step.id
                            ? "50%"
                            : "0%",
                        backgroundColor:
                          currentStep > step.id
                            ? "#facc15"
                            : currentStep === step.id
                            ? "#fde68a"
                            : "#f3f4f6",
                      }}
                      className="absolute h-2 left-0 top-0 rounded-full transition-all duration-300"
                      style={{ zIndex: 1 }}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="px-5 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        {currentStep === 1 && (
          <button
            onClick={nextStep}
            className="px-5 py-2 bg-yellow-400 text-white rounded"
          >
            Next
          </button>
        )}
        {currentStep === 2 && (
          <button
            onClick={handleSendOrder}
            className="px-5 py-2 bg-green-600 text-white rounded"
          >
            إرسال الطلب
          </button>
        )}
      </div>

      {/* Step Content with Animation */}
      <div className="mt-6 p-4 border rounded bg-gray-50 min-h-[80px] relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4 }}
            className="absolute w-full"
          >
            {currentStep === 1 && <p>Here you select the location.</p>}
            {currentStep === 2 && <p>Fill in your order details.</p>}
            {currentStep === 3 && orderSent && (
              <div>
                <p className="font-bold text-yellow-400 mb-2">
                  تم إرسال الطلب بنجاح! 🎉
                </p>
                <p>
                  هذا هو عرض السعر الخاص بطلبك:{" "}
                  <span className="font-semibold text-yellow-400">
                    1500 ريال
                  </span>
                </p>
              </div>
            )}
            {currentStep === 3 && !orderSent && (
              <p>View and choose price offers.</p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
