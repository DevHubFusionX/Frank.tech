import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, X, Heart, Zap, Coffee, Rocket } from 'lucide-react'

export default function FeedbackNotification() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [selectedRating, setSelectedRating] = useState(0)
  const [showThankYou, setShowThankYou] = useState(false)

  useEffect(() => {
    // Check if user has already interacted
    const hasSeenFeedback = localStorage.getItem('hasSeenFeedback')
    if (hasSeenFeedback) return

    // Show notification after 30 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 30000)

    return () => clearTimeout(timer)
  }, [])

  const handleRating = (rating) => {
    setSelectedRating(rating)
    setShowThankYou(true)
    localStorage.setItem('hasSeenFeedback', 'true')
    
    // Hide after showing thank you
    setTimeout(() => {
      setIsVisible(false)
    }, 3000)
  }

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem('hasSeenFeedback', 'true')
  }

  const reactions = [
    { icon: Heart, label: 'Love it!', color: 'text-red-500', rating: 5 },
    { icon: Star, label: 'Great!', color: 'text-yellow-500', rating: 4 },
    { icon: Zap, label: 'Good', color: 'text-blue-500', rating: 3 },
    { icon: Coffee, label: 'Okay', color: 'text-orange-500', rating: 2 }
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ type: "spring", duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 max-w-sm">
            {!showThankYou ? (
              <>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900">Quick Feedback</h3>
                  </div>
                  <button
                    onClick={handleClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <p className="text-gray-600 mb-6 text-sm">
                  How's your experience on my website so far? <Rocket/>
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {reactions.map((reaction, index) => {
                    const IconComponent = reaction.icon
                    return (
                      <motion.button
                        key={index}
                        onClick={() => handleRating(reaction.rating)}
                        className="flex flex-col items-center gap-2 p-3 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent className={`w-6 h-6 ${reaction.color}`} />
                        <span className="text-xs font-medium text-gray-700">
                          {reaction.label}
                        </span>
                      </motion.button>
                    )
                  })}
                </div>
                
                <p className="text-xs text-gray-400 mt-4 text-center">
                  Takes just 1 second • Helps me improve
                </p>
              </>
            ) : (
              <motion.div
                className="text-center py-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Thank you! 🎉</h3>
                <p className="text-gray-600 text-sm">
                  Your feedback means the world to me!
                </p>
                <div className="flex justify-center mt-3">
                  {[...Array(selectedRating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}