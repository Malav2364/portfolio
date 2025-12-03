import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import ThemeToggle from './components/ThemeToggle';
import DesignPortfolio from './components/DesignPortfolio';
import { Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<'home' | 'design'>('home');

  // Intro Loader Simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (item: string) => {
    if (item === 'Design Lab') {
      setView('design');
    } else {
      setView('home');
      // Allow time for state change before scrolling if we were in design view
      setTimeout(() => {
        const element = document.getElementById(item.toLowerCase() === 'home' ? 'root' : item.toLowerCase());
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsMenuOpen(false);
  };

  if (loading) {
    return (
      <div className="h-screen w-full bg-neutral-50 dark:bg-[#050505] flex items-center justify-center text-neutral-900 dark:text-white transition-colors duration-500">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: "200px" }} 
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-[1px] bg-neutral-900 dark:bg-white mb-4 mx-auto"
          />
          <h1 className="font-serif text-2xl italic tracking-wider">Malav Patel</h1>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 dark:bg-[#050505] min-h-screen text-neutral-900 dark:text-white selection:bg-orange-500 selection:text-white transition-colors duration-500">
      <CustomCursor />
      <BackToTop />
      
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-20 py-5 flex justify-between items-center bg-neutral-50/80 dark:bg-[#050505]/80 backdrop-blur-md transition-colors duration-500">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); handleNavClick('Home'); }}
          className="text-xl font-bold tracking-tighter uppercase z-50 text-neutral-900 dark:text-white"
        >
          MP<span className="text-orange-500">.</span>
        </a>
        
        <div className="flex items-center gap-4 z-50">
          <ThemeToggle />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-neutral-900 dark:text-white hover:text-orange-500 transition-colors cursor-hover"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-white dark:bg-[#0a0a0a] z-40 flex flex-col justify-center items-center"
          >
            <ul className="space-y-8 text-center">
              {['Home', 'About', 'Work', 'Design Lab', 'Skills', 'Contact'].map((item, i) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <button 
                    onClick={() => handleNavClick(item)}
                    className="text-4xl md:text-6xl font-serif text-neutral-900 dark:text-white hover:text-orange-500 transition-colors duration-300 cursor-hover"
                  >
                    {item}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero onNavigate={handleNavClick} />
            <About onNavigate={handleNavClick} />
            <Work />
            <Skills />
            <Contact />
          </motion.main>
        ) : (
          <DesignPortfolio key="design" onBack={() => setView('home')} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;