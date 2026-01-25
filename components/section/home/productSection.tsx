"use client";
import React, { useState } from "react";
import Image from "next/image"; // Import Next.js Image component
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
  const [quantity, setQuantity] = useState(1);
  // Defaulting to the first image in the array (index 0)
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "/assets/images/mainImage.jpg",
    "/assets/images/thamralImage (1).jpg",

    "/assets/images/thamralImage (3).jpg",
    "/assets/images/thamralImage (4).jpg",
  ];

  const colors = [
    { name: "Gray", class: "bg-gray-400" },
    { name: "Blue", class: "bg-blue-600" },
    { name: "White", class: "bg-white" },
    { name: "Purple", class: "bg-purple-700" },
  ];

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-6 text-white font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side: Image Gallery */}
        <div className="space-y-4">
          <div className="bg-[#e8dcc4] rounded-3xl overflow-hidden aspect-square flex items-center justify-center p-8 relative">
            <Image
              src={images[selectedImage]}
              alt="Nike Zoom Vomero 5"
              fill
              priority // High priority for LCP
              className="object-contain p-8 transform -rotate-12 transition-transform duration-300"
            />
          </div>

          <div className="grid grid-cols-4 gap-4">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                  selectedImage === idx
                    ? "border-orange-500"
                    : "border-transparent"
                } bg-[#e8dcc4] p-2`}
              >
                <Image
                  src={img}
                  alt={`View ${idx + 1}`}
                  fill
                  className="object-contain p-1"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
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
            </div>
            <span className="bg-green-900/30 text-green-500 text-xs font-bold px-2 py-1 rounded">
              In Stock
            </span>
          </div>

          <h2 className="text-2xl font-semibold">$199.00</h2>

          <p className="text-gray-400 leading-relaxed text-sm">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </p>

          {/* Color Picker */}
          <div>
            <span className="text-sm font-medium block mb-3">Color</span>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  className={`${color.class} w-8 h-8 rounded-md border border-gray-600 hover:ring-2 ring-orange-500 transition-all`}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Quantity and CTA */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center bg-[#1e1e1e] rounded-lg border border-gray-700">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:text-orange-500 transition-colors"
              >
                <Minus size={18} />
              </button>
              <span className="w-8 text-center font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:text-orange-500 transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>

            <button className="flex-1 bg-[#f17829] hover:bg-[#d9661f] text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg shadow-orange-900/20">
              Add to Cart
            </button>

            <button className="p-3 bg-[#1e1e1e] rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors">
              <Heart size={20} />
            </button>
          </div>

          {/* Social Share */}
          <div className="pt-4">
            <span className="text-sm font-medium block mb-3">Share</span>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <button
                  key={i}
                  className="p-2 bg-[#1e1e1e] rounded-md border border-gray-700 hover:text-orange-500 transition-colors"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
