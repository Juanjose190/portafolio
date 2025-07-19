import React from 'react';
import { motion } from 'framer-motion';

export const JavaCup = () => {
  return (
    <motion.svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      className="w-full h-full"
    >
      {/* Cup body */}
      <motion.path
        d="M20 30 L20 70 Q20 80 30 80 L70 80 Q80 80 80 70 L80 30"
        fill="#5382A1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Handle */}
      <motion.path
        d="M80 40 Q90 40 90 50 L90 60 Q90 70 80 70"
        fill="none"
        stroke="#5382A1"
        strokeWidth="4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      />

      {/* Steam particles */}
      {[...Array(3)].map((_, i) => (
        <motion.path
          key={i}
          d={`M${40 + i * 10} 30 Q${45 + i * 10} ${20 - i * 5} ${50 + i * 10} 30`}
          fill="none"
          stroke="#5382A1"
          strokeWidth="2"
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: -10
          }}
          transition={{
            duration: 2,
            delay: i * 0.4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
    </motion.svg>
  );
};

export default JavaCup;