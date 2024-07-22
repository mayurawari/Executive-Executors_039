import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-3">
      <div className="container mx-auto px-6">
        {/* Upper Part: Centered Title and Tagline */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-extrabold mb-2">IdeaFlow</h2>
          <p className="text-lg text-gray-400">Unleash Your Creative Potential</p>
        </div>
        
        {/* Lower Part: Divided Navigation Links */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
            <a href="#" className="text-gray-300 hover:text-white transition duration-300">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300">About</a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300">Features</a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300">Contact</a>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-6 md:mt-0 text-center md:text-left">
            <a href="#" className="text-gray-300 hover:text-white transition duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300">Terms of Service</a>
          </div>
        </div>

        {/* Social Media Icons and Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <FaLinkedin size={20} />
            </a>
          </div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} IdeaFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
