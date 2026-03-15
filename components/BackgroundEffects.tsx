import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Grid Shimmer - Made slightly more visible */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Top Light Source (White/Orange mix) - Adds global brightness */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-gradient-to-b from-orange-100/20 to-transparent rounded-full blur-[120px] mix-blend-screen opacity-60" />

      {/* Main Orange Gradient Blob - Top Left - Increased Brightness */}
      <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-orange-500/40 rounded-full blur-[128px] opacity-70 animate-blob mix-blend-screen" />
      
      {/* Secondary Bottom Blob - Increased Brightness */}
      <div className="absolute bottom-[0%] right-[0%] w-[600px] h-[600px] bg-orange-600/30 rounded-full blur-[128px] opacity-60 mix-blend-screen" />

      {/* Center ambient glow - Warmer and brighter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[100px] opacity-40 mix-blend-screen" />

      {/* Particle Drift (Simple SVG overlay) */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      
      {/* Moving Particles - Brighter particles */}
      <div className="absolute inset-0 overflow-hidden">
         {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                opacity: 0
              }}
              animate={{
                y: [null, Math.random() * -100],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-1 h-1 bg-orange-100 rounded-full blur-[0.5px] shadow-[0_0_10px_white]"
            />
         ))}
      </div>
    </div>
  );
};