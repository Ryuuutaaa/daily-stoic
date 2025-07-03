"use client";

import { motion } from "framer-motion";
import { DARK_PSYCHOLOGY } from "@/utils/constants";

const DarkPsychology = () => {
  return (
    <section className="bg-gray-900 text-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-purple-600"
          >
            Dark Psychology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            The Art of Persuasion, Manipulation and Human Natures Dark Side
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {DARK_PSYCHOLOGY.map((concept, index) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 border-l-4 border-red-500 hover:border-purple-500 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-red-400 mr-2">{concept.icon}</span>
                {concept.title}
              </h3>
              <p className="text-gray-300 mb-4">{concept.description}</p>
              <div className="flex flex-wrap gap-2">
                {concept.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center border-t border-gray-700 pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <blockquote className="text-xl font-semibold mb-4">
            <p>The will to power is the essence of human nature</p>
            <footer className="text-gray-400 text-sm">
              - Friedrich Nietzsche
            </footer>
          </blockquote>
          <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg shadow-red-900/30">
            Explore Dark Psychology
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DarkPsychology;
