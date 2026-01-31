"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
import { BRANDS, CATEGORIES, COLORS } from "../../../data/data";

interface FilterGroupProps {
  title: string;
  items: string[];
  counts: number[];
  checkedIndex?: number;
}

const FilterGroup: React.FC<FilterGroupProps> = ({
  title,
  items,
  counts,
  checkedIndex,
}) => (
  <div className="space-y-4 border-b pb-6 last:border-0">
    <h3 className="font-bold flex justify-between items-center text-[15px] text-gray-900">
      {title} <ChevronDown size={16} />
    </h3>
    <div className="space-y-3">
      {items.map((item, i) => (
        <label
          key={item}
          className="flex justify-between items-center cursor-pointer group"
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              defaultChecked={i === checkedIndex}
              className="w-4 h-4 accent-orange-500 border-gray-300 rounded focus:ring-orange-500"
            />
            <span
              className={`text-xs font-medium ${i === checkedIndex ? "text-gray-900" : "text-gray-500"} group-hover:text-gray-900 transition-colors`}
            >
              {item}
            </span>
          </div>
          <span className="text-[10px] font-bold text-gray-400">
            ({counts[i]})
          </span>
        </label>
      ))}
    </div>
  </div>
);

export default function FilterSidebar() {
  return (
    <aside className="hidden lg:block lg:col-span-2 space-y-8">
      <FilterGroup
        title="Filter by Brands"
        items={BRANDS}
        counts={[6, 20, 7, 18, 10, 2]}
        checkedIndex={2}
      />
      <FilterGroup
        title="Product Categories"
        items={CATEGORIES}
        counts={[5, 10, 15, 35, 20, 25]}
        checkedIndex={0}
      />

      <div className="space-y-4">
        <h3 className="font-bold flex justify-between items-center text-[15px]">
          Filter by Price <ChevronDown size={16} />
        </h3>
        <p className="text-xs text-gray-500 font-medium">Price: $0 - $2000</p>
        <input
          type="range"
          className="w-full accent-orange-500 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <FilterGroup
        title="Audience"
        items={["Men", "Women", "Children"]}
        counts={[6, 20, 7]}
        checkedIndex={2}
      />

      <div className="space-y-4">
        <h3 className="font-bold flex justify-between items-center text-[15px]">
          Filter by Color <ChevronDown size={16} />
        </h3>
        <div className="space-y-3">
          {COLORS.map((color, i) => (
            <div
              key={color.name}
              className="flex justify-between items-center text-xs font-medium"
            >
              <div className="flex items-center gap-2">
                <div
                  className={`${color.class} w-3 h-3 rounded-sm shadow-sm`}
                />
                <span className="text-gray-600">{color.name}</span>
              </div>
              <span className="text-gray-400">({[14, 4, 10, 9, 8, 2][i]})</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
