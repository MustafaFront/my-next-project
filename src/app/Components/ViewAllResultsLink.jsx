// ViewAllResultsLink.jsx
import { Play } from "lucide-react"; // أيقونة المثلث تشبه أيقونة التشغيل

const ViewAllResultsLink = ({ count, onClick }) => {
  // لا تظهر الرابط إذا لم يكن هناك نتائج
  if (!count || count === 0) {
    return null;
  }

  return (
    // يمكنك استخدام <button> أو <a> حسب الحاجة
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors font-semibold group"
    >
      {/* في الصورة النص بالانجليزي، سأكتبه بالعربي للتوافق مع باقي الواجهة */}
      <span>شاهد كل النتائج ({count})</span>
      <Play
        size={14}
        className="fill-current transition-transform group-hover:translate-x-1"
      />
    </button>
  );
};

export default ViewAllResultsLink;
