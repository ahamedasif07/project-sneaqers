/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { MessageSquare } from "lucide-react";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/sectionHeader";

const BLOG_POSTS = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600",
    title: "8 Most Awesome Gadgets For 2025",
    color: "bg-[#FEE2E2]",
    category: "Gadgets",
    author: "Alex Carter",
    time: "3 hours ago",
    comments: 23,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=600",
    title: "Nike onthult de Air Max 95 'Valentine's Day' 2026 release",
    color: "bg-[#DCFCE7]",
    category: "Fashion",
    author: "Alex Carter",
    time: "5 hours ago",
    comments: 12,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=600",
    title: "One Of The Most Beautiful Beaches In Brazil",
    color: "bg-[#F1F5F9]",
    category: "Travel",
    author: "Alex Carter",
    time: "8 hours ago",
    comments: 45,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=600",
    title: "The Future of Sustainable Footwear Design",
    color: "bg-[#FEF9C3]",
    category: "Design",
    author: "Alex Carter",
    time: "1 day ago",
    comments: 8,
  },
];

const BlogGrid = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <SectionHeader title="Our Blog" dric="Discover more" />

        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          {/* Left Side: Featured Post */}
          <article className="relative group cursor-pointer overflow-hidden rounded-[32px] h-[600px] w-full shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=1200"
              alt="Miyake Design"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white">
              <span className="w-fit px-4 py-1.5 border border-white/30 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6 backdrop-blur-md bg-white/10">
                Fashion & Style
              </span>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8 tracking-tight">
                MIYAKE DESIGN STUDIO en ASICS onthullen het 'ISSEY MIYAKE FOOT'
                project
              </h2>

              <div className="flex items-center justify-between pt-6 border-t border-white/20 text-[13px] text-white/80">
                <div className="flex items-center gap-3">
                  <p>
                    by <span className="text-white font-bold">Alex Carter</span>
                  </p>
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <span>3 hours ago</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare size={18} className="text-blue-400" />
                  <span className="font-bold">52</span>
                </div>
              </div>
            </div>
          </article>

          {/* Right Side: Scrollable Sidebar */}
          <div className="flex flex-col h-[600px]">
            <div className="flex-1 overflow-y-auto pr-4 space-y-8 scroll-smooth snap-y snap-mandatory scrollbar-thin scrollbar-thumb-gray-200">
              {BLOG_POSTS.map((post, index) => (
                <React.Fragment key={post.id}>
                  <div className="snap-start">
                    <SidebarItem {...post} />
                  </div>
                  {index !== BLOG_POSTS.length - 1 && (
                    <div className="h-[1px] w-full bg-gray-100 mt-8" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

interface SidebarItemProps {
  image: string;
  title: string;
  color: string;
  category: string;
  author: string;
  time: string;
  comments: number;
}

const SidebarItem = ({
  image,
  title,
  color,
  category,
  author,
  time,
  comments,
}: SidebarItemProps) => (
  <div className="flex gap-6 group cursor-pointer items-center py-2">
    <div
      className={`relative w-40 h-40 flex-shrink-0 rounded-[24px] overflow-hidden ${color} transition-all duration-300 group-hover:shadow-lg`}
    >
      <div className="relative w-full h-full p-6">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="160px"
        />
      </div>
    </div>

    <div className="flex flex-col flex-1 py-1">
      <span className="w-fit text-[10px] text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase font-bold tracking-wider">
        {category}
      </span>
      <h3 className="mt-3 text-lg font-bold leading-snug text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
        {title}
      </h3>

      <div className="flex items-center justify-between mt-auto pt-4 text-[12px] text-gray-500">
        <div className="flex items-center gap-2">
          <span>{time}</span>
          <span className="opacity-30">|</span>
          <span>
            by <strong className="text-gray-900">{author}</strong>
          </span>
        </div>
        <div className="flex items-center gap-1.5 group-hover:text-blue-500 transition-colors">
          <MessageSquare size={14} />
          <span className="font-medium">{comments}</span>
        </div>
      </div>
    </div>
  </div>
);

export default BlogGrid;
