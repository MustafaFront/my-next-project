// 'use client';
// import React, { useState } from 'react';
// import { Stepper, Step } from 'react-form-stepper';
// import { CalendarDays, Clock } from 'lucide-react';

// const MobileStepperShipment = () => {
//   const [step, setStep] = useState(0);
//   const [form, setForm] = useState({
//     pickup: '',
//     dropoff: '',
//     weight: '',
//     unit: 'Ton',
//     shippingType: 'Cold',
//     loadType: '',
//     bookingType: 'fast',
//     scheduledTime: ''
//   });

//   const handleNext = () => {
//     if (step < 2) setStep(step + 1);
//   };

//   const handleBack = () => {
//     if (step > 0) setStep(step - 1);
//   };

//   const handleChange = (field, value) => {
//     setForm({ ...form, [field]: value });
//   };

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Google Maps Background */}
//       <div className="absolute inset-0 z-0">
//         <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-lg">
//           🗺️ Google Map هنا
//         </div>
//       </div>

//       {/* Overlay Content */}
//       <div className="relative z-10 p-4">
//         <Stepper activeStep={step} styleConfig={{ activeBgColor: '#FACC15', completedBgColor: '#22C55E' }}>
//           <Step label="الموقع" />
//           <Step label="الشحنة" />
//           <Step label="الجدولة" />
//         </Stepper>

//         <div className="mt-4 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-xl">
//           {step === 0 && (
//             <div className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="نقطة الاستلام"
//                 value={form.pickup}
//                 onChange={(e) => handleChange('pickup', e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//               <input
//                 type="text"
//                 placeholder="نقطة التسليم"
//                 value={form.dropoff}
//                 onChange={(e) => handleChange('dropoff', e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//             </div>
//           )}

//           {step === 1 && (
//             <div className="space-y-4">
//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   placeholder="الوزن"
//                   value={form.weight}
//                   onChange={(e) => handleChange('weight', e.target.value)}
//                   className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                 />
//                 <select
//                   value={form.unit}
//                   onChange={(e) => handleChange('unit', e.target.value)}
//                   className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                 >
//                   <option value="Ton">Ton</option>
//                   <option value="KG">KG</option>
//                 </select>
//               </div>
//               <select
//                 value={form.shippingType}
//                 onChange={(e) => handleChange('shippingType', e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               >
//                 <option value="Cold">Cold</option>
//                 <option value="Dry">Dry</option>
//               </select>
//               <input
//                 type="text"
//                 placeholder="فئة الحمولة"
//                 value={form.loadType}
//                 onChange={(e) => handleChange('loadType', e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//               />
//             </div>
//           )}

//           {step === 2 && (
//             <div className="space-y-4">
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => handleChange('bookingType', 'fast')}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${form.bookingType === 'fast' ? 'bg-yellow-400 text-black' : 'bg-white border-gray-300'} `}
//                 >
//                   <Clock className="w-4 h-4" /> حجز سريع
//                 </button>
//                 <button
//                   onClick={() => handleChange('bookingType', 'scheduled')}
//                   className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${form.bookingType === 'scheduled' ? 'bg-yellow-400 text-black' : 'bg-white border-gray-300'} `}
//                 >
//                   <CalendarDays className="w-4 h-4" /> حجز مجدول
//                 </button>
//               </div>
//               {form.bookingType === 'scheduled' && (
//                 <input
//                   type="datetime-local"
//                   value={form.scheduledTime}
//                   onChange={(e) => handleChange('scheduledTime', e.target.value)}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
//                 />
//               )}
//               {form.bookingType === 'fast' && (
//                 <div className="text-sm text-gray-600">سيتم جدولة الشحنة خلال 24 ساعة من الآن</div>
//               )}
//             </div>
//           )}

//           <div className="flex justify-between mt-6">
//             {step > 0 && (
//               <button
//                 onClick={handleBack}
//                 className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
//               >
//                 رجوع
//               </button>
//             )}
//             {step < 2 ? (
//               <button
//                 onClick={handleNext}
//                 className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300"
//               >
//                 التالي
//               </button>
//             ) : (
//               <button className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300">
//                 إرسال الطلب
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileStepperShipment;

// 2
// 'use client'

// import { useState } from 'react';
// import { CalendarDays, Clock, Thermometer, Truck } from 'lucide-react';
// import Image from 'next/image';
// import mapImage from '../public/Saudi_Arabia_map-ar.png'; // صورة مؤقتة للخريطة

// const steps = [
//   'تحديد الموقع',
//   'تفاصيل الشحنة',
//   'توقيت الحجز',
// ];

// export default function MobileOrderPage() {
//   const [step, setStep] = useState(0);
//   const [formData, setFormData] = useState({
//     pickup: '',
//     dropoff: '',
//     weight: '',
//     unit: 'Ton',
//     type: '',
//     category: '',
//     scheduleType: 'fast',
//     scheduledDate: '',
//   });

//   const handleNext = () => {
//     if (step < steps.length - 1) setStep((prev) => prev + 1);
//   };

//   const handleBack = () => {
//     if (step > 0) setStep((prev) => prev - 1);
//   };

//   return (
//     <div className="relative min-h-screen">
//       <Image
//         src={mapImage}
//         alt="Map"
//         layout="fill"
//         objectFit="cover"
//         className="z-0"
//       />
//       <div className="absolute inset-0 bg-black/40 z-10" />

//       <div className="relative z-20 p-4 flex flex-col items-center">
//         {/* Stepper */}
//         <div className="flex justify-between w-full max-w-md mb-4">
//           {steps.map((label, index) => (
//             <div
//               key={index}
//               className={`flex-1 text-center text-sm font-medium pb-2 border-b-2 transition-all duration-300 ${
//                 index === step ? 'border-yellow-400 text-yellow-400' : 'border-white text-white/70'
//               }`}
//             >
//               {label}
//             </div>
//           ))}
//         </div>

//         {/* Form Container */}
//         <div className="w-full max-w-md bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg">
//           {step === 0 && (
//             <div className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="نقطة الاستلام"
//                 value={formData.pickup}
//                 onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
//                 className="w-full p-2 rounded border border-gray-300"
//               />
//               <input
//                 type="text"
//                 placeholder="نقطة التسليم"
//                 value={formData.dropoff}
//                 onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
//                 className="w-full p-2 rounded border border-gray-300"
//               />
//             </div>
//           )}

//           {step === 1 && (
//             <div className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <input
//                   type="number"
//                   placeholder="الوزن"
//                   value={formData.weight}
//                   onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
//                   className="w-full p-2 rounded border border-gray-300"
//                 />
//                 <select
//                   value={formData.unit}
//                   onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
//                   className="w-full p-2 rounded border border-gray-300"
//                 >
//                   <option value="Ton">طن</option>
//                   <option value="KG">كيلو</option>
//                 </select>
//               </div>
//               <select
//                 value={formData.type}
//                 onChange={(e) => setFormData({ ...formData, type: e.target.value })}
//                 className="w-full p-2 rounded border border-gray-300"
//               >
//                 <option value="">نوع الشحن</option>
//                 <option value="Dry">دراي</option>
//                 <option value="Cold">كولد</option>
//               </select>
//               <input
//                 type="text"
//                 placeholder="فئة الحمولة"
//                 value={formData.category}
//                 onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//                 className="w-full p-2 rounded border border-gray-300"
//               />
//             </div>
//           )}

//           {step === 2 && (
//             <div className="space-y-4">
//               <div className="flex items-center gap-4">
//                 <button
//                   onClick={() => setFormData({ ...formData, scheduleType: 'fast' })}
//                   className={`flex-1 p-2 rounded border ${
//                     formData.scheduleType === 'fast'
//                       ? 'bg-yellow-400 text-white'
//                       : 'border-gray-300'
//                   }`}
//                 >
//                   حجز سريع
//                 </button>
//                 <button
//                   onClick={() => setFormData({ ...formData, scheduleType: 'scheduled' })}
//                   className={`flex-1 p-2 rounded border ${
//                     formData.scheduleType === 'scheduled'
//                       ? 'bg-yellow-400 text-white'
//                       : 'border-gray-300'
//                   }`}
//                 >
//                   حجز مجدول
//                 </button>
//               </div>
//               {formData.scheduleType === 'scheduled' && (
//                 <input
//                   type="datetime-local"
//                   value={formData.scheduledDate}
//                   onChange={(e) => setFormData({ ...formData, scheduledDate: e.target.value })}
//                   className="w-full p-2 rounded border border-gray-300"
//                 />
//               )}
//               {formData.scheduleType === 'fast' && (
//                 <p className="text-sm text-gray-600 text-center">سيتم الشحن خلال 24 ساعة</p>
//               )}
//             </div>
//           )}

//           {/* Navigation Buttons */}
//           <div className="flex justify-between items-center mt-6">
//             {step > 0 && (
//               <button
//                 onClick={handleBack}
//                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//               >
//                 رجوع
//               </button>
//             )}
//             {step < steps.length - 1 ? (
//               <button
//                 onClick={handleNext}
//                 className="ml-auto px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500"
//               >
//                 التالي
//               </button>
//             ) : (
//               <button
//                 onClick={() => alert('تم إرسال الطلب')}
//                 className="ml-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//               >
//                 إرسال الطلب
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// 3333
// 'use client'

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import mapImage from '../public/Saudi_Arabia_map-ar.png'; // صورة مؤقتة للخريطة

// const steps = [
//   'تحديد الموقع',
//   'تفاصيل الشحنة',
//   'توقيت الحجز',
// ];

// export default function MobileOrderPage() {
//   const [step, setStep] = useState(0);
//   const [formData, setFormData] = useState({
//     pickup: '',
//     dropoff: '',
//     weight: '',
//     unit: 'Ton',
//     type: '',
//     category: '',
//     scheduleType: 'fast',
//     scheduledDate: '',
//   });

//   const handleNext = () => {
//     if (step < steps.length - 1) setStep((prev) => prev + 1);
//   };

//   const handleBack = () => {
//     if (step > 0) setStep((prev) => prev - 1);
//   };

//   return (
//     <div className="relative min-h-screen">
//       <Image
//         src={mapImage}
//         alt="Map"
//         layout="fill"
//         objectFit="cover"
//         className="z-0"
//       />
//       <div className="absolute inset-0 bg-black/40 z-10" />

//       <div className="relative z-20 p-4 flex flex-col items-center">
//         {/* Stepper */}
//         <div className="flex justify-between w-full max-w-md mb-4">
//           {steps.map((label, index) => (
//             <div
//               key={index}
//               className={`flex-1 text-center text-xs font-bold pb-2 border-b-4 transition-all duration-300 ${
//                 index < step
//                   ? 'border-yellow-500 text-yellow-600'
//                   : index === step
//                   ? 'border-gray-200 text-gray-200'
//                   : 'border-white text-white/60'
//               }`}
//             >
//               {label}
//             </div>
//           ))}
//         </div>

//         {/* Form Container */}
//         <motion.div
//           key={step}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -30 }}
//           transition={{ duration: 0.4 }}
//           className="w-full max-w-md bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg"
//         >
//           {step === 0 && (
//             <div className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="نقطة الاستلام"
//                 value={formData.pickup}
//                 onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
//                 className="w-full p-2 rounded border border-gray-300"
//               />
//               <input
//                 type="text"
//                 placeholder="نقطة التسليم"
//                 value={formData.dropoff}
//                 onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
//                 className="w-full p-2 rounded border border-gray-300"
//               />
//             </div>
//           )}

//           {step === 1 && (
//             <div className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <input
//                   type="number"
//                   placeholder="الوزن"
//                   value={formData.weight}
//                   onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
//                   className="w-full p-2 rounded border border-gray-300"
//                 />
//                 <select
//                   value={formData.unit}
//                   onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
//                   className="w-full p-2 rounded border border-gray-300"
//                 >
//                   <option value="Ton">طن</option>
//                   <option value="KG">كيلو</option>
//                 </select>
//               </div>
//               <select
//                 value={formData.type}
//                 onChange={(e) => setFormData({ ...formData, type: e.target.value })}
//                 className="w-full p-2 rounded border border-gray-300"
//               >
//                 <option value="">نوع الشحن</option>
//                 <option value="Dry">دراي</option>
//                 <option value="Cold">كولد</option>
//               </select>
//               <input
//                 type="text"
//                 placeholder="فئة الحمولة"
//                 value={formData.category}
//                 onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//                 className="w-full p-2 rounded border border-gray-300"
//               />
//             </div>
//           )}

//           {step === 2 && (
//             <div className="space-y-4">
//               <div className="flex items-center gap-4">
//                 <button
//                   onClick={() => setFormData({ ...formData, scheduleType: 'fast' })}
//                   className={`flex-1 p-2 rounded border ${
//                     formData.scheduleType === 'fast'
//                       ? 'bg-yellow-400 text-white'
//                       : 'border-gray-300'
//                   }`}
//                 >
//                   حجز سريع
//                 </button>
//                 <button
//                   onClick={() => setFormData({ ...formData, scheduleType: 'scheduled' })}
//                   className={`flex-1 p-2 rounded border ${
//                     formData.scheduleType === 'scheduled'
//                       ? 'bg-yellow-400 text-white'
//                       : 'border-gray-300'
//                   }`}
//                 >
//                   حجز مجدول
//                 </button>
//               </div>
//               {formData.scheduleType === 'scheduled' && (
//                 <input
//                   type="datetime-local"
//                   value={formData.scheduledDate}
//                   onChange={(e) => setFormData({ ...formData, scheduledDate: e.target.value })}
//                   className="w-full p-2 rounded border border-gray-300"
//                 />
//               )}
//               {formData.scheduleType === 'fast' && (
//                 <p className="text-sm text-gray-600 text-center">سيتم الشحن خلال 24 ساعة</p>
//               )}
//             </div>
//           )}

//           {/* Navigation Buttons */}
//           <div className="flex justify-between items-center mt-6">
//             {step > 0 && (
//               <button
//                 onClick={handleBack}
//                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//               >
//                 رجوع
//               </button>
//             )}
//             {step < steps.length - 1 ? (
//               <button
//                 onClick={handleNext}
//                 className="ml-auto px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500"
//               >
//                 التالي
//               </button>
//             ) : (
//               <button
//                 onClick={() => alert('تم إرسال الطلب')}
//                 className="ml-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//               >
//                 إرسال الطلب
//               </button>
//             )}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// 44444444444444444                  تايتل

// 'use client'

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import mapImage from '../public/Saudi_Arabia_map-ar.png'; // صورة مؤقتة للخريطة

// const steps = [
//   'تحديد الموقع',
//   'تفاصيل المرسل والمستلم',
//   'تفاصيل الشحنة',
//   'توقيت الحجز',
// ];

// export default function MobileOrderPage() {
//   const [step, setStep] = useState(0);
//   const [formData, setFormData] = useState({
//     pickup: '',
//     dropoff: '',
//     senderName: '',
//     senderPhone: '',
//     senderNote: '',
//     receiverName: '',
//     receiverPhone: '',
//     receiverNote: '',
//     weight: '',
//     unit: 'Ton',
//     type: '',
//     category: '',
//     scheduleType: 'fast',
//     scheduledDate: '',
//   });

//   const handleNext = () => {
//     if (step < steps.length - 1) setStep((prev) => prev + 1);
//   };

//   const handleBack = () => {
//     if (step > 0) setStep((prev) => prev - 1);
//   };

//   return (
//     <div className="relative min-h-screen">
//       <Image
//         src={mapImage}
//         alt="Map"
//         layout="fill"
//         objectFit="cover"
//         className="z-0"
//       />
//       <div className="absolute inset-0 bg-black/40 z-10" />

//       <div className="relative z-20 p-4 flex flex-col items-center">
//         {/* Stepper */}
//         <div className="flex justify-between w-full max-w-md mb-4">
//           {steps.map((label, index) => (
//             <div
//               key={index}
//               className={`flex-1 text-center text-xs font-bold pb-2 border-b-4 transition-all duration-300 ${
//                 index < step
//                   ? 'border-green-500 text-green-600'
//                   : index === step
//                   ? 'border-yellow-400 text-yellow-500'
//                   : 'border-white text-white/60'
//               }`}
//             >
//               {label}
//             </div>
//           ))}
//         </div>

//         {/* Form Container */}
//         <motion.div
//           key={step}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -30 }}
//           transition={{ duration: 0.4 }}
//           className="w-full max-w-md bg-white/80 backdrop-blur-md p-5 rounded-xl shadow-lg"
//         >
//           {step === 0 && (
//             <div className="space-y-8 relative">
//               <div className="relative flex flex-col items-end">
//                 {/* النقطة الحمراء */}
//                 <span className="absolute right-[-14px] top-[20px] w-2 h-2 bg-red-500 rounded-full z-10" />
//                 <input
//                   type="text"
//                   placeholder="نقطة الاستلام"
//                   value={formData.pickup}
//                   onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
//                   className="w-full p-2 rounded border border-gray-300"
//                 />
//               </div>
//               <div className="relative flex flex-col items-end">
//                 {/* النقطة الخضراء */}
//                 <span className="absolute right-[-14px] top-[25px] w-2 h-2 bg-green-500 rounded-full z-10" />
//                 <input
//                   type="text"
//                   placeholder="نقطة التسليم"
//                   value={formData.dropoff}
//                   onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
//                   className="w-full p-2 rounded border border-gray-300"
//                 />
//               </div>
//               {/* الخط بين النقطتين */}
//               <div className="absolute right-[-11px] top-[22px] h-[77px] w-[2px] bg-gray-400 z-0" />
//             </div>
//           )}

//           {step === 1 && (
//             <div className="space-y-6">
//               <div>
//                 <h3 className="text-right text-sm font-bold mb-2">تفاصيل المرسل</h3>
//                 <input
//                   type="text"
//                   placeholder="اسم المرسل"
//                   value={formData.senderName}
//                   onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
//                   className="w-full p-2 rounded border border-gray-300 mb-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="رقم المرسل"
//                   value={formData.senderPhone}
//                   onChange={(e) => setFormData({ ...formData, senderPhone: e.target.value })}
//                   className="w-full p-2 rounded border border-gray-300 mb-2"
//                 />
//                 <textarea
//                   placeholder="تفاصيل إضافية"
//                   value={formData.senderNote}
//                   onChange={(e) => setFormData({ ...formData, senderNote: e.target.value })}
//                   className="w-full p-2 rounded border border-gray-300"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-right text-sm font-bold mb-2">تفاصيل المستلم</h3>
//                 <input
//                   type="text"
//                   placeholder="اسم المستلم"
//                   value={formData.receiverName}
//                   onChange={(e) => setFormData({ ...formData, receiverName: e.target.value })}
//                   className="w-full p-2 rounded border border-gray-300 mb-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="رقم المستلم"
//                   value={formData.receiverPhone}
//                   onChange={(e) => setFormData({ ...formData, receiverPhone: e.target.value })}
//                   className="w-full p-2 rounded border border-gray-300 mb-2"
//                 />
//                 <textarea
//                   placeholder="تفاصيل إضافية"
//                   value={formData.receiverNote}
//                   onChange={(e) => setFormData({ ...formData, receiverNote: e.target.value })}
//                   className="w-full p-2 rounded border border-gray-300"
//                 />
//               </div>
//             </div>
//           )}

//           {step === 2 && (
//             <div className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <input
//                   type="number"
//                   placeholder="الوزن"
//                   value={formData.weight}
//                   onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
//                   className="w-full p-2 rounded border border-gray-300"
//                 />
//                 <select
//                   value={formData.unit}
//                   onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
//                   className="w-full p-2 rounded border border-gray-300"
//                 >
//                   <option value="Ton">طن</option>
//                   <option value="KG">كيلو</option>
//                 </select>
//               </div>
//               <select
//                 value={formData.type}
//                 onChange={(e) => setFormData({ ...formData, type: e.target.value })}
//                 className="w-full p-2 rounded border border-gray-300"
//               >
//                 <option value="">نوع الشحن</option>
//                 <option value="Dry">دراي</option>
//                 <option value="Cold">كولد</option>
//               </select>
//               <input
//                 type="text"
//                 placeholder="فئة الحمولة"
//                 value={formData.category}
//                 onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//                 className="w-full p-2 rounded border border-gray-300"
//               />
//             </div>
//           )}

//           {step === 3 && (
//             <div className="space-y-4">
//               <div className="flex items-center gap-4">
//                 <button
//                   onClick={() => setFormData({ ...formData, scheduleType: 'fast' })}
//                   className={`flex-1 p-2 rounded border ${
//                     formData.scheduleType === 'fast'
//                       ? 'bg-yellow-400 text-white'
//                       : 'border-gray-300'
//                   }`}
//                 >
//                   حجز سريع
//                 </button>
//                 <button
//                   onClick={() => setFormData({ ...formData, scheduleType: 'scheduled' })}
//                   className={`flex-1 p-2 rounded border ${
//                     formData.scheduleType === 'scheduled'
//                       ? 'bg-yellow-400 text-white'
//                       : 'border-gray-300'
//                   }`}
//                 >
//                   حجز مجدول
//                 </button>
//               </div>
//               {formData.scheduleType === 'scheduled' && (
//                 <input
//                   type="datetime-local"
//                   value={formData.scheduledDate}
//                   onChange={(e) => setFormData({ ...formData, scheduledDate: e.target.value })}
//                   className="w-full p-2 rounded border border-gray-300"
//                 />
//               )}
//               {formData.scheduleType === 'fast' && (
//                 <p className="text-sm text-gray-600 text-center">سيتم الشحن خلال 24 ساعة</p>
//               )}
//             </div>
//           )}

//           {/* Navigation Buttons */}
//           <div className="flex justify-between items-center mt-6">
//             {step > 0 && (
//               <button
//                 onClick={handleBack}
//                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//               >
//                 رجوع
//               </button>
//             )}
//             {step < steps.length - 1 ? (
//               <button
//                 onClick={handleNext}
//                 className="ml-auto px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500"
//               >
//                 التالي
//               </button>
//             ) : (
//               <button
//                 onClick={() => alert('تم إرسال الطلب')}
//                 className="ml-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//               >
//                 إرسال الطلب
//               </button>
//             )}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// // دوايررررررررررررررررررررررررررررررررررررر
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import mapImage from "../public/Saudi_Arabia_map-ar.png";

const steps = [
  "تحديد الموقع",
  "تفاصيل المرسل والمستلم",
  "تفاصيل الشحنة",
  "توقيت الحجز",
];

export default function MobileOrderPage() {
  const [step, setStep] = useState(0);
  const [showMapOnly, setShowMapOnly] = useState(false);

  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    senderName: "",
    senderPhone: "",
    senderNote: "",
    receiverName: "",
    receiverPhone: "",
    receiverNote: "",
    weight: "",
    unit: "Ton",
    type: "",
    category: "",
    scheduleType: "fast",
    scheduledDate: "",
  });

  const handleNext = () => {
    if (step < steps.length - 1) setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  return (
    <div className="relative min-h-screen">
      <Image
        src={mapImage}
        alt="Map"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-10" />

      <button
        onClick={() => setShowMapOnly(!showMapOnly)}
        className="absolute top-4 left-4 z-30 bg-white/80 rounded-full p-2 shadow-md text-xl"
      >
        🗺
      </button>

      {!showMapOnly && (
        <div className="relative z-20 p-4 flex flex-col items-center">
          {/* Stepper Circles */}
          <div className="flex justify-center gap-6 mb-6 relative">
            {steps.map((_, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {index < steps.length - 1 && (
                  <div className="w-8 h-1 bg-gray-300 absolute top-4 right-[-30px] z-0" />
                )}
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold transition-all duration-300 relative
                  ${
                    index < step
                      ? "bg-green-500"
                      : index === step
                      ? "bg-yellow-400"
                      : "bg-gray-300"
                  }`}
                >
                  {index < step ? "✓" : index + 1}
                </div>
              </div>
            ))}
          </div>

          {/* Form Container */}
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-md bg-white/60 backdrop-blur-md p-5 rounded-xl shadow-lg"
          >
            <h2 className="text-lg font-bold text-center mb-4">{steps[step]}</h2>

            {/* Step Content */}
            {step === 0 && (
              <div className="space-y-8 relative border-b-2 border-gray-300 pb-8">
                <div className="relative flex flex-col items-end">
                  <span className="absolute right-[-14px] top-[20px] w-2 h-2 bg-red-500 rounded-full z-10" />
                  <input
                    type="text"
                    placeholder="نقطة الاستلام"
                    value={formData.pickup}
                    onChange={(e) =>
                      setFormData({ ...formData, pickup: e.target.value })
                    }
                    className="w-full p-2 rounded border border-gray-300"
                  />
                </div>
                <div className="relative flex flex-col items-end">
                  <span className="absolute right-[-14px] top-[25px] w-2 h-2 bg-green-500 rounded-full z-10" />
                  <input
                    type="text"
                    placeholder="نقطة التسليم"
                    value={formData.dropoff}
                    onChange={(e) =>
                      setFormData({ ...formData, dropoff: e.target.value })
                    }
                    className="w-full p-2 rounded border border-gray-300"
                  />
                </div>
                <div className="absolute right-[-11px] top-[22px] h-[77px] w-[2px] bg-gray-400 z-0" />
              </div>
            )}

            {step === 1 && (
              <div className="space-y-6">
                {/* Sender Info */}
                <div>
                  <h3 className="text-right text-sm font-bold mb-2">تفاصيل المرسل</h3>
                  <input
                    type="text"
                    placeholder="اسم المرسل"
                    value={formData.senderName}
                    onChange={(e) =>
                      setFormData({ ...formData, senderName: e.target.value })
                    }
                    className="w-full p-2 rounded border border-gray-300 mb-2"
                  />
                  <input
                    type="text"
                    placeholder="رقم المرسل"
                    value={formData.senderPhone}
                    onChange={(e) =>
                      setFormData({ ...formData, senderPhone: e.target.value })
                    }
                    className="w-full p-2 rounded border border-gray-300 mb-2"
                  />
                  <textarea
                    placeholder="تفاصيل إضافية"
                    value={formData.senderNote}
                    onChange={(e) =>
                      setFormData({ ...formData, senderNote: e.target.value })
                    }
                    className="w-full p-2 rounded border border-gray-300 resize-none max-h-16 overflow-y-auto"
                  />
                </div>

                {/* Receiver Info */}
                <div>
                  <h3 className="text-right text-sm font-bold mb-2">تفاصيل المستلم</h3>
                  <input
                    type="text"
                    placeholder="اسم المستلم"
                    value={formData.receiverName}
                    onChange={(e) =>
                      setFormData({ ...formData, receiverName: e.target.value })
                    }
                    className="w-full p-2 rounded border border-gray-300 mb-2"
                  />
                  <input
                    type="text"
                    placeholder="رقم المستلم"
                    value={formData.receiverPhone}
                    onChange={(e) =>
                      setFormData({ ...formData, receiverPhone: e.target.value })
                    }
                    className="w-full p-2 rounded border border-gray-300 mb-2"
                  />
                  <textarea
                    placeholder="تفاصيل إضافية"
                    value={formData.receiverNote}
                    onChange={(e) =>
                      setFormData({ ...formData, receiverNote: e.target.value })
                    }
                    className="w-full p-2 rounded border border-gray-300 resize-none max-h-16 overflow-y-auto"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    placeholder="الوزن"
                    value={formData.weight}
                    onChange={(e) =>
                      setFormData({ ...formData, weight: e.target.value })
                    }
                    className="w-full p-2 rounded border border-gray-300"
                  />
                  <select
                    value={formData.unit}
                    onChange={(e) =>
                      setFormData({ ...formData, unit: e.target.value })
                    }
                    className="w-full p-2 rounded border border-gray-300"
                  >
                    <option value="Ton">طن</option>
                    <option value="KG">كيلو</option>
                  </select>
                </div>
                <select
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  className="w-full p-2 rounded border border-gray-300"
                >
                  <option value="">نوع الشحن</option>
                  <option value="Dry">دراي</option>
                  <option value="Cold">كولد</option>
                </select>
                <input
                  type="text"
                  placeholder="فئة الحمولة"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full p-2 rounded border border-gray-300"
                />
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() =>
                      setFormData({ ...formData, scheduleType: "fast" })
                    }
                    className={`flex-1 p-2 rounded border ${
                      formData.scheduleType === "fast"
                        ? "bg-yellow-400 text-white"
                        : "border-gray-300"
                    }`}
                  >
                    حجز سريع
                  </button>
                  <button
                    onClick={() =>
                      setFormData({ ...formData, scheduleType: "scheduled" })
                    }
                    className={`flex-1 p-2 rounded border ${
                      formData.scheduleType === "scheduled"
                        ? "bg-yellow-400 text-white"
                        : "border-gray-300"
                    }`}
                  >
                    حجز مجدول
                  </button>
                </div>
                {formData.scheduleType === "scheduled" && (
                  <input
                    type="datetime-local"
                    value={formData.scheduledDate}
                    onChange={(e) =>
                      setFormData({ ...formData, scheduledDate: e.target.value })
                    }
                    className="w-full p-2 rounded border border-gray-300"
                  />
                )}
                {formData.scheduleType === "fast" && (
                  <p className="text-sm text-gray-600 text-center">
                    سيتم الشحن خلال 24 ساعة
                  </p>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-6">
              {step > 0 && (
                <button
                  onClick={handleBack}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  رجوع
                </button>
              )}
              {step < steps.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="ml-auto px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                >
                  التالي
                </button>
              ) : (
                <button
                  onClick={() => alert("تم إرسال الطلب")}
                  className="ml-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  إرسال الطلب
                </button>
              )}
            </div>

            {/* ✅ Slim Progress Bar in bottom of form box */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent">
              <motion.div
                className="h-full bg-yellow-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(step / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
