import React from 'react';

const Sponsors: React.FC = () => {
  const sponsors = [
    { name: 'Adissia', logo: 'https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/marathon%20website/hero%20Section/image%202.png' },
    { name: 'Rezilyens', logo: 'https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/marathon/Rezilyens%20White%201.png' },
    { name: 'Kyureeus', logo: 'https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/marathon/Kyureeus%20White.svg' },
    { 
      name: 'Adhya Sakthi', 
      logo: 'https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/marathon/adhya%20sakthi.png',
      subtitle: 'A Franchise of Organic World'
    },
    { name: 'Annam', logo: 'https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/marathon/annam.jpeg' },
    { name: 'Shree Devi Textiles', logo: 'https://bbxhdxdgharlyyioeblm.supabase.co/storage/v1/object/public/marathon/shree-devi-textiles-logo-vector.png' },
    
  ];

  return (
    <section id="sponsors" className="bg-neutral-950 border-t border-white/5 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col items-center space-y-4">
          <span className="text-white text-xs font-black tracking-[0.3em] uppercase border-b-2 border-[#05112D] pb-1">
            Official Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter text-center">
            OUR SPONSERS
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col items-center justify-center transition-all duration-500 cursor-pointer"
            >
              <div className="relative flex items-center justify-center h-24">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className={`${['Rezilyens', 'Annam', 'Shree Devi Textiles', 'Adhya Sakthi'].includes(sponsor.name) ? 'h-16 md:h-24' : 'h-10 md:h-14'} w-auto object-contain transition-transform duration-500 group-hover:scale-110`}
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="text-[10px] font-black text-white tracking-[0.2em] uppercase">
                  {sponsor.name}
                </div>
                {sponsor.subtitle && (
                  <div className="text-[8px] font-bold text-white/60 tracking-wider uppercase mt-1">
                    {sponsor.subtitle}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
