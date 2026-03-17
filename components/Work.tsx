import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { projects } from './projectsData';

export const Work: React.FC = () => {
  const projectOrder = ['song-platform', 'heuritech-strategy', 'gen-z-coliving', 'dojoy-toys'];
  const orderedProjects = [...projects].sort(
    (a, b) => projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id)
  );

  return (
    <div className="pt-12 md:pt-16 pb-24 px-6 max-w-7xl mx-auto relative z-10">
      {/* AI-Driven Campaign Prototyping Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="pt-12 md:pt-14"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            AI-Driven Campaign Prototyping
          </h2>
          <p className="text-lg text-zinc-300 font-light mb-6">
            Leveraging generative media and account-based marketing (ABM)<br />
            for the Nordic energy tech sector.
          </p>
          <p className="text-sm text-zinc-500 italic max-w-2xl mx-auto">
            Disclaimer: These campaign prototypes are unsolicited strategic analyses created for portfolio purposes. They are based on publicly available information and are not officially affiliated with, commissioned by, or endorsed by ABB or WE Tech Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: ABB */}
          <div className="group rounded-2xl bg-white/[0.03] border border-white/10 hover:border-orange-500/50 hover:bg-zinc-900/80 transition-all duration-300 overflow-hidden flex flex-col">
            <a
              href="https://drive.google.com/file/d/1Oo7bGRJlPIMiEt-tjn5M6Y3lAv8gp6pS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-video overflow-hidden block"
              aria-label="Watch ABB Strategic Outreach video"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src="/images/ABB1.jpg" 
                alt="ABB Strategic Outreach" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="w-16 h-16 bg-orange-500/90 rounded-full flex items-center justify-center text-white shadow-lg backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform">
                  <Play fill="currentColor" size={24} className="ml-1" />
                </div>
              </div>
            </a>
            
            <div className="p-8 flex flex-col flex-grow">
               <div className="text-orange-500 font-mono text-xs tracking-widest uppercase mb-3">CONCEPT CAMPAIGN</div>
               <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-100 transition-colors">ABB: Strategic Outreach</h3>
               <p className="text-zinc-400 font-light mb-8 flex-grow leading-relaxed">
                 A highly targeted, AI-enhanced video pitch designed to demonstrate localized brand storytelling for global energy leaders.
               </p>
               
               <a 
                 href="https://drive.google.com/file/d/1Oo7bGRJlPIMiEt-tjn5M6Y3lAv8gp6pS/view?usp=sharing"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-white font-semibold hover:text-orange-400 transition-colors w-max"
               >
                 Watch Video <ArrowRight size={18} />
               </a>
            </div>
          </div>

          {/* Card 2: WE Tech */}
          <div className="group rounded-2xl bg-white/[0.03] border border-white/10 hover:border-orange-500/50 hover:bg-zinc-900/80 transition-all duration-300 overflow-hidden flex flex-col">
             <a
               href="https://drive.google.com/file/d/1LiFT876PUnI0VBGFB6AGPC6tHbvkshRc/view?usp=sharing"
               target="_blank"
               rel="noopener noreferrer"
               className="relative aspect-video overflow-hidden block"
               aria-label="Watch WE Tech Solutions Maritime Innovation video"
             >
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
               <img 
                 src="/images/WeTech1.png" 
                 alt="WE Tech Solutions Maritime Innovation" 
                 className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                 <div className="w-16 h-16 bg-orange-500/90 rounded-full flex items-center justify-center text-white shadow-lg backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform">
                   <Play fill="currentColor" size={24} className="ml-1" />
                 </div>
               </div>
            </a>
            
            <div className="p-8 flex flex-col flex-grow">
               <div className="text-orange-500 font-mono text-xs tracking-widest uppercase mb-3">CONCEPT CAMPAIGN</div>
               <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-100 transition-colors">WE Tech Solutions: Maritime Innovation</h3>
               <p className="text-zinc-400 font-light mb-8 flex-grow leading-relaxed">
                 A speculative digital campaign translating complex sustainable marine technology into compelling, digestible visual narratives.
               </p>
               
               <a 
                 href="https://drive.google.com/file/d/1LiFT876PUnI0VBGFB6AGPC6tHbvkshRc/view?usp=sharing"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-white font-semibold hover:text-orange-400 transition-colors w-max"
               >
                 Watch Video <ArrowRight size={18} />
               </a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-10 md:mt-12 mb-8 md:mb-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white tracking-tighter">
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Work</span>
        </h1>
        <p className="text-xl text-zinc-300 font-light max-w-2xl">
          A showcase of projects where strategic thinking met creative execution.
        </p>
      </div>

      <div className="space-y-16 md:space-y-24 mb-12 md:mb-16">
        {orderedProjects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-8 md:gap-12 items-center group"
          >
            {/** Keep Dojoy uncropped while preserving card dimensions */}
            <Link 
              to={`/work/${project.id}`} 
              className={`flex-1 w-full cursor-pointer ${index % 2 === 1 ? 'md:order-2' : ''}`}
            >
               <div className={`relative rounded-2xl overflow-hidden aspect-video border border-white/10 ${project.id === 'dojoy-toys' ? 'bg-black/40 p-2' : ''}`}>
                  <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img src={project.image} alt={project.title} className={`w-full h-full ${project.id === 'dojoy-toys' ? 'object-contain' : 'object-cover'} transform group-hover:scale-105 transition-transform duration-700`} />
               </div>
            </Link>
            
            <div className="flex-1 space-y-6">
               <div className="text-orange-500 font-mono text-sm tracking-widest uppercase">{project.category}</div>
               <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-orange-100 transition-colors break-words">
                 <Link to={`/work/${project.id}`}>{project.title}</Link>
               </h2>
               <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-orange-200 font-semibold mb-4">
                  {project.result}
               </div>
               <p className="text-zinc-300 text-lg font-light leading-relaxed">
                 {project.shortDesc}
               </p>
               <Link 
                 to={`/work/${project.id}`}
                 className="inline-flex items-center gap-2 text-white border-b border-orange-500 pb-1 hover:text-orange-400 transition-colors"
               >
                 Read Case Study <ArrowRight size={16} />
               </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 md:mt-16 p-8 md:p-12 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col items-center text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-orange-500/5 blur-3xl rounded-full pointer-events-none" />
        <h3 className="text-xl md:text-3xl text-white font-bold mb-4 relative z-10 leading-relaxed max-w-3xl">
          Get to know the person behind the work.
        </h3>
        <p className="text-zinc-400 mb-8 relative z-10 max-w-2xl font-light">
          A closer look at the journey, mindset, and approach behind the execution.
        </p>
        <Link
          to="/about"
          className="relative z-10 group inline-flex items-center gap-2 px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:scale-105"
        >
          About Me →
        </Link>
      </motion.div>
    </div>
  );
};
