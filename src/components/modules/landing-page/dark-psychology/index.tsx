"use client";

import { motion } from "framer-motion";
import { DARK_PSYCHOLOGY } from "@/utils/constants";
import DarkPsychologyCard from "@/components/ui/DarkPsychologyCard";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const DarkPsychology = () => {
  return (
    <section className="bg-white text-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-purple-600"
          >
            Dark Psychology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg"
          >
            The Art of Persuasion, Manipulation, and Human Natures Dark Side.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {DARK_PSYCHOLOGY.map((concept) => (
            <DarkPsychologyCard
              key={concept.title}
              title={concept.title}
              description={concept.description}
              icon={concept.icon}
              tags={concept.tags}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DarkPsychology;
