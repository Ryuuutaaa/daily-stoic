"use client";

import { Philosopher as PhilosopherType } from "@/utils/constants";
import React, { useState } from "react";
import { motion } from "framer-motion";

const PhilosopherCard = ({ philosopher }: { philosopher: PhilosopherType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col items-center cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative">
          <img
            src={philosopher.image}
            alt={philosopher.name}
            className="rounded-full w-32 h-32 object-cover border-4 border-white shadow-lg hover:shadow-xl transition-all duration-300"
          />
          <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
        </div>
        <h3 className="mt-4 text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300">
          {philosopher.name}
        </h3>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <img
                    src={philosopher.image}
                    alt={philosopher.name}
                    className="rounded-full w-40 h-40 object-cover border-4 border-indigo-100 shadow-md"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {philosopher.name}
                    </h2>
                    <p className="text-gray-600 mb-4">{philosopher.lifespan}</p>
                    <p className="text-gray-700">{philosopher.bio}</p>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Notable Works
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {philosopher.works.map((work, index) => (
                      <li key={index}>{work}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default PhilosopherCard;
