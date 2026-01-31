"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/layout/productCard";
import { productsData } from "../../../data/data";

type proptype = {
  columnCount: number;
};

export default function ProductGrid({ columnCount }: proptype) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 12; // ৬ কলামের জন্য ১২টি আইটেম ভালো দেখায়

  // --- টাইপস্ক্রিপ্ট এবং টেলউইন্ড এরর ফিক্স করার জন্য ম্যাপিং ---
  const gridClasses: Record<number, string> = {
    2: "lg:grid-cols-2",
    4: "xl:grid-cols-4 lg:grid-cols-4",
    6: "2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-6",
  };

  const totalPages = Math.ceil(productsData.length / itemsPerPage);
  const currentProducts = productsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      {/* গ্রিড কন্টেইনার - এখানে ডাইনামিক ক্লাস ম্যাপিং ব্যবহার করা হয়েছে */}
      <div
        className={`grid grid-cols-1  ${gridClasses[columnCount] || "lg:grid-cols-4"} gap-6 transition-all duration-500`}
      >
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-gray-400">
            No products found.
          </div>
        )}
      </div>

      {/* Pagination UI */}
      {totalPages > 1 && (
        <div className="flex flex-col items-center mt-12 gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 border rounded-md disabled:opacity-30 hover:bg-gray-50"
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-9 h-9 rounded-md font-bold text-sm transition-all ${
                  page === currentPage
                    ? "bg-orange-500 text-white shadow-lg"
                    : "border text-gray-500 hover:border-orange-500"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 border rounded-md disabled:opacity-30 hover:bg-gray-50"
            >
              <ChevronRight size={16} />
            </button>
          </div>
          <p className="text-xs text-gray-400 font-medium">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, productsData.length)} of{" "}
            {productsData.length}
          </p>
        </div>
      )}
    </main>
  );
}
