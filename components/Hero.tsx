import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Palette } from 'lucide-react';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      // 1. Text Reveal
      tl.fromTo('.hero-text-reveal',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }
      );

      // 2. Image Reveal (Scale up from bottom)
      tl.fromTo('.hero-image-container',
        { scaleY: 0, transformOrigin: "top" },
        { scaleY: 1, duration: 1.2, ease: "expo.out" },
        "-=0.8"
      )
      .fromTo('.hero-image',
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" },
        "<"
      );

      // 3. Stats Reveal
      tl.fromTo('.hero-stat',
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
        "-=0.6"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center justify-center px-6 md:px-12 pt-24 pb-12 overflow-hidden bg-neutral-50 dark:bg-[#050505] transition-colors duration-500">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-200/30 dark:bg-purple-900/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-200/30 dark:bg-orange-900/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
            <p className="hero-text-reveal text-orange-600 dark:text-orange-500 font-mono tracking-widest uppercase text-sm mb-4">
                Hey, I'm Malav,
            </p>
            
            <h1 className="hero-text-reveal text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-900 dark:text-white leading-[0.9] mb-6 tracking-tighter">
                <span className="block font-serif italic font-light">Full Stack</span>
                <span className="block text-orange-600 dark:text-orange-500">Developer</span>
                <span className="block">&</span>
                {/* <span className="block font-serif italic font-light">UI/UX</span> */}
                <span className="block text-orange-600 dark:text-orange-500">Designer</span>
            </h1>

            <p className="hero-text-reveal text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-8">
                Transforming ideas into stunning visuals—UI/UX and brand design that captivates, engages, and delivers results.
            </p>

            <div className="hero-text-reveal flex flex-col md:flex-row justify-center lg:justify-start gap-4">
                <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group bg-neutral-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-medium flex items-center justify-center gap-3 hover:bg-orange-600 dark:hover:bg-orange-500 hover:text-white dark:hover:text-white transition-all duration-300"
                >
                    <span>Contact Me</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                    onClick={() => onNavigate?.('Design Lab')}
                    className="group bg-transparent border border-neutral-300 dark:border-white/20 text-neutral-900 dark:text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-3 hover:bg-neutral-100 dark:hover:bg-white/10 transition-all duration-300"
                >
                    <span>Explore Designs</span>
                    <Palette size={20} className="group-hover:rotate-12 transition-transform" />
                </button>
            </div>
        </div>

        {/* Right Column: Image */}
        <div className="order-1 lg:order-2 flex justify-center h-full">
            <div className="hero-image-container group relative w-full max-w-md aspect-[3/4] rounded-b-full rounded-t-[100px] overflow-hidden border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50">
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                <img 
                    src="/hero-profile.jpg" 
                    alt="Malav Patel" 
                    className="hero-image w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;