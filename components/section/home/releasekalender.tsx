import ProductCard from "@/components/layout/productCard";
import Container from "@/components/ui/container";

import { ChevronRight } from "lucide-react";

export default function Releasekalender() {
  const products = [
    {
      title: "Nike Zoom Vomero 5",
      price: "$25.99",
      originalPrice: "$00.00",
      image: "/assets/images/shoeImage.jpg",
      tag: "Wishlist",
      rating: "5.0/5.0",
      soldCount: "300",
    },
    {
      title: "Nike Air Max 1 'Grey & Black'",
      price: "$25.99",
      originalPrice: "$00.00",
      image: "/assets/images/shoeImage2.jpg",
      tag: "Best Seller",
      rating: "5.0/5.0",
      soldCount: "300",
    },
    {
      title: "Nike Air Force",
      price: "$25.99",
      originalPrice: "$00.00",
      image: "/assets/images/shoeImage3.jpg",
      tag: "New",
      rating: "5.0/5.0",
      soldCount: "300",
    },
    {
      title: "Nike Zoom Vomero 5",
      price: "$25.99",
      originalPrice: "$00.00",
      image: "/assets/images/shoeImage4.jpg",
      tag: "Best Seller",
      rating: "5.0/5.0",
      soldCount: "300",
    },
  ];

  return (
    <section className="py-12 md:py-14 lg:py-18 bg-white">
      <Container>
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8 border border-gray-300 rounded-3xl px-8 py-5">
          <h2 className="text-2xl font-bold text-gray-900">Releasekalender</h2>
          <button className="flex items-center gap-2 group">
            <span className="text-sm font-bold underline text-gray-900 group-hover:underline underline-offset-4">
              Discover more
            </span>
            <div className="bg-[#f58220] p-1.5 rounded-full">
              <ChevronRight className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
          </button>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
