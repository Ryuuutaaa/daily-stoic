"use client";

import { motion, AnimatePresence } from "framer-motion";
import PhilosopherCard from "@/components/ui/PhilosopherCard";
import { PHILOSOPHER } from "@/utils/constants";
import type { Philosopher } from "@/utils/constants";
import { useState } from "react";

const Philosopher = () => {
  const [selectedPhilosopher, setSelectedPhilosopher] =
    useState<Philosopher | null>(null);

  return (
    <section className="max-w-7xl mx-auto flex flex-col justify-center mb-16 px-4 md:px-0 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Great Philosophers
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg"
        >
          Explore the thinkers who shaped human thought throughout history
        </motion.p>
      </div>

      {/* Image Gallery */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {PHILOSOPHER.map((philosopher) => (
            <motion.div
              key={philosopher.name}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer"
              onClick={() => setSelectedPhilosopher(philosopher)}
            >
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group">
                <img
                  src={philosopher.image}
                  alt={philosopher.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/default-philosopher.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 transition-opacity duration-300 group-hover:opacity-90">
                  <span className="text-white font-medium text-sm md:text-base">
                    {philosopher.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal for selected philosopher */}
      <AnimatePresence>
        {selectedPhilosopher && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-2xl w-full bg-white rounded-lg overflow-hidden shadow-xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhilosopher(null)}
                className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-md transition-colors duration-200"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="p-6 md:p-8">
                <PhilosopherCard
                  philosopher={selectedPhilosopher}
                  inModal={true}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Philosopher;
