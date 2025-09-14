import React, { useState } from 'react';
import { MapPin, ExternalLink, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { destinations } from '../utils/data';
import { useTheme } from '../contexts/ThemeContext';

const InteractiveMap: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  const handlePinClick = (destinationId: string) => {
    setSelectedDestination(destinationId === selectedDestination ? null : destinationId);
  };

  const selectedDest = destinations.find(d => d.id === selectedDestination);

  return (
    <section id="map" className={`py-20 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-amber-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Our Travel
            <span className="text-amber-500"> Map</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Explore the destinations we've visited. Click on any pin to discover our adventures 
            and get inspired for your next journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive World Map */}
          <div className="lg:col-span-2">
            <div className={`relative rounded-3xl overflow-hidden shadow-2xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              {/* Map Background */}
              <div className="relative h-96 lg:h-[500px]">
                <img
                  src="https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg"
                  alt="World Map"
                  className="w-full h-full object-cover filter brightness-75"
                />
                
                {/* Overlay for better pin visibility */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-amber-900/20" />

                {/* Destination Pins */}
                {destinations.map((destination, index) => {
                  // Simplified positioning - in a real app, you'd use proper map coordinates
                  const positions = [
                    { left: '75%', top: '35%' }, // Bangkok
                    { left: '25%', top: '25%' }, // Paris
                    { left: '85%', top: '75%' }, // Queenstown
                    { left: '78%', top: '32%' }, // Kyoto
                    { left: '15%', top: '65%' }, // Cusco
                  ];
                  
                  const position = positions[index] || { left: '50%', top: '50%' };
                  
                  return (
                    <button
                      key={destination.id}
                      onClick={() => handlePinClick(destination.id)}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-125 ${
                        selectedDestination === destination.id ? 'z-20' : 'z-10'
                      }`}
                      style={{ left: position.left, top: position.top }}
                    >
                      <div className={`relative group ${
                        selectedDestination === destination.id ? 'animate-bounce' : ''
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all ${
                          selectedDestination === destination.id
                            ? 'bg-amber-400 scale-125'
                            : 'bg-amber-500 hover:bg-amber-400'
                        }`}>
                          <MapPin className="h-5 w-5 text-white" />
                        </div>
                        
                        {/* Ripple Effect */}
                        <div className={`absolute inset-0 rounded-full border-2 border-amber-400 animate-ping ${
                          selectedDestination === destination.id ? 'opacity-75' : 'opacity-0'
                        }`} />
                        
                        {/* Tooltip */}
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                          {destination.name}
                        </div>
                      </div>
                    </button>
                  );
                })}

                {/* Travel Routes (Animated Lines) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {destinations.slice(0, -1).map((_, index) => {
                    const positions = [
                      { x: 75, y: 35 }, // Bangkok
                      { x: 25, y: 25 }, // Paris
                      { x: 85, y: 75 }, // Queenstown
                      { x: 78, y: 32 }, // Kyoto
                    ];
                    
                    const current = positions[index];
                    const next = positions[index + 1];
                    
                    if (!next) return null;
                    
                    return (
                      <line
                        key={index}
                        x1={`${current.x}%`}
                        y1={`${current.y}%`}
                        x2={`${next.x}%`}
                        y2={`${next.y}%`}
                        stroke="rgba(251, 191, 36, 0.6)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        className="animate-pulse"
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Map Controls */}
              <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
                <button className={`p-2 rounded-full shadow-lg transition-all hover:scale-110 ${
                  isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'
                }`}>
                  +
                </button>
                <button className={`p-2 rounded-full shadow-lg transition-all hover:scale-110 ${
                  isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'
                }`}>
                  −
                </button>
              </div>
            </div>
          </div>

          {/* Destination Info Panel */}
          <div className="lg:col-span-1">
            {selectedDest ? (
              <div className={`p-8 rounded-3xl transition-all duration-500 ${
                isDarkMode ? 'bg-gray-800 shadow-xl' : 'bg-white shadow-2xl'
              }`}>
                <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                  <img
                    src={selectedDest.image}
                    alt={selectedDest.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{selectedDest.name}</h3>
                    <p className="text-amber-200">{selectedDest.country}</p>
                  </div>
                </div>

                <p className={`text-lg mb-4 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {selectedDest.description}
                </p>

                <div className={`mb-6 p-4 rounded-xl ${
                  isDarkMode ? 'bg-gray-700' : 'bg-amber-50'
                }`}>
                  <p className={`text-sm font-semibold mb-1 ${
                    isDarkMode ? 'text-amber-400' : 'text-amber-600'
                  }`}>
                    Visited
                  </p>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {selectedDest.visitedDate}
                  </p>
                </div>

                <div className="flex space-x-3">
                  {selectedDest.blogPostId && (
                    <Link
                      to={`/blog/${selectedDest.blogPostId}`}
                      className="flex-1 flex items-center justify-center space-x-2 py-3 bg-amber-400 text-gray-900 rounded-xl font-semibold hover:bg-amber-300 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Read Story</span>
                    </Link>
                  )}
                  <button className={`flex items-center justify-center p-3 rounded-xl transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}>
                    <Camera className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className={`p-8 rounded-3xl text-center ${
                isDarkMode ? 'bg-gray-800 shadow-xl' : 'bg-white shadow-2xl'
              }`}>
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  isDarkMode ? 'bg-amber-900/30' : 'bg-amber-100'
                }`}>
                  <MapPin className={`h-8 w-8 ${
                    isDarkMode ? 'text-amber-400' : 'text-amber-600'
                  }`} />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Explore Our Destinations
                </h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Click on any pin on the map to learn more about our adventures and discover 
                  hidden gems from our travels around the world.
                </p>
              </div>
            )}

            {/* Travel Stats */}
            <div className={`mt-8 p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
            }`}>
              <h4 className={`text-lg font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Travel Stats
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-amber-500">{destinations.length}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Destinations
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-amber-500">
                    {new Set(destinations.map(d => d.country)).size}
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Countries
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-amber-500">50K</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Miles Traveled
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-amber-500">2.5Y</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Total Time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;