import React from 'react';
import { personalInfo, socialLinks } from '../data/portfolioData.jsx';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 bg-secondary-bg text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-text-secondary font-mono">
          Designed & Built with <FaHeart className="inline text-accent-2" /> by {personalInfo.name}
        </p>
        <p className="text-xs text-text-secondary font-mono mt-1">
          © {currentYear} Yashvardhan Singh. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href={socialLinks.github.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text-secondary hover:text-accent-1 transition-colors">
            {socialLinks.github.icon}
          </a>
          <a href={socialLinks.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-secondary hover:text-accent-1 transition-colors">
            {socialLinks.linkedin.icon}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;