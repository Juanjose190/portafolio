import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const AnimatedTerminal = () => {
  const commands = [
    'npm run dev',
    'Compiling...',
    'Deployed!'
  ];

  return (
    <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
      <div className="flex gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <AnimatePresence>
        {commands.map((command, index) => (
          <motion.div
            key={command}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 1.5 }}
            className="text-green-400"
          >
            <span className="text-blue-400">$ </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: index * 1.5,
                ease: "easeOut"
              }}
            >
              {command}
            </motion.span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedTerminal;