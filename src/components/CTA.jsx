import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ResumeDownload from './ResumeDownload'

export default function CTA() {
  const navigate = useNavigate()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main CTA */}
        <motion.div
          className="bg-black text-white rounded-2xl p-12 text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's turn your ideas into a powerful web application that drives results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-black px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border border-white text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-white hover:text-black transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Let's Chat
            </button>
          </div>
        </motion.div>
        
        {/* Secondary CTAs */}
        <div className="grid md:grid-cols-2 gap-8">
          <ResumeDownload />
          
          <motion.div
            className="bg-gradient-to-br from-green-500 to-teal-600 text-white rounded-xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Free Consultation</h3>
            <p className="text-green-100 mb-6">
              30-minute call to discuss your project and explore possibilities
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-green-600 px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-green-50 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Book Call
            </button>
          </motion.div>
        </div>
        
        {/* Availability Status */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-800 font-medium">Available for new projects</span>
          </div>
          <p className="text-gray-600 mt-4">
            Currently accepting projects for Q1 2025. Book your spot today!
          </p>
        </motion.div>
      </div>
    </section>
  )
}