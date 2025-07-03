"use client";

import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

interface Props {
  title: string;
  icon: string;
  description: string;
  tags: string[];
}

const DarkPsychologyCard = ({ title, icon, description, tags }: Props) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -3, scale: 1.02 }}
      className="bg-white rounded-xl p-6 border-l-4 border-red-400 hover:border-purple-500 transition-all duration-300 shadow-md hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-3 flex items-center text-black">
        <span className="text-red-400 text-2xl mr-3">{icon}</span>
        {title}
      </h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-800 text-gray-200 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default DarkPsychologyCard;
