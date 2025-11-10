import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

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

  const navigate = useNavigate()
  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--color-text-primary)' }}>Results That Matter</h2>
              <p className="text-base sm:text-lg mt-2 max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
                Numbers that showcase the impact of quality development work
              </p>
            </div>
            <button
              onClick={() => navigate('/contact')}
              className="hidden sm:inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-colors"
              style={{ backgroundColor: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)', color: 'var(--color-text-primary)' }}
            >
              Start Your Project
            </button>
          </div>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 auto-rows-[minmax(120px,_auto)] gap-4 sm:gap-5 lg:gap-6">
          {stats.map((stat, index) => {
            // Define bento spans for a pleasing mosaic
            const spans = [
              'sm:col-span-3 lg:col-span-4 sm:row-span-2',
              'sm:col-span-3 lg:col-span-4 sm:row-span-1',
              'sm:col-span-3 lg:col-span-4 sm:row-span-1',
              'sm:col-span-3 lg:col-span-3 sm:row-span-2',
              'sm:col-span-3 lg:col-span-5 sm:row-span-2',
              'sm:col-span-6 lg:col-span-4 sm:row-span-1',
            ]
            const spanClass = spans[index % spans.length]

            return (
              <motion.div
                key={stat.label}
                className={`${spanClass}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                viewport={{ once: true }}
              >
                <div
                  className="h-full rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  style={{ backgroundColor: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}
                >
                  <div>
                    <div className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--color-text-primary)' }}>
                      <CountUp end={stat.number} />
                      <span>{stat.suffix}</span>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>{stat.label}</h3>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{stat.description}</p>
                  </div>

                  {/* subtle footer line for depth */}
                  <div className="mt-4 pt-3 text-xs flex items-center justify-between border-t" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}>
                    <span>Updated quarterly</span>
                    <span className="opacity-70">↗</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA for mobile */}
        <motion.div
          className="sm:hidden mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="rounded-xl p-6" style={{ backgroundColor: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>Ready to Join These Success Stories?</h3>
            <p className="mb-4 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              Let's work together to create your next successful web application
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="w-full rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition-colors"
              style={{ backgroundColor: 'var(--color-text-primary)', color: 'var(--color-bg-primary)' }}
            >
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}