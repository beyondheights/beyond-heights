import React from 'react';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] text-white pt-24 pb-12 px-6 md:px-10 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
          
          {/* Branding Column */}
          <div className="space-y-8">
            <img 
              src="https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/marathon%20website/hero%20Section/Beyond%20Heights%20Logo-01.svg" 
              alt="Beyond Heights" 
              className="h-12 w-auto object-contain"
            />
            <p className="text-neutral-500 text-[13px] font-medium leading-relaxed max-w-xs">
              Empowering athletes with determination and inclusion. Beyond Heights is more than a marathon; it's a movement towards human capability.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: FaInstagram, href: 'https://www.instagram.com/beyond_heights_rezilyens?igsh=OHZiazRlYW85dnV3' },
                { Icon: FaYoutube, href: 'https://youtube.com/@beyond-heightsrezilyens?si=YW-aZnJwr5up-Mex' },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-11 h-11 rounded-full bg-neutral-900/50 border border-neutral-800 flex items-center justify-center hover:bg-[#05112D] hover:text-white hover:border-[#05112D] transition-all duration-300 group"
                >
                  <social.Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-10">
            <h3 className="text-white text-[11px] font-black uppercase tracking-[0.3em] border-l-2 border-[#05112D] pl-4">Quick Links</h3>
            <ul className="space-y-5">
              {[
                { name: 'Home Page', href: '#' },
                { name: 'About Us', href: '#' },
                { name: 'Our Events', href: 'https://www.ticket360.co.in/event-details?event=NzAwfF58' },
                { name: 'Contact Us', href: '#' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    target={item.href.startsWith('http') ? "_blank" : undefined}
                    rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-neutral-400 hover:text-white transition-all flex items-center group"
                  >
                    <span className="text-[12px] font-bold uppercase tracking-widest">{item.name}</span>
                    <ArrowUpRight size={14} className="ml-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-white" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-10">
            <h3 className="text-white text-[11px] font-black uppercase tracking-[0.3em] border-l-2 border-[#05112D] pl-4">Get in Touch</h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center shrink-0 group-hover:bg-[#05112D]/10 transition-colors">
                  <MapPin className="text-white" size={18} />
                </div>
                <span className="text-[13px] text-neutral-400 leading-relaxed font-bold pt-1">Rezilyens System Software India Pvt Ltd
Door No :2/3 & 2/4 ,  1st floor Mullai Nagar,
JV Building,Maruthamalai Road,Vadavalli,
Coimbatore-641041</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center shrink-0 group-hover:bg-[#05112D]/10 transition-colors">
                  <Phone className="text-white" size={18} />
                </div>
                <span className="text-[13px] text-neutral-400 font-bold">+91 95971 95741</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center shrink-0 group-hover:bg-[#05112D]/10 transition-colors">
                  <Mail className="text-white" size={18} />
                </div>
                <span className="text-[13px] text-neutral-400 font-bold">beyondheights.com@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-10">
            <h3 className="text-white text-[11px] font-black uppercase tracking-[0.3em] border-l-2 border-[#05112D] pl-4">Newsletter</h3>
            <div className="space-y-6">
              <p className="text-neutral-500 text-[12px] font-bold uppercase tracking-tighter leading-snug">
                Stay updated with our latest news and athletic community events.
              </p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="YOUR EMAIL" 
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-sm px-5 py-4 text-[10px] font-black tracking-widest focus:ring-1 focus:ring-[#05112D] focus:border-[#05112D] transition-all outline-none"
                  />
                </div>
                <button className="w-full bg-[#05112D] text-white py-4 rounded-sm text-[10px] font-black uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-[#05112D]/10">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-10 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-neutral-600 text-[9px] font-black uppercase tracking-[0.3em]">
            &copy; {currentYear} BEYOND HEIGHTS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" className="text-neutral-600 hover:text-[#05112D] text-[9px] font-black uppercase tracking-[0.3em] transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#05112D] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
