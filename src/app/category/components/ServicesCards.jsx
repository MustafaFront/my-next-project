import { FaShieldAlt, FaHeadset, FaMapMarkedAlt } from "react-icons/fa";

export default function ServicesCards() {
  return (
    <section className="bg-gray-1   00 py-16 px-6 md:px-20" dir="rtl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        
        {/* كارت 1: تأمين على البضائع */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="flex justify-center items-center mb-4 text-yellow-500 text-4xl">
            <FaShieldAlt />
          </div>
          <h3 className="text-xl font-semibold mb-2">تأمين على البضائع</h3>
          <p className="text-gray-600 text-sm">
            نوفر لك تأمين شامل على الشحنات لضمان سلامتها حتى الوصول.
          </p>
        </div>

        {/* كارت 2: خدمة عملاء 24 ساعة */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="flex justify-center items-center mb-4 text-yellow-500 text-4xl">
            <FaHeadset />
          </div>
          <h3 className="text-xl font-semibold mb-2">خدمة عملاء 24 ساعة</h3>
          <p className="text-gray-600 text-sm">
            فريق دعم جاهز للرد على استفساراتك ومساعدتك في أي وقت.
          </p>
        </div>

        {/* كارت 3: خدمة تتبع الشاحنات */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="flex justify-center items-center mb-4 text-yellow-500 text-4xl">
            <FaMapMarkedAlt />
          </div>
          <h3 className="text-xl font-semibold mb-2">خدمة تتبع الشاحنات</h3>
          <p className="text-gray-600 text-sm">
            تتبع شحنتك لحظيًا واعرف مكانها بدقة واطمئن على وصولها.
          </p>
        </div>

      </div>
    </section>
  );
}
