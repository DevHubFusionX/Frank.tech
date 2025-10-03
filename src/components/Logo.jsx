import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/">
      <motion.div
        className="text-2xl font-black text-black tracking-tight logo"
        whileHover={{ scale: 1.02 }}
      >
        AF.
      </motion.div>
    </Link>
  )
}