import React from 'react';

const Progress: React.FC = () => {
  const centerImageUrl = "https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/marathon%20website/hero%20Section/girl-marathon.jpg";

  const points = [
    {
      id: '01',
      title: 'Built, Not Given',
      description: "Progress doesn't happen by chance — it is designed, built, and earned over time.",
      position: 'left',
    },
    {
      id: '02',
      title: 'Every Mind Can Grow',
      description: 'Every learner has the ability to progress when given the right system and environment.',
      position: 'left',
    },
    {
      id: '03',
      title: 'Participation Over Awareness',
      description: "Inclusion is not just understanding — it's active involvement and real contribution.",
      position: 'right',
    },
    {
      id: '04',
      title: 'Move Things Forward',
      description: "We don't just talk about problems — we build systems that push real change.",
      position: 'right',
    },
  ];

  return (
    <section className="bg-neutral-950 py-32 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-black italic tracking-tight text-white uppercase">
          PROGRESS IS BUILT, NOT GIVEN
        </h2>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Left Column (Desktop) */}
          <div className="flex-1 space-y-16 lg:text-right order-2 lg:order-1">
            {points.filter(p => p.position === 'left').map((point) => (
              <div key={point.id} className="flex flex-col lg:flex-row items-center lg:items-end justify-end gap-6 group">
                <div className="space-y-2 max-w-xs transition-transform duration-500 group-hover:-translate-x-2">
                  <h3 className="text-xl font-black italic text-white uppercase tracking-tight">
                    {point.title}
                  </h3>
                  <p className="text-neutral-500 text-sm font-medium leading-relaxed italic">
                    {point.description}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-[2px] bg-[#05112D]/20 relative overflow-hidden hidden lg:block">
                     <div className="absolute top-0 left-0 w-full h-1/2 bg-[#05112D]" />
                  </div>
                  <span className="text-6xl md:text-7xl font-black italic tracking-tighter text-white drop-shadow-[0_0_15px_rgba(5,17,45,0.8)] leading-none select-none">
                    {point.id}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="relative z-10 order-1 lg:order-2">
            <div className="absolute -inset-8 bg-[#05112D]/5 blur-3xl rounded-full" />
            <div className="w-64 h-64 md:w-[450px] md:h-[450px] rounded-full border-4 border-white/5 p-4 relative bg-neutral-900 shadow-2xl overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-t from-[#05112D]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
               <img 
                src={centerImageUrl} 
                alt="Running Progress" 
                className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
          </div>

          {/* Right Column (Desktop) */}
          <div className="flex-1 space-y-16 order-3">
            {points.filter(p => p.position === 'right').map((point) => (
              <div key={point.id} className="flex flex-col lg:flex-row items-center lg:items-end gap-6 group">
                 <div className="flex items-center gap-4">
                  <span className="text-6xl md:text-7xl font-black italic tracking-tighter text-white drop-shadow-[0_0_15px_rgba(5,17,45,0.8)] leading-none select-none">
                    {point.id}
                  </span>
                  <div className="h-16 w-[2px] bg-[#05112D]/20 relative overflow-hidden hidden lg:block">
                     <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#05112D]" />
                  </div>
                </div>
                <div className="space-y-2 max-w-xs transition-transform duration-500 group-hover:translate-x-2">
                  <h3 className="text-xl font-black italic text-white uppercase tracking-tight">
                    {point.title}
                  </h3>
                  <p className="text-neutral-500 text-sm font-medium leading-relaxed italic">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Progress;
