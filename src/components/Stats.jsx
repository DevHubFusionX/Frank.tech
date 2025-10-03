import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

function CountUp({ end, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      let startTime
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [inView, end, duration])

  return <span ref={ref}>{count}</span>
}

export default function Stats() {
  const stats = [
    {
      number: 15,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successful web applications delivered'
    },
    {
      number: 8,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Satisfied clients across different industries'
    },
    {
      number: 30,
      suffix: '%',
      label: 'Performance Boost',
      description: 'Average performance improvement achieved'
    },
    {
      number: 12,
      suffix: '+',
      label: 'Months Experience',
      description: 'Professional development experience'
    },
    {
      number: 100,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Projects delivered on time and budget'
    },
    {
      number: 24,
      suffix: '/7',
      label: 'Support Available',
      description: 'Responsive communication and support'
    }
  ]

  return (
    <section className="py-12 sm:py-20" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Results That Matter</h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Numbers that showcase the impact of quality development work
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className="rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--color-bg-secondary)', 
                  border: '1px solid var(--color-border)' 
                }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2" style={{ color: 'var(--color-text-primary)' }}>
                  <CountUp end={stat.number} />
                  <span>{stat.suffix}</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{stat.label}</h3>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Ready to Join These Success Stories?</h3>
            <p className="text-blue-100 mb-6 text-sm sm:text-base">
              Let's work together to create your next successful web application
            </p>
            <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors w-full sm:w-auto">
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}