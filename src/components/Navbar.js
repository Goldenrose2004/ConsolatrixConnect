import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#001B4D] py-3">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/school-logo.png" alt="ConsolatrixConnect" className="h-6 w-6" />
            <span className="text-white text-lg ml-2 font-medium">ConsolatrixConnect</span>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-1.5 text-white text-sm hover:text-gray-200 transition duration-300 border border-white rounded">
              Login
            </button>
            <button className="px-4 py-1.5 bg-white text-[#001B4D] rounded text-sm hover:bg-gray-100 transition duration-300 border border-white">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      <div className="w-full h-px bg-gray-800"></div>
    </>
  );
};

export default Navbar; 