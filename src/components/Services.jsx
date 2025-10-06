import { motion } from 'framer-motion'
import { Code, Database, Smartphone, Globe, Shield, Zap } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full-Stack Web Development',
      description: 'Complete MERN stack applications with secure authentication and optimized performance',
      features: ['React.js Frontend', 'Node.js Backend', 'MongoDB Database', 'REST APIs']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Responsive Web Design',
      description: 'Modern, mobile-first websites that work perfectly on all devices',
      features: ['Tailwind CSS', 'Mobile Optimization', 'Cross-browser Support', 'SEO Friendly']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'API Development',
      description: 'Robust RESTful APIs with secure authentication and data validation',
      features: ['JWT Authentication', 'Data Validation', 'Error Handling', 'Documentation']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Implementation',
      description: 'Secure authentication systems with email OTP and data protection',
      features: ['JWT Tokens', 'Email OTP', 'Data Encryption', 'Security Audits']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Speed up your applications with modern optimization techniques',
      features: ['Code Splitting', 'Lazy Loading', 'Image Optimization', '30%+ Performance Boost']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'UI/UX Implementation',
      description: 'Transform Figma designs into functional, interactive web applications',
      features: ['Figma to Code', 'Interactive Animations', 'User Experience', 'Modern Design']
    }
  ]

  return (
    <section className="py-20 ">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Services I Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive web development solutions to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-black mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}