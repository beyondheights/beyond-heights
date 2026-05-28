import React from 'react';

const Awareness: React.FC = () => {
  const imageUrl = "https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/marathon%20website/hero%20Section/awarenes.png";

  return (
    <section className="bg-white py-24 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Image */}
        <div className="relative animate-in fade-in slide-in-from-left duration-1000">
          <img 
            src={imageUrl} 
            alt="Awareness" 
            className="w-full h-auto object-contain scale-110 lg:scale-125 origin-right"
          />
        </div>

        {/* Right Column: Content */}
        <div className="space-y-10 animate-in fade-in slide-in-from-right duration-1000 delay-200">
          {/* Checkered Pattern Graphic */}
          <div className="flex flex-col gap-1 w-fit">
            <div className="flex gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`w-4 h-4 ${i % 2 === 0 ? 'bg-neutral-800' : 'bg-transparent'}`} />
              ))}
            </div>
            <div className="flex gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`w-4 h-4 ${i % 2 !== 0 ? 'bg-neutral-800' : 'bg-transparent'}`} />
              ))}
            </div>
          </div>

          {/* Accent Line */}
          <div className="w-full h-[2px] bg-[#05112D]/30 relative">
            <div className="absolute left-0 top-0 h-full w-1/3 bg-[#05112D]" />
          </div>

          {/* Typography */}
          <div className="space-y-6">
            <span className="block text-white text-xs font-black uppercase tracking-[0.2em] italic border-l-4 border-[#05112D] pl-3">
              THIS MARATHON EXISTS TO CHANGE THAT.
            </span>
            
            <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter leading-[1] text-black uppercase">
              FROM AWARENESS TO ACTION <br />
              THIS ONE CREATES MOVEMENT.
            </h2>

            <div className="space-y-4 text-neutral-600 text-sm md:text-base font-medium leading-relaxed max-w-xl">
              <p>
                Because the real problem isn't autism. 
                It's the lack of structured, consistent support that helps children progress. 
              </p>
              <p className="italic font-bold text-neutral-800">
                This marathon exists to change that.
              </p>
            </div>
          </div>

          {/* Optional CTA or Spacer */}
          <div className="pt-4">
             <div className="w-12 h-[2px] bg-neutral-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awareness;
