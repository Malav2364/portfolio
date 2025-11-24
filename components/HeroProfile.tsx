import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MousePointer2 } from 'lucide-react';

const HeroProfile: React.FC = () => {
  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center select-none pointer-events-none md:pointer-events-auto">
      {/* Central Profile Image */}
      <div className="relative z-10 w-64 h-64 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 group">
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" 
          alt="Profile" 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
        />
        
        {/* Name Tag with Cursor */}
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-6 -right-6 z-20"
        >
            <div className="relative">
                <MousePointer2 className="w-6 h-6 text-white fill-white absolute -top-3 -left-3 z-30 drop-shadow-md" />
                <div className="bg-[#FF4D4D] text-white px-6 py-3 rounded-xl font-medium shadow-xl border border-white/10 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    Malav Patel
                </div>
            </div>
        </motion.div>
      </div>

      {/* Floating Pills */}
      <FloatingPill text="Visual design" x={120} y={-140} delay={0} />
      <FloatingPill text="Storytelling" x={160} y={40} delay={0.5} />
      <FloatingPill text="UI/UX design" x={-160} y={60} delay={1} />
      <FloatingPill text="Motion design" x={-80} y={160} delay={1.5} />
      
      {/* Floating Icon */}
      <motion.div
        animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0]
        }}
        transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
        }}
        className="absolute -top-10 -left-10 w-16 h-16 bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20 blur-[1px] opacity-80"
      >
        <Sparkles className="text-white w-8 h-8" />
      </motion.div>

      {/* Background Grid Effect (Optional, subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] -z-10"></div>
    </div>
  );
};

const FloatingPill: React.FC<{ text: string; x: number; y: number; delay: number }> = ({ text, x, y, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
            opacity: 1, 
            scale: 1,
            x: [x, x + 10, x],
            y: [y, y - 10, y]
        }}
        transition={{
            opacity: { duration: 0.5, delay },
            scale: { duration: 0.5, delay },
            x: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay * 2 },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }
        }}
        className="absolute px-5 py-2.5 bg-[#1a1a1a] border border-white/10 rounded-full text-neutral-400 text-sm font-light shadow-lg backdrop-blur-sm hover:border-orange-500/50 hover:text-white transition-colors cursor-default"
        style={{ left: '50%', top: '50%', marginLeft: -50, marginTop: -20 }} // Center origin roughly
    >
        {text}
    </motion.div>
);

export default HeroProfile;
