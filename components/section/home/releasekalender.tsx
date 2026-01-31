"use client";
import ProductCard from "@/components/layout/productCard";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/sectionHeader";
import { Product } from "@/types/types";
import { productsData } from "@/data/data";

export default function Releasekalender() {
  // টাইপ সেফটি নিশ্চিত করা হলো
  const allProduct: Product[] = productsData;

  const filteredProducts = allProduct.filter(
    (product) => product.category === "Releasekalender",
  );

  return (
    <section className="py-12 md:py-14 lg:py-18 bg-white">
      <Container>
        <SectionHeader title="Releasekalender" dric="Discover more" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              // স্প্রেড অপারেটর ব্যবহারের সময় নিশ্চিত করুন product এর ভেতর images আছে
              <ProductCard key={product.id} {...product} />
            ))
          ) : (
            <p className="text-center col-span-full py-10 text-gray-500">
              No products found in this category.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
