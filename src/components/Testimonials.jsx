import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, Moderate Textile',
      company: 'E-commerce',
      rating: 5,
      text: 'Exceptional work on our e-commerce platform. The WhatsApp integration and admin dashboard exceeded our expectations. Delivered on time with clean, maintainable code.',
      avatar: 'bg-gradient-to-br from-pink-400 to-purple-500'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'Peller Branding',
      rating: 5,
      text: 'Outstanding corporate website that perfectly aligned with our branding objectives. The responsive design and attention to detail were impressive.',
      avatar: 'bg-gradient-to-br from-blue-400 to-cyan-500'
    },
    {
      name: 'David Rodriguez',
      role: 'Startup Founder',
      company: 'Tech Startup',
      rating: 5,
      text: 'Great collaboration on translating our Figma designs into a functional web application. The performance optimization results were remarkable - 30%+ improvement!',
      avatar: 'bg-gradient-to-br from-green-400 to-teal-500'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-black text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Client Testimonials
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white rounded-lg p-6 shadow-sm border relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Quote className="w-8 h-8 text-gray-300 mb-4" />
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full ${testimonial.avatar}`}></div>
                <div>
                  <h4 className="font-semibold text-black">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-xs text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}