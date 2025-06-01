import React from 'react';
import { Link } from 'lucide-react';
import Button from './Button';

interface HeroProps {
  onApplyClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onApplyClick }) => {
  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center justify-start pt-8 pb-0 bg-black text-white relative">
      <div className="w-full flex flex-col items-center px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center mb-4 max-w-5xl">
          How I Scaled to 10,000 Community Members and 5-Figure Monthly Revenue with a Small Audience and No Paid Ads
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-300 text-center mb-8 whitespace-nowrap">
          I help creators, and entreprenuers turn their audience into paid online communities
        </p>
        <div className="bg-[#ececff] rounded-lg flex items-center justify-center mb-8 overflow-hidden w-full max-w-[750px] aspect-[16/9]">
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <iframe
              src="https://www.loom.com/embed/1ed6c447f9434bbaa6ab597b5525bf13?sid=bd288098-2f8d-4d91-9df8-67f988418322"
              frameBorder="0"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '0.5rem' }}
              title="Loom Video"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-[50px]">
        <Button onClick={onApplyClick}>
          Apply now to see if you qualify <span className="ml-2">→</span>
        </Button>
      </div>
    </section>
  );
};

export default Hero;