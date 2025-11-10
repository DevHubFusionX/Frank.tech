import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronDown, FileText, Shield, HelpCircle } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { smoothScrollTo } from '../utils/smoothScroll'

export default function MobileMenu({ isOpen, onClose }) {
  const location = useLocation()
  const currentPath = location.pathname
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'services', label: 'Services', href: '/services' },
    { id: 'portfolio', label: 'Portfolio', href: '/portfolio' },
    { id: 'blog', label: 'Blog', href: '/blog' },
    { id: 'contact', label: 'Contact', href: '/contact' }
  ]

  const handleLinkClick = (href) => {
    if (href.includes('#')) {
      const [path, hash] = href.split('#')
      if (path && path !== '/') {
        onClose()
        // Let router navigate first, then scroll
        setTimeout(() => smoothScrollTo(hash), 100)
      } else {
        if (window.location.pathname !== '/') {
          onClose()
          setTimeout(() => smoothScrollTo(hash), 100)
        } else {
          smoothScrollTo(hash)
          onClose()
        }
      }
    } else {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            className="fixed top-0 right-0 h-full w-80 mobile-sidebar z-50"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="mobile-sidebar-header">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-black">AF.</h2>
                  <p className="text-sm opacity-80">Navigation</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="mobile-sidebar-content">
              <div className="p-6">
                <nav className="space-y-2">
                  {navItems.map((item) => {
                    const isActive = currentPath === item.href || (item.id === 'home' && currentPath === '/')
                    const isHashLink = item.href.includes('#')

                    if (isHashLink) {
                      return (
                        <a
                          key={item.id}
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault()
                            handleLinkClick(item.href)
                          }}
                          className={`mobile-nav-item block ${isActive ? 'active' : ''
                            }`}
                        >
                          {item.label}
                        </a>
                      )
                    }

                    return (
                      <Link
                        key={item.id}
                        to={item.href}
                        onClick={() => handleLinkClick(item.href)}
                        className={`mobile-nav-item block ${isActive ? 'active' : ''
                          }`}
                      >
                        {item.label}
                      </Link>
                    )
                  })}
                </nav>

                {/* Resources Dropdown */}
                <div className="mt-8 pt-6" style={{ borderTop: `1px solid var(--color-border)` }}>
                  <button
                    onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                    className="flex items-center justify-between w-full text-left mobile-nav-item mb-2"
                  >
                    <span>Resources</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isResourcesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 space-y-2 overflow-hidden"
                      >
                        <Link
                          to="/blog"
                          onClick={onClose}
                          className="mobile-nav-item block text-sm flex items-center gap-2"
                        >
                          <FileText className="w-4 h-4" />
                          Blog
                        </Link>
                        <Link
                          to="/cv"
                          onClick={onClose}
                          className="mobile-nav-item block text-sm flex items-center gap-2"
                        >
                          <FileText className="w-4 h-4" />
                          My CV
                        </Link>
                        <Link
                          to="/faq"
                          onClick={onClose}
                          className="mobile-nav-item block text-sm flex items-center gap-2"
                        >
                          <HelpCircle className="w-4 h-4" />
                          FAQ
                        </Link>
                        <Link
                          to="/privacy"
                          onClick={onClose}
                          className="mobile-nav-item block text-sm flex items-center gap-2"
                        >
                          <Shield className="w-4 h-4" />
                          Privacy Policy
                        </Link>
                        <Link
                          to="/terms"
                          onClick={onClose}
                          className="mobile-nav-item block text-sm flex items-center gap-2"
                        >
                          <FileText className="w-4 h-4" />
                          Terms of Service
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Quick Actions */}
                <div className="mt-6 pt-6" style={{ borderTop: `1px solid var(--color-border)` }}>
                  <h3 className="text-sm font-semibold mb-4" style={{ color: 'var(--color-text-secondary)' }}>Quick Contact</h3>
                  <div className="space-y-2">
                    <a
                      href="mailto:anyanwufranklin.dev@gmail.com"
                      className="mobile-nav-item block text-sm"
                    >
                      📧 Email Me
                    </a>
                    <a
                      href="https://wa.me/2349127391830"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mobile-nav-item block text-sm"
                    >
                      💬 WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}