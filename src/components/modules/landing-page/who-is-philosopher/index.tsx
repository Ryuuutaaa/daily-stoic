/* eslint-disable @next/next/no-img-element */

import React, { JSX } from "react";

const Philosopher = (): JSX.Element => {
  return (
    <>
      <section className="max-w-7xl mx-auto flex flex-col justify-center mb-16 px-4 md:px-0">
        {/* decoration */}
        <div className="relative min-h-[50vh]">
          <div className="absolute top-0">
            <img src="/" alt="decoration" />
          </div>

          <div className="text-center">
            <div className="flex justify-center gap-3 mx-auto">
                <img src="" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Philosopher;
