import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Content } from '../types';

interface HeroProps {
  content: Content['hero'];
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center"
    >
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1590456221798-25d260f7e47d?q=80&w=2834&auto=format&fit=crop"
        >
          <source src="/Hero.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <img src="/Hero.jpg" className="w-full h-full object-cover" />
        </video>

        {/* Deep Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-hero-gradient"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 bg-goodyear-gold text-baltic-blue text-xs font-bold uppercase tracking-wider mb-6 rounded-sm">
            EKOIMPEX
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
            {content.title}
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() =>
                document
                  .getElementById('products')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-goodyear-gold text-baltic-blue hover:bg-yellow-400 px-8 py-4 rounded font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              {content.cta}
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Strip */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-goodyear-gold via-eco-green to-baltic-blue"></div>
    </section>
  );
};

export default Hero;
