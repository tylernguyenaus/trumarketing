import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#050505]/80 backdrop-blur-md border-white/5 py-1.5 md:py-4'
          : 'bg-transparent border-transparent py-2 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-1 min-w-0 -ml-6 md:ml-0">
          <div className="relative shrink-0">
            <img
              src="/images/Trulogo1.png"
              alt="Tru logo"
              className="h-[4.25rem] sm:h-[4.5rem] w-auto object-contain self-center translate-x-5 translate-y-0.5"
            />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-2 w-px h-5 sm:h-6 bg-orange-500/70"></span>
          </div>
          <span className="-ml-1 text-base sm:text-xl font-bold tracking-tight leading-none truncate">TYLER N. TRU</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/5 backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm transition-colors duration-200 ${location.pathname === link.path ? 'text-white font-medium' : 'text-zinc-400 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="mailto:tylertruworks@gmail.com"
            className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors"
          >
            Contact me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2.5 -mr-2 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg hover:text-orange-500 ${location.pathname === link.path ? 'text-white' : 'text-zinc-300'}`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="mailto:tylertruworks@gmail.com"
                className="mt-4 px-5 py-3 bg-orange-600 text-white text-center rounded-lg font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
