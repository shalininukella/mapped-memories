import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const FAQ: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do you keep travel costs so low?",
      answer: "Our secret lies in thorough research, local connections, and smart timing. We stay in hostels or budget accommodations, eat at local places, use public transportation, and travel during off-peak seasons. We also leverage travel rewards, book in advance when beneficial, and always look for free activities and experiences."
    },
    {
      question: "What's included in your itinerary planning service?",
      answer: "Our basic plan ($49) includes a day-by-day itinerary with accommodation recommendations, transportation options, and must-see attractions. The detailed plan ($99) adds budget breakdowns, restaurant recommendations, and local tips. The full consultation ($149) includes a 1-hour video call, customized planning, and 30-day email support."
    },
    {
      question: "Do you only plan budget trips?",
      answer: "While we specialize in budget travel, we can work with various budgets. Our expertise is in maximizing value regardless of your spending level. Whether you have $30/day or $150/day, we'll help you get the most authentic and memorable experiences for your money."
    },
    {
      question: "How far in advance should I book my trip?",
      answer: "For international trips, we recommend booking flights 2-3 months in advance. Accommodation can be more flexible - book popular destinations early but leave room for spontaneity. We provide specific timing advice based on your chosen destination and travel season."
    },
    {
      question: "What if I need to change my plans after booking your service?",
      answer: "Life happens! We offer one free major revision within 30 days of delivery. Additional changes are available for a small fee ($15-25 depending on complexity). We're always here to help adjust your plans when needed."
    },
    {
      question: "Do you help with visa requirements and travel insurance?",
      answer: "We provide basic guidance on visa requirements and strongly recommend travel insurance, but we're not licensed agents. We'll point you to reliable resources and share our personal experiences, but official requirements should be confirmed with embassies and insurance providers."
    },
    {
      question: "What destinations do you specialize in?",
      answer: "We have extensive experience in Southeast Asia, Europe, New Zealand, Japan, and South America. However, our research skills and network of fellow travelers allow us to plan trips worldwide. If we haven't been somewhere personally, we connect with trusted local experts."
    },
    {
      question: "How do you handle dietary restrictions and accessibility needs?",
      answer: "We take special requirements seriously! Let us know about dietary restrictions, mobility needs, or other accommodations during your consultation. We'll research accessible accommodations, appropriate restaurants, and modify itineraries to ensure your comfort and safety."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section id="faq" className={`py-20 ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex p-4 rounded-full mb-6 ${
            isDarkMode ? 'bg-amber-900/30' : 'bg-amber-100'
          }`}>
            <HelpCircle className={`h-12 w-12 ${
              isDarkMode ? 'text-amber-400' : 'text-amber-600'
            }`} />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Frequently Asked
            <span className="text-amber-500"> Questions</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Everything you need to know about our travel planning services, 
            budget strategies, and how we can help make your travel dreams a reality.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
              } ${openQuestion === index ? 'shadow-lg' : 'hover:shadow-md'}`}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
              >
                <h3 className={`text-lg font-semibold pr-8 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 transition-transform duration-300 ${
                  openQuestion === index ? 'rotate-180' : ''
                }`}>
                  <ChevronDown className={`h-6 w-6 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openQuestion === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-6 pb-6">
                  <p className={`text-base leading-relaxed ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="text-center mt-16">
          <div className={`inline-block p-8 rounded-3xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-amber-50 to-orange-50'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Still Have Questions?
            </h3>
            <p className={`text-lg mb-6 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              We're here to help! Reach out and we'll answer any specific questions about your travel plans.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-amber-400 text-gray-900 font-bold text-lg rounded-full hover:bg-amber-300 transition-all duration-300 hover:scale-105 transform shadow-lg"
            >
              Get Personal Help
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;