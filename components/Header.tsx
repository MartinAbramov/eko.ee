import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Language, Content } from '../types';
import LanguageSwitcher from './LanguageSwitcher';
import { PHONE_PRIMARY } from '../constants';
import Logo from './Logo';

interface HeaderProps {
  content: Content['nav'];
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ content, currentLang, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer block"
        >
          <Logo 
            variant={isScrolled ? 'color' : 'white'} 
            className="h-14 md:h-16 w-auto" 
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <LanguageSwitcher 
            currentLang={currentLang} 
            onLanguageChange={onLanguageChange} 
            variant={isScrolled ? 'dark' : 'light'}
          />
          
          <a 
            href={`tel:${PHONE_PRIMARY.replace(/\s/g, '')}`} 
            className="flex items-center gap-2 bg-goodyear-gold text-baltic-blue px-4 py-2 rounded font-bold hover:bg-yellow-400 transition-colors whitespace-nowrap"
          >
            <Phone size={16} className="shrink-0" />
            <span>{PHONE_PRIMARY}</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <div className={`${isScrolled ? 'block' : 'hidden'}`}>
             <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${isScrolled ? 'text-baltic-blue' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 md:hidden flex flex-col p-6 space-y-4 animate-fade-in-down">
          <button onClick={() => scrollToSection('about')} className="text-lg font-medium text-baltic-blue text-left py-2 border-b border-gray-100">
            {content.about}
          </button>
          <button onClick={() => scrollToSection('products')} className="text-lg font-medium text-baltic-blue text-left py-2 border-b border-gray-100">
            {content.products}
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-lg font-medium text-baltic-blue text-left py-2 border-b border-gray-100">
            {content.contact}
          </button>
          <div className="pt-2 flex justify-between items-center">
            <span className="text-sm text-gray-500">Language:</span>
            <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} variant="dark" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;