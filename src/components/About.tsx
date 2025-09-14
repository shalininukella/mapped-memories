import React from 'react';
import { Heart, Globe, DollarSign, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { isDarkMode } = useTheme();

  const achievements = [
    { icon: Globe, number: '25+', label: 'Countries Explored' },
    { icon: DollarSign, number: '$50', label: 'Average Daily Budget' },
    { icon: Users, number: '500+', label: 'Fellow Travelers Helped' },
    { icon: Heart, number: '∞', label: 'Memories Created' }
  ];

  return (
    <section id="about" className={`py-20 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Meet the
            <span className="text-amber-500"> WanderDuo</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            We're Alex and Maya, two best friends who turned our love for adventure and budget travel 
            into a mission to help others explore the world affordably.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl group">
                  <img
                    src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
                    alt="Alex exploring"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-bold">Alex</p>
                    <p className="text-sm">The Planner</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl group">
                  <img
                    src="https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg"
                    alt="Maya adventuring"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-bold">Maya</p>
                    <p className="text-sm">The Explorer</p>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <div className="relative overflow-hidden rounded-2xl group">
                  <img
                    src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg"
                    alt="Together exploring"
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-bold">The Duo</p>
                    <p className="text-sm">Adventure Partners</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-amber-400 text-gray-900 p-4 rounded-full shadow-lg animate-bounce">
              <Heart className="h-8 w-8" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className={`prose prose-lg max-w-none ${
              isDarkMode ? 'prose-invert' : ''
            }`}>
              <p className={`text-lg leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                It all started with a crazy idea: could two college friends explore the world on a 
                backpacker's budget? Five years and 25 countries later, we've proven that 
                <span className="text-amber-500 font-semibold"> adventure doesn't require a trust fund</span>.
              </p>

              <p className={`text-lg leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                From sleeping in $5 hostels in Bangkok to finding hidden gems in European cities, 
                we've mastered the art of budget travel. Now, we're sharing our secrets to help 
                fellow wanderers create their own incredible journeys without breaking the bank.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 transform ${
                    isDarkMode 
                      ? 'bg-gray-800 hover:bg-gray-700' 
                      : 'bg-white hover:bg-amber-50 shadow-md hover:shadow-lg'
                  }`}
                >
                  <achievement.icon className={`h-8 w-8 mx-auto mb-3 ${
                    isDarkMode ? 'text-amber-400' : 'text-amber-500'
                  }`} />
                  <p className={`text-3xl font-bold mb-1 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {achievement.number}
                  </p>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {achievement.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className={`p-6 rounded-2xl border-l-4 border-amber-400 ${
              isDarkMode ? 'bg-gray-800' : 'bg-amber-50'
            }`}>
              <h3 className={`text-xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Our Mission
              </h3>
              <p className={`text-lg ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                To prove that meaningful travel experiences are accessible to everyone, regardless of budget. 
                We believe the best adventures happen when you step outside your comfort zone, not your price range.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;