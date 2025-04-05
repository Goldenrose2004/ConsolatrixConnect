import React from 'react';
import { FaDollarSign, FaSync, FaMobileAlt } from 'react-icons/fa';

const Benefits = () => {
  const benefits = [
    {
      icon: <FaDollarSign className="w-6 h-6 text-white" />,
      title: "Cost-Effective",
      description: "Save on printing and distribution costs with our digital solution."
    },
    {
      icon: <FaSync className="w-6 h-6 text-white" />,
      title: "Always Up-to-Date",
      description: "Instantly update policies and ensure everyone has the latest information."
    },
    {
      icon: <FaMobileAlt className="w-6 h-6 text-white" />,
      title: "Accessible Anywhere",
      description: "Access your handbook from any device, anytime, anywhere."
    }
  ];

  return (
    <div className="py-16 bg-[#001B4D]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm mb-1">Benefits</p>
          <h2 className="text-4xl font-bold text-white mb-3">Why Go Digital ?</h2>
          <p className="text-gray-400 text-sm">
            Our digital handbook platform offers numerous advantages over traditional printed handbooks.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-[#00133A] p-8 rounded-lg text-white flex flex-col items-center">
              <div className="flex justify-center items-center w-12 h-12 bg-[#001B4D] rounded-full mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-center text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;