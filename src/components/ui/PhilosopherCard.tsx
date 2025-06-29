"use client";

import { Philosopher } from "@/utils/constants";
import { motion } from "framer-motion";
import { useState } from "react";

interface PhilosopherCardProps {
  philosopher: Philosopher;
  inModal?: boolean;
  onClick?: () => void;
}

const PhilosopherCard = ({
  philosopher,
  inModal = false,
  onClick,
}: PhilosopherCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleClick = () => {
    if (onClick && !inModal) {
      onClick();
    }
  };

  return (
    <div className={inModal ? "w-full" : "w-full max-w-xs"}>
      <motion.div
        whileHover={inModal ? {} : { scale: 1.03 }}
        whileTap={inModal ? {} : { scale: 0.98 }}
        className={`flex flex-col items-center ${
          inModal ? "" : "cursor-pointer"
        } transition-all duration-200`}
        onHoverStart={() => !inModal && setIsHovered(true)}
        onHoverEnd={() => !inModal && setIsHovered(false)}
        onClick={handleClick}
      >
        {/* Image Container */}
        <div className="relative w-full">
          {imageError ? (
            <div
              className={`${
                inModal ? "w-40 h-40" : "w-32 h-32"
              } rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center border-4 border-white shadow-lg mx-auto`}
            >
              <span className="text-indigo-600 text-3xl font-bold">
                {philosopher.name.charAt(0)}
              </span>
            </div>
          ) : (
            <motion.div
              className={`${
                inModal ? "w-40 h-40" : "w-32 h-32"
              } rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto`}
              animate={{
                boxShadow:
                  isHovered && !inModal
                    ? "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -4px rgba(0, 0, 0, 0.1)"
                    : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={philosopher.image}
                alt={`Potrait ${philosopher.name}`}
                onError={handleImageError}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          )}

          {/* Hover Effect */}
          {!inModal && (
            <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
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
              </motion.svg>
            </div>
          )}
        </div>

        {/* Philosopher Info */}
        <div className="text-center mt-4 w-full">
          <motion.h3
            className={`${
              inModal
                ? "text-2xl md:text-3xl font-bold text-gray-800"
                : "text-lg font-semibold text-gray-700"
            } transition-colors duration-200`}
            animate={{
              color: !inModal && isHovered ? "#4f46e5" : "#374151",
            }}
          >
            {philosopher.name}
          </motion.h3>
          <motion.p
            className={`${
              inModal
                ? "text-indigo-600 font-medium mt-2 mb-4"
                : "text-sm text-gray-500 mt-1"
            }`}
            animate={{
              opacity: !inModal ? (isHovered ? 1 : 0.8) : undefined,
            }}
            transition={{ duration: 0.2 }}
          >
            {philosopher.lifespan}
          </motion.p>
        </div>

        {/* Modal Content */}
        {inModal && (
          <div className="w-full mt-6">
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Biografi
              </h4>
              <p className="text-gray-600 leading-relaxed">{philosopher.bio}</p>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Karya Utama
              </h4>
              <ul className="space-y-3">
                {philosopher.works.map((work, index) => (
                  <motion.li
                    key={index}
                    className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-start">
                      <div className="bg-indigo-100 text-indigo-600 p-1.5 rounded-full mr-3 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">{work}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default PhilosopherCard;
