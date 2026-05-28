import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {

  return (
    <nav className="bg-[#111111] text-white py-4 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img 
            src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/marathon%20website/hero%20Section/Beyond%20Heights%20Logo-01.svg" 
            alt="Beyond Heights Logo" 
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center gap-3">
          <a 
            href="https://www.ticket360.co.in/event-details?event=NzAwfF58" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border border-white bg-[#05112D] text-white px-4 md:px-8 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 active:scale-95 shadow-lg shadow-[#05112D]/20 inline-block text-center"
          >
            REGISTER
          </a>
          <Link 
            to="/donate" 
            className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 md:px-8 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest hover:from-red-500 hover:to-red-400 transition-all duration-300 active:scale-95 shadow-lg shadow-red-600/40 inline-block text-center"
          >
            DONATE
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
