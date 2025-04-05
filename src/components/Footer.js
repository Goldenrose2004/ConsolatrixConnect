import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      {/* Line above footer */}
      <div className="w-full h-px bg-gray-800"></div>
      
      <footer className="bg-[#001B4D] text-white py-4 font-poppins">
        <div className="container mx-auto px-8">
          <div className="flex justify-between">
            {/* Left Column */}
            <div>
              <h3 className="text-xl font-bold mb-1">ConsolatrixConnect</h3>
              <p className="text-gray-400 text-sm">Consolatrix College of Toledo Inc, - Toledo City, Cebu.</p>
              <p className="text-gray-400 text-sm">A Catholic Institution committed to excellence in education and service.</p>
            </div>

            {/* Right Columns */}
            <div className="flex gap-12">
              {/* Quick Links */}
              <div>
                <h4 className="text-white text-sm font-semibold">Quick Links</h4>
                <ul className="mt-1">
                  <li className="text-gray-400 text-sm leading-relaxed">About Us</li>
                  <li className="text-gray-400 text-sm leading-relaxed">Contact Us</li>
                  <li className="text-gray-400 text-sm leading-relaxed">Dashboard</li>
                </ul>
              </div>
              {/* Legal */}
              <div>
                <h4 className="text-white text-sm font-semibold">Legal</h4>
                <ul className="mt-1">
                  <li className="text-gray-400 text-sm leading-relaxed">Privacy Policy</li>
                  <li className="text-gray-400 text-sm leading-relaxed">Terms of Use</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Line */}
          <div className="w-full h-px bg-gray-800 mt-4"></div>

          {/* Bottom Section */}
          <div className="flex justify-between py-4">
            <p className="text-gray-400 text-sm">© 2025 ConsolatrixConnect. All rights reserved.</p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">
                <FaInstagram className="w-4 h-4" />
              </span>
              <span className="text-gray-400">
                <FaFacebookF className="w-4 h-4" />
              </span>
              <span className="text-gray-400">
                <FaTwitter className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer; 