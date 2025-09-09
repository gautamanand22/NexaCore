import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Components
import ScrollProgress from './components/ScrollProgress'
import TopStrip from './components/TopStrip'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import PortfolioSection from './sections/PortfolioSection'
import BlogSection from './sections/BlogSection'
import TestimonialsSection from './sections/TestimonialsSection'
import ContactSection from './sections/ContactSection'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

const App = () => {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    ScrollTrigger.refresh()

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <Router>
      <ParallaxProvider>
        <div className="overflow-x-hidden">
          <ScrollProgress />
          <TopStrip />
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <PortfolioSection />
            <BlogSection />
            <TestimonialsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </ParallaxProvider>
    </Router>
  )
}

export default App