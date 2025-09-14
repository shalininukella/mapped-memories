import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { upcomingTravels } from '../utils/data';
import { useTheme } from '../contexts/ThemeContext';

const UpcomingTravels: React.FC = () => {
  const { isDarkMode } = useTheme();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Booked':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Planning':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Researching':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColorDark = (status: string) => {
    switch (status) {
      case 'Booked':
        return 'bg-green-900/30 text-green-300 border-green-700';
      case 'Planning':
        return 'bg-amber-900/30 text-amber-300 border-amber-700';
      case 'Researching':
        return 'bg-blue-900/30 text-blue-300 border-blue-700';
      default:
        return 'bg-gray-900/30 text-gray-300 border-gray-700';
    }
  };

  return (
    <section id="upcoming" className={`py-20 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Upcoming
            <span className="text-amber-500"> Adventures</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Get excited! Here's where we're headed next. Follow along for real-time updates, 
            budget breakdowns, and planning insights.
          </p>
        </div>

        {/* Travels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingTravels.map((travel, index) => (
            <div
              key={travel.id}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 transform ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 shadow-xl' 
                  : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-2xl'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={travel.image}
                  alt={travel.destination}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                    isDarkMode 
                      ? getStatusColorDark(travel.status)
                      : getStatusColor(travel.status)
                  }`}>
                    {travel.status}
                  </span>
                </div>

                {/* Countdown or Date */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{travel.dates}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className={`h-5 w-5 ${
                    isDarkMode ? 'text-amber-400' : 'text-amber-500'
                  }`} />
                  <h3 className={`text-xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {travel.destination}
                  </h3>
                </div>

                <p className={`mb-6 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {travel.description}
                </p>

                {/* Action Button */}
                <button className={`group/btn w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                  travel.status === 'Booked'
                    ? isDarkMode
                      ? 'bg-green-900/30 text-green-300 hover:bg-green-900/50'
                      : 'bg-green-50 text-green-700 hover:bg-green-100'
                    : isDarkMode
                      ? 'bg-amber-900/30 text-amber-300 hover:bg-amber-900/50'
                      : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                }`}>
                  <Clock className="h-4 w-4" />
                  <span>
                    {travel.status === 'Booked' ? 'Follow Our Journey' : 'Get Updates'}
                  </span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className={`mt-16 text-center p-8 rounded-3xl ${
          isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-amber-50 to-orange-50'
        }`}>
          <h3 className={`text-2xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Don't Miss Out!
          </h3>
          <p className={`text-lg mb-6 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Subscribe to get real-time updates, budget breakdowns, and exclusive tips from our upcoming adventures.
          </p>
          <button 
            onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center px-8 py-4 bg-amber-400 text-gray-900 font-bold text-lg rounded-full hover:bg-amber-300 transition-all duration-300 hover:scale-105 transform shadow-lg"
          >
            Subscribe for Updates
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingTravels;