import Image from "next/image";
import React from "react";
import Container from "./container";

const NewsLetter = () => {
  return (
    <Container>
      {/* Newsletter Card */}
      <div className="mx-auto ">
        <div className="relative h-[350px] md:h-[450px] rounded-[30px]  mt-5 overflow-hidden flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c"
            alt="Newsletter bg"
            fill
            className="object-cover brightness-50"
          />
          <div className="relative z-10 text-center px-6">
            <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">
              Sign Up to Our Newsletter
            </h2>
            <p className="text-gray-200 text-sm md:text-lg mb-10 max-w-xl mx-auto">
              Get the Latest Trends, Sign Up for Our Newsletter and Stay
              Informed About All Things Beauty
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full md:w-[400px] px-8 py-4 rounded-full bg-white outline-none text-black"
              />
              <button className="w-full md:w-auto px-10 py-4 bg-[#f58220] text-white font-bold rounded-full hover:bg-orange-600 transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewsLetter;
