import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg"
          alt="Travel Adventure"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/80'
            : 'bg-gradient-to-r from-amber-900/70 via-amber-900/40 to-orange-900/70'
        }`} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-400/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-40 right-20 w-16 h-16 bg-orange-400/20 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-yellow-400/20 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Adventure
            <span className="block text-amber-400 animate-pulse">
              Awaits
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-orange-200 mt-2">
              Two Friends, Endless Journeys
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Join us as we explore the world on a budget, sharing authentic travel experiences 
            and helping you plan your dream adventures without breaking the bank.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-8 mb-12">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-3xl font-bold text-amber-400">25+</span>
              <span className="text-white">Countries</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-3xl font-bold text-amber-400">$50</span>
              <span className="text-white">Daily Budget</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-3xl font-bold text-amber-400">100+</span>
              <span className="text-white">Stories</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/itinerary-preview"
              className="group inline-flex items-center justify-center px-8 py-4 bg-amber-400 text-gray-900 font-bold text-lg rounded-full hover:bg-amber-300 transition-all duration-300 hover:scale-105 transform shadow-xl"
            >
              Get Custom Itinerary
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button 
              onClick={() => document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105 transform shadow-xl border border-white/30"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Our Journey
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;