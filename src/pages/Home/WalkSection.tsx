import React from 'react';
import { MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';

const WalkSection: React.FC = () => {
  const backgroundUrl = "https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/marathon%20website/hero%20Section/runner%20background.png";

  const events = [
    {
      id: 1,
      title: '3 KM Walk',
      image: "https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/marathon%20website/hero%20Section/runner%201.png",
      price: '350',
      theme: 'blue',
    },
    {
      id: 2,
      title: '5 KM Marathon',
      image: "https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/marathon%20website/hero%20Section/runner%202.png",
      price: '400',
      theme: 'white',
    },
    {
      id: 3,
      title: '10 KM Marathon',
      image: "https://ryzfriykqluohxvulezu.supabase.co/storage/v1/object/public/marathon%20website/hero%20Section/runner%203.png",
      price: '500',
      theme: 'white',
    },
  ];

  return (
    <section className="relative py-32 px-6 md:px-10 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 768px) {
          .ticket-info-clip {
            clip-path: polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%);
          }
          .ticket-price-clip {
            clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 50%);
          }
        }
      `}} />
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('${backgroundUrl}')` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Header */}
        <div className="space-y-2 text-center md:text-left">
          <span className="text-[#05112D] text-sm font-black tracking-widest uppercase italic">
            EVENTS
          </span>
          <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter text-white uppercase">
            WALK AND MARATHON EVENTS
          </h2>
        </div>

        {/* Tickets Container */}
        <div className="flex flex-col gap-10 md:gap-16">
          {events.map((event) => (
            <div key={event.id} className="relative w-full max-w-5xl mx-auto group transition-all duration-500 hover:scale-[1.01]">
              
              {/* Main Ticket Container (FLEX) */}
              <div className="flex flex-col md:flex-row min-h-[400px] md:h-[280px] w-full overflow-hidden shadow-2xl rounded-2xl md:rounded-none">
                
                {/* Left Side: Info (Arrow Shape on Desktop) */}
                <div 
                  className={`relative z-20 w-full md:w-[35%] flex flex-col justify-center p-8 md:px-8 space-y-4 md:space-y-6 transition-colors duration-500 ticket-info-clip
                    ${event.theme === 'blue' ? 'bg-[#05112D] text-white' : 'bg-white text-black'}`}
                >
                  <h3 className="text-2xl md:text-3xl font-black italic uppercase tracking-tight leading-tight">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 opacity-80">
                    <div className="flex items-start gap-3">
                      <MapPin size={14} strokeWidth={3} className={`mt-1 flex-shrink-0 ${event.theme === 'blue' ? 'text-white' : 'text-[#05112D]'}`} />
                      <span className="text-[10px] md:text-xs font-black uppercase tracking-wider leading-tight">ADISSIA VIVAANA, PONGALIYUR | COIMBATORE - 641041</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar size={14} strokeWidth={3} className={`flex-shrink-0 ${event.theme === 'blue' ? 'text-white' : 'text-[#05112D]'}`} />
                      <span className="text-[10px] md:text-xs font-black uppercase tracking-wider">MAY 31, 2026</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={14} strokeWidth={3} className={`flex-shrink-0 ${event.theme === 'blue' ? 'text-white' : 'text-[#05112D]'}`} />
                      <span className="text-[10px] md:text-xs font-black uppercase tracking-wider italic">START 05:30 AM - UNTIL FINISH</span>
                    </div>
                  </div>
                </div>

                {/* Center: Image */}
                <div className="relative flex-1 z-0 md:-ml-10 md:-mr-10 h-48 md:h-full overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/10 md:bg-black/20" />
                </div>

                {/* Right Side: Price (Arrow Shape on Desktop) */}
                <div 
                  className={`relative z-20 w-full md:w-[30%] flex flex-col items-center justify-center space-y-4 p-6 md:px-6 transition-colors duration-500 ticket-price-clip
                    ${event.theme === 'blue' ? 'bg-[#05112D] text-white' : 'bg-white text-black'}`}
                >
                  <div className="text-center group-hover:scale-110 transition-transform duration-300">
                    <span className="block text-[10px] font-black uppercase tracking-widest text-neutral-500">Ticket</span>
                    <div className="flex items-start justify-center gap-1">
                      <span className="text-4xl md:text-5xl font-black tracking-tighter">₹{event.price}</span>
                      <span className="text-[10px] mt-2 font-bold opacity-60">/ticket</span>
                    </div>
                  </div>

                  <a 
                    href="https://www.ticket360.co.in/event-details?event=NzAwfF58"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300 flex items-center gap-2 group-hover:translate-x-1 ${
                    event.theme === 'blue' ? 'bg-white text-black hover:bg-black hover:text-white' : 'bg-[#05112D] text-white hover:bg-white hover:text-black'
                  }`}
                  >
                    LEARN MORE
                    <ArrowRight size={12} strokeWidth={3} />
                  </a>
                </div>

              </div>

              {/* Decorative side accent lines (Desktop only) */}
              <div className="hidden md:block absolute top-2 bottom-2 right-1 w-1 bg-white opacity-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WalkSection;
