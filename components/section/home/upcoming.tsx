import ProductCard from "@/components/layout/productCard";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/sectionHeader";
import { productsData } from "@/data/data";
import { Product } from "@/types/types";

import { ChevronRight } from "lucide-react";

export default function Upcoming() {
  // টাইপ সেফটি নিশ্চিত করা হলো
  const allProduct: Product[] = productsData;

  const filteredProducts = allProduct.filter(
    (product) => product.category === "Upcoming",
  );

  return (
    <section className="py-12 md:py-14 lg:py-18 bg-white">
      <Container>
        {/* Header Section */}

        <SectionHeader title="Upcoming" dric="Discover more" />

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
