import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-9xl font-black text-gray-200 mb-4">404</div>
          <h1 className="text-4xl font-bold text-black mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.history.back()}
              className="btn-secondary px-6 py-3 rounded-full font-medium flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
            <button 
              onClick={() => window.location.href = '/'}
              className="btn-primary px-6 py-3 rounded-full font-medium flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              Home Page
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}