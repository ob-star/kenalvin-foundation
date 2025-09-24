import React from 'react';

const BrandSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg)` 
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Main Brand Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-wide">
            KENALVIN
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white/90 leading-tight">
            Foundation
          </h2>
          
          {/* Tagline */}
          <div className="mt-12">
            <p className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light tracking-wide">
              Working Towards a Brighter Future
            </p>
          </div>
          
          {/* Decorative Line */}
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full" />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default BrandSection;