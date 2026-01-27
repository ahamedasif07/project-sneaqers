import ProductCard from "@/components/layout/productCard";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/sectionHeader";

import { ChevronRight } from "lucide-react";

export default function Upcoming() {
  const products = [
    {
      title: "Nike Zoom Vomero 5",
      price: "$25.99",
      originalPrice: "$00.00",
      image: "/assets/images/upcomingShoe (1).jpg",
      tag: "Wishlist",
      rating: "5.0/5.0",
      soldCount: "300",
    },
    {
      title: "Nike Air Max 1 'Grey & Black'",
      price: "$25.99",
      originalPrice: "$00.00",
      image: "/assets/images/upcomingShoe (2).jpg",
      tag: "Best Seller",
      rating: "5.0/5.0",
      soldCount: "300",
    },
    {
      title: "Nike Air Force",
      price: "$25.99",
      originalPrice: "$00.00",
      image: "/assets/images/upcomingShoe (3).jpg",
      tag: "New",
      rating: "5.0/5.0",
      soldCount: "300",
    },
    {
      title: "Nike Zoom Vomero 5",
      price: "$25.99",
      originalPrice: "$00.00",
      image: "/assets/images/upcomingShoe (4).jpg",
      tag: "Best Seller",
      rating: "5.0/5.0",
      soldCount: "300",
    },
  ];

  return (
    <section className="py-12 md:py-14 lg:py-18 bg-white">
      <Container>
        {/* Header Section */}

        <SectionHeader title="Upcoming" dric="Discover more" />

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
