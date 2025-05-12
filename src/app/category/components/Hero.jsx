import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <Image
        src="/Rectangle 66.svg" // ضع الصورة الأصلية هنا بنفس الاسم
        alt="شاحنات ثقيل"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* Overlay شفاف للتغميق */}
      {/* <div className="absolute inset-0 bg-black/40 z-10"></div> */}

      {/* النص فوق الصورة */}
      <div className="absolute inset-0 z-20 flex items-center justify-end px-8 md:px-20">
        <div className="text-white text-right max-w-2xl space-y-3 bg-black/50 p-6 rounded-lg border-r-4 border-yellow-400">
          <h1 className="text-2xl md:text-4xl font-bold leading-snug">
            ثقيل أحد روّاد الشحن داخل المدن المعتمد
          </h1>
          <p className="text-lg md:text-2xl">
            نقل خدمات التوصيل بكل احترافية
          </p>
        </div>
      </div>
    </section>
  );
}
