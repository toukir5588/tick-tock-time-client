import React from 'react';
import { FiTruck, FiRefreshCw, FiPhoneCall } from 'react-icons/fi';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div
      className="flex flex-col items-start p-6 bg-white border border-gray-100 rounded-lg shadow-sm h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <div className="mb-4 text-3xl text-gray-800">
        <Icon />
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const ShippingAndSupportFeatures = () => {
  const features = [
    {
      icon: FiTruck,
      title: "Free Worldwide Shipping",
      description: "Enjoy fast, reliable delivery on all orders no matter where you are."
    },
    {
      icon: FiRefreshCw,
      title: "14-Day Easy Returns",
      description: "Not satisfied with your purchase? Send it back within 14 days for a full refund."
    },
    {
      icon: FiPhoneCall,
      title: "Expert Customer Support",
      description: "Our dedicated support team is here to assist you 24/7."
    }
  ];

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>
      </div>
    </div>
  );
};

export default ShippingAndSupportFeatures;