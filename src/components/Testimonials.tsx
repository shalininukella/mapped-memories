import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../utils/data';
import { useTheme } from '../contexts/ThemeContext';

const Testimonials: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="testimonials" className={`py-20 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Traveler
            <span className="text-amber-500"> Reviews</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Real feedback from fellow adventurers who trusted us to help plan their budget-friendly journeys.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group relative p-8 rounded-3xl transition-all duration-300 hover:scale-105 transform ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 shadow-xl' 
                  : 'bg-gradient-to-br from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 shadow-lg hover:shadow-2xl'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className={`absolute -top-4 left-8 w-8 h-8 rounded-full flex items-center justify-center ${
                isDarkMode ? 'bg-amber-400 text-gray-900' : 'bg-amber-400 text-white'
              }`}>
                <Quote className="h-4 w-4" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-amber-400 fill-current"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className={`text-lg mb-6 leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                "{testimonial.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-400 ring-offset-2 dark:ring-offset-gray-700"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-gray-700" />
                </div>
                <div>
                  <p className={`font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {testimonial.name}
                  </p>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-orange-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className={`text-4xl font-bold text-amber-500 mb-2`}>4.9</p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Average Rating
            </p>
          </div>
          <div className="text-center">
            <p className={`text-4xl font-bold text-amber-500 mb-2`}>500+</p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Happy Travelers
            </p>
          </div>
          <div className="text-center">
            <p className={`text-4xl font-bold text-amber-500 mb-2`}>95%</p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Repeat Customers
            </p>
          </div>
          <div className="text-center">
            <p className={`text-4xl font-bold text-amber-500 mb-2`}>$2.1M</p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Total Savings
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className={`inline-block p-8 rounded-3xl ${
            isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-amber-50 to-orange-50'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Join Our Community?
            </h3>
            <p className={`text-lg mb-6 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Let us help you create memories that will last a lifetime
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-amber-400 text-gray-900 font-bold text-lg rounded-full hover:bg-amber-300 transition-all duration-300 hover:scale-105 transform shadow-lg"
            >
              Start Your Adventure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;