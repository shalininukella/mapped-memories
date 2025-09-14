import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', section: 'hero' },
    { name: 'About', path: '/', section: 'about' },
    { name: 'Stories', path: '/', section: 'stories' },
    { name: 'Gallery', path: '/', section: 'gallery' },
    { name: 'Budget Tips', path: '/', section: 'budget' },
    { name: 'Contact', path: '/', section: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isDarkMode 
        ? 'bg-gray-900/90 border-gray-700' 
        : 'bg-white/90 border-amber-100'
    } backdrop-blur-sm border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className={`p-2 rounded-full transition-colors group-hover:scale-110 transform duration-300 ${
              isDarkMode ? 'bg-amber-400 text-gray-900' : 'bg-amber-400 text-white'
            }`}>
              <MapPin className="h-5 w-5" />
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              WanderDuo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className={`text-sm font-medium transition-colors hover:scale-105 transform duration-200 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-amber-400' 
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all hover:scale-110 transform duration-300 ${
                isDarkMode 
                  ? 'bg-gray-700 text-amber-400 hover:bg-gray-600' 
                  : 'bg-amber-100 text-amber-600 hover:bg-amber-200'
              }`}
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* CTA Button */}
            <Link
              to="/itinerary-preview"
              className={`px-6 py-2 rounded-full font-medium transition-all hover:scale-105 transform duration-300 shadow-md ${
                isDarkMode
                  ? 'bg-amber-400 text-gray-900 hover:bg-amber-300'
                  : 'bg-amber-400 text-white hover:bg-amber-500'
              }`}
            >
              Plan Your Trip
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all ${
                isDarkMode 
                  ? 'bg-gray-700 text-amber-400' 
                  : 'bg-amber-100 text-amber-600'
              }`}
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full transition-all ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t transition-all ${
            isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-amber-100 bg-white'
          }`}>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className={`block w-full text-left px-4 py-2 text-base font-medium transition-colors ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-amber-400' 
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                {item.name}
              </button>
            ))}
            <Link
              to="/itinerary-preview"
              className={`block mx-4 mt-4 px-6 py-3 rounded-full font-medium text-center transition-all ${
                isDarkMode
                  ? 'bg-amber-400 text-gray-900'
                  : 'bg-amber-400 text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Plan Your Trip
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;