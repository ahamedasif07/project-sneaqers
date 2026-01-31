"use client";
import React, { useState } from "react";
import { Star, ArrowRight } from "lucide-react";

interface Seller {
  name: string;
  price: number;
  logo: string;
  status: string;
}

interface SidebarProps {
  title: string;
  sellers: Seller[];
}

export default function MarketplaceSidebar({ title, sellers }: SidebarProps) {
  const sizes = ["Alle", "36", "36⅔", "37", "37⅓", "38", "39", "40"];

  // ১. স্টেট: কোন সাইজটি সিলেক্ট করা হয়েছে
  const [selectedSize, setSelectedSize] = useState("Alle");

  return (
    <div className="lg:col-span-6 space-y-8 ">
      {/* Header Info */}
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start gap-4">
            <h1 className="text-3xl font-extrabold tracking-tight leading-tight">
              {title}
            </h1>
            <span className="bg-orange-500/10 text-orange-500 text-[10px] px-3 py-1.5 rounded-full font-bold uppercase tracking-wider border border-orange-500/20 whitespace-nowrap">
              🔥 Popular Today
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-gray-400 text-sm font-medium">
              5.0 <span className="text-gray-600 ml-1">(121 Reviews)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Size Selection */}
      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <label className="text-sm font-bold uppercase tracking-widest text-gray-400">
            Select Size
          </label>
          <span className="text-orange-500 text-sm font-bold">
            Size: {selectedSize}
          </span>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`py-3 rounded-xl text-sm font-bold transition-all duration-200 border ${
                selectedSize === size
                  ? "bg-orange-500 border-orange-500  shadow-lg shadow-orange-500/20 scale-105"
                  : " border-gray-800 text-gray-400 hover:border-gray-600"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Marketplace List */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">
          Available at
        </h3>

        <div className="space-y-3">
          {sellers.map((seller, idx) => (
            <div
              key={idx}
              className="group  border border-gray-800 rounded-2xl p-5 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  {/* Placeholder for Logo */}
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                    <span className="text-black font-black text-[10px]">
                      {seller.name.substring(0, 3)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold  group-hover:text-orange-500 transition-colors">
                      {seller.name}
                    </h4>
                    <span className="text-[10px] text-green-500 font-bold uppercase tracking-tighter">
                      ● {seller.status}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-500 font-medium">
                    Best Price
                  </p>
                  <span className="text-2xl font-black ">€{seller.price}</span>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <button className="flex-1 text-gray-200  py-3.5 rounded-xl font-black text-sm bg-[#EE701D]  hover:bg-orange-500 hover: transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  BUY NOW
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
