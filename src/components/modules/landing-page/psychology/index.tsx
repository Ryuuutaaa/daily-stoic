"use client";

import { motion } from "framer-motion";
import { PSYCHOLOGY_TOPICS } from "@/utils/constants";
import PsychologyTopicCard from "@/components/ui/PsychologyTopicCard";

const Psychology = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col justify-center mb-16 px-4 md:px-0 py-12 bg-gray-50">
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Psychology Insights
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg"
        >
          Discover how ancient wisdom intersects with modern psychology
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {PSYCHOLOGY_TOPICS.map((topic, index) => (
          <PsychologyTopicCard
            key={topic.title}
            title={topic.title}
            description={topic.description}
            icon={topic.icon}
            delay={index * 0.1}
          />
        ))}
      </motion.div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Want to learn more?
        </h3>
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300">
          Explore Psychology Resources
        </button>
      </motion.div>
    </section>
  );
};

export default Psychology;
