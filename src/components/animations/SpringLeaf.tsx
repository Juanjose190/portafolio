import React from 'react';
import { motion } from 'framer-motion';

export const SpringLeaf = () => {
  return (
    <motion.svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      className="w-full h-full"
    >
      {/* Stem */}
      <motion.path
        d="M50 80 Q50 50 50 20"
        stroke="#6DB33F"
        strokeWidth="4"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Leaf */}
      <motion.path
        d="M50 40 Q70 30 50 20 Q30 30 50 40"
        fill="#6DB33F"
        initial={{ scale: 0 }}
        animate={{ 
          scale: 1,
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          scale: { duration: 0.5, delay: 0.8 },
          rotate: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />
    </motion.svg>
  );
};

export default SpringLeaf;