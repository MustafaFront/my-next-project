import { noonStyleProducts } from "../data/noonStyleProducts";
import { ultimateProducts } from "../data/ultimateProducts";
import NoonProductCard from "./cart/NoonProductCard";
import ProductCard from "./cart/UltimateProductCard";
import HyperNavbar from "./Components/navbar/HyperNavbar";
export default function Page() {
  return (
    <div>
      <HyperNavbar />
      <div className="container mx-auto  my-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {noonStyleProducts.map((product) => (
            <NoonProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-8">
          {/* 4. بنلف على كل منتج في "المخزن" */}
          {ultimateProducts.map((item) => (
            // 5. لكل منتج، بنستخدم "القالب" عشان نعرضه
            <ProductCard
              key={item.id}
              product={item} // بندي للمكون المنتج عشان يعرض بياناته
            />
          ))}
        </div>
      </div>
    </div>
  );
}
