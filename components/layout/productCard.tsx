"use client";
import Image from "next/image";
import Link from "next/link"; // Link ইম্পোর্ট করা হয়েছে
import { Star } from "lucide-react";

interface ProductCardProps {
  id: number;
  title: string;
  price: string;
  originalPrice: string;
  images: string[];
  tag: string;
  rating: string;
  soldCount: string;
  category: "Releasekalender" | "Best Seller" | "Upcoming";
}

export default function ProductCard({
  id,
  images,
  title,
  price,
  originalPrice,
  tag,
  rating,
  soldCount,
}: ProductCardProps) {
  return (
    // কার্ডের মেইন র‍্যাপার হিসেবে Link ব্যবহার করা হয়েছে ডাইনামিক ID সহ
    <Link href={`/product/${id}`} className="block group">
      <div className="bg-white rounded-[32px] px-6 py-8 border border-gray-100 flex flex-col min-h-[520px] transition-all duration-300 hover:shadow-xl hover:border-transparent">
        {/* Top Tag */}
        <div className="mb-4 h-7">
          {tag && (
            <span className="text-[11px] font-medium px-4 py-1.5 rounded-full border border-gray-200 text-gray-400 transition-colors duration-300 group-hover:text-[#ee701d] group-hover:border-[#ee701d]">
              {tag}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-[22px] font-bold text-gray-900 mb-6 leading-[1.2] tracking-tight">
          {title}
        </h3>

        {/* Image Container */}
        <div className="relative aspect-[1.1/1] w-full rounded-[24px] overflow-hidden bg-[#e5e7eb]/40 mb-8">
          <Image
            src={
              images && images.length > 0
                ? images[0]
                : "/assets/images/placeholder.jpg"
            }
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Price Section */}
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
    </Link>
  );
}
