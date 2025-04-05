import React from 'react';
import { FaBook, FaEnvelope, FaUsers, FaCog } from 'react-icons/fa';

const Sections = () => {
  const sections = [
    {
      title: "Student Handbook Foreword",
      description: "The official foreword establishes the authority and purpose of the handbook. All students are mandated to know and...",
      link: "Learn More"
    },
    {
      title: "Letter to Students",
      description: "A personal message from the School Administrative Board to students about the importance of following the...",
      link: "Learn More"
    },
    {
      title: "AR Foundresses",
      description: "Information about the Augustinian Recollect Foundresses who established the congregation.",
      link: "Learn More"
    },
    {
      title: "Handbook Revision Process",
      description: "Details about the meticulous six-stage process used to revise and update the student handbook.",
      link: "Learn More"
    }
  ];

  return (
    <div className="py-16 bg-[#001B4D]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-3 text-white">Digital Handbook Sections</h2>
        <p className="text-center text-gray-300 text-sm mb-12">
          Browse through our official student handbook to get familiar with our policies and guidelines.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section, index) => (
            <div key={index} className="bg-[#00133A] p-6 rounded text-white flex flex-col justify-between min-h-[180px]">
              <div>
                <h3 className="text-base font-semibold mb-2">{section.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{section.description}</p>
              </div>
              <div className="mt-4">
                <button className="text-white text-sm font-medium flex items-center group">
                  {section.link}
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sections; 