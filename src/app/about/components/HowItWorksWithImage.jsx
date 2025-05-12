// components/HowItWorksWithImage.jsx
import { UserPlus, ShieldCheck, Truck } from "lucide-react";

const steps = [
  {
    icon: <UserPlus className="h-6 w-6 text-white" />,
    title: "سجل كمستخدم في ثقيل",
    description: "ابدأ بالتسجيل واملأ بياناتك وقدم مستنداتك.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-white" />,
    title: "انتظر تفعيل حسابك",
    description: "فريق ثقيل يتحقق من معلوماتك ويقوم بتفعيل الحساب.",
  },
  {
    icon: <Truck className="h-6 w-6 text-white" />,
    title: "ابدأ في استلام الطلبات",
    description: "بمجرد تفعيلك، تبدأ في استلام الطلبات وتنفيذ الرحلات.",
  },
];

export default function HowItWorksWithImage() {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            كيفية العمل على نظام <span className="text-yellow-500">ثقيل</span>
          </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/how_work.svg"
            alt="How it works illustration"
            className="max-w-md w-full rounded-xl "
          />
        </div>

          {/* Steps */}
        <div className="space-y-10">
          

          {steps.map((step, index) => (
            <>
            <div key={index} className="flex  items-start gap-4" dir="rtl">
              <div className="bg-yellow-500 p-3 rounded-full shadow-md">
                {step.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
              
            </div>
            
            </>
          ))}
            <div className="pt-8" dir="rtl">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 ">
              انضم لنا الآن
            </button>
          </div>
         
        </div>
        
      </div>
    </section>
  );
}
