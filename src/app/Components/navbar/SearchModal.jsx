"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  X,
  Heart,
  ShoppingCart,
  Star,
  Frown,
  Loader,
  ChevronDown,
  Check,
  Filter,
  RotateCcw,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as Slider from "@radix-ui/react-slider";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";

import {
  FULL_SEARCH_RESULTS,
  BRAND_FILTERS,
  CATEGORY_FILTERS,
} from "../../../data/search-data.js";
import ViewAllResultsLink from "../ViewAllResultsLink.jsx";

const SearchModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [filteredResults, setFilteredResults] = useState(
    FULL_SEARCH_RESULTS.products.items
  );

  const [priceRange, setPriceRange] = useState([0, 7000]);
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const [selectedBrands, setSelectedBrands] = useState(new Set());
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    setLoading(true);
    const handler = setTimeout(() => {
      let results = [...FULL_SEARCH_RESULTS.products.items];

      if (searchTerm.trim() !== "") {
        results = results.filter((p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      results = results.filter(
        (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
      );
      if (selectedCategories.size > 0) {
        results = results.filter((p) => selectedCategories.has(p.category));
      }
      if (selectedBrands.size > 0) {
        results = results.filter((p) => selectedBrands.has(p.brand));
      }

      if (sortBy === "price_asc") results.sort((a, b) => a.price - b.price);
      else if (sortBy === "price_desc")
        results.sort((a, b) => b.price - a.price);
      else if (sortBy === "rating_desc")
        results.sort((a, b) => b.rating - a.rating);

      setFilteredResults(results);
      setLoading(false);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm, priceRange, selectedCategories, selectedBrands, sortBy]);

  const resetFilters = () => {
    setPriceRange([0, 7000]);
    setSelectedCategories(new Set());
    setSelectedBrands(new Set());
    setSortBy("newest");
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 30, stiffness: 200 },
    },
    exit: { opacity: 0, y: 50, transition: { duration: 0.2 } },
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };
  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-start justify-center p-4 pt-[5vh]"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-7xl bg-slate-800 border border-slate-700 text-slate-100 rounded-2xl shadow-2xl h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 p-4 border-b border-slate-700 flex-shrink-0">
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-700"
              >
                <X />
              </button>
              <div className="relative flex-grow">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="ابحث عن منتج، ماركة..."
                  className="w-full h-12 pr-14 pl-4 text-md bg-slate-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-500"
                  autoFocus
                />
                <div className="absolute top-1/2 right-4 -translate-y-1/2">
                  {loading ? (
                    <Loader
                      className="animate-spin text-orange-500"
                      size={20}
                    />
                  ) : (
                    <Search className="text-slate-400" size={20} />
                  )}
                </div>
              </div>
            </div>

            <div className="flex-grow flex flex-col text-right overflow-hidden p-6 gap-6">
              <div className="flex-shrink-0">
                <SuggestionChips onSelect={setSearchTerm} />
                <div className="flex justify-between items-center mt-4 border-b border-slate-700 pb-4">
                  <h2 className="text-xl font-bold text-slate-200">
                    النتائج{" "}
                    <span className="text-sm text-slate-400 mr-2">
                      ({filteredResults.length} منتج)
                    </span>
                  </h2>
                  <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
                </div>
              </div>

              <div className="flex-grow grid grid-cols-1 md:grid-cols-4 gap-8 overflow-hidden">
                <div className="hidden md:block md:col-span-1 overflow-y-auto pr-2">
                  <FilterAccordion
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    selectedCategories={selectedCategories}
                    setSelectedCategories={setSelectedCategories}
                    selectedBrands={selectedBrands}
                    setSelectedBrands={setSelectedBrands}
                    resetFilters={resetFilters}
                  />
                </div>
                <div className="md:col-span-3 overflow-y-auto">
                  {loading ? (
                    <div className="flex justify-center items-center h-full">
                      <Loader
                        className="animate-spin text-orange-500"
                        size={48}
                      />
                    </div>
                  ) : filteredResults.length > 0 ? (
                    <>
                      <div className="flex justify-end mb-4 pr-2">
                        <ViewAllResultsLink
                          count={filteredResults.length}
                          onClick={() =>
                            alert(
                              `الانتقال لصفحة النتائج الكاملة لـ ${filteredResults.length} منتج!`
                            )
                          }
                        />
                      </div>
                      <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                      >
                        {filteredResults.map((item) => (
                          <motion.div key={item.id} variants={staggerItem}>
                            <ProductCard product={item} />
                          </motion.div>
                        ))}
                      </motion.div>
                    </>
                  ) : (
                    <EmptyState searchTerm={searchTerm} />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SuggestionChips = ({ onSelect }) => (
  <div className="flex items-center gap-3 text-sm">
    <span className="text-slate-400">هل تبحث عن:</span>
    <div className="flex gap-2">
      {["مواد البناء", "الكهرباء", "الخشب ومشتقاته"].map((s) => (
        <button
          key={s}
          onClick={() => onSelect(s)}
          className="flex items-center gap-1.5 bg-فقي-700/50 text-slate-300 px-3 py-1 rounded-full hover:bg-orange-500/30 hover:text-orange-300 transition-colors"
        >
          <span>{s}</span>
          <Search size={14} />
        </button>
      ))}
    </div>
  </div>
);

const SortDropdown = ({ sortBy, setSortBy }) => {
  const options = {
    newest: "الأحدث",
    price_asc: "الأقل سعراً",
    price_desc: "الأعلى سعراً",
    rating_desc: "الأعلى تقييماً",
  };
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center gap-2 text-slate-300 bg-slate-700/50 px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors">
          <span className="font-semibold">ترتيب حسب: {options[sortBy]}</span>
          <ChevronDown size={16} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="bg-slate-800 border border-slate-700 rounded-lg p-2 shadow-xl text-slate-200 w-48 mt-2 z-[60]"
          sideOffset={5}
          align="end"
        >
          {Object.entries(options).map(([key, value]) => (
            <DropdownMenu.Item
              key={key}
              onSelect={() => setSortBy(key)}
              className="p-2 rounded hover:bg-orange-500/20 outline-none cursor-pointer flex justify-between items-center"
            >
              <span>{value}</span>
              {sortBy === key && (
                <Check size={16} className="text-orange-400" />
              )}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

const FilterAccordion = ({
  resetFilters,
  priceRange,
  setPriceRange,
  selectedCategories,
  setSelectedCategories,
  selectedBrands,
  setSelectedBrands,
}) => (
  <div className="space-y-1">
    <div className="flex justify-between items-center p-2">
      <h3 className="text-xl font-bold flex items-center gap-2">
        <Filter size={20} /> الفلاتر
      </h3>
      <button
        onClick={resetFilters}
        className="text-sm text-orange-400 hover:underline flex items-center gap-1"
      >
        <RotateCcw size={14} /> إعادة تعيين
      </button>
    </div>
    <Accordion.Root
      type="multiple"
      defaultValue={["price", "brand", "category"]}
      className="space-y-1"
    >
      <FilterItem value="price" title="السعر">
        <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />
      </FilterItem>
      <FilterItem value="category" title="نوع المنتج">
        <CategoryFilter
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      </FilterItem>
      <FilterItem value="brand" title="الماركة">
        <BrandFilter
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
        />
      </FilterItem>
    </Accordion.Root>
  </div>
);

const FilterItem = ({ children, title, value }) => (
  <Accordion.Item value={value} className="border-t border-slate-700">
    <Accordion.Header>
      <Accordion.Trigger className="flex justify-between items-center w-full py-3 text-slate-200 hover:text-orange-400 group">
        <span className="font-bold">{title}</span>
        <ChevronDown
          size={20}
          className="transition-transform duration-300 group-data-[state=open]:rotate-180"
        />
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
      <div className="pb-4">{children}</div>
    </Accordion.Content>
  </Accordion.Item>
);

const PriceFilter = ({ priceRange, setPriceRange }) => {
  const handleInputChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(value, 10) || 0;
    if (newRange[0] > newRange[1]) newRange[0] = newRange[1];
    setPriceRange(newRange);
  };
  return (
    <div className="space-y-4 px-1">
      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        value={priceRange}
        onValueChange={setPriceRange}
        max={7000}
        step={50}
      >
        <Slider.Track className="bg-slate-600 relative grow rounded-full h-1">
          <Slider.Range className="absolute bg-orange-500 rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb className="block w-5 h-5 bg-white shadow-lg rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400" />
        <Slider.Thumb className="block w-5 h-5 bg-white shadow-lg rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400" />
      </Slider.Root>
      <div className="flex justify-between items-center gap-2 text-sm">
        <input
          type="number"
          value={priceRange[0]}
          onChange={(e) => handleInputChange(0, e.target.value)}
          className="w-24 bg-slate-700 p-2 rounded text-center"
        />
        <span>-</span>
        <input
          type="number"
          value={priceRange[1]}
          onChange={(e) => handleInputChange(1, e.target.value)}
          className="w-24 bg-slate-700 p-2 rounded text-center"
        />
      </div>
    </div>
  );
};

const CategoryFilter = ({ selectedCategories, setSelectedCategories }) => {
  // 1. حالة جديدة لتخزين قيمة البحث داخل الفلتر
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (catId) => {
    const newSet = new Set(selectedCategories);
    if (newSet.has(catId)) {
      newSet.delete(catId);
    } else {
      newSet.add(catId);
    }
    setSelectedCategories(newSet);
  };

  // 2. دالة لإعادة تعيين الفلتر المحدد (مسح كل الاختيارات)
  const clearCategoryFilter = () => {
    setSelectedCategories(new Set());
  };

  // 3. فلترة قائمة الأنواع بناءً على ما يكتبه المستخدم في حقل البحث
  const filteredCategories = CATEGORY_FILTERS.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // نستخدم div إضافي لتنظيم العناصر الجديدة
    <div className="space-y-3">
      {/* ===== حقل البحث الصغير ===== */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="ابحث عن نوع..."
        className="w-full bg-slate-700 p-2 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
      />

      {/* ===== زر إعادة التعيين (يظهر عند الحاجة فقط) ===== */}
      {selectedCategories.size > 0 && (
        <div className="flex justify-end">
          <button
            onClick={clearCategoryFilter}
            className="text-xs text-orange-400 hover:underline font-semibold"
          >
            إعادة تعيين
          </button>
        </div>
      )}

      {/* ===== قائمة الأنواع (الآن أصبحت مفلترة) ===== */}
      <div className="space-y-1 max-h-60 overflow-y-auto pr-1">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 p-2 rounded hover:bg-slate-700/50 cursor-pointer"
            >
              <Checkbox.Root
                checked={selectedCategories.has(cat.id)}
                onCheckedChange={() => handleCategoryChange(cat.id)}
                className="flex h-5 w-5 appearance-none items-center justify-center rounded bg-slate-700 outline-none data-[state=checked]:bg-orange-500"
              >
                <Checkbox.Indicator>
                  <Check className="h-4 w-4 text-white" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <span className="text-slate-300 flex-grow">{cat.name}</span>
              <span className="text-xs text-slate-500">{cat.count}</span>
            </label>
          ))
        ) : (
          // رسالة في حالة عدم وجود نتائج للبحث
          <p className="text-center text-sm text-slate-500 py-4">
            لا توجد أنواع مطابقة
          </p>
        )}
      </div>
    </div>
  );
};

const BrandFilter = ({ selectedBrands, setSelectedBrands }) => {
  // حالات جديدة لإدارة البحث وعرض المزيد
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  const handleBrandSelect = (brandId) => {
    const newSet = new Set(selectedBrands);
    if (newSet.has(brandId)) {
      newSet.delete(brandId);
    } else {
      newSet.add(brandId);
    }
    setSelectedBrands(newSet);
  };

  // دالة لمسح اختيارات الماركات
  const clearBrandFilter = () => {
    setSelectedBrands(new Set());
  };

  // فلترة الماركات بناءً على البحث
  const filteredBrands = BRAND_FILTERS.filter((brand) =>
    brand.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // تحديد الماركات التي ستُعرض (إما جزء منها أو كلها)
  const brandsToShow = showAll ? filteredBrands : filteredBrands.slice(0, 6);

  return (
    <div className="space-y-4">
      {/* ===== حقل البحث ===== */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="ابحث عن ماركة"
        className="w-full bg-slate-700 p-2 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
      />

      {/* ===== زر إعادة التعيين (يظهر عند الحاجة) ===== */}
      {selectedBrands.size > 0 && (
        <div className="flex justify-end -mb-2">
          {" "}
          {/* استخدمنا margin سالب لتقريب المسافة */}
          <button
            onClick={clearBrandFilter}
            className="text-xs text-orange-400 hover:underline font-semibold"
          >
            إعادة تعيين
          </button>
        </div>
      )}

      {/* ===== شبكة الماركات (الآن مفلترة وديناميكية) ===== */}
      {brandsToShow.length > 0 ? (
        <div className="grid grid-cols-3 gap-2">
          {brandsToShow.map((brand) => (
            <button
              key={brand.id}
              onClick={() => handleBrandSelect(brand.id)}
              className={clsx(
                "h-16 flex items-center justify-center rounded-lg border-2 p-1 transition-all",
                "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-orange-500", // تحسين للـ Accessibility
                selectedBrands.has(brand.id)
                  ? "border-orange-500 bg-orange-500/10"
                  : "border-slate-700 bg-slate-900/50 hover:border-slate-500"
              )}
            >
              <img
                src={brand.logoUrl}
                alt={brand.name}
                className="max-h-8 max-w-full object-contain filter invert-[0.8] brightness-200"
              />
            </button>
          ))}
        </div>
      ) : (
        <p className="text-center text-sm text-slate-500 py-4">
          لا توجد ماركات مطابقة
        </p>
      )}

      {filteredBrands.length > 6 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-orange-400 text-sm font-semibold hover:underline"
        >
          {showAll ? "عرض أقل" : `+ عرض المزيد (${filteredBrands.length - 6})`}
        </button>
      )}
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { name, price, image, rating, reviews, isOutOfStock } = product;
  return (
    <motion.div
      className="block bg-slate-900/50 border border-slate-700 rounded-xl overflow-hidden group h-full flex flex-col"
      whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative overflow-hidden">
        <a href="#" className="block">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </a>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-2 right-2 bg-slate-700/50 p-1.5 rounded-full text-slate-300 hover:text-white backdrop-blur-sm"
        >
          <Heart size={18} />
        </motion.button>
        {isOutOfStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold">
            غير متوفر
          </div>
        )}
      </div>
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="font-semibold text-sm text-slate-200 h-10 group-hover:text-orange-400 transition-colors">
          {name}
        </h3>
        <div className="flex justify-between items-center text-xs text-slate-400 mt-auto pt-2 border-t border-slate-700">
          <div className="flex items-center gap-1">
            <Star size={14} className="text-amber-500 fill-current" />
            <span>
              {rating} ({reviews})
            </span>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-slate-700/80 text-slate-200 p-1.5 rounded-md hover:bg-orange-500 hover:text-white"
          >
            <ShoppingCart size={16} />
          </motion.button>
        </div>
        <p className="text-lg font-bold text-orange-400 text-left mt-2">
          {price.toFixed(2)}
          <span className="text-sm"> ر.س</span>
        </p>
      </div>
    </motion.div>
  );
};

const EmptyState = ({ searchTerm }) => (
  <motion.div
    className="flex flex-col items-center justify-center h-full text-center"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
  >
    <Frown size={64} className="text-slate-600 mb-4" />
    <h3 className="text-2xl font-bold text-slate-300">لا توجد نتائج</h3>
    <p className="text-slate-500 mt-2">
      لم نتمكن من العثور على أي شيء يطابق "
      <span className="font-semibold text-orange-400">{searchTerm}</span>".
    </p>
  </motion.div>
);

export default SearchModal;
