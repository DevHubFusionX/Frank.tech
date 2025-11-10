import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

export default function Pricing() {
  const packages = [
    {
      name: 'Landing Page',
      price: '$150',
      duration: '1-2 weeks',
      description: 'Perfect for showcasing your business or personal brand',
      features: [
        'Responsive design',
        'Up to 5 sections',
        'Contact form',
        'SEO optimization',
        'Mobile-first approach',
        '1 revision round'
      ],
      popular: false
    },
    {
      name: 'Business Website',
      price: '$399',
      duration: '2-3 weeks',
      description: 'Complete website solution for growing businesses',
      features: [
        'Multi-page website',
        'Custom design',
        'CMS integration',
        'Contact forms',
        'SEO optimization',
        'Performance optimization',
        '2 revision rounds',
        'Basic analytics setup'
      ],
      popular: true
    },
    {
      name: 'Full-Stack Application',
      price: '$1,299',
      duration: '3-4 weeks',
      description: 'Complete web application with backend functionality',
      features: [
        'Custom web application',
        'User authentication',
        'Database integration',
        'Admin dashboard',
        'API development',
        'Security implementation',
        'Performance optimization',
        '3 revision rounds',
        '30 days support'
      ],
      popular: false
    }
  ]

  const addOns = [
    { name: 'Additional revisions', price: '$50/revision' },
    { name: 'Rush delivery (50% faster)', price: '+50% of package price' },
    { name: 'Extended support (3 months)', price: '$200' },
    { name: 'WhatsApp integration', price: '$50' },
    { name: 'Payment gateway setup', price: '$150' },
    { name: 'Advanced animations', price: '$70' }
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
          <h2 className="text-4xl font-bold text-black mb-4">Pricing Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparent pricing for quality web development services
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              className={`bg-white rounded-lg p-8 shadow-sm  relative ${
                pkg.popular ? 'ring-2 ring-black' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-2">{pkg.name}</h3>
                <div  className="text-4xl font-black text-black mb-2">{pkg.price}</div>
                <p className="text-gray-500 text-sm mb-4">{pkg.duration}</p>
                <p className="text-gray-600">{pkg.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-full font-medium transition-colors ${
                pkg.popular 
                  ? 'btn-primary' 
                  : 'btn-secondary'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="bg-white rounded-lg p-8 shadow-sm "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-black mb-6 text-center">Add-On Services</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {addOns.map((addon, index) => (
              <div key={index} className="flex justify-between items-center py-2">
                <span className="text-gray-600">{addon.name}</span>
                <span className="font-semibold text-black">{addon.price}</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <button className="btn-secondary px-8 py-3 rounded-full font-medium">
            Request Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  )
}