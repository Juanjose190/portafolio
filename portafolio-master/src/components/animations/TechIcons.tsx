import React from 'react';
import { motion } from 'framer-motion';

interface TechIconProps {
  type: 'react' | 'postgres';
}

export const TechIcon: React.FC<TechIconProps> = ({ type }) => {
  if (type === 'react') {
    return (
      <motion.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <circle cx="50" cy="50" r="6" fill="#61DAFB" />
        <ellipse
          cx="50"
          cy="50"
          rx="20"
          ry="8"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="2"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="20"
          ry="8"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="2"
          transform="rotate(60 50 50)"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="20"
          ry="8"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="2"
          transform="rotate(-60 50 50)"
        />
      </motion.svg>
    );
  }

  return (
    <motion.svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      className="w-full h-full"
      animate={{
        y: [0, -5, 0]
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <path
        d="M50 20 C30 20 20 35 20 50 C20 65 30 80 50 80 C70 80 80 65 80 50 C80 35 70 20 50 20"
        fill="#336791"
      />
      <circle cx="50" cy="50" r="5" fill="white" />
      <path
        d="M35 45 Q50 35 65 45"
        fill="none"
        stroke="white"
        strokeWidth="2"
      />
    </motion.svg>
  );
};

export default TechIcon;