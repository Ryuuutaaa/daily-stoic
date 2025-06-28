/* eslint-disable @next/next/no-img-element */

import React, { JSX } from "react";

const Philosopher = (): JSX.Element => {
  const philosophers = [
    { name: "Aristoteles", image: "/images/aristoteles.jpg" },
    { name: "Aurelius", image: "/images/aurelius.jpg" },
    { name: "Seneca", image: "/images/seneca.jpg" },
    { name: "Sokrates", image: "/images/soktrates.jpg" },
    { name: "Epictitus", image: "/images/epictitus.jpg" },
  ];

  return (
    <section className="max-w-7xl mx-auto flex flex-col justify-center mb-16 px-4 md:px-0 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Who is Philosopher
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore the great thinkers who shaped philosophy
        </p>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl">
          {philosophers.map((philosopher, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={philosopher.image}
                alt={philosopher.name}
                className="rounded-full w-32 h-32 object-cover border-4 border-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-700">
                {philosopher.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosopher;
