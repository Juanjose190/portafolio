import React from 'react';
import { motion } from 'framer-motion';

export const PixelCat = () => {
  return (
    <motion.svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      className="w-full h-full"
    >
      {/* Body */}
      <rect x="16" y="32" width="32" height="16" fill="#808080" />
      
      {/* Head */}
      <rect x="20" y="20" width="24" height="20" fill="#808080" />
      
      {/* Ears */}
      <polygon points="20,20 28,20 24,12" fill="#808080" />
      <polygon points="36,20 44,20 40,12" fill="#808080" />
      
      {/* Eyes */}
      <motion.rect
        x="24"
        y="24"
        width="4"
        height="4"
        fill="#000"
        animate={{
          scaleY: [1, 0.1, 1],
        }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          repeatDelay: 2.5
        }}
      />
      <motion.rect
        x="36"
        y="24"
        width="4"
        height="4"
        fill="#000"
        animate={{
          scaleY: [1, 0.1, 1],
        }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          repeatDelay: 2.5
        }}
      />
      
      {/* Tail */}
      <motion.path
        d="M48 40 L56 40 L60 36"
        stroke="#808080"
        strokeWidth="4"
        fill="none"
        animate={{
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transformOrigin: '48px 40px' }}
      />
    </motion.svg>
  );
};

export default PixelCat;