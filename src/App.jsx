import React from 'react'
import Navbar from './components/layouts/Navbar'
import CallToAction from './components/views/home/CallToAction'
import StudentFeedback from './components/views/home/StudentFeedback'
import SupervisorHighlights from './components/views/home/SupervisorHighlights'
import Footer from './components/layouts/Footer'
import HeroSection from './components/views/home/HeroSection'
import HowItWorks from './components/views/home/HowItWorks'

const App = () => {
  return (
    <div className="min-h-screen font-sans text-gray-800 px-4 py-6">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <SupervisorHighlights />
      <CallToAction />
      <StudentFeedback />
      <Footer />
    </div>
  );
}

export default App