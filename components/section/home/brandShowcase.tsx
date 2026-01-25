import { BentoTextCard } from "@/components/ui/BentoTextCard";
import Container from "@/components/ui/container";
import Image from "next/image";
import brandBannerImagOne from "../../../public/assets/images/brandBanerImage (1).jpg";
import brandBannerImagTwo from "../../../public/assets/images/brandBanerImage (2).jpg";

export default function BrandShowcase() {
  return (
    <section className="py-16 bg-white">
      <Container>
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-[#f58220] font-bold text-sm tracking-tighter uppercase">
            / OUR BRANDS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Classic Leather Nike Shoes
          </h2>
        </div>

        {/* Responsive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
          {/* Top Left: Large Image - Spans 8 columns */}
          <div className="md:col-span-8 relative rounded-[32px] overflow-hidden group">
            <Image
              src={brandBannerImagOne} // Replace with your image
              alt="Classic Nike"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Top Right: Dark Text Card - Spans 4 columns */}
          <div className="md:col-span-4">
            <BentoTextCard
              dark
              title="2025 Nike The Best Classical"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
            />
          </div>

          {/* Bottom Left: Light Text Card - Spans 3 columns */}
          <div className="md:col-span-3">
            <BentoTextCard
              title="Elegance in Every Movement"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
            />
          </div>

          {/* Bottom Right: Wide Image - Spans 9 columns */}
          <div className="md:col-span-9 relative rounded-[32px] overflow-hidden group">
            <Image
              src={brandBannerImagTwo} // Replace with your image
              alt="Nike Elegance"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
