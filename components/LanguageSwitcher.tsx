import React from 'react';
import { Language } from '../types';

interface LanguageSwitcherProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  variant?: 'light' | 'dark';
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, onLanguageChange, variant = 'dark' }) => {
  const isLight = variant === 'light';
  
  // Styles for text colors based on variant
  // Light variant = White/Light text (for dark backgrounds)
  // Dark variant = Blue/Grey text (for white backgrounds)
  const activeClass = isLight 
    ? 'text-white border-b-2 border-goodyear-gold shadow-sm' 
    : 'text-baltic-blue border-b-2 border-goodyear-gold';
    
  const inactiveClass = isLight
    ? 'text-gray-200 hover:text-white hover:bg-white/10 rounded'
    : 'text-gray-500 hover:text-baltic-blue hover:bg-gray-100 rounded';
    
  const dividerClass = isLight ? 'text-gray-400 opacity-50' : 'text-gray-300';

  return (
    <div className="flex items-center space-x-2 text-sm font-bold tracking-wide">
      <button 
        onClick={() => onLanguageChange(Language.EST)}
        className={`px-2 py-1 transition-all duration-200 ${currentLang === Language.EST ? activeClass : inactiveClass}`}
      >
        EST
      </button>
      <span className={dividerClass}>|</span>
      <button 
        onClick={() => onLanguageChange(Language.ENG)}
        className={`px-2 py-1 transition-all duration-200 ${currentLang === Language.ENG ? activeClass : inactiveClass}`}
      >
        ENG
      </button>
      <span className={dividerClass}>|</span>
      <button 
        onClick={() => onLanguageChange(Language.RUS)}
        className={`px-2 py-1 transition-all duration-200 ${currentLang === Language.RUS ? activeClass : inactiveClass}`}
      >
        RUS
      </button>
    </div>
  );
};

export default LanguageSwitcher;