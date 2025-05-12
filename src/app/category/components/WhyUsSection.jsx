import Image from "next/image";
import { FaShieldAlt, FaPhoneAlt, FaListAlt, FaClock } from "react-icons/fa";

export default function WhyUsSection() {
  return (
    <section
      className="bg-black/80 text-white py-20 px-6 md:px-20  relative"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 ">
        {/* Right: النص والمحتوى */}
        <div className="md:w-1/2 text-right space-y-6">
          <div className="space-y-4 ">
            <h2 className="text-3xl md:text-4xl font-bold">لماذا نحن؟</h2>
            <p className="text-gray-300 leading-relaxed">
              نقدم خدمات احترافية ومتكاملة في مجال النقل داخل المدن، من خلال
              فريق عمل متخصص وأسطول شاحنات مجهز.
            </p>
          </div>

          {/* Cards of features */}
          <div className="space-y-4">
            <div className="flex items-center  border-r-4 border-yellow-400 pr-4 py-3 bg-gray-900 rounded-md">
              <FaClock className="text-yellow-400 text-xl mx-2" />

              <span className="text-lg">سهولة في الحجز والمتابعة</span>
            </div>
            <div className="flex items-center  border-r-4 border-yellow-400 pr-4 py-3 bg-gray-900 rounded-md">
              <FaShieldAlt className="text-yellow-400 text-xl  mx-2" />

              <span className="text-lg">أمان وتغطية تأمينية</span>
            </div>
            <div className="flex items-center  border-r-4 border-yellow-400 pr-4 py-3 bg-gray-900 rounded-md">
              <FaListAlt className="text-yellow-400 text-xl  mx-2" />

              <span className="text-lg">خدمات متنوعة وشاملة</span>
            </div>
            <div className="flex items-center  border-r-4 border-yellow-400 pr-4 py-3 bg-gray-900 rounded-md">
              <FaPhoneAlt className="text-yellow-400 text-xl  mx-2" />

              <span className="text-lg">فريق دعم متخصص</span>
            </div>
          </div>
        </div>


        {/* Left: الصورة */}
        <div className="md:w-1/2 flex  md:justify-end ">
          <div className="w-[500px] h-[500px] md:w-[500px] md:h-[500px] md:rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg   md:absolute -left-10 -bottom-6">
            <Image
              src="/Rectangle 19.svg" // استبدلها بالصورة الفعلية
              alt="شاحنة"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
