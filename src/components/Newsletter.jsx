import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import emailjs from 'emailjs-com'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    try {
      await emailjs.send(
        import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: 'Newsletter Subscriber',
          from_email: email,
          message: `New newsletter subscription from: ${email}`,
          to_name: 'Anyanwu Franklin',
          subject: 'Newsletter Subscription'
        },
        import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY
      )
      
      setIsSubscribed(true)
      setEmail('')
    } catch (error) {
      console.error('Newsletter subscription failed:', error)
      alert('Subscription failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubscribed) {
    return (
      <motion.div
        className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">Welcome aboard! 🎉</h3>
        <p className="text-green-600">
          You're now subscribed to my tech blog. Expect quality content about web development!
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 to-black text-white rounded-lg p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-white/10 p-3 rounded-lg">
          <Mail className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Stay Updated</h3>
          <p className="text-gray-300">Get the latest web dev insights</p>
        </div>
      </div>
      
      <p className="text-gray-300 mb-6">
        Subscribe to my newsletter for weekly tips on React, Node.js, and modern web development. 
        No spam, just valuable content!
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-white text-black px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors disabled:opacity-50"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
            Subscribe
          </button>
        </div>
        <p className="text-xs text-gray-400">
          By subscribing, you agree to receive emails from me. Unsubscribe anytime.
        </p>
      </form>
      
      <div className="mt-6 pt-6 border-t border-white/10">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>📧 Weekly newsletter</span>
          <span>🚀 500+ subscribers</span>
          <span>⭐ No spam policy</span>
        </div>
      </div>
    </motion.div>
  )
}