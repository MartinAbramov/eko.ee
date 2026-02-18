import React from 'react';
import { Content } from '../types';

interface FooterProps {
  content: Content['footer'];
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-baltic-blue text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center opacity-80">
        <div className="mb-4 md:mb-0">
          <span className="font-display font-bold">EKOIMPEX OÜ</span>
        </div>
        <div className="text-sm text-gray-300">
          © {new Date().getFullYear()} {content.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
