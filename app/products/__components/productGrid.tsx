"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/layout/productCard";
import { productsData } from "../../../data/data";

export default function ProductGrid() {
  // ১. স্টেট ম্যানেজমেন্ট
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8; // প্রতি পেজে ৮টি করে প্রোডাক্ট

  // ২. ক্যালকুলেশন
  const totalPages = Math.ceil(productsData.length / itemsPerPage);

  // বর্তমান পেজের জন্য ডাটা স্লাইস করা
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = productsData.slice(indexOfFirstItem, indexOfLastItem);

  // ৩. হ্যান্ডলার ফাংশন
  const goToPage = (page: number) => {
    setCurrentPage(page);
    // পেজ পরিবর্তন হলে স্ক্রল করে উপরে নিয়ে যাওয়ার জন্য
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextPage = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  };

  return (
    <main className="lg:col-span-10">
      {/* প্রোডাক্ট গ্রিড - যেখানে এখন শুধু স্লাইস করা ডাটা দেখাবে */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-gray-500 font-medium">
            No products found.
          </div>
        )}
      </div>

      {/* পেজিনেশন সেকশন */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 gap-2">
          {/* Previous Button */}
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`p-2 border rounded-md transition-colors ${
              currentPage === 1
                ? "opacity-30 cursor-not-allowed"
                : "border-gray-200 hover:bg-gray-50 text-gray-900"
            }`}
          >
            <ChevronLeft size={16} />
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`w-9 h-9 rounded-md font-bold text-sm transition-all duration-300 ${
                page === currentPage
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-110"
                  : "border border-gray-200 text-gray-500 hover:border-orange-500 hover:text-orange-500"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`p-2 border rounded-md transition-colors ${
              currentPage === totalPages
                ? "opacity-30 cursor-not-allowed"
                : "border-gray-200 hover:bg-gray-50 text-gray-900"
            }`}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}

      {/* রেজাল্ট কাউন্ট স্ট্যাটাস (নিচে ছোট করে দেখানো ভালো) */}
      <p className="text-center mt-4 text-xs text-gray-400 font-medium tracking-tight">
        Showing {indexOfFirstItem + 1} to{" "}
        {Math.min(indexOfLastItem, productsData.length)} of{" "}
        {productsData.length} products
      </p>
    </main>
  );
}
