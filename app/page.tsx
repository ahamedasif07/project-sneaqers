import BrandShowcase from "@/components/section/home/brandShowcase";
import Hero from "@/components/section/home/hero";
import Releasekalender from "@/components/section/home/releasekalender";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <Releasekalender />
      <BrandShowcase />
    </div>
  );
};

export default Home;
