"use client";

import { motion } from "framer-motion";

const DarkPsychologyCard = ({
  title,
  icon,
  description,
  tags,
  delay = 0,
}: {
  title: string;
  description: string;
  icon: string;
  tags: string[];
  delay?: number;
}) => {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: 5 }}
      className="bg-white rounded-xl p-6 border-l-4 border-red-400 hover:border-purple-500 transition-all duration-300  shadow-md hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-3 flex items-center">
        <span className="text-red-400 mr-2">{icon}</span>
        {title}
      </h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default DarkPsychologyCard;
