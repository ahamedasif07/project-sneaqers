"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Facebook, Twitter, Instagram } from "lucide-react";

interface GalleryProps {
  images: string[];
  title: string;
}

export default function ProductGallery({ images, title }: GalleryProps) {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [zoomStyle, setZoomStyle] = useState({ transformOrigin: "center" });

  // মাউস নড়াচড়ার সাথে জুম পজিশন ক্যালকুলেট করার ফাংশন
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomStyle({ transformOrigin: `${x}% ${y}%` });
  };

  // মাউস সরিয়ে নিলে ইমেজ সেন্টারে চলে আসবে
  const handleMouseLeave = () => {
    setZoomStyle({ transformOrigin: "center" });
  };

  return (
    <div className="lg:col-span-6 space-y-6">
      {/* মেইন ইমেজ উইথ জুম এবং প্যান ইফেক্ট */}
      <div
        className="relative aspect-square bg-[#e8dcc4] rounded-3xl overflow-hidden group cursor-zoom-in"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={images[selectedImageIdx]}
          alt={title}
          fill
          style={zoomStyle} // ডায়নামিক পজিশন এখানে সেট হবে
          className="object-cover transition-transform duration-200 ease-out group-hover:scale-[2.5]"
          priority
        />

        {/* জুম করার সময় হালকা ওভারলে */}
        <div className="absolute inset-0 pointer-events-none group-hover:bg-black/5 transition-colors" />
      </div>

      {/* থাম্বনেইল গ্যালারি */}
      <div className="space-y-4 w-full">
        <h3 className="font-bold text-white text-lg tracking-wide">
          More Views
        </h3>
        <div className="grid grid-cols-4 gap-4 w-full">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImageIdx(idx)}
              className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                selectedImageIdx === idx
                  ? "border-orange-500 scale-105 ring-4 ring-orange-500/10"
                  : "border-gray-800 hover:border-gray-500"
              } bg-[#e8dcc4] w-full`}
            >
              <Image
                src={img}
                alt={`${title}-${idx}`}
                fill
                sizes="(max-width: 768px) 25vw, 15vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* সোশ্যাল শেয়ার */}
      <div className="pt-6 border-t border-gray-800 flex items-center justify-between">
        <div className="flex gap-3">
          {[Facebook, Twitter, Instagram].map((Icon, i) => (
            <button
              key={i}
              className="p-3 rounded-xl border border-gray-800 text-gray-400 hover:text-orange-500 hover:border-orange-500 hover:bg-orange-500/5 transition-all duration-300 bg-[#1e1e1e]"
            >
              <Icon size={20} />
            </button>
          ))}
        </div>
        <span className="text-xs text-gray-500 font-medium italic">
          Hover to explore details
        </span>
      </div>
    </div>
  );
}
