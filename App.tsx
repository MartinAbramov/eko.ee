import React, { useState } from 'react';
import { Language } from './types';
import { translations } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import BusinessLines from './components/BusinessLines';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileStickyNav from './components/MobileStickyNav';

const getBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.startsWith('et')) return Language.EST;
  if (browserLang.startsWith('ru')) return Language.RUS;
  if (browserLang.startsWith('en')) return Language.ENG;
  
  return Language.EST;
};

function App() {
  const [currentLang, setCurrentLang] = useState<Language>(getBrowserLanguage);
  
  // Get content based on current language
  const content = translations[currentLang];

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-goodyear-gold selection:text-baltic-blue pb-16 md:pb-0">
      
      <Header 
        content={content.nav} 
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />

      <main>
        <Hero content={content.hero} />
        <About content={content.about} />
        <BusinessLines content={content.products} />
        <Contact content={content.contact} />
      </main>

      <Footer content={content.footer} />
      
      <MobileStickyNav content={content.contact} />

    </div>
  );
}

export default App;