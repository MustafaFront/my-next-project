import Image from "next/image";

export default function JoinUsSection() {
  return (
    <section className="bg-yellow-400 py-16 px-6 md:px-10" dir="rtl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/2">
          <Image
            src="/Screenshot_2025-02-08_081549-removebg-preview 1.svg" 
            alt="سائق شاحنة"
            width={400}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="md:w-1/2 text-right">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            انضم إلينا ك سائق في THKEL
          </h2>
          <p className="text-black text-lg leading-relaxed mb-6">
            حمل التطبيق الان وابدأ في تحقيق دخل اضافي مع مرونة تامة في العمل .
            سجل ك سائق وانطلق في رحلتك معانا اليوم{" "}
          </p>
            <div
            className="flex justify-center md:justify-start gap-4 mt-4"
            dir="rtl"
          >
            <a href="#">
              <img src="/download1.svg" alt="App Store" className="h-12" />
            </a>
            <a href="#">
              <img src="/download2.svg" alt="Google Play" className="h-12" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
