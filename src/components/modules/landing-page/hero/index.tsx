import React, { JSX } from "react";

const Hero = (): JSX.Element => {
  return (
    <div className="bg-[url('/images/bgseneca.jpg')] bg-cover bg-no-repeat bg-top bg-fixed min-h-screen w-full">
      <div className="bg-black opacity-30">
        <section className="max-w-[120px] mx-auto flex items-center min-h-screen px-4">
          <div className="flex flex-col select-none text-white"></div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
