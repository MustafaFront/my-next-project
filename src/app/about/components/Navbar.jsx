// export default function Navbar() {
//   return (
//     <>
//       <div className="bg-cover bg-center py-6 px-4 flex justify-center" >
//         <nav className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center justify-between w-full max-w-6xl" dir="rtl">
//           {/* الشعار */}
//           <div className="flex items-center">
//             <img src="/logo2.svg" alt="THKEL Logo" className="h-10 w-auto" />
//           </div>

//           {/* الروابط */}
//           <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-800">
//             <li><a href="#" className="hover:text-yellow-500">الصفحة الرئيسية</a></li>
//             <li><a href="#" className="hover:text-yellow-500">عن المنصة</a></li>
//             <li><a href="#" className="hover:text-yellow-500">تتبع شحنتك</a></li>
//             <li><a href="#" className="hover:text-yellow-500">اطلب الخدمة</a></li>
//             <li><a href="#" className="hover:text-yellow-500">انضم لنا</a></li>
//           </ul>

//           {/* زر تسجيل الدخول */}
//           <div>
//             <button className="bg-yellow-400 hover:bg-yellow-500 text-sm font-bold py-2 px-4 rounded-full">
//               تسجيل الدخول
//             </button>
//           </div>
//         </nav>
//       </div>
    
  
//     </>
//   );
// }


import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa'; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="bg-cover bg-center py-6 px-4 flex justify-center">
        <nav className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center justify-between w-full max-w-6xl" dir="rtl">
          <div className="flex items-center">
            <img src="/logo2.svg" alt="THKEL Logo" className="h-10 w-auto" />
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-yellow-500 focus:outline-none"
            >
              {menuOpen ? (
                <FaTimes className="w-8 h-8" />
              ) : (
                <FaBars className="w-8 h-8" />
              )}
            </button>
          </div>

          <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-800">
            <li><a href="#" className="hover:text-yellow-500">الصفحة الرئيسية</a></li>
            <li><a href="#" className="hover:text-yellow-500">عن المنصة</a></li>
            <li><a href="#" className="hover:text-yellow-500">تتبع شحنتك</a></li>
            <li><a href="#" className="hover:text-yellow-500">اطلب الخدمة</a></li>
            <li><a href="#" className="hover:text-yellow-500">انضم لنا</a></li>
          </ul>

          <div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-sm font-bold py-2 px-4 rounded-full">
              تسجيل الدخول
            </button>
          </div>
        </nav>
      </div>

      {menuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg w-full absolute top-24 left-0 z-10"
          initial={{ opacity: 0, scale: 0.8 }}  
          animate={{ opacity: 1, scale: 1 }}      
          exit={{ opacity: 0, scale: 0.8 }}  
          transition={{ duration: 0.3 }} 
        >
          <ul className="flex flex-col items-center gap-4 py-4">
            <li><a href="#" className="text-gray-800 hover:text-yellow-500">الصفحة الرئيسية</a></li>
            <li><a href="#" className="text-gray-800 hover:text-yellow-500">عن المنصة</a></li>
            <li><a href="#" className="text-gray-800 hover:text-yellow-500">تتبع شحنتك</a></li>
            <li><a href="#" className="text-gray-800 hover:text-yellow-500">اطلب الخدمة</a></li>
            <li><a href="#" className="text-gray-800 hover:text-yellow-500">انضم لنا</a></li>
          </ul>
        </motion.div>
      )}
    </>
  );
}
