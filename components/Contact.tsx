import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-neutral-50 dark:bg-[#050505] text-neutral-900 dark:text-white py-20 md:py-32 px-6 md:px-20 overflow-hidden transition-colors duration-500">
      {/* Decorative large text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-5">
        <span className="text-[20vw] font-serif leading-none whitespace-nowrap text-neutral-900 dark:text-white">Let's Connect</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-20">
          
          <div className="md:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-serif mb-12"
            >
              Have an idea?
            </motion.h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 font-light max-w-md mb-12">
              I'm always open to discussing product design work or partnership opportunities. Let's create something meaningful together.
            </p>
            
            <a 
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="inline-flex items-center gap-4 text-2xl md:text-3xl border-b border-neutral-300 dark:border-white/30 pb-2 hover:border-orange-600 dark:hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-500 transition-all duration-300 group"
            >
              <span>{SOCIAL_LINKS.email}</span>
              <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </a>
          </div>

          <div className="md:w-1/3 space-y-12">
             <div>
                <h4 className="text-neutral-500 uppercase tracking-widest text-sm mb-6">Contact Details</h4>
                <ul className="space-y-4 text-lg font-light text-neutral-600 dark:text-neutral-300">
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-orange-600 dark:text-orange-500" /> 
                    {SOCIAL_LINKS.phone}
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-orange-600 dark:text-orange-500" /> 
                    Vadodara, Gujarat
                  </li>
                </ul>
             </div>

             <div>
                <h4 className="text-neutral-500 uppercase tracking-widest text-sm mb-6">Socials</h4>
                <div className="flex gap-6">
                  {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
                    <a 
                      key={social} 
                      href="#" 
                      className="text-neutral-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-500 transition-colors uppercase text-sm tracking-wider"
                    >
                      {social}
                    </a>
                  ))}
                </div>
             </div>
          </div>
        </div>

        <div className="mt-32 pt-8 border-t border-neutral-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} Malav Patel. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Developed with Passion</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;