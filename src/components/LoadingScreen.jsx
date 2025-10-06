import { motion } from 'framer-motion'
// import ThreeBackground from './ThreeBackground'
export default function LoadingScreen({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={() => {
        try {
          if (typeof onComplete === 'function') {
            setTimeout(onComplete, 2000)
          }
        } catch (error) {
          console.error('Error in loading screen completion:', error)
        }
      }}
    >
      {/* <ThreeBackground /> */}

      <div className="text-center">
        <motion.div
          className="text-6xl font-black text-black mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          AF.
        </motion.div>
        
        <motion.div
          className="w-16 h-1 bg-black mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        
        <motion.p
          className="text-gray-600 mt-6 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Full-Stack Developer
        </motion.p>
      </div>
    </motion.div>
  )
}