import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERIENCE_GROUPS, EDUCATION_GROUPS, SOCIAL_LINKS, DESIGN_PROJECTS } from '../constants';
import TreeTimeline from './TreeTimeline';
import { Briefcase, GraduationCap, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  onNavigate?: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Text Reveal (Bio)
      const bioElements = contentRef.current?.querySelectorAll('.bio-reveal');
      if (bioElements) {
        gsap.fromTo(bioElements,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 75%',
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 px-6 md:px-20 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 overflow-hidden relative transition-colors duration-500">
      {/* Background Decorative */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-orange-200/30 dark:bg-orange-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        
        {/* Left Col: Image */}
        <div className="md:sticky md:top-24 flex justify-center md:justify-start">
            <div className="about-image relative w-full max-w-[280px] md:max-w-sm aspect-[4/5] rounded-2xl overflow-hidden mb-8 group shadow-2xl bg-neutral-200 dark:bg-neutral-800">
                <img 
                  src="/bg_removed.png" 
                  alt="About Me" 
                  className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                />
                
                {/* Social Icons Overlay (Bottom Right) */}
                <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                     <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-black hover:text-white transition-all duration-300 group/icon">
                        <span className="sr-only">GitHub</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                     </a>
                     <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 group/icon">
                        <span className="sr-only">LinkedIn</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                     </a>
                     <a href={SOCIAL_LINKS.behance} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-[#1769ff] hover:border-[#1769ff] transition-all duration-300 group/icon">
                        <span className="sr-only">Behance</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="lucide lucide-behance"><path d="M20.47 11.29h-3.91c.08-1.02.51-1.62 1.62-1.62.94 0 1.45.43 1.62 1.11h2.29c-.25-1.87-1.87-2.98-3.91-2.98-3.06 0-4.68 2.13-4.68 4.93 0 2.64 1.62 4.93 4.85 4.93 2.13 0 3.83-1.02 4.17-3.23h-2.21c-.17.68-.68 1.28-1.87 1.28-1.28 0-1.96-.85-2.04-2.13h6.12c.09-.17.09-1.27-.05-2.29zm-4.68.85c.09-1.02.59-1.62 1.62-1.62.85 0 1.45.51 1.53 1.62h-3.15zM5.32 12.57h2.21c1.28 0 2.04-.68 2.04-1.79 0-1.19-.94-1.7-1.79-1.79.85-.17 1.45-.77 1.45-1.62 0-1.19-1.02-1.79-2.21-1.79H2.34v6.97h2.98zM4.63 7.21h2.04c.51 0 .94.17.94.85s-.43.85-.94.85H4.63V7.21zm.34 3.66h2.04c.6 0 1.02.17 1.02.94 0 .85-.43.94-1.02.94H4.97v-1.88zM14 4.74h3.91v1.45H14z"/></svg>
                     </a>
                     <a href={`mailto:${SOCIAL_LINKS.email}`} className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-red-500 hover:border-red-500 transition-all duration-300 group/icon">
                        <span className="sr-only">Email</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                     </a>
                </div>
            </div>
        </div>

        {/* Right Col: Content */}
        <div ref={contentRef}>
            <div className="about-bio mb-10">
                <h2 className="text-sm font-mono text-orange-600 dark:text-orange-500 uppercase tracking-widest mb-8">About Me</h2>
                <h3 className="text-3xl md:text-5xl font-serif leading-tight mb-8 text-neutral-900 dark:text-white">
                    Crafting digital experiences with a focus on <span className="italic text-neutral-500 dark:text-neutral-500">motion</span> and <span className="italic text-neutral-500 dark:text-neutral-500">precision</span>.
                </h3>
                <div className="space-y-6 text-base md:text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-10">
                    <p>
                        I'm a Full Stack Developer based in Vadodara, Gujarat, with a passion for building software that feels as good as it looks. My journey started with a curiosity for how things work on the web, which quickly evolved into a career obsession with pixel-perfect UIs and robust backend architectures.
                    </p>
                    <p>
                        I specialize in the MERN stack and Next.js, but I'm not just about code. I care deeply about the user journey, accessibility, and the tiny details that turn a good product into a great one. When I'm not coding, I'm likely exploring new design trends or optimizing performance metrics.
                    </p>
                </div>

                <div className="bio-reveal">
                    <a 
                        href="/Malav_Patel_Resume.pdf" 
                        download="Malav_Patel_Resume.pdf"
                        className="px-8 py-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-medium flex items-center gap-3 hover:bg-orange-600 dark:hover:bg-orange-500 hover:text-white dark:hover:text-white transition-all duration-300 group w-fit"
                    >
                        <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                        <span>Download CV</span>
                    </a>
                </div>
            </div>
        </div>
      </div>

      {/* Experience & Education Section - Full Width Below */}
      <div className="max-w-7xl mx-auto mt-20 md:mt-32">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <TreeTimeline title="Experience" groups={EXPERIENCE_GROUPS} icon={<Briefcase size={24} />} />
            <TreeTimeline title="Education" groups={EDUCATION_GROUPS} icon={<GraduationCap size={24} />} />
         </div>
      </div>

      {/* Design Lab Teaser */}
      <div className="max-w-7xl mx-auto mt-24 md:mt-32 border-t border-neutral-200 dark:border-neutral-800 pt-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
                <h2 className="text-sm font-mono text-orange-600 dark:text-orange-500 uppercase tracking-widest mb-6">Design Lab</h2>
                <h3 className="text-3xl md:text-5xl font-serif leading-tight mb-6 text-neutral-900 dark:text-white">
                    Where logic meets <span className="italic text-neutral-500">aesthetics</span>.
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-lg font-light leading-relaxed">
                    Beyond code, I explore the visual side of digital products. From brand identities to complex user interfaces, 
                    check out my dedicated portfolio for design work.
                </p>
            </div>
            
            <button 
                onClick={() => onNavigate?.('Design Lab')}
                className="group flex items-center gap-4 text-neutral-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
            >
                <div className="w-16 h-16 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center group-hover:border-orange-600 dark:group-hover:border-orange-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:-rotate-45 transition-transform duration-300"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
                <span className="font-mono uppercase tracking-widest text-sm">View Design Lab</span>
            </button>
        </div>

        {/* Design Carousel (Horizontal Scroll) */}
        <div className="mt-16 relative">
            {/* Scroll Buttons */}
            <div className="flex justify-end gap-2 mb-4">
                <button 
                  onClick={() => scroll('left')}
                  className="p-3 rounded-full border border-neutral-200 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-900 dark:text-white transition-colors"
                >
                    <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className="p-3 rounded-full border border-neutral-200 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-900 dark:text-white transition-colors"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            <div 
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {[
                    { title: "Neno Technology", image: "/Neno Tech images/1.png", category: "App Redesign" },
                    { title: "LUMIERE", image: "/LUMIERE images/1.jpg", category: "E-commerce App" },
                    { title: "Grills & Gravies", image: "/grills images/1.png", category: "Website Redesign" },
                    { title: "Thaad Restaurant", image: "/Thaad_images/1.png", category: "Brand Identity" }
                ].map((project, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => onNavigate?.('Design Lab')}
                        className="min-w-[85%] md:min-w-[45%] lg:min-w-[40%] snap-center cursor-pointer relative aspect-[16/9] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800 group border border-neutral-200 dark:border-white/5"
                    >
                        <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                        <div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <span className="text-xs font-mono uppercase tracking-widest text-orange-400 mb-2 block">{project.category}</span>
                            <h4 className="text-2xl font-serif">{project.title}</h4>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;