import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  lightText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
  lightText = true, // Default to true for navy header & dark footer
}) => {
  const [imgSrc, setImgSrc] = useState('/assets/aistudio/WhatsApp_Image_2026-10-29_at_12.07.30_AM_293b6058.jpeg');
  const { pickSlash } = useLanguage();

  const iconSizes = {
    sm: 'w-10 h-10',
    md: 'w-13 h-13 sm:w-14 sm:h-14 lg:w-15 lg:h-15',
    lg: 'w-16 h-16 sm:w-20 sm:h-20',
  }[size];

  const titleSizes = {
    sm: 'text-lg font-black',
    md: 'text-xl sm:text-2xl font-black',
    lg: 'text-2xl sm:text-3xl font-black',
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Exact Circular SARKARI TALK Logo Badge */}
      <div className="relative shrink-0 flex items-center justify-center">
        <img
          src={imgSrc}
          alt="सरकारी TALK"
          className={`${iconSizes} object-contain rounded-full shadow-md drop-shadow transition-transform hover:scale-105 duration-200`}
          onError={() => {
            if (imgSrc !== '/logo.png') {
              setImgSrc('/logo.png');
            }
          }}
          loading="eager"
        />
      </div>

      {/* Brand Name Typography — Exactly 'सरकारी TALK' */}
      <div className="flex flex-col justify-center leading-none">
        <div className={`tracking-tight ${titleSizes} flex items-center gap-1.5`}>
          <span className={lightText ? 'text-white' : 'text-[#0B1B3D]'}>
            सरकारी
          </span>
          <span className="text-amber-400 font-black tracking-normal">
            TALK
          </span>
        </div>
        {showTagline && (
          <span
            className={`text-[10px] sm:text-[11.5px] font-medium tracking-normal mt-1 ${
              lightText ? 'text-slate-300' : 'text-slate-500'
            }`}
          >
            {pickSlash('आपका विश्वसनीय डिजिटल सूचना साथी', 'Your Trusted Digital Information Partner')}
          </span>
        )}
      </div>
    </div>
  );
};
