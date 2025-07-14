import Link from "next/link";

const MegaMenu = ({ category }) => {
  if (!category || !category.megaMenu) {
    return null;
  }

  const { banner, columns = [], brands = [] } = category.megaMenu;

  return (
    <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg text-[#273772] z-50">
      <div className="container mx-auto px-4 py-6 flex flex-row-reverse">
        {/* === الجزء الأيسر: الأعمدة والماركات === */}
        <div className="flex-grow pr-8">
          <div className="grid grid-cols-4 gap-x-8 gap-y-6">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-bold text-md mb-3">{col.title}</h3>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.path}
                        className="text-sm text-gray-600 hover:text-[#8AD7BC]"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {brands && brands.length > 0 && (
            <div className="mt-8 pt-6 border-t">
              <h3 className="font-bold text-md mb-4">أفضل الماركات</h3>
              <div className="flex items-center gap-6">
                {brands.map((brand) => (
                  <Link
                    href={brand.path}
                    key={brand.name}
                    className="flex flex-col items-center gap-2 text-center"
                  >
                    <img
                      src={brand.logoUrl}
                      alt={brand.name}
                      className="h-12 w-24 object-contain"
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* === التعديل هنا === */}
        {/* بنضيف شرط عشان نتأكد إن البانر موجود قبل ما نعرضه */}
        {banner && (
          <div className="w-1/4 flex-shrink-0">
            <Link href={banner.link}>
              <div className="relative h-full w-full rounded-lg overflow-hidden">
                <img
                  src={banner.imageUrl}
                  alt={banner.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-[#273772] text-white py-2 px-4 rounded">
                  <h2 className="font-bold">{banner.title}</h2>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MegaMenu;
