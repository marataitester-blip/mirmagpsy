import React from 'react';
import { CardProps } from '../types';

export const CardDisplay: React.FC<CardProps> = ({ realCardUrl, aiCardUrl }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 my-8">
      {/* Real Card */}
      <div className="flex flex-col items-center gap-3 animate-fade-in-left">
        <div className="relative group w-64 aspect-[2/3.5] rounded-xl overflow-hidden border border-[#c7a87b] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-transform hover:scale-105 duration-500">
          <div className="absolute inset-0 bg-[#c7a87b]/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
          <img 
            src={realCardUrl} 
            alt="Real Tarot Card" 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://picsum.photos/400/700?grayscale&blur=2"; 
            }}
          />
          <div className="absolute bottom-0 w-full bg-black/80 backdrop-blur-sm py-2 border-t border-[#c7a87b]/50">
            <p className="text-[#c7a87b] text-center font-cinzel text-sm tracking-widest">АРХЕТИП</p>
          </div>
        </div>
      </div>

      {/* AI Card */}
      <div className="flex flex-col items-center gap-3 animate-fade-in-right">
        <div className="relative group w-64 aspect-[2/3.5] rounded-xl overflow-hidden border border-[#c7a87b] shadow-[0_10px_30px_rgba(199,168,123,0.2)] transition-transform hover:scale-105 duration-500">
          <img 
            src={aiCardUrl} 
            alt="AI Generated Soul Portrait" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-0 w-full bg-black/80 backdrop-blur-sm py-2 border-t border-[#c7a87b]/50">
            <p className="text-[#c7a87b] text-center font-cinzel text-sm tracking-widest">ТВОЕ СОСТОЯНИЕ</p>
          </div>
        </div>
      </div>
    </div>
  );
};