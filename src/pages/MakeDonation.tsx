// src/pages/MakeADonation.tsx
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import DonationCheckoutForm from "../components/DonationCheckoutForm";

// load publishable key from env
const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string
);

const MakeADonation: React.FC = () => {
  return (
    <div className="bg-[url(/image/cloud.jpg)] bg-cover min-h-screen pb-20">
      <div className="container mx-auto px-4 lg:px-20 text-white pt-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
          Supporting Sickle Cell Life Projects
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 mt-12 max-w-6xl mx-auto justify-around">
          {/* Left side (info) */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">How Your Donation Helps</h3>
            <ul className="space-y-4 text-lg text-gray-200">
              <li>💊 Provide life-saving medication</li>
              <li>👩🏽‍🤝‍👨🏿 Build stronger communities</li>
              <li>📚 Fund research and education</li>
            </ul>
          </div>

          {/* Right side (Stripe Elements) */}
          <div className="bg-white text-gray-800 rounded-2xl p-6 shadow-lg">
            <Elements stripe={stripePromise}>
              <DonationCheckoutForm />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeADonation;
