import { motion } from 'framer-motion'
import { Code, Database, Smartphone, Globe, Shield, Zap } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Full-Stack Development',
      description: 'Complete MERN stack applications with secure authentication',
      features: ['React.js', 'Node.js', 'MongoDB', 'REST APIs'],
      size: 'large'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Responsive Design',
      description: 'Mobile-first websites',
      features: ['Tailwind CSS', 'Mobile Optimization'],
      size: 'medium'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'API Development',
      description: 'Robust RESTful APIs',
      features: ['JWT Auth', 'Validation'],
      size: 'medium'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Security Implementation',
      description: 'Secure authentication with email OTP and data protection',
      features: ['JWT Tokens', 'Email OTP', 'Encryption'],
      size: 'wide'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: '30%+ speed boost',
      features: ['Optimization'],
      size: 'small'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'UI/UX',
      description: 'Figma to code',
      features: ['Animations'],
      size: 'small'
    }
  ]

  const getGridClass = (size) => {
    switch (size) {
      case 'large': return 'col-span-2 row-span-2'
      case 'wide': return 'col-span-2'
      case 'medium': return 'col-span-1 row-span-1'
      case 'small': return 'col-span-1'
      default: return 'col-span-1'
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-primary">Services</h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Comprehensive web development solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-fr gap-4 min-h-[600px]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`card bg-base-200 hover:bg-base-300 shadow-lg hover:shadow-xl transition-all duration-300 ${getGridClass(service.size)} p-4 md:p-6 flex flex-col justify-between overflow-hidden`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-1 min-h-0">
                <div className="text-primary mb-3">{service.icon}</div>
                <h3 className={`font-bold mb-2 leading-tight ${service.size === 'large' ? 'text-xl md:text-2xl' : 'text-base md:text-lg'}`}>
                  {service.title}
                </h3>
                <p className="text-base-content/70 mb-3 text-xs md:text-sm line-clamp-3">
                  {service.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1 md:gap-2 mt-auto">
                {service.features.map((feature, i) => (
                  <span key={i} className="badge badge-outline badge-xs md:badge-sm text-xs">
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}