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

  return (
    <div className="lg:col-span-6 space-y-6">
      <div className="relative aspect-square bg-[#e8dcc4] rounded-3xl overflow-hidden flex items-center justify-center p-8">
        <Image
          src={images[selectedImageIdx]}
          alt={title}
          fill
          className="object-cover transition-all duration-500"
          priority
        />
      </div>

      {/* থাম্বনেইল গ্যালারি */}
      <div className="space-y-4 w-full">
        <h3 className="font-bold text-white text-lg">More Views</h3>

        {/* grid-cols-4 ব্যবহার করা হয়েছে যাতে ৪টি ইমেজ পুরো লাইন জুড়ে থাকে */}
        <div className="grid grid-cols-4 gap-4 w-full">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImageIdx(idx)}
              className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                selectedImageIdx === idx
                  ? "border-orange-500 scale-105 ring-2 ring-orange-500/20"
                  : "border-gray-800 hover:border-gray-500"
              } bg-[#e8dcc4] w-full`} // w-full নিশ্চিত করে বাটনটি কলামের পুরো জায়গা নিবে
            >
              <Image
                src={img}
                alt={`${title}-${idx}`}
                fill
                sizes="(max-width: 768px) 25vw, 15vw" // ইমেজ লোডিং অপ্টিমাইজেশন
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* সোশ্যাল শেয়ার এবং ডিটেইলস (ডার্ক থিম অনুযায়ী) */}
      <div className="pt-6 border-t border-gray-800">
        <div className="flex gap-4 mb-6 items-center">
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <button
                key={i}
                className="p-2  rounded-md border border-gray-800 font-semibold text-gray-800 hover:text-orange-500 hover:border-orange-500 transition-colors"
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>

        {/* প্রোডাক্ট ইনফরমেশন কার্ড */}
        {/* <div className="space-y-2 text-sm border border-gray-800 rounded-2xl p-6 bg-[#1e1e1e]">
          <h4 className="font-bold text-white mb-4 text-base">
            Product Details
          </h4>
          {[
            { label: "Stylecode", value: "1201B020-100" },
            { label: "Brand", value: "ASICS" },
            { label: "Model", value: "ASICS GEL-1130" },
            { label: "Colorway", value: "White/Pure Silver/Black" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex justify-between py-2 border-b last:border-0 border-gray-800"
            >
              <span className="text-gray-400">{item.label}</span>
              <span className="font-medium text-gray-200">{item.value}</span>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
