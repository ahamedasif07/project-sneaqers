"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  X,
  Grid3X3,
  LayoutGrid,
  List,
  Grid2x2,
} from "lucide-react";
import FilterSidebar, { FilterState } from "./__components/filterSidebar";
import ProductGrid from "./__components/productGrid";
import Container from "@/components/ui/container";

export default function ShopPage() {
  const [cols, setCols] = useState<number>(4); // Default 3

  const [filters, setFilters] = useState<FilterState>({
    brands: [],
    categories: [],
    priceRange: 2000,
    audience: [],
    colors: [],
  });

  const removeFilter = (type: keyof FilterState, value: string | number) => {
    setFilters((prev) => {
      if (type === "priceRange") return { ...prev, priceRange: 2000 };
      const currentArray = prev[type] as string[];
      return { ...prev, [type]: currentArray.filter((item) => item !== value) };
    });
  };

  const activeFilters = [
    ...filters.brands.map((v) => ({
      type: "brands" as keyof FilterState,
      label: v,
    })),
    ...filters.categories.map((v) => ({
      type: "categories" as keyof FilterState,
      label: v,
    })),
    ...filters.audience.map((v) => ({
      type: "audience" as keyof FilterState,
      label: v,
    })),
    ...filters.colors.map((v) => ({
      type: "colors" as keyof FilterState,
      label: v,
    })),
  ];

  return (
    <div>
      <Container>
        <div className="min-h-screen bg-white p-4  font-sans text-gray-800">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b pb-4">
            <div className="flex items-center gap-4">
              <div className="flex bg-gray-100 p-1 rounded-md gap-1">
                {/* ১ (লিস্ট), ৩ এবং ৪ কলামের বাটন */}
                {[2, 4, 6].map((n) => (
                  <button
                    key={n}
                    onClick={() => setCols(n)}
                    className={`p-1.5 rounded-md transition-all ${
                      cols === n
                        ? "bg-white shadow-sm text-orange-500"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {n === 2 && <List size={18} />}
                    {n === 4 && <Grid2x2 size={18} />}
                    {n === 6 && <Grid3X3 size={18} />}
                  </button>
                ))}
              </div>
              <p className="text-sm font-medium text-gray-500">
                Showing all results
              </p>
            </div>
          </div>

          {/* Applied Filters Section */}
          <div className="flex flex-wrap items-center gap-2 mb-8 min-h-[32px]">
            {(activeFilters.length > 0 || filters.priceRange < 2000) && (
              <span className="text-sm font-bold text-gray-400 mr-2 uppercase tracking-tighter">
                Applied filters :
              </span>
            )}
            {activeFilters.map((filter, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-orange-50 border border-orange-100 px-3 py-1 rounded-md text-xs font-bold text-orange-600"
              >
                {filter.label}
                <X
                  size={12}
                  className="cursor-pointer"
                  onClick={() => removeFilter(filter.type, filter.label)}
                />
              </div>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <FilterSidebar
              selectedFilters={filters}
              onFilterUpdate={setFilters}
            />
            <div className="lg:col-span-10">
              <ProductGrid columnCount={cols} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
