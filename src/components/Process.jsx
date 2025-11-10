import { motion } from 'framer-motion'
import { MessageCircle, Palette, Code, Rocket, TestTube, Handshake } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


export default function Process() {
  const navigate = useNavigate()

  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Discovery & Planning',
      description: 'We discuss your project requirements, goals, and timeline to create a detailed plan',
      duration: '1-2 days'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Design & Wireframing',
      description: 'Transform your ideas into visual designs and wireframes using Figma',
      duration: '2-3 days'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Development',
      description: 'Build your application using modern MERN stack technologies with clean, maintainable code',
      duration: '1-3 weeks'
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: 'Testing & Optimization',
      description: 'Thorough testing and performance optimization to ensure 30%+ speed improvement',
      duration: '2-3 days'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Deployment',
      description: 'Deploy your application to production with proper configuration and monitoring',
      duration: '1 day'
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance to keep your application running smoothly',
      duration: 'Ongoing'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-black mb-4">How I Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My proven development process ensures quality delivery and client satisfaction
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg p-6 shadow-md h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-black text-white p-3 rounded-lg">
                    {step.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-300">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
                    {step.duration}
                  </span>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">
            Ready to start your project? Let's discuss your requirements!
          </p>
          <button onClick={() => navigate('/contact')} className="btn-primary px-8 py-3 rounded-full font-medium">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  )
}