import React from 'react';
import Hero from '../components/Hero';
import ContentCard from '../components/ContentCard';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, Users, Heart } from 'lucide-react';

const WhatIsSickleCellPage: React.FC = () => {
  return (
    <div>
      <Hero
        title="What is Sickle Cell?"
        subtitle="Understanding the Disease"
        description="Learn about sickle cell disease, its symptoms, causes, and how it affects millions of people worldwide."
        backgroundImage="https://images.pexels.com/photos/3825587/pexels-photo-3825587.jpeg"
        ctaText="Learn About Treatment"
        ctaLink="/sickle-cell"
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Understanding Sickle Cell Disease</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Sickle cell disease is a genetic blood disorder that affects hemoglobin, the protein that carries oxygen 
              in red blood cells. When someone has sickle cell disease, their red blood cells become hard and sticky 
              and look like a C-shaped farm tool called a "sickle."
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              These irregularly shaped cells die early, which creates a chronic shortage of red blood cells. 
              They can also block blood flow through small blood vessels, causing pain and other serious complications.
            </p>
            <Link
              to="/sickle-cell"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <span>Learn More About Treatment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Facts</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Info className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Affects millions of people worldwide, particularly those of African, Hispanic, Middle Eastern, and Asian descent.</p>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">It's inherited - both parents must carry the sickle cell gene for a child to have the disease.</p>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Early diagnosis and proper medical care can help people with sickle cell disease live healthier lives.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ContentCard
            title="Sickle Cell Trait"
            content="People with sickle cell trait carry one gene for sickle cell disease and one normal gene. They usually don't have symptoms but can pass the gene to their children. It's important to know your status through genetic testing."
          />
          <ContentCard
            title="Symptoms"
            content="Common symptoms include pain episodes (crises), swelling in hands and feet, frequent infections, delayed growth, and vision problems. Pain crises can be severe and may require hospitalization."
          />
          <ContentCard
            title="Who It Affects"
            content="Sickle cell disease is most common among people of African descent, but it also affects people of Hispanic, Middle Eastern, Asian, and Mediterranean backgrounds. Millions of people worldwide live with this condition."
          />
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-50 to-teal-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get Tested, Get Informed</h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Knowing your sickle cell status is important for your health and family planning. 
            Genetic counseling and testing can provide valuable information about your risk and options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/resources"
              className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              <span>Find Testing Centers</span>
            </Link>
            <Link
              to="/history"
              className="inline-flex items-center justify-center space-x-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              <span>Our Success Stories</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatIsSickleCellPage;