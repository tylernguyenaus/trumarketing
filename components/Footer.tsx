import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-[#050505] py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600">
        <p>&copy; 2026 Tyler N. Tru. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-zinc-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};