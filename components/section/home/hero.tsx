/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/ui/container";
import { ArrowRight, Star } from "lucide-react";
import heroBg from "../../../public/assets/images/hero-bg.jpg";
import Image from "next/image";

export default function Hero() {
  const agents = [
    "https://i.pravatar.cc/150?u=a",
    "https://i.pravatar.cc/150?u=b",
    "https://i.pravatar.cc/150?u=c",
    "https://i.pravatar.cc/150?u=d",
  ];

  return (
    <Container>
      <section className="">
        {/* Changed h-[800px] to min-h-[600px] and md:h-[800px] for responsiveness */}
        <div
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundPosition: "center",
          }}
          className="relative min-h-162.5 md:h-262.5 w-full rounded-[30px] md:rounded-[40px] rounded-br-none! overflow-hidden bg-gray-900 flex items-center "
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url('/assets/images/hero-bg.jpg')`,
              backgroundPosition: "center",
            }}
          />
          {/* Overlay for better text readability on mobile */}
          <div className="absolute inset-0 bg-black/20 md:bg-transparent z-1" />

          {/* Content Overlay */}
          <div className="relative z-10 px-6 ml-0 md:ml-16  text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-4 md:mb-6 tracking-tight">
              FLAT UP TO 50% OFF
              <br />
              FOR MEN'S
            </h1>
            <p className="text-sm md:text-base opacity-90 mb-8 md:mb-10  leading-relaxed">
              It is a long established fact that a reader will be distracted by
              the readable content of a <br /> page when looking at its layout.
            </p>

            {/* Custom Search Bar */}
            <div className="bg-white rounded-full p-1.5 md:p-2 flex items-center w-full max-w-lg shadow-2xl gap-2">
              <input
                type="text"
                placeholder="Zoek op merk, model..."
                className="w-full flex-grow px-4 md:px-6 py-1 text-black outline-none text-sm bg-transparent min-w-0"
              />

              <button className="flex-shrink-0 bg-[#1a1a1a] text-white p-1 md:pl-3 md:pr-8 md:py-2 rounded-full flex items-center justify-center gap-3 hover:bg-black transition-all">
                {/* The Icon container - always visible */}
                <span className="bg-[#f58220] p-2 rounded-full flex items-center justify-center">
                  <ArrowRight
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    strokeWidth={3}
                  />
                </span>

                {/* The Text - hidden on mobile, visible from md: up */}
                <span className="text-sm font-semibold hidden md:block">
                  Zoeken
                </span>
              </button>
            </div>
          </div>

          {/* --- PERFECT MATCH AGENTS BADGE --- */}
          {/* Hidden on very small mobile screens or scaled down */}
          <div className="absolute bottom-0 right-0 z-20 scale-75 origin-bottom-right sm:scale-100">
            <div className="relative bg-white pt-4 pb-6 pl-8 pr-10 md:pt-6 md:pb-8 md:pl-10 md:pr-12 rounded-tl-[30px] md:rounded-tl-[40px] flex items-center gap-4 md:gap-6 shadow-sm">
              {/* Top-Right Smooth Curve */}
              <div className="absolute -top-11 -right-0.5 w-12 h-11.25 bg-transparent rounded-br-[40px] shadow-[16px_15px_0_0_white] pointer-events-none" />

              {/* Bottom-Left Smooth Curve */}
              <div className="absolute -bottom-0.5 -left-9.5 w-10 h-11.5 bg-transparent rounded-br-[40px] shadow-[15px_15px_0_0_white] pointer-events-none" />

              {/* Avatar Stack */}
              <div className="flex -space-x-3 md:-space-x-4">
                {agents.map((src, i) => (
                  <div
                    key={i}
                    className="relative w-12 h-12 md:w-16 md:h-16 rounded-full border-[3px] md:border-4 border-white overflow-hidden shadow-sm"
                  >
                    <Image
                      src={src}
                      alt={`Agent ${i + 1}`}
                      fill // Fills the parent div
                      className="object-cover"
                      sizes="(max-width: 768px) 48px, 64px" // Helps Next.js serve the right size
                    />
                  </div>
                ))}
              </div>

              {/* Text & Ratings */}
              <div className="flex flex-col">
                <p className="text-[14px] md:text-[18px] font-bold text-gray-900 whitespace-nowrap leading-none mb-1 md:mb-2">
                  10+ Featured Agents
                </p>
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 md:w-5 md:h-5 fill-[#FBBF24] text-[#FBBF24]"
                      />
                    ))}
                  </div>
                  <span className="font-bold text-gray-900 text-[14px] md:text-[18px] leading-none">
                    4.9/5
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
