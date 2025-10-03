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
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-black mb-4">Results That Matter</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Numbers that showcase the impact of quality development work
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
                <div className="text-4xl md:text-5xl font-black text-black mb-2">
                  <CountUp end={stat.number} />
                  <span>{stat.suffix}</span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{stat.label}</h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-black text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Join These Success Stories?</h3>
            <p className="text-gray-300 mb-6">
              Let's work together to create your next successful web application
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}