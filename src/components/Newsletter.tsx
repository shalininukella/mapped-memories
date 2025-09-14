import React, { useState } from 'react';
import { Mail, CheckCircle, Gift, MapPin, DollarSign } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Newsletter: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your newsletter service
      console.log('Newsletter subscription:', email);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }
  };

  const benefits = [
    {
      icon: MapPin,
      text: 'Exclusive destination guides'
    },
    {
      icon: DollarSign,
      text: 'Money-saving tips & deals'
    },
    {
      icon: Gift,
      text: 'Free travel planning templates'
    }
  ];

  return (
    <section id="newsletter" className={`py-20 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {!isSubscribed ? (
          <>
            {/* Header */}
            <div className="mb-12">
              <div className={`inline-flex p-4 rounded-full mb-6 ${
                isDarkMode ? 'bg-amber-400/20' : 'bg-white/20'
              }`}>
                <Mail className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Never Miss an Adventure
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join 5,000+ budget travelers getting weekly tips, exclusive deals, 
                and destination guides delivered straight to their inbox.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-white"
                >
                  <benefit.icon className="h-6 w-6 flex-shrink-0" />
                  <span className="font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 font-medium text-lg focus:outline-none focus:ring-4 focus:ring-white/50 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="group px-8 py-4 bg-gray-900 text-white font-bold text-lg rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 transform shadow-xl whitespace-nowrap"
                >
                  Get Travel Tips
                  <Mail className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>

            {/* Trust Indicators */}
            <div className="mt-8 text-white/80">
              <p className="text-sm">
                ✨ <strong>Free forever.</strong> Unsubscribe anytime. No spam, just amazing travel content.
              </p>
              <div className="flex items-center justify-center space-x-6 mt-4 text-sm">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>5,000+ subscribers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>4.9/5 rating</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Weekly updates</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Success State */
          <div className="py-12">
            <div className="inline-flex p-6 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <CheckCircle className="h-16 w-16 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Welcome to the Adventure!
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Thanks for subscribing! Check your inbox for a welcome email with our 
              ultimate budget travel checklist as a free gift.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/80">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Gift className="h-5 w-5" />
                <span>Free gift on the way</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Mail className="h-5 w-5" />
                <span>First newsletter this Friday</span>
              </div>
            </div>
          </div>
        )}

        {/* Social Proof */}
        <div className="mt-16 border-t border-white/20 pt-12">
          <p className="text-white/80 mb-8">Join travelers from around the world:</p>
          <div className="flex justify-center items-center space-x-8 opacity-70">
            <div className="flex -space-x-2">
              {[
                'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
                'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg',
                'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg',
                'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg'
              ].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Subscriber ${index + 1}`}
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div className="text-white/80">
              <p className="font-semibold">+5,000 adventurers</p>
              <p className="text-sm">from 47 countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;