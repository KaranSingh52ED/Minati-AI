import React from 'react';
import { Github, Twitter, Linkedin, Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Logo and Description */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Rocket className=" animate-pulse" />
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
                Minati AI
              </h1>
            </div>
            <p className="text-gray-400 max-w-sm">
              Building intelligent, agentic solutions for the future of AI-driven applications.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-8 text-sm">
            {['About Us', 'Services', 'Contact Us', 'Solutions', 'Dashboard'].map((item, index) => (
              <a
                key={index}
                href={`${item.toLowerCase().replace(/\s/g, '-')}`}
                className="relative group transition"
              >
                <span className="text-white/80 group-hover:text-teal-400 transition duration-300">
                  {item}
                </span>
                <span className="block h-0.5 w-0 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Github className="text-white hover:text-teal-400 transition-colors duration-300" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Twitter className="text-white hover:text-teal-400 transition-colors duration-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Linkedin className="text-white hover:text-teal-400 transition-colors duration-300" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Minati AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
