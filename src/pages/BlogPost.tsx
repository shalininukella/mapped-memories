import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, DollarSign, ArrowLeft, Share2, Heart, Clock } from 'lucide-react';
import { blogPosts } from '../utils/data';
import { useTheme } from '../contexts/ThemeContext';

const BlogPost: React.FC = () => {
  const { id } = useParams();
  const { isDarkMode } = useTheme();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Post Not Found
          </h1>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-amber-400 text-gray-900 font-semibold rounded-full hover:bg-amber-300 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Back Button */}
        <Link
          to="/"
          className="absolute top-8 left-8 flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </Link>

        {/* Share Button */}
        <button className="absolute top-8 right-8 p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors">
          <Share2 className="h-5 w-5" />
        </button>

        {/* Content Overlay */}
        <div className="absolute bottom-8 left-8 right-8">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-6 mb-4 text-white/80">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>{post.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5" />
                <span>{post.budget}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>8 min read</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`prose prose-lg max-w-none ${
          isDarkMode ? 'prose-invert' : ''
        }`}>
          {/* Article Tags */}
          <div className="flex flex-wrap gap-2 mb-8 not-prose">
            {post.tags.map(tag => (
              <span
                key={tag}
                className={`px-3 py-1 text-sm rounded-full ${
                  isDarkMode 
                    ? 'bg-gray-800 text-gray-300' 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Extended Content */}
          <div className="space-y-8">
            <p className={`text-xl leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {post.content} Our journey through {post.location} was filled with incredible discoveries, 
              budget-friendly finds, and unforgettable moments that proved you don't need to spend a fortune 
              to have the adventure of a lifetime.
            </p>

            <h2 className={`text-3xl font-bold mt-12 mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Planning Your Own Adventure
            </h2>

            <p className={`text-lg leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Based on our experience in {post.location}, here are our top recommendations for fellow budget travelers:
            </p>

            <ul className={`list-disc pl-6 space-y-3 text-lg ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <li>Book accommodations at least 2-3 weeks in advance for better rates</li>
              <li>Use local transportation instead of tourist shuttles to save money</li>
              <li>Eat where the locals eat - street food is often delicious and affordable</li>
              <li>Look for free walking tours to get oriented and learn about the culture</li>
              <li>Pack light to avoid baggage fees and make moving around easier</li>
            </ul>

            <h2 className={`text-3xl font-bold mt-12 mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Budget Breakdown
            </h2>

            <div className={`not-prose p-8 rounded-2xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {post.title} - Detailed Costs
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className={`text-lg font-semibold mb-3 ${
                    isDarkMode ? 'text-amber-400' : 'text-amber-600'
                  }`}>
                    Accommodation
                  </h4>
                  <ul className={`space-y-2 text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <li>Hostels: $15-25/night</li>
                    <li>Budget hotels: $25-40/night</li>
                    <li>Guesthouses: $20-35/night</li>
                  </ul>
                </div>
                <div>
                  <h4 className={`text-lg font-semibold mb-3 ${
                    isDarkMode ? 'text-amber-400' : 'text-amber-600'
                  }`}>
                    Food & Drinks
                  </h4>
                  <ul className={`space-y-2 text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <li>Street food: $2-5/meal</li>
                    <li>Local restaurants: $5-12/meal</li>
                    <li>Groceries: $10-15/day</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className={`text-3xl font-bold mt-12 mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Final Thoughts
            </h2>

            <p className={`text-lg leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {post.location} exceeded all our expectations and proved once again that the best travel experiences 
              come from stepping outside your comfort zone, not your budget. The memories we made, the people we met, 
              and the lessons we learned are priceless souvenirs that will stay with us forever.
            </p>

            <p className={`text-lg leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Ready to plan your own budget adventure? We're here to help you create an unforgettable journey 
              that won't break the bank.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <button className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 ${
            isDarkMode 
              ? 'bg-red-900/30 text-red-300 hover:bg-red-900/50' 
              : 'bg-red-50 text-red-600 hover:bg-red-100'
          }`}>
            <Heart className="h-5 w-5" />
            <span>Like this story</span>
          </button>
          
          <Link
            to="/itinerary-preview"
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-amber-400 text-gray-900 font-semibold rounded-full hover:bg-amber-300 transition-all hover:scale-105"
          >
            <span>Plan a Similar Trip</span>
          </Link>
          
          <button className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 ${
            isDarkMode 
              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}>
            <Share2 className="h-5 w-5" />
            <span>Share Story</span>
          </button>
        </div>

        {/* Related Posts */}
        <div className="mt-20">
          <h3 className={`text-3xl font-bold mb-8 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            More Adventures
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.filter(p => p.id !== id).slice(0, 2).map(relatedPost => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.id}`}
                className={`group block rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                  isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="relative h-48">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className={`text-xl font-bold mb-2 group-hover:text-amber-500 transition-colors ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {relatedPost.title}
                  </h4>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {relatedPost.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;