import React, { useState } from 'react';
import { DollarSign, PieChart, TrendingDown, Lightbulb, Calculator } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const BudgetBreakdown: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [selectedTrip, setSelectedTrip] = useState('southeast-asia');

  const trips = {
    'southeast-asia': {
      name: 'Southeast Asia (3 months)',
      total: 4500,
      daily: 50,
      breakdown: [
        { category: 'Accommodation', amount: 1350, percentage: 30, color: 'bg-amber-400' },
        { category: 'Food', amount: 1125, percentage: 25, color: 'bg-orange-400' },
        { category: 'Transportation', amount: 900, percentage: 20, color: 'bg-yellow-400' },
        { category: 'Activities', amount: 675, percentage: 15, color: 'bg-amber-300' },
        { category: 'Miscellaneous', amount: 450, percentage: 10, color: 'bg-orange-300' }
      ],
      tips: [
        'Book hostels in advance for better rates',
        'Eat at local street food stalls',
        'Use overnight buses to save on accommodation',
        'Look for free walking tours in major cities'
      ]
    },
    'europe': {
      name: 'Europe Cities (2 weeks)',
      total: 3200,
      daily: 114,
      breakdown: [
        { category: 'Accommodation', amount: 1120, percentage: 35, color: 'bg-amber-400' },
        { category: 'Food', amount: 800, percentage: 25, color: 'bg-orange-400' },
        { category: 'Transportation', amount: 640, percentage: 20, color: 'bg-yellow-400' },
        { category: 'Activities', amount: 480, percentage: 15, color: 'bg-amber-300' },
        { category: 'Miscellaneous', amount: 160, percentage: 5, color: 'bg-orange-300' }
      ],
      tips: [
        'Use Eurail passes for train travel',
        'Stay in hostels or Airbnb',
        'Cook some meals to save money',
        'Take advantage of free museum days'
      ]
    },
    'new-zealand': {
      name: 'New Zealand Road Trip (3 weeks)',
      total: 5800,
      daily: 276,
      breakdown: [
        { category: 'Accommodation', amount: 1740, percentage: 30, color: 'bg-amber-400' },
        { category: 'Transportation', amount: 1740, percentage: 30, color: 'bg-yellow-400' },
        { category: 'Food', amount: 1160, percentage: 20, color: 'bg-orange-400' },
        { category: 'Activities', amount: 870, percentage: 15, color: 'bg-amber-300' },
        { category: 'Miscellaneous', amount: 290, percentage: 5, color: 'bg-orange-300' }
      ],
      tips: [
        'Rent a campervan to combine transport and accommodation',
        'Shop at New World or Countdown for groceries',
        'Book activities in advance for discounts',
        'Use DOC campsites for budget-friendly stays'
      ]
    }
  };

  const currentTrip = trips[selectedTrip as keyof typeof trips];

  const savingsTips = [
    {
      icon: DollarSign,
      title: 'Budget Tracking',
      description: 'Use apps like Trail Wallet to track daily expenses and stay on budget.'
    },
    {
      icon: TrendingDown,
      title: 'Off-Season Travel',
      description: 'Travel during shoulder seasons for 30-50% savings on accommodation and flights.'
    },
    {
      icon: Calculator,
      title: 'Price Comparison',
      description: 'Always compare prices on multiple booking platforms before making reservations.'
    },
    {
      icon: Lightbulb,
      title: 'Local Living',
      description: 'Live like a local - eat street food, use public transport, and avoid tourist traps.'
    }
  ];

  return (
    <section id="budget" className={`py-20 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Budget
            <span className="text-amber-500"> Breakdowns</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Transparent, detailed cost breakdowns from our real travels. No hidden expenses, 
            just honest numbers to help you plan your dream trip.
          </p>
        </div>

        {/* Trip Selector */}
        <div className="flex justify-center mb-12">
          <div className={`inline-flex rounded-xl p-1 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
          }`}>
            {Object.entries(trips).map(([key, trip]) => (
              <button
                key={key}
                onClick={() => setSelectedTrip(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedTrip === key
                    ? 'bg-amber-400 text-gray-900 shadow-md'
                    : isDarkMode
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {trip.name.split('(')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Budget Visualization */}
          <div className={`p-8 rounded-3xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white shadow-xl'
          }`}>
            <div className="text-center mb-8">
              <h3 className={`text-2xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {currentTrip.name}
              </h3>
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <p className={`text-3xl font-bold text-amber-500`}>
                    ${currentTrip.total.toLocaleString()}
                  </p>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Total Budget
                  </p>
                </div>
                <div className="text-center">
                  <p className={`text-3xl font-bold text-orange-500`}>
                    ${currentTrip.daily}
                  </p>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Daily Average
                  </p>
                </div>
              </div>
            </div>

            {/* Pie Chart (Visual representation) */}
            <div className="relative mb-8">
              <div className="flex justify-center">
                <div className="relative w-64 h-64">
                  {/* Simplified pie chart using CSS */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-400 via-orange-400 to-yellow-400 animate-spin-slow" style={{ animation: 'spin 20s linear infinite' }} />
                  <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <PieChart className={`h-16 w-16 ${
                      isDarkMode ? 'text-amber-400' : 'text-amber-500'
                    }`} />
                  </div>
                </div>
              </div>
            </div>

            {/* Breakdown List */}
            <div className="space-y-4">
              {currentTrip.breakdown.map((item, index) => (
                <div key={index} className="flex items-center justify-between group">
                  <div className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full ${item.color}`} />
                    <span className={`font-medium ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {item.percentage}%
                    </span>
                    <span className={`font-bold text-lg ${
                      isDarkMode ? 'text-amber-400' : 'text-amber-600'
                    }`}>
                      ${item.amount.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips and Insights */}
          <div className="space-y-8">
            {/* Money-Saving Tips */}
            <div className={`p-8 rounded-3xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-white shadow-xl'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 flex items-center ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                <Lightbulb className="h-6 w-6 text-amber-500 mr-2" />
                Trip-Specific Tips
              </h3>
              <ul className="space-y-4">
                {currentTrip.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className={`${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* General Savings Tips */}
            <div className={`p-8 rounded-3xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-white shadow-xl'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Universal Savings Tips
              </h3>
              <div className="space-y-6">
                {savingsTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className={`p-3 rounded-xl transition-colors group-hover:scale-110 transform duration-300 ${
                      isDarkMode ? 'bg-amber-900/30 text-amber-400' : 'bg-amber-100 text-amber-600'
                    }`}>
                      <tip.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-1 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {tip.title}
                      </h4>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {tip.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className={`inline-block p-8 rounded-3xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white shadow-xl'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Want a Custom Budget Plan?
            </h3>
            <p className={`text-lg mb-6 max-w-2xl ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Get a personalized budget breakdown for your dream destination. We'll help you plan 
              every dollar to maximize your travel experience.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-amber-400 text-gray-900 font-bold text-lg rounded-full hover:bg-amber-300 transition-all duration-300 hover:scale-105 transform shadow-lg"
            >
              Get Your Custom Budget
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetBreakdown;