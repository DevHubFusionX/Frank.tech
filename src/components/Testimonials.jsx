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
      gradient: 'from-pink-500 via-purple-500 to-indigo-500',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop' // Placeholder
    },
    {
      name: 'Anyanwu Christopher',
      role: 'Marketing Director',
      company: 'Personal Crypto Vendor',
      rating: 5,
      text: 'Outstanding corporate website that perfectly aligned with our branding objectives. The responsive design and attention to detail were impressive.',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop'
    },
    {
      name: 'Clinton Ihemeji',
      role: 'Startup Founder',
      company: 'Solar Tech',
      rating: 5,
      text: 'Great collaboration on translating our Figma designs into a functional web application. The performance optimization results were remarkable - 30%+ improvement!',
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
    },
    {
      name: 'Amara Okeke',
      role: 'Product Manager',
      company: 'Fintech SaaS',
      rating: 5,
      text: 'Delivered a robust MVP with authentication, billing, and analytics. Communication was clear throughout and iteration speed was impressive.',
      gradient: 'from-amber-500 via-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop'
    },
    {
      name: 'Daniel Peters',
      role: 'CTO',
      company: 'Media Startup',
      rating: 4,
      text: 'Solid engineering practices and thoughtful component architecture. Lighthouse scores improved significantly without sacrificing UX.',
      gradient: 'from-indigo-500 via-violet-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop'
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

  useEffect(() => {
    const id = setInterval(() => next(), 6000)
    return () => clearInterval(id)
  }, [testimonials.length])

  const current = testimonials[index]

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)]"
        >
          <div className="grid lg:grid-cols-2 min-h-[450px]">

            {/* Left Side: Content */}
            <div className="relative p-6 sm:p-10 lg:p-12 flex flex-col justify-center z-10">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: direction * 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="space-y-8 pb-16"
                >
                  <Quote className="w-12 h-12 text-[var(--color-accent)] opacity-50" />

                  <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight" style={{ color: 'var(--color-text-primary)' }}>
                    "{current.text}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${current.gradient} p-0.5`}>
                      <div className="w-full h-full rounded-full bg-[var(--color-bg-secondary)] flex items-center justify-center overflow-hidden">
                        {/* Small avatar fallback if needed, or just gradient ring */}
                        <img src={current.image} alt={current.name} className="w-full h-full object-cover opacity-80" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-lg" style={{ color: 'var(--color-text-primary)' }}>{current.name}</div>
                      <div className="text-sm opacity-80" style={{ color: 'var(--color-text-secondary)' }}>
                        {current.role} • {current.company}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls (Bottom Left) */}
              <div className="absolute bottom-8 right-8 lg:left-12 lg:right-auto flex gap-3">
                <button onClick={prev} className="p-3 rounded-full border border-[var(--color-border)] hover:bg-[var(--color-bg-primary)] transition-colors" aria-label="Previous">
                  <ChevronLeft className="w-5 h-5" style={{ color: 'var(--color-text-primary)' }} />
                </button>
                <button onClick={next} className="p-3 rounded-full border border-[var(--color-border)] hover:bg-[var(--color-bg-primary)] transition-colors" aria-label="Next">
                  <ChevronRight className="w-5 h-5" style={{ color: 'var(--color-text-primary)' }} />
                </button>
              </div>
            </div>

            {/* Right Side: Visual */}
            <div className="relative overflow-hidden hidden lg:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  {/* Background Image/Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${current.gradient} opacity-20 mix-blend-overlay`} />
                  <img
                    src={current.image}
                    alt="Testimonial Background"
                    className="w-full h-full object-cover grayscale-[30%] contrast-125"
                  />

                  {/* Gradient Overlays for Cinematic Look */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[var(--color-bg-secondary)]/20 to-[var(--color-bg-secondary)]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-secondary)]/80 to-transparent opacity-60" />
                </motion.div>
              </AnimatePresence>

              {/* Decorative Elements */}
              <div className="absolute top-10 right-10 w-20 h-20 border border-white/10 rounded-full opacity-50" />
              <div className="absolute bottom-20 left-20 w-32 h-32 border border-white/5 rounded-full opacity-30" />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}