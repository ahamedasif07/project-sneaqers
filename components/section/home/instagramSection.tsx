import React from "react";
import Image from "next/image";
import { Instagram, ArrowRight } from "lucide-react";
import Container from "@/components/ui/container";
interface GalleryItem {
  id: number;
  image: string;
}

const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=600",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=600",
  },
];
export default function InstagramSection() {
  return (
    <Container>
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* --- CARD 1: Follow Instagram --- */}
          <div className="bg-white border border-gray-100 rounded-[25px] p-8 flex flex-col justify-between items-start min-h-[250px]">
            <div>
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mb-4">
                <Instagram size={20} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Follow My Instagram Channel
              </h3>
            </div>
            <button className="w-full py-3 border border-gray-300 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-300">
              Show All
            </button>
          </div>

          {/* --- GALLERY IMAGES (Top Row) --- */}
          {GALLERY_IMAGES.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="relative aspect-square overflow-hidden rounded-[25px] group"
            >
              <Image
                src={item.image}
                alt="Sneaker Gallery"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}

          {/* --- GALLERY IMAGES (Bottom Row) --- */}
          {GALLERY_IMAGES.slice(3, 5).map((item) => (
            <div
              key={item.id}
              className="relative aspect-square overflow-hidden rounded-[25px] group"
            >
              <Image
                src={item.image}
                alt="Sneaker Gallery"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}

          {/* --- CARD 6: Contact Me (Spans 2 columns on medium screens) --- */}
          <div className="md:col-span-2 bg-white border border-gray-100 rounded-[25px] p-10 flex flex-col justify-center items-start relative overflow-hidden min-h-[250px]">
            <div className="relative z-10">
              <h3 className="text-2xl text-gray-800 leading-tight">
                Wanna <span className="font-bold italic">Contact me?</span>{" "}
                <br />
                Let&apos;s brainstorm{" "}
                <span className="font-bold italic">our idea</span>
              </h3>

              <button className="mt-6 flex items-center bg-[#1A1A1A] text-white pl-1 pr-6 py-1 rounded-full hover:bg-black transition-all group">
                <div className="bg-[#F58220] p-2 rounded-full mr-3 group-hover:rotate-45 transition-transform">
                  <ArrowRight size={18} />
                </div>
                <span className="text-sm font-medium">Contact us</span>
              </button>
            </div>

            {/* Background Decorative Element (Optional) */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -mr-16 -mt-16" />
          </div>
        </div>
      </section>
    </Container>
  );
}
