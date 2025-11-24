import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

export interface TreeItem {
  id: string | number;
  title: string;
  date: string;
  location?: string;
  description?: string;
  isLatest?: boolean;
}

export interface TreeGroup {
  id: string | number;
  title: string;
  logo?: string; // URL or Icon component could be handled differently, using string for now
  items: TreeItem[];
}

interface TreeTimelineProps {
  title: string;
  groups: TreeGroup[];
  icon?: React.ReactNode;
}

const TreeTimeline: React.FC<TreeTimelineProps> = ({ title, groups, icon }) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-8">
        {icon && <div className="text-orange-600 dark:text-orange-500">{icon}</div>}
        <h3 className="text-2xl font-serif text-neutral-900 dark:text-white">{title}</h3>
      </div>

      <div className="space-y-12">
        {groups.map((group, groupIndex) => (
          <div key={group.id} className="relative">
            {/* Group Header (Company/School) */}
            <div className="flex items-center gap-4 mb-4">
               <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 flex items-center justify-center shrink-0 z-10">
                  {/* Placeholder for Logo - using first letter if no logo */}
                  <span className="font-serif text-orange-600 dark:text-orange-500 font-bold text-lg">{group.title.charAt(0)}</span>
               </div>
               <h4 className="text-xl text-neutral-800 dark:text-neutral-200 font-medium">{group.title}</h4>
            </div>

            {/* Items Container */}
            <div className="relative pl-5 ml-5 border-l-2 border-neutral-200 dark:border-neutral-800 space-y-8 pb-2">
                {group.items.map((item, itemIndex) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.1 }}
                        className="relative pl-6"
                    >
                        {/* Curved Connector */}
                        <div className="absolute left-0 top-3 w-4 h-6 border-b-2 border-l-2 border-neutral-200 dark:border-neutral-800 rounded-bl-xl -ml-[2px] -mt-3"></div>
                        
                        <div className="group">
                            <div className="flex items-center gap-2 flex-wrap">
                                <h5 className="text-lg font-medium text-neutral-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                    {item.title}
                                </h5>
                                {item.isLatest && (
                                    <span className="bg-green-500/10 text-green-600 dark:text-green-500 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold border border-green-500/20">
                                        Current
                                    </span>
                                )}
                            </div>
                            
                            <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-500 mt-1 font-mono">
                                <span className="flex items-center gap-1">
                                    <Calendar size={12} />
                                    {item.date}
                                </span>
                                {item.location && (
                                    <span className="flex items-center gap-1">
                                        <MapPin size={12} />
                                        {item.location}
                                    </span>
                                )}
                            </div>

                            {item.description && (
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-3 leading-relaxed max-w-md font-light">
                                    {item.description}
                                </p>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreeTimeline;
