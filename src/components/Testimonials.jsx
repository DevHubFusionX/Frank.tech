import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

export default function Testimonials() {
  const testimonials = useMemo(() => ([
    {
      name: 'Moderate Ustaz',
      role: 'CEO, Moderate Textile',
      company: 'E-commerce Platform',
      rating: 5,
      text: 'Exceptional work on our e-commerce platform. The WhatsApp integration and admin dashboard exceeded our expectations. Delivered on time with clean, maintainable code.',
      avatar: 'bg-gradient-to-br from-pink-400 to-purple-500'
    },
    {
      name: 'Anyanwu Christopher',
      role: 'Marketing Director',
      company: 'Personal Crypto Vendor',
      rating: 5,
      text: 'Outstanding corporate website that perfectly aligned with our branding objectives. The responsive design and attention to detail were impressive.',
      avatar: 'bg-gradient-to-br from-blue-400 to-cyan-500'
    },
    {
      name: 'Clinton Ihemeji',
      role: 'Startup Founder',
      company: 'Solar Tech',
      rating: 5,
      text: 'Great collaboration on translating our Figma designs into a functional web application. The performance optimization results were remarkable - 30%+ improvement!',
      avatar: 'bg-gradient-to-br from-green-400 to-teal-500'
    },
    {
      name: 'Amara Okeke',
      role: 'Product Manager',
      company: 'Fintech SaaS',
      rating: 5,
      text: 'Delivered a robust MVP with authentication, billing, and analytics. Communication was clear throughout and iteration speed was impressive.',
      avatar: 'bg-gradient-to-br from-amber-400 to-red-500'
    },
    {
      name: 'Daniel Peters',
      role: 'CTO',
      company: 'Media Startup',
      rating: 4,
      text: 'Solid engineering practices and thoughtful component architecture. Lighthouse scores improved significantly without sacrificing UX.',
      avatar: 'bg-gradient-to-br from-indigo-400 to-violet-500'
    }
  ]), [])

  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = () => {
    setDirection(1)
    setIndex((i) => (i + 1) % testimonials.length)
  }
  const prev = () => {
    setDirection(-1)
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  }

  // autoplay
  useEffect(() => {
    const id = setInterval(() => next(), 5000)
    return () => clearInterval(id)
  }, [testimonials.length])

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 20 : -20 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -20 : 20 })
  }

  const current = testimonials[index]

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ color: 'var(--color-text-primary)' }}
        >
          Client Testimonials
        </motion.h2>

        {/* Carousel */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ backgroundColor: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}
        >
          <div className="p-6 sm:p-10 min-h-[260px] sm:min-h-[280px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="grid md:grid-cols-[1fr_2fr] gap-6 items-center"
              >
                <div className="flex md:flex-col items-center md:items-start gap-4">
                  <div className={`w-14 h-14 rounded-full ${current.avatar}`} />
                  <div>
                    <h4 className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>{current.name}</h4>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{current.role}</p>
                    <p className="text-xs opacity-70" style={{ color: 'var(--color-text-secondary)' }}>{current.company}</p>
                  </div>
                </div>

                <div>
                  <Quote className="w-8 h-8 opacity-30 mb-3" style={{ color: 'var(--color-text-secondary)' }} />
                  <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                    "{current.text}"
                  </p>
                  <div className="mt-4 flex items-center gap-1">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="p-2 rounded-full shadow-sm backdrop-blur bg-white/70 hover:bg-white transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <button
              aria-label="Next testimonial"
              onClick={next}
              className="p-2 rounded-full shadow-sm backdrop-blur bg-white/70 hover:bg-white transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 pb-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i) }}
                className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-blue-500' : 'w-3 bg-gray-300'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}