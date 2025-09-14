import React from 'react';
import { MapPin, Instagram, Facebook, Twitter, Youtube, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();

  const quickLinks = [
    { name: 'About Us', section: 'about' },
    { name: 'Travel Stories', section: 'stories' },
    { name: 'Budget Tips', section: 'budget' },
    { name: 'Photo Gallery', section: 'gallery' },
    { name: 'Contact', section: 'contact' }
  ];

  const services = [
    { name: 'Custom Itineraries', path: '/itinerary-preview' },
    { name: 'Budget Planning', path: '/itinerary-preview' },
    { name: 'Travel Consultation', path: '/itinerary-preview' },
    { name: 'Group Travel', path: '/itinerary-preview' }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-400' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-400' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-300' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`${
      isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'
    } border-t`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <div className="p-2 bg-amber-400 rounded-full group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <span className={`text-2xl font-bold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                WanderDuo
              </span>
            </Link>
            
            <p className={`text-lg mb-6 max-w-md ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Two friends sharing our budget travel adventures and helping fellow wanderers 
              explore the world without breaking the bank.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    isDarkMode 
                      ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' 
                      : 'bg-white text-gray-500 hover:bg-gray-100 shadow-md'
                  } ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className={`p-4 rounded-2xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-white shadow-md'
            }`}>
              <div className="flex items-center space-x-3">
                <Mail className={`h-5 w-5 ${
                  isDarkMode ? 'text-amber-400' : 'text-amber-500'
                }`} />
                <p className={`text-sm font-medium ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Weekly travel tips in your inbox
                </p>
                <button 
                  onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-4 py-2 bg-amber-400 text-gray-900 text-sm font-semibold rounded-full hover:bg-amber-300 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className={`transition-colors hover:text-amber-500 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className={`text-lg font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className={`transition-colors hover:text-amber-500 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className={`text-sm mb-4 md:mb-0 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <p className="flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Alex & Maya
            </p>
          </div>

          <div className={`flex items-center space-x-6 text-sm ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <span>© 2024 WanderDuo. All rights reserved.</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-500 transition-colors">Privacy</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;