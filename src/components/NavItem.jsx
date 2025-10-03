import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { smoothScrollTo } from '../utils/smoothScroll'

export default function NavItem({ href, children, isActive }) {
  const navigate = useNavigate()
  const isHashLink = href.includes('#')
  
  const handleHashClick = (e) => {
    e.preventDefault()
    const [path, hash] = href.split('#')
    
    if (path && path !== '/') {
      navigate(path)
      setTimeout(() => smoothScrollTo(hash), 100)
    } else {
      if (window.location.pathname !== '/') {
        navigate('/')
        setTimeout(() => smoothScrollTo(hash), 100)
      } else {
        smoothScrollTo(hash)
      }
    }
  }
  
  if (isHashLink) {
    return (
      <motion.a
        href={href}
        onClick={handleHashClick}
        className={clsx(
          'nav-item text-sm cursor-pointer',
          isActive && 'active'
        )}
        whileHover={{ y: -1 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.div whileHover={{ y: -1 }}>
      <Link
        to={href}
        className={clsx(
          'nav-item text-sm block',
          isActive && 'active'
        )}
      >
        {children}
      </Link>
    </motion.div>
  )
}