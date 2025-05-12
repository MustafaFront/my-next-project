import { useState } from 'react';
import MapComponent from './MapComponent';

const AddAddressModal = ({ isOpen, closeModal }) => {
  const [step, setStep] = useState(1); // 1: خطوة اختيار الموقع, 2: البيانات

  const handleNext = () => {
    setStep(2); // الانتقال لمرحلة تعبئة البيانات
  };

  const handleSubmit = () => {
    // هنا هنعمل إرسال البيانات للـ API أو تخزينها
    console.log("تم إضافة العنوان بنجاح!");
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={closeModal}>إغلاق</button>
        
        {step === 1 && (
          <>
            <h2>اختار الموقع من الخريطة</h2>
            <MapComponent />
            <button onClick={handleNext}>التالي</button>
          </>
        )}

        {step === 2 && (
          <>
            <h2>أدخل بيانات العنوان</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="اسم العنوان" required />
              <input type="text" placeholder="رقم الجوال" required />
              <input type="text" placeholder="العنوان" required />
              <select>
                <option value="home">منزل</option>
                <option value="work">عمل</option>
              </select>
              <button type="submit">حفظ</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AddAddressModal;
