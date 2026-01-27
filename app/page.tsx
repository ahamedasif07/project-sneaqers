import BestSell from "@/components/section/home/bestSell";
import BlogGrid from "@/components/section/home/blogGrid";
import BrandShowcase from "@/components/section/home/brandShowcase";
import Hero from "@/components/section/home/hero";
import InstagramSection from "@/components/section/home/instagramSection";
import ProductSection from "@/components/section/home/productSection";

import Releasekalender from "@/components/section/home/releasekalender";
import Upcoming from "@/components/section/home/upcoming";
import VideoBlogSection from "@/components/section/home/videoBlogSection";
import NewsLetter from "@/components/ui/newsLetter";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <Releasekalender />
      <BrandShowcase />
      <BestSell />
      <ProductSection />
      <BlogGrid />
      <Upcoming />
      <VideoBlogSection />
      <InstagramSection />
      <NewsLetter />
    </div>
  );
};

export default Home;
