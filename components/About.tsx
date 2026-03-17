import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export const About: React.FC = () => {
  const experiences = [
    {
      year: "2019 – 2024",
      role: "Founder & Director",
      company: "DOJOY TOYS",
      description: "Bootstrapped a nationwide educational tech toy brand from concept to scale. Architected a remote global supply chain and achieved consistent 54% YoY growth."
    },
    {
      year: "2020 – 2022",
      role: "Sales & Marketing Manager & University Lecturer",
      company: "Belong / Academia",
      description: "Led go-to-market strategies for a premium Gen Z co-living brand, driving a 46% revenue surge. Concurrently taught practical business execution as a University Lecturer in Marketing."
    },
    {
      year: "2022 – 2024",
      role: "Business Development Manager",
      company: "Song Platform",
      description: "Architected CapEx marketing models and an omnichannel launch strategy for a multi-million-dollar commercial real estate ecosystem."
    }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-24 px-6 max-w-4xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 md:mb-16"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white tracking-tighter">
          Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Tyler N. Tru.</span>
        </h1>
        <p className="hidden md:block text-xl text-zinc-300 leading-relaxed max-w-2xl font-light">
          International Marketing Strategist & Entrepreneur
        </p>
      </motion.div>

      <div className="md:hidden mb-20 space-y-7 text-zinc-300 font-light">
        <div className="space-y-4">
          <p>
            I’m a marketing strategist shaped by entrepreneurship, global experiences, and a deep curiosity about what moves people.
          </p>
        </div>

        <img
          src="/images/Tyler-N-Tru-Profile1.jpg"
          alt="Tyler N. Tru"
          className="w-full aspect-[3/4] object-cover object-[center_15%] rounded-2xl border border-white/10 shadow-2xl"
        />

        <div className="space-y-4">
          <p>
            After building and successfully selling my own premium toys company in 2024, I began focusing on the next evolution of marketing — combining strong brand architecture with the capabilities of generative AI to design smarter, more scalable marketing systems.
          </p>
          <p>
            My international background has strongly influenced how I approach marketing. I completed high school in Australia, pursued higher education in France, and spent time in Vietnam, gaining firsthand exposure to the resilience and opportunity within developing markets. These experiences taught me that great marketing isn’t just about messaging — it’s about understanding people, culture, and context.
          </p>
          <p>
            Today, I’ve chosen to build my future in Finland, drawn by the country’s leadership in sustainable technology and energy innovation. Based in Vaasa, I’m particularly interested in applying modern marketing strategy and AI-driven systems to industries creating real, long-term global impact.
          </p>
        </div>

        <img
          src="/images/Tyler-N-Tru-Profile1.5.jpg"
          alt="Tyler N. Tru profile mid"
          className="w-full h-auto object-contain rounded-2xl border border-white/10 shadow-2xl"
        />

        <div className="space-y-4">
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">What I Work On</h3>
            <p>
              I’m especially interested in marketing challenges such as:
            </p>
            <p className="mt-4 whitespace-pre-line">
{`• Building strong brand positioning and strategic narratives
• Designing scalable marketing systems powered by AI
• Connecting products with international audiences
• Supporting companies working in sustainable technology and energy innovation`}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-2">Beyond Marketing</h3>
            <p>
              Outside of work, I’m actively integrating into my new home by learning Finnish and exploring local culture. Cooking is a genuine passion of mine — whether spending hours perfecting a Vietnamese Phở broth or preparing a classic French Boeuf Bourguignon. For me, both cooking and marketing share the same foundations: patience, creativity, and attention to detail.
            </p>
          </div>
        </div>

        <img
          src="/images/Food1.jpg"
          alt="Food"
          className="w-full h-auto object-contain rounded-2xl border border-white/10 shadow-2xl"
        />
      </div>

      <div className="hidden md:grid grid-cols-1 md:grid-cols-[1.15fr_1.85fr] gap-10 md:gap-14 mb-20">
        <div className="w-4/5 mx-auto md:w-full flex flex-col gap-8 md:gap-10">
          <img
            src="/images/Tyler-N-Tru-Profile1.jpg"
            alt="Tyler N. Tru"
            className="w-full aspect-[3/4] object-cover object-[center_15%] rounded-2xl border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
          />
          <img
            src="/images/Tyler-N-Tru-Profile1.5.jpg"
            alt="Tyler N. Tru profile mid"
            className="w-full h-auto object-contain rounded-2xl border border-white/10 shadow-2xl"
          />
          <img
            src="/images/Food1.jpg"
            alt="Food"
            className="w-3/4 md:w-4/5 self-center h-auto object-contain rounded-2xl border border-white/10 shadow-2xl"
          />
        </div>
        <div className="space-y-6 text-zinc-300 font-light">
          <p>
            I’m a marketing strategist shaped by entrepreneurship, global experiences, and a deep curiosity about what moves people.
          </p>
          <p>
            After building and successfully selling my own premium toys company in 2024, I began focusing on the next evolution of marketing — combining strong brand architecture with the capabilities of generative AI to design smarter, more scalable marketing systems.
          </p>
          <p>
            My international background has strongly influenced how I approach marketing. I completed high school in Australia, pursued higher education in France, and spent time in Vietnam, gaining firsthand exposure to the resilience and opportunity within developing markets. These experiences taught me that great marketing isn’t just about messaging — it’s about understanding people, culture, and context.
          </p>
          <p>
            Today, I’ve chosen to build my future in Finland, drawn by the country’s leadership in sustainable technology and energy innovation. Based in Vaasa, I’m particularly interested in applying modern marketing strategy and AI-driven systems to industries creating real, long-term global impact.
          </p>

          <div>
            <h3 className="text-white font-semibold text-lg mb-2">What I Work On</h3>
            <p>
              I’m especially interested in marketing challenges such as:
            </p>
            <p className="mt-4 whitespace-pre-line">
{`• Building strong brand positioning and strategic narratives
• Designing scalable marketing systems powered by AI
• Connecting products with international audiences
• Supporting companies working in sustainable technology and energy innovation`}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-2">Beyond Marketing</h3>
            <p>
              Outside of work, I’m actively integrating into my new home by learning Finnish and exploring local culture. Cooking is a genuine passion of mine — whether spending hours perfecting a Vietnamese Phở broth or preparing a classic French Boeuf Bourguignon. For me, both cooking and marketing share the same foundations: patience, creativity, and attention to detail.
            </p>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Briefcase className="text-orange-500" /> Experience
        </h2>
        <div className="border-l-2 border-white/10 ml-3 space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-zinc-900 border-2 border-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
              <span className="text-sm text-orange-400 font-mono mb-1 block">{exp.year}</span>
              <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
              <div className="text-zinc-400 text-sm mb-3 font-semibold">{exp.company}</div>
              <p className="text-zinc-300 font-light">{exp.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 md:mt-24 p-8 md:p-12 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col items-center text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-orange-500/5 blur-3xl rounded-full pointer-events-none" />
        <h3 className="text-xl md:text-3xl text-white font-bold mb-4 relative z-10 leading-relaxed max-w-3xl">
          Let’s build something that actually moves the needle.
        </h3>
        <p className="text-zinc-400 mb-8 relative z-10 max-w-2xl font-light">
          If you have something in mind, let’s turn it into execution.
        </p>
        <a
          href="mailto:scale.trumarketing@gmail.com"
          className="relative z-10 group inline-flex items-center gap-2 px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:scale-105"
        >
          Let’s Talk →
        </a>
      </motion.div>
    </div>
  );
};
