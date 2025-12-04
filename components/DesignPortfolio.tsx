import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { DESIGN_PROJECTS } from '../constants';
import { Project } from '../types';

interface DesignPortfolioProps {
  onBack: () => void;
}

const DesignPortfolio: React.FC<DesignPortfolioProps> = ({ onBack }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[60] bg-neutral-50 dark:bg-[#050505] overflow-y-auto custom-scrollbar"
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-20 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-20">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 text-neutral-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
          >
            <div className="p-3 rounded-full border border-neutral-200 dark:border-white/10 group-hover:border-orange-600 dark:group-hover:border-orange-500 transition-colors">
              <ArrowLeft size={20} />
            </div>
            <span className="font-mono uppercase tracking-widest text-sm">Back to Home</span>
          </button>

          <div className="text-right">
            <h1 className="text-4xl md:text-6xl font-serif text-neutral-900 dark:text-white">Design Lab</h1>
            <p className="text-neutral-500 dark:text-neutral-400 mt-2 font-light">Visual experiments & UI explorations</p>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {DESIGN_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer"
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
            >
              <div className="relative overflow-hidden bg-neutral-200 dark:bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Overlay Info */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-orange-600 text-white text-xs uppercase tracking-widest rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-serif text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="text-xs text-white/80 border border-white/20 px-2 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                        <Maximize2 size={20} />
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer for this page */}
        <div className="mt-32 border-t border-neutral-200 dark:border-white/10 pt-12 flex justify-between items-center text-neutral-500 dark:text-neutral-400 text-sm">
           <p>© 2024 Malav Patel. All rights reserved.</p>
           <p className="font-mono uppercase tracking-widest">Designed with Passion</p>
        </div>
      </div>

      {/* Lightbox / Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl w-full max-h-[90vh] flex flex-col md:flex-row gap-8 bg-neutral-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Image Area */}
                <div className="w-full md:w-2/3 bg-black flex flex-col overflow-hidden h-[40vh] md:h-auto flex-shrink-0 relative">
                    {/* Carousel Gallery */}
                    {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                        <div className="relative w-full h-full bg-neutral-900 flex items-center justify-center overflow-hidden group/carousel">
                            <AnimatePresence mode="wait">
                                <motion.img 
                                    key={currentImageIndex}
                                    src={selectedProject.gallery[currentImageIndex]}
                                    alt={`${selectedProject.title} view ${currentImageIndex + 1}`}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="max-w-full max-h-full object-contain shadow-2xl p-4"
                                />
                            </AnimatePresence>

                            {/* Navigation Controls */}
                            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentImageIndex((prev) => (prev === 0 ? (selectedProject.gallery?.length || 1) - 1 : prev - 1));
                                    }}
                                    className="p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-colors pointer-events-auto"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentImageIndex((prev) => (prev + 1) % (selectedProject.gallery?.length || 1));
                                    }}
                                    className="p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-colors pointer-events-auto"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>

                            {/* Dots Indicator */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {selectedProject.gallery.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-orange-500 w-6' : 'bg-white/30 hover:bg-white/50'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Info Area */}
                <div className="w-full md:w-1/3 p-6 md:p-12 flex flex-col bg-neutral-900 text-white border-l border-white/10 overflow-y-auto custom-scrollbar flex-1">
                    <span className="text-orange-500 font-mono text-xs uppercase tracking-widest mb-4">{selectedProject.category}</span>
                    <h2 className="text-3xl md:text-4xl font-serif mb-8">{selectedProject.title}</h2>
                    
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Overview</h4>
                            <p className="text-neutral-300 leading-relaxed font-light text-sm md:text-base">
                                {selectedProject.description}
                            </p>
                        </div>

                        {selectedProject.problem && (
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">The Problem</h4>
                                <p className="text-neutral-300 leading-relaxed font-light text-sm md:text-base">
                                    {selectedProject.problem}
                                </p>
                            </div>
                        )}

                        {selectedProject.solution && (
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">The Solution</h4>
                                <p className="text-neutral-300 leading-relaxed font-light text-sm md:text-base">
                                    {selectedProject.solution}
                                </p>
                            </div>
                        )}

                        {selectedProject.impact && (
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-2">The Impact</h4>
                                <p className="text-neutral-300 leading-relaxed font-light text-sm md:text-base">
                                    {selectedProject.impact}
                                </p>
                            </div>
                        )}

                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">Tools Used</h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.tech.map(t => (
                                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-neutral-300 text-xs">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="pt-8 border-t border-white/10">
                            <button className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors group">
                                <span className="uppercase tracking-widest text-sm">View Prototype</span>
                                <ExternalLink size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DesignPortfolio;
