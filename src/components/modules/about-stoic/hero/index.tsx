import React, { JSX } from "react";

const HeroAboutStoic = (): JSX.Element => {
  return (
    <div className="relative bg-[url('/images/abstoic.jpg')] bg-cover bg-no-repeat bg-center bg-fixed min-h-screen w-full">
      {/* Overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black opacity-30" />

      {/* Content container */}
      <section className="relative max-w-7xl mx-auto flex items-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col select-none text-white space-y-6 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            The Wisdom of Stoicism
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
            An ancient philosophy for modern life, teaching resilience, virtue,
            and the art of living in accordance with nature.
          </p>
          <button className="mt-4 px-6 py-3 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-25 rounded-lg text-lg font-medium hover:bg-opacity-20 transition-all duration-300 self-start">
            Explore Teachings
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroAboutStoic;
