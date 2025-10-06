import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ThreeBackground from './ThreeBackground'

export default function Hero() {
  const navigate = useNavigate()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden " >
      <ThreeBackground />
      <div className="text-center max-w-4xl mx-auto px-6 relative z-30">
        <motion.h1
          className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 leading-tight"
          style={{ color: 'var(--color-text-primary)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Full-Stack
          <br />
          MERN Developer
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I design and develop high-performance web applications with secure authentication,
          RESTful APIs, and optimized user interfaces that align with business goals
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button 
            onClick={() => navigate('/portfolio')}
            className="btn-primary px-6 sm:px-8 py-3 rounded-full font-medium w-full sm:w-auto"
          >
            View Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-secondary px-6 sm:px-8 py-3 rounded-full font-medium w-full sm:w-auto"
          >
            Let's Connect
          </button>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </div>
    </section>
  )
}