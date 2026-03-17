import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Zap, Globe, ChevronDown } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="group p-5 sm:p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-orange-500/0 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300 border border-orange-500/30 text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white group-hover:text-orange-200 transition-colors">{title}</h3>
      <p className="text-zinc-300 leading-relaxed text-sm group-hover:text-zinc-200 transition-colors font-light">
        {description}
      </p>
    </motion.div>
  );
};

export const ValueDetails: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const features = [
    {
      icon: <BarChart3 size={24} />,
      title: "Commercial Strategy & Growth Systems",
      description: "Designing scalable growth by aligning market opportunity, financial constraints, and execution models."
    },
    {
      icon: <Zap size={24} />,
      title: "Applied AI & Campaign Prototyping",
      description: "Leveraging generative AI to rapidly test, validate, and deploy high-impact marketing and go-to-market initiatives."
    },
    {
      icon: <Globe size={24} />,
      title: "Brand, Operations & Market Expansion",
      description: "Building brands and operational systems that scale across markets with precision, localization, and execution discipline."
    }
  ];

  return (
    <section id="services" className="px-4 sm:px-6 max-w-7xl mx-auto pb-0 pt-0 mt-4 md:-mt-20 relative">
      <div className="mb-10 md:mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6 text-white"
        >
          My Expertise
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100px" }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]"
        />
      </div>

      <div className="md:hidden space-y-3">
        {features.map((feature, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full flex items-center justify-between gap-3 p-4 text-left"
                aria-expanded={isOpen}
                aria-controls={`expertise-panel-${index}`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                    {feature.icon}
                  </div>
                  <h3 className="text-[15px] font-semibold text-white leading-snug">
                    {feature.title}
                  </h3>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-zinc-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-orange-300' : ''}`}
                />
              </button>

              <motion.div
                id={`expertise-panel-${index}`}
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4">
                  <p className="text-zinc-300 text-sm leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <div className="hidden md:grid grid-cols-3 gap-4 sm:gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            {...feature}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
};
