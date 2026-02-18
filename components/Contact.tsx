import React from 'react';
import { Content } from '../types';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import {
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  EMAIL_CONTACT,
  ADDRESS_MAP_URL,
  WAZE_LINK,
} from '../constants';

interface ContactProps {
  content: Content['contact'];
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-baltic-blue mb-4">
            {content.title}
          </h2>
          <div className="h-1 w-24 bg-eco-green mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Left Side: Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Address Card */}
            <div className="bg-industrial-grey p-6 rounded-lg shadow-sm border-t-4 border-baltic-blue hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-full text-baltic-blue">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm uppercase font-bold text-gray-500 mb-1">
                    {content.addressLabel}
                  </h4>
                  <p className="font-medium text-slate-800 text-lg leading-snug mb-4">
                    {content.address}
                  </p>
                  <a
                    href={WAZE_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-baltic-blue hover:text-eco-green transition-colors"
                  >
                    <Navigation size={16} />
                    {content.directions}
                  </a>
                </div>
              </div>
            </div>

            {/* Phones Card */}
            <div className="bg-industrial-grey p-6 rounded-lg shadow-sm border-t-4 border-goodyear-gold hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-100 rounded-full text-baltic-blue">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm uppercase font-bold text-gray-500 mb-1">
                    {content.phoneLabel}
                  </h4>
                  <div className="flex flex-col gap-2">
                    <a
                      href={`tel:${PHONE_PRIMARY.replace(/\s/g, '')}`}
                      className="font-bold text-xl text-slate-800 hover:text-goodyear-gold transition-colors"
                    >
                      {PHONE_PRIMARY}
                    </a>
                    <a
                      href={`tel:${PHONE_SECONDARY.replace(/\s/g, '')}`}
                      className="font-bold text-xl text-slate-800 hover:text-goodyear-gold transition-colors"
                    >
                      {PHONE_SECONDARY}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-industrial-grey p-6 rounded-lg shadow-sm border-t-4 border-eco-green hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-full text-eco-green">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm uppercase font-bold text-gray-500 mb-1">
                    {content.emailLabel}
                  </h4>
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="font-medium text-lg text-slate-800 hover:text-eco-green transition-colors break-all"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Map */}
          <div className="lg:col-span-3 min-h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src={ADDRESS_MAP_URL}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EKOIMPEX Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
