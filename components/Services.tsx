import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  const services = [
    {
      title: "Commercial & Growth Strategy",
      price: "Strategic",
      description: "A complete commercial roadmap for scaling your business. I bridge the gap between financial constraints and market demands, identifying bottlenecks and deploying agile, omnichannel go-to-market strategies.",
      features: ["Market Analysis & Segmentation", "CapEx & Financial Modeling", "Omnichannel Campaign Architecture", "B2B Partner Sourcing"],
      ctaLabel: "View Case Study",
      ctaTo: "/work/gen-z-coliving"
    },
    {
      title: "Applied AI & Digital Campaigns",
      price: "Tactical",
      description: "High-impact digital execution powered by next-generation technology. I leverage Generative AI alongside traditional performance marketing to dramatically scale content production, lower CAC, and optimize ROI.",
      features: ["AI-Enhanced Content Production", "Paid Media Execution (Meta, Google)", "Audience Insight & A/B Testing", "Rapid Visual Prototyping"],
      ctaLabel: "Explore Project",
      ctaTo: "/work/heuritech-strategy"
    },
    {
      title: "Brand Building & Operations",
      price: "Organic",
      description: "From conceptualization to supply chain reality. I help startups and scale-ups build premium brand identities, source reliable vendors, and structure the logistics needed to handle aggressive growth.",
      features: ["End-to-End Brand Positioning", "Global Supply Chain Sourcing", "Vendor Negotiation (TCO/AQL)", "Cross-Cultural Communication"],
      ctaLabel: "View Project",
      ctaTo: "/work/dojoy-toys"
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white tracking-tighter">
          How I Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Help</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 font-light">
          Flexible engagement models designed for startups and scale-ups. Whether you need a fractional CMO or a specific campaign execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-orange-500/50 hover:bg-zinc-900/80 transition-all duration-300 group"
          >
            <div className="mb-4 text-orange-400 font-mono text-sm uppercase tracking-widest">{service.price}</div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{service.title}</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed flex-grow">
              {service.description}
            </p>
            
            <ul className="space-y-4 mb-8">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <Link 
              to={service.ctaTo}
              className="w-full py-4 rounded-xl border border-white/20 hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-all font-semibold flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
            >
              {service.ctaLabel} <ArrowRight size={16} />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Process Section */}
      <div className="mt-20 md:mt-32">
        <h2 className="text-3xl font-bold mb-12 text-center">My Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           {[
             { step: "01", title: "Discovery", desc: "Deep dive into your data, financials, and market positioning." },
             { step: "02", title: "Strategy", desc: "Architecting the CapEx-aligned roadmap and go-to-market hypotheses." },
             { step: "03", title: "Execution", desc: "Launching omnichannel campaigns and managing strategic partnerships." },
             { step: "04", title: "Optimize", desc: "Utilizing data and AI to continuously refine performance and maximize ROI." }
           ].map((item, i) => (
             <div key={i} className="relative p-6 border-l border-white/10 pl-8">
               <div className="text-5xl font-bold text-white/5 absolute -top-4 left-4 select-none">{item.step}</div>
               <h3 className="text-xl font-bold text-white mb-2 relative z-10">{item.title}</h3>
               <p className="text-zinc-400 text-sm relative z-10">{item.desc}</p>
             </div>
           ))}
        </div>
      </div>

      {/* Portfolio CTA Block */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 p-8 md:p-12 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col items-center text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-orange-500/5 blur-3xl rounded-full pointer-events-none" />
        <h3 className="text-xl md:text-3xl text-white font-bold mb-8 relative z-10 leading-relaxed max-w-3xl">
          Strategy is just theory until it drives revenue. <span className="text-zinc-400 block mt-2">See the case studies.</span>
        </h3>
        <Link
          to="/work"
          className="relative z-10 group inline-flex items-center gap-2 px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:scale-105"
        >
          View My Portfolio
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
};
