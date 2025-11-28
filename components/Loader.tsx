import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center my-8">
      <div className="relative w-24 h-24">
        {/* Outer Ring */}
        <div className="absolute inset-0 border-4 border-[#c7a87b]/30 rounded-full"></div>
        {/* Spinning Ring */}
        <div className="absolute inset-0 border-t-4 border-[#c7a87b] rounded-full animate-spin"></div>
        {/* Inner glow */}
        <div className="absolute inset-4 bg-[#c7a87b]/10 rounded-full animate-pulse blur-sm"></div>
      </div>
      <p className="mt-4 text-[#c7a87b] font-cinzel animate-pulse text-lg tracking-widest">
        СОЕДИНЕНИЕ С ПОЛЕМ...
      </p>
    </div>
  );
};