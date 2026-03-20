import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from './components/Navbar';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { CaseStudy } from './components/CaseStudy';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 overflow-x-hidden font-sans">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-orange-500 origin-left z-50"
          style={{ scaleX }}
        />

        <BackgroundEffects />
        
        <Navbar />

        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:id" element={<CaseStudy />} />
          </Routes>
        </main>

        <Footer />
      </div>
      <Analytics />
    </Router>
  );
};

export default App;