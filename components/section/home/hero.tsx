import Container from "@/components/ui/container";
import { Search, Star } from "lucide-react";

export default function Hero() {
  const agents = [
    "https://i.pravatar.cc/150?u=a",
    "https://i.pravatar.cc/150?u=b",
    "https://i.pravatar.cc/150?u=c",
    "https://i.pravatar.cc/150?u=d",
  ];

  return (
    <Container>
      <section className="py-6">
        <div className="relative h-[600px] w-full rounded-[40px] rounded-br-[0px] overflow-hidden bg-gray-900 flex items-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: "url('/hero-shoes.jpg')",
              backgroundPosition: "center",
            }}
          />

          {/* Content Overlay */}
          <div className="relative z-10 ml-16 max-w-xl text-white">
            <h1 className="text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              FLAT UP TO 50% OFF
              <br />
              FOR MEN'S
            </h1>
            <p className="text-base opacity-90 mb-10 max-w-md leading-relaxed">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            {/* Custom Search Bar */}
            <div className="bg-white rounded-full p-2 flex items-center max-w-lg shadow-2xl">
              <input
                type="text"
                placeholder="Zoek op merk, model of stijlcode"
                className="flex-grow px-6 text-black outline-none text-sm"
              />
              <button className="bg-[#1a1a1a] text-white px-8 py-3.5 rounded-full flex items-center gap-3 hover:bg-black transition-all">
                <span className="bg-[#f58220] p-1.5 rounded-full">
                  <Search className="w-4 h-4 text-white" strokeWidth={3} />
                </span>
                <span className="text-sm font-semibold">Zoeken</span>
              </button>
            </div>
          </div>

          {/* --- PERFECT MATCH AGENTS BADGE --- */}
          {/* --- PERFECT MATCH AGENTS BADGE --- */}
          <div className="absolute bottom-0 right-0 z-20">
            <div className="relative bg-white pt-6 pb-8 pl-10 pr-12 rounded-tl-[40px] flex items-center gap-6 shadow-sm">
              {/* Top-Right Smooth Curve (Inverse Border Radius) */}
              {/* এটা ব্যাজের ঠিক উপরে ডান দিকে বসবে */}
              <div className="absolute -top-[44px] -right-0.5 w-[48px] h-[45px] bg-transparent rounded-br-[40px] shadow-[16px_15px_0_0_white] pointer-events-none" />

              {/* Bottom-Left Smooth Curve (Inverse Border Radius) */}
              {/* এটা ব্যাজের ঠিক বামে নিচের দিকে বসবে */}
              <div className="absolute -bottom-0.5 -left-[38px] w-[40px] h-[46px] bg-transparent rounded-br-[40px] shadow-[15px_15px_0_0_white] pointer-events-none" />

              {/* Avatar Stack */}
              <div className="flex -space-x-4">
                {agents.map((src, i) => (
                  <div
                    key={i}
                    className="w-14 h-14 rounded-full border-[4px] border-white overflow-hidden shadow-sm"
                  >
                    <img
                      src={src}
                      alt="agent"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Text & Ratings */}
              <div className="flex flex-col">
                <p className="text-[18px] font-bold text-gray-900 whitespace-nowrap leading-none mb-2">
                  10+ Featured Agents
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#FBBF24] text-[#FBBF24]"
                      />
                    ))}
                  </div>
                  <span className="font-bold text-gray-900 text-[18px] leading-none">
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
