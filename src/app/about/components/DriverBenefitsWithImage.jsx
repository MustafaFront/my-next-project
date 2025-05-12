// components/DriverBenefitsWithImage.jsx
import { Smile, Clock3, Wallet, Truck } from "lucide-react";

const benefits = [
  {
    title: "زيادة الدخل",
    icon: <Wallet className="h-6 w-6 text-yellow-500" />,
    description: "فرص عديدة لزيادة دخلك الشهري بسهولة.",
  },
  {
    title: "مرونة في الوقت",
    icon: <Clock3 className="h-6 w-6 text-yellow-500" />,
    description: "اختر الأوقات المناسبة لك للعمل.",
  },
  {
    title: "تجربة استخدام سهلة",
    icon: <Smile className="h-6 w-6 text-yellow-500" />,
    description: "واجهة بسيطة وسريعة الاستخدام.",
  },
  {
    title: "دعم فني دائم",
    icon: <Truck className="h-6 w-6 text-yellow-500" />,
    description: "دعم على مدار الساعة لأي مشكلة تواجهك.",
  },
];

export default function DriverBenefitsWithImage() {
  return (
    <section className="bg-white py-20 px-4 shadow-lg">
         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            مميزات يحصل عليها السائق في <span className="text-yellow-500">ثقيل</span>
          </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        
        <div>
         

          <div className="space-y-6" dir="rtl">
            {benefits.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="bg-yellow-100 p-3 rounded-full">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/how_work.svg"
            alt="Driver illustration"
            className="max-w-md    rounded-xl "
          />
        </div>
      </div>
    </section>
  );
}
