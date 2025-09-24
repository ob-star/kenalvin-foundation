import React from 'react';
import Hero from '../components/Hero';
import ContentCard from '../components/ContentCard';
import { Calendar, Users, Heart, Trophy } from 'lucide-react';

const HistoryPage: React.FC = () => {
  const milestones = [
    {
      year: '2019',
      title: 'Foundation Established',
      description: 'KENALVIN Foundation was established with a mission to educate communities about sickle cell disease.',
      icon: Calendar
    },
    {
      year: '2020',
      title: 'First Programs Launch',
      description: 'We launched our first educational programs focusing on African and Asian communities.',
      icon: Users
    },
    {
      year: '2021',
      title: 'Community Partnerships',
      description: 'Formed partnerships with medical centers and community organizations to expand our reach.',
      icon: Heart
    },
    {
      year: '2023',
      title: 'Growing Impact',
      description: 'Our programs have now reached thousands of individuals and families across multiple communities.',
      icon: Trophy
    }
  ];

  return (
    <div>
      <Hero
        title="Our History"
        subtitle="A Journey of Hope"
        description="Established in 2019, we're an organization driven by progressive ideas, bold actions, and a strong foundation of support."
        backgroundImage="https://images.pexels.com/photos/3825395/pexels-photo-3825395.jpeg"
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From our founding in 2019 to today, KENALVIN Foundation has grown from 
            a passionate vision into a vital resource for communities affected by sickle cell disease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {milestones.map((milestone, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <milestone.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
              <p className="text-gray-600 text-sm">{milestone.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <ContentCard
            title="A Cure for Sickle Cell Disease"
            content="Recent advances in stem cell transplantation offer hope for a cure. UI Health provides groundbreaking treatment through stem cell transplantation without the need for traditional chemotherapy. The procedure relies on transplanted cells from a healthy, tissue-matched, full sibling. Patients receive immunosuppressive drugs just before the transplant, along with a very low dose of total body irradiation, a treatment much less harsh and with fewer potentially serious side effects than chemotherapy. Next, the sibling donor cells are transfused into the patient. Stem cells from the donor produce healthy new blood cells in the patient, eventually in sufficient quantity to eliminate symptoms of sickle cell disease."
          />

          <ContentCard
            title="Personal Journey: CEO's Daughter"
            content="Alvin, our founder's daughter, underwent a bone marrow transplant procedure to treat her sickle cell condition. The procedure involved careful preparation and the generous donation from her older sister. The refined marrow was administered to Alvin through a carefully monitored process. Today, Alvin is sickle cell free, living as a testament to the power of medical advancement and family support. Her journey inspired the creation of KENALVIN Foundation and continues to motivate our work every day."
          />

          <ContentCard
            title="Success Stories: People Cured"
            content="In 2011, Iesha Thomas, a Chicagoan, became the first patient in the Midwest to undergo a successful stem cell transplant for sickle cell disease at UI Health. Six months after her transplant, Iesha Thomas was cured of sickle cell disease. In 2013, brothers Julius and Desmond Means were also cured at UI Health following a stem cell transplantation from their older brother, Clifford. For the sibling to be a compatible donor, at least eight of the 10 known human leukocyte antigen (HLA) must be identical between the donor and recipient. Julius and Desmond both matched 10/10 HLA genes with Clifford, making the transplant possible."
          />

          <ContentCard
            title="The Science Behind Success"
            content="The breakthrough procedure developed at the National Institutes of Health in Bethesda, Maryland, and validated at UI Health, represents a major advancement in sickle cell treatment. The process involves transplanted cells from a healthy, tissue-matched, full sibling. Patients receive immunosuppressive drugs just before the transplant, along with a very low dose of total body irradiation. This treatment is much less harsh and has fewer potentially serious side effects than traditional chemotherapy. Stem cells from the donor produce healthy new blood cells in the patient, eventually in sufficient quantity to eliminate symptoms of sickle cell disease. In many cases, sickle cells can no longer be detected."
          />
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-50 to-teal-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Looking Forward</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            As we continue our mission, we remain committed to educating communities, 
            supporting families, and advocating for better treatment options. 
            The future holds great promise for those affected by sickle cell disease.
          </p>
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
            <p className="text-gray-700 leading-relaxed">
              We will continue to be a voice for the sickle cell community, 
              working tirelessly to ensure that everyone has access to information, 
              support, and the best possible care. Together, we can make a difference.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistoryPage;