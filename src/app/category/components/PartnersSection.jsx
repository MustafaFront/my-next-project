import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const PartnersSection = () => {
  const settings = {
    // dots: true, // إضافة الباجينيشن
    infinite: true, // تمكين التكرار
    speed: 500, // سرعة التبديل بين الصور
    autoplay: true, // تمكين التشغيل التلقائي
    autoplaySpeed: 1000, // تحديد الوقت بين التبديلات
    slidesToShow: 5, // عدد الصور المعروضة في نفس الوقت
    slidesToScroll: 1, // التبديل بصورة واحدة في المرة
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5, // عرض 5 صور في الشاشات الكبيرة
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4, // عرض 4 صور في الشاشات الكبيرة
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // عرض 3 صور في الشاشات المتوسطة
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2, // عرض 2 صور في الشاشات الصغيرة
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1, // عرض صورة واحدة في الجوال
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-center text-3xl mb-8">شركاؤنا</h2>
      <Slider {...settings}>
        <div>
          <img src="/image.svg" alt="شركة 1" className="mx-auto" />
        </div>
        <div>
          <img src="/image-1.svg" alt="شركة 2" className="mx-auto" />
        </div>
        <div>
          <img src="/image-2.svg" alt="شركة 3" className="mx-auto" />
        </div>
        <div>
          <img src="/image.svg" alt="شركة 4" className="mx-auto" />
        </div>
        <div>
          <img src="/image-1.svg" alt="شركة 5" className="mx-auto" />
        </div>
        <div>
          <img src="/image-2.svg" alt="شركة 6" className="mx-auto" />
        </div>
        <div>
          <img src="/image.svg" alt="شركة 7" className="mx-auto" />
        </div>
        <div>
          <img src="/image-1.svg" alt="شركة 8" className="mx-auto" />
        </div>
        <div>
          <img src="/image-2.svg" alt="شركة 9" className="mx-auto" />
        </div>
      </Slider>
    </div>
  );
};

export default PartnersSection;
