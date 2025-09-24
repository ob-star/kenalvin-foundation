import React from 'react';
import Hero from '../components/Hero';
import ContentCard from '../components/ContentCard';
import { Stethoscope, Users, Heart, Award } from 'lucide-react';

const SickleCellPage: React.FC = () => {
  const treatments = [
    {
      icon: Stethoscope,
      title: 'Medical Management',
      description: 'Pain management, preventing infections, and regular medical monitoring are essential components of sickle cell care.'
    },
    {
      icon: Heart,
      title: 'Stem Cell Transplant',
      description: 'For some patients, stem cell transplantation from a compatible donor can provide a cure for sickle cell disease.'
    },
    {
      icon: Users,
      title: 'Support Systems',
      description: 'Comprehensive care includes counseling, support groups, and family education to help manage the condition.'
    },
    {
      icon: Award,
      title: 'Advanced Therapies',
      description: 'New treatments including gene therapy and advanced medications offer hope for better outcomes.'
    }
  ];

  return (
    <div>
      <Hero
        title="About Sickle Cell Disease"
        subtitle="Treatment & Hope"
        description="Understanding treatment options, management strategies, and the latest advances in sickle cell disease care."
        backgroundImage="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg"
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Living with Sickle Cell Disease</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            While sickle cell disease is a serious condition, advances in treatment and care 
            have dramatically improved outcomes for people living with this disorder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {treatments.map((treatment, index) => (
            <div key={index} className="text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <treatment.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{treatment.title}</h3>
              <p className="text-gray-600">{treatment.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContentCard
            title="Early Diagnosis Matters"
            content="Newborn screening programs have made it possible to identify sickle cell disease early in life. Early diagnosis allows for preventive care that can reduce complications and improve quality of life. Regular check-ups, vaccinations, and prophylactic treatments can prevent many serious complications."
          />
          <ContentCard
            title="Managing Pain Crises"
            content="Pain crises are the most common complication of sickle cell disease. While they can be severe and unpredictable, there are strategies to manage and prevent them. Staying hydrated, avoiding extreme temperatures, getting adequate rest, and working with healthcare providers to develop a pain management plan are crucial."
          />
          <ContentCard
            title="The Role of Families"
            content="Family support is essential for people with sickle cell disease. Understanding the condition, recognizing symptoms, and knowing when to seek medical care are vital. Families also play a role in ensuring medication compliance and helping with lifestyle modifications."
          />
          <ContentCard
            title="Hope for the Future"
            content="Research continues to advance our understanding of sickle cell disease. Gene therapy, new medications, and improved transplant techniques offer hope for even better outcomes. Clinical trials are ongoing, and the future looks brighter for people with sickle cell disease."
          />
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">A Message of Hope</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Living with sickle cell disease presents challenges, but with proper medical care, 
            family support, and community resources, people with sickle cell disease can lead 
            fulfilling lives. At KENALVIN Foundation, we're committed to providing education, 
            support, and hope to everyone affected by this condition.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SickleCellPage;