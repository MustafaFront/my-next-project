import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

const HowItWorksFinal = () => {
  const steps = [
    {
      id: 1,
      title: "تقديم الطلب",
      description:
        "يقوم العميل بتعبئة الحالات عبر النموذج المخصص، مع تحديد تفاصيل الطلب بدقة مما يبدأ العملية.",
      icon: "📝",
    },
    {
      id: 2,
      title: "تخطيط المسار",
      description:
        "يتم استخدام خوارزميات متخصصة لتحديد المسار المثالي مع مراعاة عوامل مثل المسافة والوقت وأولويات العميل.",
      icon: "🗺️",
    },
    {
      id: 3,
      title: "التنفيذ",
      description:
        "يتم توجيه الطلب للمندوبين المناسبين وإتمامه، مع ضمان التعامل الأمثل والسرعة والدقة في التنفيذ.",
      icon: "🚚",
    },
    {
      id: 4,
      title: "التتبع والمتابعة",
      description:
        "يقوم النظام بمراقبة العملية في الوقت الفعلي، وتقديم تحديثات للعميل، وحل أي مشاكل تطرأ.",
      icon: "📊",
    },
    {
      id: 5,
      title: "التسليم والتأكيد",
      description:
        "عند الوصول يتم مراجعة الطلب والتحقق من تفاصيله. والتحقق من تأكيد التسليم النهائي من العميل.",
      icon: "✅",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* الجزء الأيسر - الصورة */}
          <div className="md:w-1/2 flex items-center">
            <div className="relative w-full h-[500px] lg:h-[600px]">
              <Image
                src="/Rectangle 19.svg"
                alt="عملية العمل"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* الجزء الأيمن - العنوان والخطوات */}
          <div className="md:w-1/2">
            {/* العنوان الرئيسي */}
            <div className="mb-8 lg:mb-2 text-center md:text-right">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                <span className="text-yellow-400">كيف</span> نعمل
              </h2>
              <p className="text-lg md:text-2xl  font-semibold text-gray-600 mt-2 lg:mt-4">
                 اكتشف عمليتنا المبسطة التي تضمن <br></br>الكفاءة والتميز في كل
                خطوة على الطريق
              </p>
            </div>

            {/* الخطوات */}
            <VerticalTimeline
              layout="1-column"
              className="vertical-timeline-custom-line"
              lineColor="#FDC700"
            >
              {steps.map((step) => (
                <VerticalTimelineElement
                  key={step.id}
                  className="vertical-timeline-element"
                  contentStyle={{
                    background: "white",
                    boxShadow: "0 4px 15px rgba(245, 158, 11, 0.15)",
                    borderRadius: "12px",
                    borderRight: "4px solid #FDC700",
                    padding: "10px",
                  }}
                  contentArrowStyle={{ display: "none" }}
                  iconStyle={{
                    background: "#FDC700",
                    color: "#fff",
                    boxShadow: "0 0 0 4px #fff, 0 3px 0 rgba(0,0,0,0.1)",
                    fontSize: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  icon={<span>{step.icon}</span>}
                  position={step.id % 2 === 0 ? "right" : "left"}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-2xl text-yellow-400 mt-1">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksFinal;
