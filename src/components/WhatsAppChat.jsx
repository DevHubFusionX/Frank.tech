import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import { useState } from 'react'

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const whatsappNumber = '2349127391830'
  
  const quickMessages = [
    'Hi! I need a website for my business',
    'I want to discuss a web development project',
    'Can you help with a React application?',
    'I need an e-commerce website'
  ]

  const sendWhatsAppMessage = (msg = message) => {
    const encodedMessage = encodeURIComponent(msg)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
    setMessage('')
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </motion.div>

      {/* WhatsApp Chat Widget */}
      {isOpen && (
        <motion.div
          className="fixed bottom-24 right-6 w-80 bg-white rounded-lg shadow-xl border z-50"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">AF</span>
              </div>
              <div>
                <h4 className="font-semibold">Anyanwu Franklin</h4>
                <p className="text-sm text-green-100">Usually replies instantly</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-600">
                👋 Hi there! How can I help you with your web development project?
              </p>
            </div>

            {/* Quick Messages */}
            <div className="space-y-2 mb-4">
              <p className="text-sm font-medium text-gray-700">Quick messages:</p>
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => sendWhatsAppMessage(msg)}
                  className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {msg}
                </button>
              ))}
            </div>

            {/* Custom Message */}
            <div className="space-y-3">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:border-green-500"
                rows={3}
              />
              <button
                onClick={() => sendWhatsAppMessage()}
                disabled={!message.trim()}
                className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white py-2 rounded-lg font-medium transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}