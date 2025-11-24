import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence, motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ExternalLink, Github, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Work: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const nextProject = () => {
    setMobileIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevProject = () => {
    setMobileIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.work-header > *',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.work-header',
            start: 'top 85%',
          }
        }
      );

      // Projects Animation (Desktop Only)
      const projects = gsap.utils.toArray('.desktop-project-card') as HTMLElement[];
      
      projects.forEach((card, i) => {
        // Image Parallax Scrub
        const img = card.querySelector('.project-img');
        if (img) {
            gsap.fromTo(img, 
                { scale: 1.1, yPercent: -10 },
                {
                    scale: 1.1,
                    yPercent: 10,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1
                    }
                }
            );
        }

        // Card Entrance
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });

        tl.fromTo(card,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }
        );
        
        // Stagger internal text elements
        const textElems = card.querySelectorAll('.project-text-elem');
        tl.fromTo(textElems,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.05, duration: 0.5, ease: 'power2.out' },
            "-=0.5"
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="work" className="py-32 px-6 md:px-20 bg-neutral-50 dark:bg-[#050505] relative z-10 overflow-hidden transition-colors duration-500">
      <div className="max-w-[1800px] mx-auto">
        <div className="work-header flex flex-col md:flex-row justify-between items-end mb-20 lg:mb-32 border-b border-neutral-200 dark:border-white/10 pb-12">
          <div>
            <h2 className="text-5xl md:text-8xl font-serif text-neutral-900 dark:text-white tracking-tight">Selected Work</h2>
            <p className="text-orange-600 dark:text-orange-500 mt-4 font-mono uppercase tracking-widest text-sm ml-2">2023 — Present</p>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 mt-8 md:mt-0 max-w-sm text-right font-light text-lg">
            A curation of projects showcasing technical depth, performance optimization, and visual precision.
          </p>
        </div>

        {/* Desktop View (Vertical List) */}
        <div className="hidden lg:flex flex-col gap-40">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id}
              className={`desktop-project-card group flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center cursor-pointer`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Side */}
              <div className="w-full lg:w-3/5 relative perspective-1000">
                 <div className="relative overflow-hidden aspect-[16/10] bg-neutral-200 dark:bg-neutral-900 rounded-sm cursor-none shadow-lg dark:shadow-none">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-img w-full h-full object-cover opacity-90 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    
                    {/* View Project Overlay Indicator */}
                    <div 
                        className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full w-24 h-24 flex items-center justify-center">
                            <ArrowRight className="text-white w-8 h-8 -rotate-45" />
                        </div>
                    </div>
                 </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-2/5 space-y-8 relative">
                <div className="space-y-4">
                    <div className="project-text-elem flex items-center gap-3">
                       <span className="w-8 h-[1px] bg-orange-600 dark:bg-orange-500"></span>
                       <span className="text-orange-600 dark:text-orange-500 font-mono text-xs uppercase tracking-widest">{project.category}</span>
                    </div>
                    
                    <h3 className="project-text-elem text-4xl md:text-6xl font-serif text-neutral-900 dark:text-white leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="project-text-elem text-neutral-600 dark:text-neutral-400 leading-relaxed font-light text-lg max-w-md">
                      {project.description}
                    </p>
                </div>
                
                <div className="project-text-elem flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-4 py-1.5 border border-neutral-300 dark:border-white/10 rounded-full text-neutral-500 dark:text-neutral-400 text-xs uppercase tracking-wide hover:border-orange-500/50 hover:text-orange-600 dark:hover:text-orange-400 transition-colors cursor-default">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="project-text-elem flex gap-8 pt-4">
                  <button onClick={(e) => e.stopPropagation()} className="cursor-hover group/btn flex items-center gap-2 text-neutral-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-500 transition-colors pb-1 border-b border-transparent hover:border-orange-600 dark:hover:border-orange-500">
                    <span className="text-sm uppercase tracking-widest">Live Demo</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <button onClick={(e) => e.stopPropagation()} className="cursor-hover group/btn flex items-center gap-2 text-neutral-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-500 transition-colors pb-1 border-b border-transparent hover:border-orange-600 dark:hover:border-orange-500">
                    <span className="text-sm uppercase tracking-widest">Source Code</span>
                    <Github className="w-4 h-4 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View (Carousel) */}
        <div className="lg:hidden relative">
            <div className="overflow-hidden min-h-[600px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={mobileIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="flex flex-col gap-8"
                    >
                        {/* Image */}
                        <div 
                            className="w-full relative aspect-[16/10] bg-neutral-200 dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg"
                            onClick={() => setSelectedProject(PROJECTS[mobileIndex])}
                        >
                            <img 
                                src={PROJECTS[mobileIndex].image} 
                                alt={PROJECTS[mobileIndex].title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10" />
                            <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full">
                                <ArrowRight className="text-white w-5 h-5 -rotate-45" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-orange-600 dark:bg-orange-500"></span>
                                <span className="text-orange-600 dark:text-orange-500 font-mono text-xs uppercase tracking-widest">{PROJECTS[mobileIndex].category}</span>
                            </div>

                            <h3 className="text-3xl font-serif text-neutral-900 dark:text-white leading-tight">
                                {PROJECTS[mobileIndex].title}
                            </h3>

                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-light text-base">
                                {PROJECTS[mobileIndex].description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {PROJECTS[mobileIndex].tech.map(t => (
                                    <span key={t} className="px-3 py-1 border border-neutral-300 dark:border-white/10 rounded-full text-neutral-500 dark:text-neutral-400 text-[10px] uppercase tracking-wide">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-6 pt-2">
                                <button onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-neutral-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-500 transition-colors pb-1 border-b border-transparent hover:border-orange-600 dark:hover:border-orange-500">
                                    <span className="text-xs uppercase tracking-widest">Live Demo</span>
                                    <ExternalLink className="w-3 h-3" />
                                </button>
                                <button onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-neutral-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-500 transition-colors pb-1 border-b border-transparent hover:border-orange-600 dark:hover:border-orange-500">
                                    <span className="text-xs uppercase tracking-widest">Source Code</span>
                                    <Github className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-neutral-200 dark:border-white/5">
                <button 
                    onClick={prevProject}
                    className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-orange-100 dark:hover:bg-neutral-700 transition-colors"
                >
                    <ChevronLeft size={20} />
                </button>

                <div className="flex gap-2">
                    {PROJECTS.map((_, i) => (
                        <div 
                            key={i} 
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === mobileIndex ? 'bg-orange-600 dark:bg-orange-500 w-6' : 'bg-neutral-300 dark:bg-neutral-800'}`} 
                        />
                    ))}
                </div>

                <button 
                    onClick={nextProject}
                    className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-orange-100 dark:hover:bg-neutral-700 transition-colors"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                {/* Backdrop */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                    className="absolute inset-0 bg-black/80 backdrop-blur-md"
                />
                
                {/* Modal Container */}
                <motion.div
                    layoutId={`project-modal-${selectedProject.id}`} 
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                >
                    {/* Close Button */}
                    <button 
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-6 right-6 z-50 p-2 bg-white/50 dark:bg-black/50 backdrop-blur-md border border-neutral-200 dark:border-white/10 rounded-full text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-white hover:text-black transition-all duration-300 cursor-hover"
                    >
                        <X size={24} />
                    </button>

                    {/* Content Scrollable Area */}
                    <div className="overflow-y-auto custom-scrollbar h-full">
                        {/* Hero Image */}
                        <div className="relative w-full h-[50vh] md:h-[60vh]">
                            <img 
                                src={selectedProject.image} 
                                alt={selectedProject.title} 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0a0a] via-transparent to-transparent opacity-90" />
                            
                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-orange-600 dark:text-orange-500 font-mono text-sm uppercase tracking-widest mb-3"
                                >
                                    {selectedProject.category}
                                </motion.p>
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-4xl md:text-7xl font-serif text-neutral-900 dark:text-white leading-tight"
                                >
                                    {selectedProject.title}
                                </motion.h2>
                            </div>
                        </div>

                        {/* Details Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 md:p-12">
                            {/* Main Content */}
                            <div className="lg:col-span-8 space-y-10">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <h3 className="text-2xl font-serif text-neutral-900 dark:text-white mb-6">Project Overview</h3>
                                    <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed font-light">
                                        {selectedProject.description}
                                        <br /><br />
                                        This project represents a strategic approach to problem-solving within the {selectedProject.category} domain. 
                                        By focusing on intuitive user flows and robust architecture, we created a solution that not only meets functional requirements but also provides a delightful user experience.
                                        The implementation leverages modern best practices in performance optimization and accessibility.
                                    </p>
                                </motion.div>

                                {/* Gallery (Simulated) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                >
                                    <div className="aspect-video bg-neutral-100 dark:bg-neutral-900 rounded-lg overflow-hidden border border-neutral-200 dark:border-white/5">
                                        <img src={`https://picsum.photos/seed/${selectedProject.id}1/800/600`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gallery View 1" />
                                    </div>
                                    <div className="aspect-video bg-neutral-100 dark:bg-neutral-900 rounded-lg overflow-hidden border border-neutral-200 dark:border-white/5">
                                        <img src={`https://picsum.photos/seed/${selectedProject.id}2/800/600`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gallery View 2" />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Sidebar Info */}
                            <div className="lg:col-span-4 space-y-8">
                                <motion.div 
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="p-6 bg-neutral-50 dark:bg-white/5 rounded-xl border border-neutral-200 dark:border-white/10"
                                >
                                    <h4 className="text-neutral-900 dark:text-white font-serif text-lg mb-6">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map(t => (
                                            <span key={t} className="px-3 py-1.5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded text-neutral-500 dark:text-neutral-400 text-xs uppercase tracking-wider">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="space-y-4"
                                >
                                    <a href="#" className="flex items-center justify-between w-full p-4 bg-orange-600 hover:bg-orange-500 text-white rounded-lg transition-colors group cursor-hover">
                                        <span className="font-medium">Live Demo</span>
                                        <ExternalLink size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                    <a href="#" className="flex items-center justify-between w-full p-4 bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white rounded-lg transition-colors group cursor-hover">
                                        <span className="font-medium">Source Code</span>
                                        <Github size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="pt-6 border-t border-neutral-200 dark:border-white/10"
                                >
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <span className="block text-neutral-500 text-xs uppercase tracking-widest mb-1">Year</span>
                                            <span className="block text-neutral-900 dark:text-white font-serif text-lg">2024</span>
                                        </div>
                                        <div>
                                            <span className="block text-neutral-500 text-xs uppercase tracking-widest mb-1">Role</span>
                                            <span className="block text-neutral-900 dark:text-white font-serif text-lg">Design & Dev</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Work;