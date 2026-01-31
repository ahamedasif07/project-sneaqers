"use client";
import React from "react";
import { LayoutGrid, List, ChevronDown, X } from "lucide-react";
import FilterSidebar from "./__components/filterSidebar";
import allProducts from "./__components/filterSidebar";
import ProductGrid from "./__components/productGrid";

export default function ShopPage() {
  const activeFilters = ["Price : Low To High", "Audience : Men"];

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 font-sans text-gray-800">
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b pb-4">
        <div className="flex items-center gap-4">
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button className="p-2 bg-white shadow-sm rounded-md text-gray-900">
              <LayoutGrid size={18} />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <List size={18} />
            </button>
          </div>
          <p className="text-sm font-semibold text-gray-500">
            Showing <span className="text-gray-900">1–10</span> of 80 results
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm font-bold">
          <span className="text-gray-400 font-medium">Sort by</span>
          <button className="flex items-center gap-1 hover:text-orange-500 transition-colors">
            Latest <ChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <span className="text-sm font-bold text-gray-400 uppercase tracking-tighter">
          Applied filters :
        </span>
        {activeFilters.map((filter) => (
          <div
            key={filter}
            className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-700 hover:border-orange-500 transition-all cursor-default"
          >
            {filter}
            <button className="hover:text-red-500 transition-colors">
              <X size={14} />
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <FilterSidebar />
        <ProductGrid />
      </div>
    </div>
  );
}
