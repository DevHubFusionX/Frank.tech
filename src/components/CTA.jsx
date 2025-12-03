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
    <section className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Main CTA - Liquid Layout */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: 'var(--color-text-primary)' }}
          >
            Ready to Build Something Amazing?
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Let's turn your ideas into a powerful web application that drives results.
          </motion.p>

          {/* Liquid Blob Container */}
          <div className="relative w-full max-w-lg h-64 flex items-center justify-center">
            {/* The Blob */}
            <motion.div
              className="absolute inset-0 bg-black dark:bg-white rounded-[40%_60%_70%_30%/40%_50%_60%_50%]"
              animate={{
                borderRadius: [
                  "40% 60% 70% 30% / 40% 50% 60% 50%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "30% 70% 50% 50% / 30% 40% 60% 70%",
                  "40% 60% 70% 30% / 40% 50% 60% 50%"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.05 }}
              style={{
                filter: 'blur(0px)', // Sharp edges
                boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
              }}
            />

            {/* Buttons inside the blob */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="bg-white text-black dark:bg-black dark:text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 shadow-lg transition-colors"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="bg-transparent border-2 border-white/30 text-white dark:text-black dark:border-black/30 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-white/10 dark:hover:bg-black/10 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Let's Chat
              </motion.button>
            </div>
          </div>
        </div>

        {/* Secondary CTAs */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <ResumeDownload />

          <motion.div
            className="relative overflow-hidden rounded-[2.5rem] p-8 sm:p-10"
            style={{
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            {/* Glass/Liquid Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 opacity-50" />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="p-4 rounded-2xl bg-green-500/10 text-green-600">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div className="px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 text-xs font-bold uppercase tracking-wider">
                  Free
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>Free Consultation</h3>
              <p className="mb-8 text-sm leading-relaxed opacity-80" style={{ color: 'var(--color-text-secondary)' }}>
                30-minute call to discuss your project and explore possibilities. No commitment required.
              </p>

              <button
                onClick={() => navigate('/contact')}
                className="w-full bg-green-600 text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-all shadow-lg shadow-green-500/20"
              >
                <MessageCircle className="w-5 h-5" />
                Book Call
              </button>
            </div>
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