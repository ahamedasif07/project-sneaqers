"use client";
import React from "react";
import { ChevronDown, Check, RotateCcw } from "lucide-react";
import { BRANDS, CATEGORIES, COLORS } from "../../../data/data";

// --- Types ---
export interface FilterState {
  brands: string[];
  categories: string[];
  priceRange: number;
  audience: string[];
  colors: string[];
}

interface FilterSidebarProps {
  selectedFilters: FilterState;
  onFilterUpdate: (filters: FilterState) => void;
}

// ১. RenderFilterGroup-কে মেইন কম্পোনেন্টের বাইরে নিয়ে আসা হয়েছে (এটিই আসল ফিক্স)
const RenderFilterGroup = ({
  title,
  items,
  counts,
  type,
  selectedFilters,
  handleToggle,
}: {
  title: string;
  items: string[];
  counts: number[];
  type: keyof FilterState;
  selectedFilters: FilterState;
  handleToggle: (type: keyof FilterState, value: string) => void;
}) => (
  <div className="space-y-4 border-b border-gray-100 pb-6 last:border-0">
    <h3 className="font-bold text-[12px] uppercase tracking-widest text-gray-900 flex justify-between items-center group">
      {title}
      <ChevronDown
        size={14}
        className="text-gray-300 group-hover:text-orange-500 transition-colors"
      />
    </h3>
    <div className="space-y-2.5">
      {items.map((item, i) => {
        const isSelected = (selectedFilters[type] as string[]).includes(item);
        return (
          <label
            key={item}
            className="flex justify-between items-center cursor-pointer group/item"
          >
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleToggle(type, item)}
                  className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-gray-300 bg-white checked:border-orange-500 checked:bg-orange-500 transition-all focus:ring-2 focus:ring-orange-500/10"
                />
                <Check
                  size={10}
                  className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
                  strokeWidth={4}
                />
              </div>
              <span
                className={`text-sm font-medium transition-colors ${
                  isSelected
                    ? "text-orange-600"
                    : "text-gray-500 group-hover/item:text-gray-900"
                }`}
              >
                {item}
              </span>
            </div>
            <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
              {counts[i] || 0}
            </span>
          </label>
        );
      })}
    </div>
  </div>
);

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedFilters,
  onFilterUpdate,
}) => {
  const handleToggle = (type: keyof FilterState, value: string) => {
    const currentArray = selectedFilters[type] as string[];
    const updated = currentArray.includes(value)
      ? currentArray.filter((item) => item !== value)
      : [...currentArray, value];

    onFilterUpdate({ ...selectedFilters, [type]: updated });
  };

  const resetFilters = () => {
    onFilterUpdate({
      brands: [],
      categories: [],
      priceRange: 2000,
      audience: [],
      colors: [],
    });
  };

  return (
    <aside className="hidden lg:block lg:col-span-2 space-y-8 pr-4 sticky top-10 h-fit">
      <div className="flex justify-between items-center border-b pb-4">
        <h2 className="font-black text-lg uppercase tracking-tight text-gray-900">
          Filters
        </h2>
        <button
          onClick={resetFilters}
          className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
        >
          <RotateCcw size={18} />
        </button>
      </div>

      {/* ব্র্যান্ড সেকশন */}
      <RenderFilterGroup
        title="Brands"
        items={BRANDS}
        counts={[6, 20, 7, 18, 10, 2]}
        type="brands"
        selectedFilters={selectedFilters}
        handleToggle={handleToggle}
      />

      {/* ক্যাটাগরি সেকশন */}
      <RenderFilterGroup
        title="Categories"
        items={CATEGORIES}
        counts={[5, 10, 15, 35, 20, 25]}
        type="categories"
        selectedFilters={selectedFilters}
        handleToggle={handleToggle}
      />

      {/* প্রাইস রেঞ্জ সেকশন */}
      <div className="space-y-4 border-b border-gray-100 pb-6">
        <h3 className="font-bold text-[12px] uppercase tracking-widest text-gray-900">
          Price Range
        </h3>
        <input
          type="range"
          min="0"
          max="2000"
          step="50"
          value={selectedFilters.priceRange}
          onChange={(e) =>
            onFilterUpdate({
              ...selectedFilters,
              priceRange: parseInt(e.target.value),
            })
          }
          className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-orange-500"
        />
        <p className="text-xs font-bold text-orange-500">
          Max: ${selectedFilters.priceRange}
        </p>
      </div>

      {/* অডিয়েন্স সেকশন */}
      <RenderFilterGroup
        title="Audience"
        items={["Men", "Women", "Children"]}
        counts={[6, 20, 7]}
        type="audience"
        selectedFilters={selectedFilters}
        handleToggle={handleToggle}
      />

      {/* কালার সেকশন */}
      <div className="space-y-5">
        <h3 className="font-bold text-[12px] uppercase tracking-widest text-gray-900">
          Colors
        </h3>
        <div className="grid grid-cols-5 gap-3">
          {COLORS.map((color) => {
            const isSelected = selectedFilters.colors.includes(color.name);
            return (
              <button
                key={color.name}
                onClick={() => handleToggle("colors", color.name)}
                className={`relative w-7 h-7 rounded-full transition-all border-2 ${
                  isSelected
                    ? "border-orange-500 scale-110"
                    : "border-transparent"
                } ${color.class}`}
              >
                {isSelected && (
                  <Check
                    size={12}
                    className="absolute inset-0 m-auto text-white shadow-sm"
                    strokeWidth={4}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
