import React from "react";
import bannerImg from "../../../assets/img/Screenshot 2025-08-28 102141.png";

export default function AboutSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16 py-12">
      {/* Left Images */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        {/* Background Image */}
        <img
          src={bannerImg}
          alt="Dubai City"
          className="w-80 md:w-[400px] h-auto rounded-lg shadow-lg"
        />

        {/* Foreground Image */}
        <img
          src={bannerImg}
          alt="Dubai Architecture"
          className="absolute top-10 right-20 w-60 md:w-[300px] h-auto rounded-lg shadow-xl"
        />
      </div>

      {/* Right Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-gray-500 text-lg font-light tracking-wide">
          ABOUT
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 mt-2">
          THE NETWORK
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Welcome to The Network, the finest luxury real estate company in
          Dubai. We are experts in Dubai&apos;s exclusive property market,
          curating exceptional homes and providing unparalleled client advisory
          services.
        </p>
        <a
          href="https://thenetwork.ae/"
          className="text-sm text-blue-600 font-medium mt-4 inline-block hover:underline"
        >
          https://thenetwork.ae/
        </a>
      </div>
    </section>
  );
}
