import React from 'react';
import { Phone, Navigation } from 'lucide-react';
import { Content } from '../types';
import { PHONE_PRIMARY, WAZE_LINK } from '../constants';

interface MobileStickyNavProps {
  content: Content['contact'];
}

const MobileStickyNav: React.FC<MobileStickyNavProps> = ({ content }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50 flex md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <a 
        href={`tel:${PHONE_PRIMARY.replace(/\s/g, '')}`} 
        className="flex-1 flex flex-col items-center justify-center py-3 bg-goodyear-gold text-baltic-blue"
      >
        <Phone size={20} className="mb-1" />
        <span className="text-xs font-bold uppercase">{content.call}</span>
      </a>
      <a 
        href={WAZE_LINK} 
        target="_blank" 
        rel="noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 bg-baltic-blue text-white"
      >
        <Navigation size={20} className="mb-1" />
        <span className="text-xs font-bold uppercase">{content.directions}</span>
      </a>
    </div>
  );
};

export default MobileStickyNav;