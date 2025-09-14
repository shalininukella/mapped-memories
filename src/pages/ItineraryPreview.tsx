import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, DollarSign, Users, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { sampleItinerary } from '../utils/data';
import { useTheme } from '../contexts/ThemeContext';

const ItineraryPreview: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  return (
    <div className={`min-h-screen ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Header */}
      <div className={`sticky top-0 z-40 border-b ${
        isDarkMode 
          ? 'bg-gray-900/90 border-gray-700' 
          : 'bg-white/90 border-gray-200'
      } backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className={`flex items-center space-x-2 transition-colors ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            
            <h1 className={`text-xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Sample Itinerary Preview
            </h1>

            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-2 bg-amber-400 text-gray-900 font-semibold rounded-full hover:bg-amber-300 transition-colors"
            >
              Get Custom Plan
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Itinerary Details */}
          <div className="lg:col-span-2">
            {/* Trip Overview */}
            <div className={`p-8 rounded-3xl mb-8 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
            }`}>
              <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.pexels.com/photos/2422913/pexels-photo-2422913.jpeg"
                  alt="Southeast Asia"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h1 className="text-3xl font-bold text-white mb-2">
                    {sampleItinerary.title}
                  </h1>
                  <div className="flex items-center space-x-4 text-white/90">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>21 Days</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{sampleItinerary.countries.join(', ')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{sampleItinerary.totalBudget}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className={`text-lg leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                This is a sample of what your custom itinerary could look like. Our detailed plans include 
                day-by-day activities, budget breakdowns, accommodation recommendations, and insider tips 
                that you won't find in guidebooks.
              </p>
            </div>

            {/* Daily Itinerary */}
            <div className="space-y-4">
              <h2 className={`text-3xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Daily Itinerary
              </h2>
              
              {sampleItinerary.days.map((day) => (
                <div
                  key={day.day}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700' 
                      : 'bg-white border-gray-200 shadow-lg'
                  }`}
                >
                  <button
                    onClick={() => toggleDay(day.day)}
                    className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-gray-900 font-bold">
                        {day.day}
                      </div>
                      <div>
                        <h3 className={`text-xl font-semibold ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {day.location}
                        </h3>
                        <p className={`text-sm ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {day.activities.length} activities • Budget: {day.budget}
                        </p>
                      </div>
                    </div>
                    <div className={`transition-transform duration-300 ${
                      expandedDay === day.day ? 'rotate-180' : ''
                    }`}>
                      <ChevronDown className={`h-6 w-6 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedDay === day.day ? 'max-h-96' : 'max-h-0'
                  }`}>
                    <div className="px-6 pb-6 space-y-4">
                      <div>
                        <h4 className={`font-semibold mb-2 ${
                          isDarkMode ? 'text-amber-400' : 'text-amber-600'
                        }`}>
                          Activities
                        </h4>
                        <ul className={`space-y-1 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {day.activities.map((activity, index) => (
                            <li key={index} className="flex items-start">
                              <Clock className="h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className={`font-semibold mb-2 ${
                            isDarkMode ? 'text-amber-400' : 'text-amber-600'
                          }`}>
                            Accommodation
                          </h4>
                          <p className={`text-sm ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {day.accommodation}
                          </p>
                        </div>
                        <div>
                          <h4 className={`font-semibold mb-2 ${
                            isDarkMode ? 'text-amber-400' : 'text-amber-600'
                          }`}>
                            Meals
                          </h4>
                          <p className={`text-sm ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {day.meals}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* More Days Indicator */}
              <div className={`text-center py-8 rounded-2xl border-2 border-dashed ${
                isDarkMode 
                  ? 'border-gray-600 text-gray-400' 
                  : 'border-gray-300 text-gray-500'
              }`}>
                <p className="text-lg">
                  + 18 more days of detailed planning
                </p>
                <p className="text-sm mt-2">
                  Get the complete itinerary with your custom plan
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Trip Summary */}
            <div className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Trip Summary
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Duration
                  </span>
                  <span className={`font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    21 Days
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Countries
                  </span>
                  <span className={`font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    3
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Total Budget
                  </span>
                  <span className="font-semibold text-amber-500">
                    {sampleItinerary.totalBudget}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Daily Average
                  </span>
                  <span className="font-semibold text-amber-500">
                    $133
                  </span>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                What's Included
              </h3>
              <ul className={`space-y-2 text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
                  Day-by-day detailed itinerary
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
                  Budget breakdown for each day
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
                  Accommodation recommendations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
                  Transportation options
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
                  Local food recommendations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
                  Money-saving tips
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
                  Emergency contacts & info
                </li>
              </ul>
            </div>

            {/* Pricing */}
            <div className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Get Your Custom Plan
              </h3>
              <div className="space-y-4">
                <div className={`p-4 rounded-xl border ${
                  isDarkMode ? 'border-amber-600 bg-amber-900/20' : 'border-amber-200 bg-amber-50'
                }`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-amber-500">Detailed Plan</span>
                    <span className="text-2xl font-bold text-amber-500">$99</span>
                  </div>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-amber-300' : 'text-amber-700'
                  }`}>
                    Perfect for this type of trip
                  </p>
                </div>
                
                <button 
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setTimeout(() => {
                      window.location.href = '/#contact';
                    }, 300);
                  }}
                  className="w-full py-4 bg-amber-400 text-gray-900 font-bold text-lg rounded-xl hover:bg-amber-300 transition-colors"
                >
                  Order Custom Itinerary
                </button>
                
                <p className={`text-xs text-center ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  💰 Money-back guarantee if we don't save you 20%
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Questions?
              </h3>
              <p className={`text-sm mb-4 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                We're here to help you plan the perfect trip within your budget.
              </p>
              <div className={`text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <p>📧 hello@wanderduo.com</p>
                <p>⏰ Response within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryPreview;