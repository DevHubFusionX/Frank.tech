import { motion } from 'framer-motion'
import { Building2, Zap, Globe, Rocket, Monitor, Palette, ShoppingBag, Truck } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function ClientLogos() {

  const navigate = useNavigate()



  const clients = [
    { 
      name: 'Moderate Textile', 
      icon: ShoppingBag, 
      color: 'bg-gradient-to-br from-blue-500 to-purple-600',
      description: 'E-commerce Platform'
    },
    { 
      name: 'Peller Branding', 
      icon: Palette, 
      color: 'bg-gradient-to-br from-green-500 to-teal-600',
      description: 'Corporate Website'
    },
    { 
      name: 'Solar Energy Co', 
      icon: Zap, 
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      description: 'Solar Solutions'
    },
    { 
      name: 'Logistics Pro', 
      icon: Truck, 
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      description: 'Shipping Platform'
    },
    { 
      name: 'TechStart Inc', 
      icon: Rocket, 
      color: 'bg-gradient-to-br from-indigo-500 to-blue-600',
      description: 'Startup Platform'
    },
    { 
      name: 'Digital Hub', 
      icon: Monitor, 
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
      description: 'Web Solutions'
    },
    { 
      name: 'Global Corp', 
      icon: Globe, 
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      description: 'Enterprise App'
    },
    { 
      name: 'BuildTech', 
      icon: Building2, 
      color: 'bg-gradient-to-br from-emerald-500 to-teal-600',
      description: 'Construction Tech'
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
          <h2 className="text-4xl font-bold text-black mb-4">Trusted by Amazing Clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've had the privilege of working with incredible companies and startups
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => {
            const IconComponent = client.icon
            return (
              <motion.div
                key={client.name}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-lg transition-all duration-300 text-center group-hover:border-gray-300">
                  <div className={`w-16 h-16 ${client.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 group-hover:text-black transition-colors mb-1">
                    {client.name}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                    {client.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">
            Ready to join these successful companies?
          </p>
          <button onClick={() => navigate('/contact')} className="btn-primary px-8 py-3 rounded-full font-medium" >
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  )
}