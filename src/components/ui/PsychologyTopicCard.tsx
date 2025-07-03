"use client";

import { motion } from "framer-motion";

const PsychologyTopicCard = ({
  title,
  description,
  icon,
  delay = 0,
}: {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -5 }}
        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
      >
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </>
  );
};

export default PsychologyTopicCard;
