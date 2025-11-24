import React from 'react';
import { motion } from 'framer-motion';

export interface TimelineEntry {
  id: string | number;
  type?: 'entry' | 'header';
  title: string;
  subtitle?: string;
  date?: string;
  description?: string;
  tags?: string[];
}

interface TimelineProps {
  items: TimelineEntry[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="w-full py-20">
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Center Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-800 to-transparent md:-translate-x-1/2"></div>

        <div className="space-y-24">
          {items.map((item, index) => {
            if (item.type === 'header') {
                return (
                    <div key={item.id} className="relative flex justify-center items-center py-12">
                        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-orange-500 rounded-full z-10 md:-translate-x-1/2 ring-8 ring-neutral-900 shadow-[0_0_20px_rgba(249,115,22,0.5)]"></div>
                        <h3 className="text-4xl md:text-6xl font-serif text-neutral-800 font-bold uppercase tracking-tighter absolute left-12 md:left-auto md:static z-0 select-none pointer-events-none opacity-50 md:opacity-100">
                          {item.title}
                        </h3>
                        <div className="md:hidden pl-16">
                            <span className="text-orange-500 font-mono tracking-widest uppercase text-sm border-b border-orange-500/30 pb-1">{item.title}</span>
                        </div>
                    </div>
                );
            }

            const isEven = index % 2 === 0;
            
            return (
              <div key={item.id} className={`relative flex flex-col md:flex-row items-center group ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Date Side (Desktop) */}
                <div className={`hidden md:flex w-1/2 justify-${isEven ? 'start' : 'end'} px-12 items-center`}>
                    <div className={`text-${isEven ? 'left' : 'right'}`}>
                        <span className="block text-5xl font-serif text-neutral-700 font-bold opacity-50 group-hover:opacity-100 group-hover:text-white transition-all duration-500">
                            {item.date?.split(' ')[0]}
                        </span>
                        <span className="block text-sm font-mono text-orange-500 tracking-widest uppercase mt-1">
                            {item.date?.split(' ').slice(1).join(' ')}
                        </span>
                    </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-neutral-900 border border-neutral-600 rounded-full z-10 md:-translate-x-1/2 mt-1.5 md:mt-0 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.6)] transition-all duration-500"></div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className={`relative ${isEven ? 'md:text-right' : 'md:text-left'}`}
                    >
                        <div className="md:hidden mb-4 pl-1 border-l-2 border-orange-500">
                             <span className="text-2xl font-serif text-white block">{item.date?.split(' ')[0]}</span>
                             <span className="text-xs font-mono text-orange-500 uppercase tracking-widest">{item.date?.split(' ').slice(1).join(' ')}</span>
                        </div>

                        <div className="group-hover:-translate-y-1 transition-transform duration-500">
                            <h4 className="text-3xl font-serif text-white mb-2 group-hover:text-orange-400 transition-colors">{item.title}</h4>
                            <p className="text-sm text-neutral-500 font-mono mb-6 uppercase tracking-wider">{item.subtitle}</p>
                            {item.description && (
                                <p className="text-neutral-400 font-light leading-relaxed text-lg max-w-lg ml-auto mr-auto md:mx-0">
                                    {item.description}
                                </p>
                            )}
                        </div>
                    </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
