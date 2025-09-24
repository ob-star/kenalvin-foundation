import React from 'react';
import Hero from '../components/Hero';
import ContentCard from '../components/ContentCard';
import { ExternalLink, Phone, MapPin, Mail } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const resources = [
    {
      title: 'UI Health Sickle Cell Program',
      description: 'Comprehensive care and stem cell transplantation program for sickle cell disease.',
      url: 'https://hospital.uillinois.edu/primary-and-specialty-care/sickle-cell/a-cure-for-sickle-cell-disease',
      type: 'Medical Center'
    },
    {
      title: 'NHS Sickle Cell Disease Treatment',
      description: 'Information about sickle cell disease treatment and management from the UK National Health Service.',
      url: 'https://www.nhs.uk/conditions/sickle-cell-disease/treatment/',
      type: 'Medical Information'
    },
    {
      title: 'Sickle Cell Disease Association of America',
      description: 'National organization providing support, education, and advocacy for the sickle cell community.',
      url: 'https://www.sicklecelldisease.org/',
      type: 'Support Organization'
    },
    {
      title: 'National Heart, Lung, and Blood Institute',
      description: 'Comprehensive information about sickle cell disease from the National Institutes of Health.',
      url: 'https://www.nhlbi.nih.gov/health/sickle-cell-disease',
      type: 'Government Resource'
    }
  ];

  const emergencyContacts = [
    {
      icon: Phone,
      title: 'Emergency Medical Care',
      description: 'For severe pain crises or complications',
      contact: '911'
    },
    {
      icon: MapPin,
      title: 'Nearest Comprehensive Care Center',
      description: 'Find specialized sickle cell care in your area',
      contact: 'Contact your healthcare provider'
    },
    {
      icon: Mail,
      title: 'KENALVIN Foundation',
      description: 'For information and support',
      contact: 'info@kenalvin.org'
    }
  ];

  return (
    <div>
      <Hero
        title="Resources & Support"
        subtitle="Help When You Need It"
        description="Find trusted medical resources, support organizations, and emergency contacts for sickle cell disease care."
        backgroundImage="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg"
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted Medical Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access reliable information and connect with organizations dedicated to sickle cell disease care and research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">{resource.title}</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {resource.type}
                </span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{resource.description}</p>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
              >
                <span>Visit Resource</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Emergency Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-gray-600 mb-2 text-sm">{contact.description}</p>
                <p className="font-semibold text-gray-900">{contact.contact}</p>
              </div>
            ))}
          </div>
          <div className="bg-red-100 rounded-lg p-6 mt-8">
            <p className="text-red-800 font-medium text-center">
              <strong>Important:</strong> If you're experiencing severe pain, difficulty breathing, 
              or other serious symptoms, seek immediate medical attention by calling 911 or going 
              to your nearest emergency room.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContentCard
            title="Finding Care"
            content="Look for healthcare providers who specialize in sickle cell disease or have experience treating blood disorders. Comprehensive sickle cell centers offer specialized care including hematologists, pain specialists, and support services. Ask your primary care doctor for referrals to specialists in your area."
          />
          <ContentCard
            title="Insurance and Financial Support"
            content="Many insurance plans cover sickle cell disease treatment. Contact your insurance provider to understand your coverage. There are also patient assistance programs, grants, and financial aid available through various organizations to help with treatment costs."
          />
          <ContentCard
            title="Clinical Trials"
            content="Clinical trials test new treatments for sickle cell disease. Participating in a clinical trial may give you access to new therapies before they are widely available. Talk to your doctor about whether a clinical trial might be right for you."
          />
          <ContentCard
            title="Support Groups"
            content="Connecting with others who understand what you're going through can be incredibly helpful. Look for local support groups, online communities, or ask your healthcare team about support resources in your area."
          />
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;