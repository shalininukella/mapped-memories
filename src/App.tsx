import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TravelStories from './components/TravelStories';
import Gallery from './components/Gallery';
import UpcomingTravels from './components/UpcomingTravels';
import BudgetBreakdown from './components/BudgetBreakdown';
import Testimonials from './components/Testimonials';
import InteractiveMap from './components/InteractiveMap';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BlogPost from './pages/BlogPost';
import ItineraryPreview from './pages/ItineraryPreview';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <TravelStories />
      <Gallery />
      <UpcomingTravels />
      <BudgetBreakdown />
      <Testimonials />
      <InteractiveMap />
      <Contact />
      <Newsletter />
      <FAQ />
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen">
          <Header />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/itinerary-preview" element={<ItineraryPreview />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;