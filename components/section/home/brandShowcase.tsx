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

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Top Left: Image Card */}
          <div className="md:col-span-8 h-[500px]  hidden md:block relative rounded-[32px] overflow-hidden group">
            <Image
              src={brandBannerImagTwo}
              alt="Classic Nike"
              fill
              className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Top Right: Dark Card -> White Button */}
          <div className="md:col-span-4 h-[500px]">
            <BentoTextCard
              className="bg-[#1A1A1A]"
              textColor="text-white"
              btnClassName="bg-white text-black hover:bg-gray-100"
              title="2025 Nike The Best Classical"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
            />
          </div>

          {/* Bottom Left: Light Card -> Black Button */}
          <div className="md:col-span-4 h-[500px]">
            <BentoTextCard
              className="bg-[#E8E8E8]"
              textColor="text-black"
              btnClassName="bg-black text-white hover:bg-[#333]"
              title="Elegance in Every Movement"
              description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
            />
          </div>

          {/* Bottom Right: Image Card */}
          <div className="md:col-span-8 h-[500px]  hidden md:block relative rounded-[32px] overflow-hidden group">
            <Image
              src={brandBannerImagOne}
              alt="Nike Elegance"
              fill
              className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
