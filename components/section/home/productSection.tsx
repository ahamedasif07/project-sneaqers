"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Minus,
  Plus,
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Star,
} from "lucide-react";

const ProductSection = () => {
  // স্টেট ম্যানেজমেন্ট
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const basePrice = 199.0;

  // ডাটা স্ট্রাকচার: প্রতিটি কালারের জন্য ৪টি করে আলাদা ইমেজ
  const productVariants = [
    {
      name: "Gray & Black",
      class: "bg-gray-700",
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512374382149-4332c6c02151?q=80&w=1983&auto=format&fit=crop",
      ],
    },
    {
      name: "Sky Blue",
      class: "bg-blue-400",
      images: [
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1996&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2080&auto=format&fit=crop",
      ],
    },
    {
      name: "Pure White",
      class: "bg-white",
      images: [
        "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2071&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop",
      ],
    },
    {
      name: "Neon Purple",
      class: "bg-purple-600",
      images: [
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1543508282-6319a3e4621f?q=80&w=2030&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1974&auto=format&fit=crop",
      ],
    },
  ];

  // হ্যান্ডলার: কালার চেঞ্জ করলে ইমেজ ইনডেক্সও রিসেট করে দিবে
  const handleColorChange = (idx: number) => {
    setSelectedColorIdx(idx);
    setSelectedImageIdx(0); // এখানে সেট করায় আর Cascading Render এরর আসবে না
  };

  const totalPrice = (basePrice * quantity).toFixed(2);
  const currentVariant = productVariants[selectedColorIdx];

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-6 text-white font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side: Image Gallery */}
        <div className="space-y-4">
          {/* মেইন ইমেজ */}
          <div className="bg-[#e8dcc4] rounded-3xl overflow-hidden aspect-square flex items-center justify-center p-8 relative">
            <Image
              src={currentVariant.images[selectedImageIdx]}
              alt={currentVariant.name}
              fill
              priority
              className="object-cover transform  transition-all duration-500"
            />
          </div>

          {/* থাম্বনেইল গ্যালারি: সিলেক্টেড কালারের ইমেজগুলো দেখাবে */}
          <div className="grid grid-cols-4 gap-4">
            {currentVariant.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIdx(idx)}
                className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                  selectedImageIdx === idx
                    ? "border-orange-500 scale-105"
                    : "border-transparent"
                } bg-[#e8dcc4] p-2`}
              >
                <Image
                  src={img}
                  alt="thumbnail"
                  fill
                  className="object-cover "
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="space-y-6">
          <header>
            <h1 className="text-3xl font-bold tracking-tight">
              Nike Zoom Vomero 5
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-gray-400 text-sm">5.0 (121 Reviews)</span>
            </div>
          </header>

          <h2 className="text-3xl font-bold text-orange-500">${totalPrice}</h2>

          {/* কালার পিকার */}
          <div>
            <span className="text-sm font-medium block mb-3">
              Color:{" "}
              <span className="text-orange-500">{currentVariant.name}</span>
            </span>
            <div className="flex gap-3">
              {productVariants.map((variant, idx) => (
                <button
                  key={variant.name}
                  onClick={() => handleColorChange(idx)}
                  className={`${variant.class} w-10 h-10 rounded-md border-2 transition-all ${
                    selectedColorIdx === idx
                      ? "border-white ring-2 ring-orange-500"
                      : "border-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* কোয়ান্টিটি এবং কার্ট */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center bg-[#1e1e1e] rounded-lg border border-gray-700">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:text-orange-500"
              >
                <Minus size={18} />
              </button>
              <span className="w-8 text-center font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:text-orange-500"
              >
                <Plus size={18} />
              </button>
            </div>

            <button className="flex-1 bg-[#f17829] hover:bg-[#d9661f] text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-orange-900/20">
              Add to Cart - ${totalPrice}
            </button>

            <button className="p-3 bg-[#1e1e1e] rounded-lg border border-gray-700 hover:text-red-500 transition-colors">
              <Heart size={20} />
            </button>
          </div>

          {/* সোশ্যাল শেয়ার */}
          <div className="pt-4 border-t border-gray-800 flex gap-4">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <button
                key={i}
                className="p-2 bg-[#1e1e1e] rounded-md border border-gray-700 hover:text-orange-500"
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
