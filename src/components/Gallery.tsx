import React, { useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Gallery: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg',
      alt: 'Mountain landscape',
      location: 'Swiss Alps'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg',
      alt: 'Beach sunset',
      location: 'Bali, Indonesia'
    },
    {
      type: 'video',
      thumbnail: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg',
      alt: 'Machu Picchu timelapse',
      location: 'Peru'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg',
      alt: 'Cherry blossoms',
      location: 'Kyoto, Japan'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
      alt: 'Safari wildlife',
      location: 'Kenya'
    },
    {
      type: 'video',
      thumbnail: 'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg',
      alt: 'Northern lights',
      location: 'Iceland'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/2374967/pexels-photo-2374967.jpeg',
      alt: 'Desert landscape',
      location: 'Morocco'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg',
      alt: 'Temple architecture',
      location: 'Bangkok, Thailand'
    },
    {
      type: 'video',
      thumbnail: 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg',
      alt: 'European cities',
      location: 'Paris, France'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const previousImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryItems.length - 1);
    }
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage < galleryItems.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <section id="gallery" className={`py-20 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Photo & Video
            <span className="text-amber-500"> Gallery</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Immerse yourself in our visual journey - from breathtaking landscapes to cultural moments 
            that made our hearts skip a beat.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 transform ${
                index % 3 === 0 ? 'lg:col-span-2' : ''
              } ${index % 5 === 0 ? 'md:row-span-2' : ''}`}
              onClick={() => openLightbox(index)}
            >
              <div className="relative">
                <img
                  src={item.type === 'video' ? item.thumbnail : item.src}
                  alt={item.alt}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                    index % 5 === 0 ? 'h-96' : 'h-64'
                  }`}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Video Play Button */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-gray-900 ml-1" />
                    </div>
                  </div>
                )}

                {/* Location Label */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold text-lg">{item.location}</p>
                </div>

                {/* Hover Effects */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className={`inline-block p-8 rounded-3xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Want to create memories like these?
            </h3>
            <p className={`text-lg mb-6 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Let us help you plan your perfect adventure
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-amber-400 text-gray-900 font-bold text-lg rounded-full hover:bg-amber-300 transition-all duration-300 hover:scale-105 transform shadow-lg"
            >
              Start Planning Your Trip
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={galleryItems[selectedImage].type === 'video' 
                ? galleryItems[selectedImage].thumbnail 
                : galleryItems[selectedImage].src}
              alt={galleryItems[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-lg font-semibold">{galleryItems[selectedImage].location}</p>
              <p className="text-sm opacity-75">{selectedImage + 1} of {galleryItems.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;