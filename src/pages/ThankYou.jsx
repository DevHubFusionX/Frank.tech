import { motion } from 'framer-motion'
import { CheckCircle, Home, MessageCircle } from 'lucide-react'

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-12 h-12 text-green-500" />
          </motion.div>
          
          <h1 className="text-4xl font-bold text-black mb-4">Thank You!</h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Your message has been sent successfully. I'll get back to you within 24 hours.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8 max-w-md mx-auto">
            <h3 className="font-semibold text-black mb-2">What happens next?</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• I'll review your project details</li>
              <li>• Prepare a detailed proposal</li>
              <li>• Schedule a consultation call</li>
              <li>• Discuss timeline and pricing</li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/'}
              className="btn-primary px-6 py-3 rounded-full font-medium flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </button>
            <button 
              onClick={() => window.open('https://wa.me/2348000000000', '_blank')}
              className="btn-secondary px-6 py-3 rounded-full font-medium flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Me
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}