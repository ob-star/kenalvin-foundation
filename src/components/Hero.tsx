import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  backgroundImage,
  ctaText,
  ctaLink
}) => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/50 to-yellow-900/70" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {subtitle && (
          <p className="text-orange-200 text-lg md:text-xl mb-4 font-medium">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-[16px] text-blue-100 mb-8 leading-relaxed max-w-5xl mx-auto">
          {description}
        </p>
        
        {ctaText && ctaLink && (
          <Link
            to={ctaLink}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;