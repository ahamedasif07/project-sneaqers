import BestSell from "@/components/section/home/bestSell";
import BlogGrid from "@/components/section/home/blogGrid";
import BrandShowcase from "@/components/section/home/brandShowcase";
import Hero from "@/components/section/home/hero";
import ProductSection from "@/components/section/home/productSection";

import Releasekalender from "@/components/section/home/releasekalender";
import Upcoming from "@/components/section/home/upcoming";
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
    </div>
  );
};

export default Home;
