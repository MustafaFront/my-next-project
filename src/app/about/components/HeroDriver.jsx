export default function HeroDriver() {
  return (
    <section className="text-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2 space-y-6 text-center md:text-right">
          <h2 className="text-3xl md:text-4xl font-bold">
            انضم إلينا كسائق في <span className="text-yellow-400">THKEL</span>
          </h2>
          <p className="text-gray-300 leading-loose">
            من خلال تطبيق ثقيل، يمكنك أن تصبح جزءًا من نظام نقل ذكي يربطك
            بالأسواق والشركات في رحلات مدفوعة الأجر.
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

        <div className="md:w-1/2 flex justify-center relative md:static">
          <img
            src="/image3.svg"
            alt="THKEL App"
            className="w-64 md:w-64 drop-shadow-xl swing-animation
               md:absolute md:bottom-[-70%] md:left-3/4 md:transform md:-translate-x-1/2"
          />
        </div>
      </div>
    </section>
  );
}
