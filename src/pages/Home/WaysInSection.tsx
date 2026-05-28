import React from 'react';

const WaysInSection: React.FC = () => {
  const cards = [
    {
      title: 'Run',
      description: 'Be part of a community that shows up for inclusion.',
      image: '/assets/ways-in/run.webp',
      buttonText: 'REGISTER TO RUN',
      tag: '31 MAY',
      href: 'https://www.ticket360.co.in/event-details?event=NzAwfF58',
    },
    {
      title: 'Sponsor',
      description: 'Move beyond visibility—be part of real impact.',
      image: '/assets/ways-in/sponsor.webp',
      buttonText: 'EXPLORE SPONSORSHIP',
      href: '#sponsors',
    },
    {
      title: 'Partner',
      description: 'Bring your network, your company, your community.',
      image: '/assets/ways-in/partner.webp',
      buttonText: 'PARTNER WITH US',
      href: 'https://www.ticket360.co.in/event-details?event=NzAwfF58',
    },
  ];

  return (
    <section className="py-24 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <h2 className="text-4xl md:text-5xl font-black text-center text-black uppercase tracking-tighter">
          CHOOSE YOUR WAY IN
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col space-y-6 group">
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {card.tag && (
                  <div className="absolute top-4 left-4 bg-[#05112D] text-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em]">
                    {card.tag}
                  </div>
                )}
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col flex-1 space-y-4">
                <h3 className="text-3xl font-black text-black uppercase tracking-tighter">
                  {card.title}
                </h3>
                <p className="text-neutral-500 text-sm font-medium leading-relaxed max-w-[90%]">
                  {card.description}
                </p>
                
                {/* Button */}
                <div className="pt-4 mt-auto">
                  {card.href ? (
                    <a 
                      href={card.href}
                      target={card.href.startsWith('http') ? "_blank" : undefined}
                      rel={card.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="bg-[#05112D] hover:bg-black hover:text-white text-white px-8 py-3 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-sm hover:shadow-md transform active:scale-95 cursor-pointer inline-block text-center"
                    >
                      {card.buttonText}
                    </a>
                  ) : (
                    <button className="bg-[#05112D] hover:bg-black hover:text-white text-white px-8 py-3 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-sm hover:shadow-md transform active:scale-95 cursor-pointer">
                      {card.buttonText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaysInSection;
