import React, { useRef } from 'react';
import { SKILLS } from '../constants';
import Marquee from './Marquee';

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Split skills into two rows for visual balance
  const row1 = SKILLS.slice(0, Math.ceil(SKILLS.length / 2)).map(s => s.name);
  const row2 = SKILLS.slice(Math.ceil(SKILLS.length / 2)).map(s => s.name);

  return (
    <section ref={containerRef} id="skills" className="py-16 bg-neutral-50 dark:bg-[#050505] relative overflow-hidden border-t border-neutral-200 dark:border-white/5 transition-colors duration-500">
      <div className="space-y-4 md:space-y-8">
        <Marquee items={row1} direction="left" speed={30} />
        <Marquee items={row2} direction="right" speed={30} />
      </div>
    </section>
  );
};

export default Skills;