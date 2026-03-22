import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const [desktopImageLoaded, setDesktopImageLoaded] = React.useState(false);

  return (
    <section className="relative pt-16 md:pt-32 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-2 md:gap-6">
      {/* Text Content */}
      <div className="flex-1 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            {/* Glow behind text */}
            <div className="absolute -inset-10 bg-orange-500/20 blur-[60px] -z-10 rounded-full opacity-50"></div>
            <h1 className="md:hidden text-[1.82rem] font-bold tracking-tight leading-[1.08] mb-2 text-white drop-shadow-lg">
              <span className="block whitespace-nowrap">Architecting High-Value</span>
              <span className="block whitespace-nowrap">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-red-500 brightness-125">
                  Commercial
                </span>{' '}
                <span className="w-fit text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-red-500 bg-[length:200%_100%] bg-right brightness-125">
                  Growth
                </span>
              </span>
            </h1>

            <h1 className="hidden md:block text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6 text-white drop-shadow-lg">
              <span className="block">Architecting</span>
              <span className="block">High-Value</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-red-500 brightness-125">
                Commercial
              </span>
              <span className="block w-fit text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-500 to-red-500 bg-[length:200%_100%] bg-right brightness-125">
                Growth
              </span>
            </h1>
          </div>
          
          <p className="hidden md:block text-base sm:text-lg text-zinc-300 max-w-lg mb-6 md:mb-8 leading-relaxed font-light">
            I’m a commercial marketing strategist and entrepreneur based in Vaasa, Finland. After scaling and successfully selling my own nationwide brand, I now help companies design marketing systems that align with real business constraints and enable sustainable growth.
          </p>

          {/* Mobile-only hero image to keep it connected to headline/paragraph */}
          <div className="relative md:hidden w-full max-w-[320px] mx-auto -mt-1 mb-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative aspect-[4/5] w-full"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#1a1a1a]">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent"></div>

                <img
                  src="/images/profile.jpg"
                  alt="Tyler N. Tru"
                  className="w-full h-full object-cover object-[center_22%] opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent opacity-70"></div>

                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-3 left-3 p-1.5 bg-zinc-900/75 backdrop-blur-xl border border-orange-500/30 rounded-lg max-w-[80px] shadow-[0_8px_28px_rgba(249,115,22,0.18)] z-20"
                >
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></div>
                    <span className="text-[7px] font-mono text-zinc-300">Marketing ROI</span>
                  </div>
                  <div className="h-1 w-full bg-zinc-700 rounded-full overflow-hidden">
                    <div className="h-full w-[54%] bg-gradient-to-r from-orange-500 to-orange-300"></div>
                  </div>
                  <div className="mt-1 text-[8px] font-bold text-white leading-tight">54% YoY Growth</div>
                </motion.div>

                <div className="absolute bottom-3 left-3 right-3 z-20 rounded-xl border border-white/20 bg-black/55 backdrop-blur-md px-3 py-2">
                  <p className="text-[11px] leading-relaxed text-zinc-200 font-light">
                    Commercial marketing strategist helping companies design growth systems that align with real business constraints and scale sustainably.
                  </p>
                </div>
              </div>

              <div className="absolute -inset-4 bg-orange-500/40 blur-3xl -z-10 rounded-full"></div>
              <div className="absolute -inset-1 bg-gradient-to-tr from-orange-400 to-transparent opacity-30 blur-md -z-10 rounded-3xl"></div>
            </motion.div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300 text-[11px] sm:text-xs font-medium mb-4 md:mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse shadow-[0_0_15px_rgba(249,115,22,0.8)]"></span>
            Available for new projects in Finland and Remote
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-0 w-full">
            <a
              href="mailto:tylertruworks@gmail.com"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-[0_0_40px_rgba(234,88,12,0.5)] border border-orange-300/30 shrink-0"
            >
              Let's talk
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="hidden sm:flex items-center gap-1 px-0.5 sm:px-1 flex-wrap">
              <div className="flex -space-x-2 shrink-0">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/100/100?random=${i + 10}`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-zinc-900 object-cover ring-2 ring-zinc-800 relative z-0"
                  />
                ))}
              </div>
              <div className="flex flex-col justify-center relative z-10">
                <div className="flex gap-0.5 text-orange-400 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span className="text-zinc-400 text-xs sm:text-sm font-medium leading-tight">Loved by founders and operators</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Image / Visual */}
      <div className="hidden md:block relative w-full md:w-[460px] md:flex-[0_0_auto]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[2/3] w-full max-w-[390px] sm:max-w-[420px] md:max-w-[460px] mx-auto md:mx-0"
        >
          {/* Main Profile Image Container */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#1a1a1a]">
             {/* Abstract background inside image frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent"></div>
            
            <img 
              src="/images/profile.jpg" 
              alt="Tyler N. Tru"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              onLoad={() => setDesktopImageLoaded(true)}
              className={`w-full h-full object-contain object-center hover:scale-105 transition-all duration-700 ease-out ${desktopImageLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
            {/* Overlay to ensure text readability if needed, but keeping it bright for now */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-3 left-3 md:top-5 md:left-5 p-1.5 md:p-2 bg-zinc-900/80 backdrop-blur-xl border border-orange-500/30 rounded-lg max-w-[84px] md:max-w-[93px] shadow-[0_8px_32px_rgba(249,115,22,0.2)] z-20"
            >
              <div className="flex items-center gap-1 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></div>
                <span className="text-[7px] md:text-[8px] font-mono text-zinc-300">Marketing ROI</span>
              </div>
              <div className="h-1 w-full bg-zinc-700 rounded-full overflow-hidden">
                <div className="h-full w-[54%] bg-gradient-to-r from-orange-500 to-orange-300"></div>
              </div>
              <div className="mt-1 text-[8px] md:text-[10px] font-bold text-white leading-tight">54% YoY Growth</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute top-[44%] right-2 md:top-[40%] md:right-3 -translate-y-1/2 px-2 py-1.5 md:px-2.5 md:py-2 bg-zinc-900/80 backdrop-blur-md border border-white/15 rounded-md shadow-[0_6px_20px_rgba(0,0,0,0.25)] z-20"
            >
              <div className="flex items-center gap-1 text-[9px] md:text-[10px] font-medium text-white whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>
                <span>Brands Launched:</span>
                <span className="text-orange-400 font-semibold">3</span>
              </div>
            </motion.div>
          </div>

          {/* Background Glow behind image - Enhanced */}
          <div className="absolute -inset-4 bg-orange-500/40 blur-3xl -z-10 rounded-full"></div>
          <div className="absolute -inset-1 bg-gradient-to-tr from-orange-400 to-transparent opacity-30 blur-md -z-10 rounded-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};
