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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-primary">Services</h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Comprehensive web development solutions
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-fr gap-4 min-h-[600px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`card bg-base-200 shadow-lg rounded-2xl ${getGridClass(service.size)} p-4 md:p-6 flex flex-col justify-between overflow-hidden cursor-pointer`}
              style={{ backgroundColor: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                y: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex-1 min-h-0">
                <motion.div 
                  className="text-primary mb-3"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className={`font-bold mb-2 leading-tight ${service.size === 'large' ? 'text-xl md:text-2xl' : 'text-base md:text-lg'}`}>
                  {service.title}
                </h3>
                <p className="text-base-content/70 mb-3 text-xs md:text-sm line-clamp-3">
                  {service.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1 md:gap-2 mt-auto">
                {service.features.map((feature, i) => (
                  <motion.span 
                    key={i} 
                    className="badge badge-outline badge-xs md:badge-sm text-xs"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.1 }}
                  >
                    {feature}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}