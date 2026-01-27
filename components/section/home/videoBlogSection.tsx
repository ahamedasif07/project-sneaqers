"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Play, ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Container from "@/components/ui/container";

const VIDEO_POSTS = [
  {
    id: 1,
    title: "The Art of Shoe Living: How to Savor Every Moment",
    category: "Fashion & Style",
    thumbnail:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=400",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    title: "Seven Women on Choosing to Move to a Different Country",
    category: "Fashion & Style",
    thumbnail:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=400",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 3,
    title: "The Best to Dress Up on Friday Night",
    category: "Fashion & Style",
    thumbnail:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=400",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

export default function VideoBlogSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <Container>
      <section className="py-12 bg-white">
        <div>
          {/* --- MAIN HERO SLIDER --- */}
          <div className="relative group mb-8">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              autoplay={{ delay: 5000 }}
              loop={true}
              className="rounded-[30px] overflow-hidden"
            >
              {[1, 2, 3].map((i) => (
                <SwiperSlide key={i}>
                  {/* Aspect ratio fixed for better UI */}
                  <div className="relative aspect-[21/9] min-h-[400px] w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1400"
                      alt="Hero Sneaker"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-6">
                      <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs mb-4">
                        Sneakers
                      </span>
                      <h2 className="text-3xl md:text-6xl font-bold max-w-2xl leading-tight mb-4">
                        8 Most Awesome Sneakers For 2025
                      </h2>
                      <div className="flex items-center space-x-4 text-sm text-gray-200">
                        <span>3 hours ago</span>
                        <span>by Alex Carter</span>
                        <div className="flex items-center">
                          <span className="mr-1">💬</span> 2
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* --- BOTTOM VIDEO POSTS GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {VIDEO_POSTS.map((post) => (
              <div
                key={post.id}
                onClick={() => setActiveVideo(post.videoUrl)}
                className="flex items-center bg-white border border-gray-100 rounded-[30px] p-4 hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="flex-1 pr-4">
                  <span className="text-[10px] text-gray-400 font-bold uppercase border border-gray-200 px-3 py-1 rounded-full inline-block mb-3">
                    {post.category}
                  </span>
                  <h4 className="text-sm font-bold leading-snug text-gray-800 line-clamp-2">
                    {post.title}
                  </h4>
                </div>

                <div className="relative w-32 h-24 rounded-[20px] overflow-hidden shrink-0">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center group-hover:bg-[#f58220] transition-colors shadow-md">
                      <Play className="w-4 h-4 text-black group-hover:text-white fill-current" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- VIDEO PLAYER MODAL --- */}
          {activeVideo && (
            <div
              className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
              onClick={() => setActiveVideo(null)}
            >
              <div
                className="relative w-full max-w-4xl aspect-video bg-black rounded-[25px] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-[#f58220] p-2 rounded-full text-white transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
                <video
                  src={activeVideo}
                  className="w-full h-full"
                  controls
                  autoPlay
                />
              </div>
            </div>
          )}

          {/* --- VIEW ALL BUTTON --- */}
          <div className="flex justify-center">
            <button className="flex items-center space-x-3 bg-[#1a1a1a] text-white px-8 py-3 rounded-full hover:bg-black transition-all group">
              <div className="bg-[#f58220] p-1.5 rounded-full group-hover:rotate-45 transition-transform">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold">View All Video Post</span>
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
}
