import React from 'react';

import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      title: 'Free',
      price: '$0',
      features: [
        'Voice messages anywhere',
        'Basic chat features',
        'Group conversations',
        'Mobile app access',
      ],
    },
    {
      title: 'Premium',
      price: '$9.99',
      features: [
        'All Free features',
        'Advanced voice messages',
        'Priority support',
        'Custom themes',
        'Priority support',
        'Custom themes'
      ],
      isPopular: true,
    },
    {
      title: 'Business',
      price: '$29.99',
      features: [
        'All Premium features',
        'Admin controls',
        'Analytics dashboard',
        'API access',
      ],
    },
  ];

  return (
    <div className=" max-w-[1280px] mx-auto mt-40 pb-10 px-4 mb-20 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 mt-10">
          <h2 className="text-3xl font-semibold text-white mb-4 uppercase">One Account for all AI needs</h2>

          
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-end">
          {plans.map((plan, index) => (
            <div key={index} className="relative h-auto transform transition-transform duration-300 hover:scale-105">
              <div className="h-full rounded-2xl p-8  backdrop-blur-sm border border-gray-200/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300">
                <h3 className="text-xl font-medium mb-4 text-white">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">/mo</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-black bg-gray-300 rounded-full p-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 px-4 rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-200">
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default PricingSection;