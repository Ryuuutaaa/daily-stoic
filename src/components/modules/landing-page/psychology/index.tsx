"use client";

import { motion } from "framer-motion";
import { PSYCHOLOGY_TOPICS } from "@/utils/constants";
import PsychologyTopicCard from "@/components/ui/PsychologyTopicCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Psychology = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-0 py-16">
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Psychology Insights
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg"
        >
          Discover how ancient wisdom intersects with modern psychology
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {PSYCHOLOGY_TOPICS.map((topic) => (
          <PsychologyTopicCard
            key={topic.title}
            title={topic.title}
            description={topic.description}
            icon={topic.icon}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Psychology;
