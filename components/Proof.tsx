import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectProps {
  id: string;
  title: string;
  category: string;
  image: string;
  summary: string;
  size: 'small' | 'large' | 'tall';
  className?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ id, title, category, image, summary, size, className }) => {
  const imagePositionClass = id === 'dojoy-toys' ? 'object-top' : 'object-center';

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className={`group relative overflow-hidden rounded-2xl bg-zinc-800 border border-white/10 hover:border-orange-500/50 transition-colors duration-500 ${className}`}
    >
      <Link to={`/work/${id}`} className="block h-full w-full relative">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-orange-900/10 transition-colors z-10" />
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover ${imagePositionClass} transform group-hover:scale-105 transition-transform duration-700 ease-out`}
        />
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10" />

        {/* Content Container */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20 translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <span className="text-orange-400 text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-2 block font-bold truncate">{category}</span>
          <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-orange-100 transition-colors drop-shadow-md leading-tight break-words overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
            {title}
          </h3>
          
          {/* Summary Reveal on Hover */}
          <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
            <div className="overflow-hidden">
               <p className="hidden md:block text-zinc-300 text-sm mb-4 line-clamp-3 leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                 {summary}
               </p>
               <span className="hidden md:inline-flex items-center gap-2 text-orange-400 text-sm font-semibold group-hover:text-orange-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-200">
                 View Case Study <ArrowRight size={16} />
               </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export const Proof: React.FC = () => {
  return (
    <section id="work" className="px-4 sm:px-6 max-w-7xl mx-auto pb-16 md:pb-20 pt-8 md:pt-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4 md:gap-6">
        <div>
           <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Selected Work</h2>
           <p className="text-zinc-300 max-w-xl font-light">
             A transparent look at the actual businesses I have built and scaled. My personal case studies in commercial strategy, cross-border expansion, and revenue execution.
           </p>
        </div>
        <Link to="/work" className="text-zinc-200 border-b border-orange-500/60 pb-1 hover:text-orange-400 hover:border-orange-400 transition-colors">
          View all projects
        </Link>
      </div>

      {/* Grid Layout: 
          Row 1: Song Platform (2 cols) | Belong (1 col, 2 rows)
          Row 2: Dojoy Toys (2 cols) | [Belong continues] 
      */}
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] sm:auto-rows-[280px] md:auto-rows-[300px] gap-4 sm:gap-6">
        <ProjectCard 
          id="song-platform"
          title="Song Platform: Multi-Million-Dollar Ecosystem" 
          category="Business Development & Project Management" 
          image="/images/SongPlatform1.jpg"
          summary="Architected a comprehensive CapEx marketing model and omnichannel launch strategy for a premium commercial real estate development."
          size="large"
          className="md:col-span-2"
        />
        <ProjectCard 
          id="gen-z-coliving"
          title="Belong: Gen Z Co-Living Launch" 
          category="Sales & Marketing Manager" 
          image="/images/Belong1.jpg"
          summary="Bridged global investment models with local market realities, driving a 46% revenue surge through data-driven localization and strategic sourcing."
          size="tall"
          className="md:row-span-2 h-full"
        />
        <ProjectCard 
          id="heuritech-strategy"
          title="Heuritech: Key Account Strategy" 
          category="Key Account Strategy & Market Analyst" 
          image="/images/Heuritech5.jpeg"
          summary="Translated AI-powered market intelligence into commercial strategy for global luxury leaders including LVMH, Dior, and Prada."
          size="large"
          className="md:col-span-2"
        />
      </div>
      
      {/* Testimonial / Proof Stat */}
      <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 border-t border-white/10 pt-10 md:pt-12">
        <div className="text-center md:text-left">
          <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500 mb-2 drop-shadow-sm">3</div>
          <div className="text-zinc-400 text-sm uppercase tracking-wide font-semibold">MAJOR VENTURES SCALED</div>
        </div>
        <div className="text-center md:text-left">
          <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500 mb-2 drop-shadow-sm">$3.2M</div>
          <div className="text-zinc-400 text-sm uppercase tracking-wide font-semibold">INVESTMENTS MANAGED</div>
        </div>
        <div className="text-center md:text-left">
          <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500 mb-2 drop-shadow-sm">4</div>
          <div className="text-zinc-400 text-sm uppercase tracking-wide font-semibold">GLOBAL MARKETS EXPERIENCED</div>
        </div>
      </div>

      {/* Services CTA Block */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 md:mt-16 p-6 sm:p-8 md:p-12 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col items-center text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-orange-500/5 blur-3xl rounded-full pointer-events-none" />
        <h3 className="text-lg sm:text-xl md:text-2xl text-white font-semibold mb-6 md:mb-8 relative z-10 leading-relaxed">
          Want to see exactly how I drive these results? <span className="text-zinc-400 block md:inline">Explore my strategic services.</span>
        </h3>
        <Link
          to="/services"
          className="relative z-10 group inline-flex items-center gap-2 px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:scale-105"
        >
          View My Services
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </section>
  );
};
