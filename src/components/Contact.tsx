import React, { useState } from 'react';
import { Send, MapPin, Mail, Clock, CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    budget: '',
    duration: '',
    travelStyle: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        destination: '',
        budget: '',
        duration: '',
        travelStyle: '',
        message: ''
      });
    }, 3000);
  };

  const travelStyles = [
    'Backpacking',
    'Mid-range',
    'Luxury Budget',
    'Solo Travel',
    'Couple Travel',
    'Group Travel',
    'Family Friendly',
    'Adventure Focused'
  ];

  const budgetRanges = [
    '$500-1000',
    '$1000-2000',
    '$2000-3000',
    '$3000-5000',
    '$5000+',
    'Need Help Deciding'
  ];

  return (
    <section id="contact" className={`py-20 ${
      isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Let's Plan Your
            <span className="text-amber-500"> Adventure</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Ready to explore the world without breaking the bank? Tell us about your dream trip, 
            and we'll create a personalized itinerary that fits your budget perfectly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className={`p-8 rounded-3xl ${
              isDarkMode ? 'bg-gray-700' : 'bg-white shadow-lg'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl ${
                    isDarkMode ? 'bg-amber-900/30 text-amber-400' : 'bg-amber-100 text-amber-600'
                  }`}>
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className={`font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Email Us
                    </p>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      hello@wanderduo.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl ${
                    isDarkMode ? 'bg-amber-900/30 text-amber-400' : 'bg-amber-100 text-amber-600'
                  }`}>
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className={`font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Response Time
                    </p>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl ${
                    isDarkMode ? 'bg-amber-900/30 text-amber-400' : 'bg-amber-100 text-amber-600'
                  }`}>
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className={`font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Based in
                    </p>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Currently in Bali, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Info */}
            <div className={`p-8 rounded-3xl ${
              isDarkMode ? 'bg-gray-700' : 'bg-white shadow-lg'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Our Services
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Basic Itinerary
                  </span>
                  <span className="text-amber-500 font-bold">$49</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Detailed Plan
                  </span>
                  <span className="text-amber-500 font-bold">$99</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Full Consultation
                  </span>
                  <span className="text-amber-500 font-bold">$149</span>
                </div>
              </div>

              <div className={`mt-6 p-4 rounded-xl ${
                isDarkMode ? 'bg-amber-900/30' : 'bg-amber-50'
              }`}>
                <p className={`text-sm ${
                  isDarkMode ? 'text-amber-300' : 'text-amber-700'
                }`}>
                  💰 <strong>Money-back guarantee:</strong> If we don't save you at least 20% 
                  on your planned budget, we'll refund your consultation fee!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className={`p-8 rounded-3xl ${
              isDarkMode ? 'bg-gray-700' : 'bg-white shadow-lg'
            }`}>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                          isDarkMode 
                            ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                          isDarkMode 
                            ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Dream Destination
                      </label>
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                          isDarkMode 
                            ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder="e.g., Southeast Asia, Europe"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Trip Duration
                      </label>
                      <input
                        type="text"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                          isDarkMode 
                            ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' 
                            : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder="e.g., 2 weeks, 1 month"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                          isDarkMode 
                            ? 'bg-gray-600 border-gray-500 text-white' 
                            : 'bg-gray-50 border-gray-300 text-gray-900'
                        }`}
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map(range => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Travel Style
                      </label>
                      <select
                        name="travelStyle"
                        value={formData.travelStyle}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                          isDarkMode 
                            ? 'bg-gray-600 border-gray-500 text-white' 
                            : 'bg-gray-50 border-gray-300 text-gray-900'
                        }`}
                      >
                        <option value="">Select travel style</option>
                        {travelStyles.map(style => (
                          <option key={style} value={style}>{style}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Tell us more about your dream trip
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none ${
                        isDarkMode 
                          ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                      placeholder="What activities interest you? Any specific places you want to visit? Dietary restrictions? Anything else we should know?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center space-x-2 py-4 bg-amber-400 text-gray-900 font-bold text-lg rounded-xl hover:bg-amber-300 transition-all duration-300 hover:scale-105 transform shadow-lg"
                  >
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    <span>Send My Trip Request</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
                    isDarkMode ? 'bg-green-900/30' : 'bg-green-100'
                  }`}>
                    <CheckCircle className="h-10 w-10 text-green-500" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Request Sent Successfully!
                  </h3>
                  <p className={`text-lg ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Thanks for reaching out! We'll get back to you within 24 hours with 
                    a personalized travel plan that fits your budget perfectly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;