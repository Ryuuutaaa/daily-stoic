import React, { JSX } from "react";

const Hero = (): JSX.Element => {
  return (
    <div className="bg-[url('/images/bgseneca.jpg')] bg-cover bg-no-repeat bg-top bg-fixed min-h-screen w-full">
      <section className="max-w-[120px] mx-auto flex items-center min-h-screen px-4">
        <div className="flex flex-col select-none text-white">
          <h6 className="text-sm md:text-lg lg:text-6xl font-black tracking-tight pb-2"></h6>
        </div>
      </section>
    </div>
  );
};

export default Hero;
