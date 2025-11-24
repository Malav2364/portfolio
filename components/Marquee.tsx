import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ items, direction = 'left', speed = 20 }) => {
  return (
    <div className="relative flex overflow-hidden py-4 group">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral-50 dark:from-[#050505] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neutral-50 dark:from-[#050505] to-transparent z-10"></div>

      <motion.div
        initial={{ x: direction === 'left' ? 0 : '-50%' }}
        animate={{ x: direction === 'left' ? '-50%' : 0 }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-8 md:gap-16 whitespace-nowrap flex-nowrap"
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-4xl md:text-7xl font-serif text-neutral-300 dark:text-neutral-800 font-bold uppercase tracking-tighter hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 cursor-default select-none">
              {item}
            </span>
            <span className="text-orange-600 dark:text-orange-500 text-2xl">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
