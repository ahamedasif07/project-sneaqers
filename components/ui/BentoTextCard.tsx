import { ArrowRight } from "lucide-react";

interface BentoCardProps {
  title: string;
  description: string;
  dark?: boolean;
}

export function BentoTextCard({
  title,
  description,
  dark = false,
}: BentoCardProps) {
  return (
    <div
      className={`p-8 md:p-12 rounded-[32px] flex flex-col justify-center h-full ${
        dark ? "bg-[#1a1a1a] text-white" : "bg-[#ececec] text-black"
      }`}
    >
      <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
        {title}
      </h3>
      <p
        className={`text-sm md:text-base mb-8 opacity-80 leading-relaxed max-w-[280px]`}
      >
        {description}
      </p>
      <button
        className={`flex items-center gap-3 w-fit px-6 py-2 rounded-full transition-all border ${
          dark
            ? "bg-white text-black border-white"
            : "bg-[#1a1a1a] text-white border-[#1a1a1a]"
        }`}
      >
        <span className="bg-[#f58220] p-1 rounded-full">
          <ArrowRight className="w-4 h-4 text-white" />
        </span>
        <span className="text-sm font-semibold whitespace-nowrap">
          Shop now
        </span>
      </button>
    </div>
  );
}
