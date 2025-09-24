import React from 'react';
import Hero from '../components/Hero';
import ContentCard from '../components/ContentCard';
import QuoteSection from '../components/QuoteSection';
import { Users, Heart, Target, Award } from 'lucide-react';
import BrandSection from '../components/BrandSection';
import InteractiveSlideshow from '../components/InteractiveSlideshow';
import InfoBlock from '../components/InfoBlock';


const HomePage: React.FC = () => {
  const stats = [
    { icon: Users, label: 'People Educated', value: '10,000+' },
    { icon: Heart, label: 'Lives Impacted', value: '5,000+' },
    { icon: Target, label: 'Programs Active', value: '15' },
    { icon: Award, label: 'Years of Service', value: '5+' },
  ];

  return (
    <div>
      <Hero
        title="KENALVIN Foundation"
        subtitle="Making a Difference"
        description="Here at KENALVIN Foundation, we see the value in everyone. We want to be a catalyst for positive change and aim to enlighten the world, particularly African and Asian populations, about Sickle Cell disease and carrier traits.

Since our humble beginnings, we’ve been driven by the same ideas we initially founded our Non-Profit Organization upon: support, empowerment, and progress.

Learn more about our mission, our vision, and how we go about making the changes we want to see"
        backgroundImage="/public/image/hero.webp"
        ctaText="Learn More"
        ctaLink="/what-is-sickle-cell"
      />
      
      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We see the value in everyone and strive to be a catalyst for positive change, 
            enlightening communities about sickle cell disease and providing hope through education and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContentCard
            title="Who We Are"
            content="Established in 2019, KENALVIN Foundation is driven by progressive ideas, bold actions, and a strong foundation of support. We focus on educating communities about sickle cell disease and providing resources for those affected by this condition."
          />
          <ContentCard
            title="What We Do"
            content="Our programs focus on education, awareness, and support for individuals and families affected by sickle cell disease. We work particularly with African and Asian communities to increase understanding and provide access to information about treatment options."
          />
        </div>
      </section> <BrandSection />

      <InteractiveSlideshow />

      <QuoteSection
        quote="Great things are done by a series of small things brought together"
        author="Vincent van Gogh"
      />

      {/* Activities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through education, support, and community engagement, we're making a real difference 
              in the lives of those affected by sickle cell disease.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ContentCard
              title="Education Programs"
              content="We provide comprehensive educational resources about sickle cell disease, including information about symptoms, treatment options, and genetic counseling for families."
            />
            <ContentCard
              title="Community Outreach"
              content="Our outreach programs focus on raising awareness in underserved communities, providing free screening events, and connecting families with medical resources."
            />
            <ContentCard
              title="Support Networks"
              content="We facilitate support groups and networks for families affected by sickle cell disease, creating connections and sharing resources for better outcomes."
            />
          </div>

        </div>
      </section>

      <div className="space-y-1 p-3  mx-auto">
      <InfoBlock
        title="Homeless Outreach"
        subtitle="One Step at a Time"
        description="With our organization's mission always in mind, we strive to find new strategies for dealing with this challenge. Our team works each and every day to make a positive impact."
        image="/image/c4.jpeg"
      />

      <InfoBlock
        title="Food Donation Drop-Off"
        subtitle="Helping The Community"
        description="At KENALVIN Foundation, we are dedicated to stepping up our efforts in addressing this issue. Through cooperation and empowerment we believe progress can be made."
        image="/image/group4.jpeg"
        reverse
      />
    </div>
    </div>
  );
};

export default HomePage;