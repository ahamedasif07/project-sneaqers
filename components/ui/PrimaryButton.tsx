import { ArrowRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type btnProps = {
  text?: string;
  className?: string;
};

export function PrimaryButton({ text = "Shop Now", className }: btnProps) {
  return (
    <button
      className={cn(
        "flex-shrink-0 p-1 md:pl-3 md:pr-8 md:py-2 rounded-full flex items-center justify-center gap-3 transition-all group",
        "bg-[#1a1a1a] text-white hover:bg-black", // ডিফল্ট স্টাইল
        className, // এখান থেকে ডাইনামিক bg-white বা bg-black আসবে
      )}
    >
      <span className="bg-[#f58220] p-2 rounded-full flex items-center justify-center transition-transform group-hover:rotate-[-45deg]">
        <ArrowRight
          className="w-5 h-5 md:w-6 md:h-6 text-white"
          strokeWidth={3}
        />
      </span>

      <span className="text-sm font-semibold hidden md:block whitespace-nowrap">
        {text}
      </span>
    </button>
  );
}
