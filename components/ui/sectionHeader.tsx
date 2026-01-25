import { ChevronRight } from "lucide-react";
import React from "react";

type props = {
  title: string;
  dric: string;
};
const SectionHeader = ({ title, dric }: props) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-8 border border-gray-300 rounded-3xl px-8 py-5">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <button className="flex items-center gap-2 group">
          <span className="text-sm font-bold underline text-gray-900 group-hover:underline underline-offset-4">
            {dric}
          </span>
          <div className="bg-[#f58220] p-1.5 rounded-full">
            <ChevronRight className="w-4 h-4 text-white" strokeWidth={3} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SectionHeader;
