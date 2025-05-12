import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* المحتوى النصي */}
        <div className="md:w-1/2 text-right space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            سائقي شاحنات متخصصين ومحترفين
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            نحن في ثقيل نؤمن أن السائق هو قلب الخدمة، ولذلك نحرص على توظيف سائقين
            محترفين ومدربين بدقة لضمان سلامة الشحنات وسرعة التوصيل.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            جميع سائقي ثقيل مرخصين ومؤهلين للتعامل مع مختلف أنواع الشحنات، لضمان
            أعلى مستويات الجودة والثقة.
          </p>
           <p className="text-gray-600 text-base leading-relaxed">
            جميع سائقي ثقيل مرخصين ومؤهلين للتعامل مع مختلف أنواع الشحنات، لضمان
            أعلى مستويات الجودة والثقة.
          </p>
           <p className="text-gray-600 text-base leading-relaxed">
            جميع سائقي ثقيل مرخصين ومؤهلين للتعامل مع مختلف أنواع الشحنات، لضمان
            أعلى مستويات الجودة والثقة.
          </p>
           <p className="text-gray-600 text-base leading-relaxed">
            جميع سائقي ثقيل مرخصين ومؤهلين للتعامل مع مختلف أنواع الشحنات، لضمان
            أعلى مستويات الجودة والثقة.
          </p>
           <p className="text-gray-600 text-base leading-relaxed">
            جميع سائقي ثقيل مرخصين ومؤهلين للتعامل مع مختلف أنواع الشحنات، لضمان
            أعلى مستويات الجودة والثقة.
          </p>
        </div>

        {/* خط فاصل عمودي */}
        <div className="hidden md:block h-96 w-[3px] bg-yellow-400" />

        {/* صورة */}
        <div className="md:w-1/2  ">
          <Image
            src="/Rectangle 19.svg" // ضع الصورة داخل public باسم drivers.jpg
            alt="سائقي شاحنات ثقيل"
            width={500}
            height={400}
            className="rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
