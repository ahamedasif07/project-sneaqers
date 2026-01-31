import ProductCard from "@/components/layout/productCard";
import { productsData } from "@/data/data";
import React from "react";

const allProducts = () => {
  const productData = productsData;
  return (
    <div>
      {/* Product Grid */}
      <main className="lg:col-span-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {productsData.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Pagination Section (আগের মতোই থাকবে) */}
      </main>
    </div>
  );
};

export default allProducts;
