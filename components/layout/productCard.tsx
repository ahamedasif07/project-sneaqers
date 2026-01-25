import Image from "next/image";
import { Star } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice: string;
  tag?: string;
  rating: string;
  soldCount: string;
}

export default function ProductCard({
  image,
  title,
  price,
  originalPrice,
  tag,
  rating,
  soldCount,
}: ProductCardProps) {
  return (
    /* Removed fixed h-160 and used flex-1 with min-h to ensure consistency without breaking layout */
    <div className="group bg-white rounded-[32px] px-6 py-8 border border-gray-100 flex flex-col min-h-[520px] transition-all duration-300 hover:shadow-xl hover:border-transparent">
      {/* Top Tag - Styled to match screenshot pills */}
      <div className="mb-4 h-7">
        {tag && (
          <span className="text-[11px] font-medium px-4 py-1.5 rounded-full border border-gray-200 text-gray-400 transition-colors duration-300 group-hover:text-[#ee701d] group-hover:border-[#ee701d]">
            {tag}
          </span>
        )}
      </div>

      {/* Title - Increased font size and spacing to match image */}
      <h3 className="text-[22px] font-bold text-gray-900 mb-6 leading-[1.2] tracking-tight">
        {title}
      </h3>

      {/* Image Container - Matches the grey background and rounded corners */}
      <div className="relative aspect-[1.1/1] w-full rounded-[24px] overflow-hidden bg-[#e5e7eb]/40 mb-8">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover  transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Price Section - Pushed to bottom */}
      <div className="mt-auto">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[26px] font-bold text-gray-900">{price}</span>
          <span className="text-[15px] text-gray-400 line-through font-medium">
            {originalPrice}
          </span>
        </div>

        {/* Rating & Sold Info */}
        <div className="flex items-center gap-2 text-[13px] text-gray-500 font-medium">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-[#f58220] text-[#f58220]" />
            <span className="text-gray-900 font-bold">{rating}</span>
          </div>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">{soldCount} sold</span>
        </div>
      </div>
    </div>
  );
}
