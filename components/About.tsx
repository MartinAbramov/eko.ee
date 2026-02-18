import React from 'react';
import { Content } from '../types';
import { Truck, Award, CalendarClock } from 'lucide-react';

interface AboutProps {
  content: Content['about'];
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-20 bg-industrial-grey">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2">
             <div className="relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-goodyear-gold rounded-tl-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Logistics Hub" 
                  className="rounded-lg shadow-lg w-full object-cover aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-baltic-blue rounded-br-3xl"></div>
             </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-display font-bold text-baltic-blue mb-6">
              {content.title}
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              {content.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3 p-4 bg-white rounded shadow-sm border-l-4 border-goodyear-gold">
                <Award className="text-baltic-blue shrink-0" />
                <span className="font-semibold text-sm text-slate-800">{content.stat1}</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded shadow-sm border-l-4 border-baltic-blue">
                <Truck className="text-baltic-blue shrink-0" />
                <span className="font-semibold text-sm text-slate-800">{content.stat2}</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded shadow-sm border-l-4 border-eco-green">
                <CalendarClock className="text-baltic-blue shrink-0" />
                <span className="font-semibold text-sm text-slate-800">{content.stat3}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;