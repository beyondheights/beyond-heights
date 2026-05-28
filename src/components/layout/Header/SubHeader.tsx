import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const SubHeader: React.FC = () => {
  return (
    <div className="bg-[#05112D] py-2 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-[11px] md:text-xs font-bold text-white uppercase tracking-wider">
        <div className="flex items-center gap-2">
          <Clock size={16} strokeWidth={2.5} />
          <span>05:30 AM 31 MAY 2026</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} strokeWidth={2.5} />
          <span>ADISSIA VIVAANA, PONGALIYUR | COIMBATORE - 641041</span>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
