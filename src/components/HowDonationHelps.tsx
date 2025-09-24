// src/components/HowDonationHelps.tsx
import React from "react";
import { Heart, Users, Stethoscope } from "lucide-react";

const items = [
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: "Medical Support",
    description:
      "Your donations provide access to advanced treatment and life-saving medication for sickle cell warriors.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    title: "Community Outreach",
    description:
      "We spread awareness through events, workshops, and support groups that build strong communities.",
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-green-500" />,
    title: "Research & Education",
    description:
      "Your support drives innovative research and helps educate families to manage sickle cell disease.",
  },
];

const HowDonationHelps: React.FC = () => {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-white">How Your Donation Helps</h3>
      <div className="grid sm:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start bg-white/10 rounded-xl p-4 shadow-md hover:bg-white/20 transition"
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold text-white">
                {item.title}
              </h4>
              <p className="text-sm text-gray-200">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowDonationHelps;
