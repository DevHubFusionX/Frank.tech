import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LoadingScreen from './components/LoadingScreen'
import ScrollToTop from './components/ScrollToTop'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import BlogPage from './pages/BlogPage'
import FAQPage from './pages/FAQPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import NotFound from './pages/NotFound'
import ThankYou from './pages/ThankYou'
import ContactPage from './pages/ContactPage'
import CvPage from './pages/CVPage'
import FeedbackNotification from './components/FeedbackNotification'

import ScrollProgress from './components/ScrollProgress'
import CommandPalette from './components/CommandPalette'
import EasterEggs from './components/EasterEggs'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />
  }

  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />

      <CommandPalette />
      <EasterEggs />
      <FeedbackNotification />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cv" element={<CvPage />} />
      </Routes>
    </Router>
  )
}

export default App
