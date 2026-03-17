import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, MapPin } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section id="contact" className="px-4 sm:px-6 max-w-4xl mx-auto pt-14 md:pt-24 pb-20 md:pb-32 text-center relative overflow-hidden">
      {/* Background beam - Much brighter now */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-500/40 blur-[120px] rounded-full -z-10 pointer-events-none mix-blend-screen" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tight text-white drop-shadow-lg">
          Ready to scale your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-300">market presence?</span>
        </h2>
        
        <p className="text-base sm:text-lg text-zinc-200 mb-8 md:mb-10 max-w-xl mx-auto font-light">
          Currently seeking roles in established companies or ambitious startups in Vaasa or remote. Let's discuss how I can bring value to your team.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:scale.trumarketing@gmail.com"
            className="w-full sm:w-auto px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(249,115,22,0.6)] border border-orange-300/30 hover:scale-105"
          >
            <Mail size={18} />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/tyler-tru-nguyen/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 hover:border-orange-500/50 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>

        <div className="mt-12 md:mt-16 flex items-center justify-center gap-6 text-zinc-400">
           <div className="flex items-center gap-2">
             <MapPin size={16} className="text-orange-400" />
             <span>Vaasa, Finland</span>
           </div>
        </div>
      </motion.div>
    </section>
  );
};
