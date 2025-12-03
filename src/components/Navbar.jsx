import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import Logo from './Logo'
import NavItem from './NavItem'
import MobileMenu from './MobileMenu'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const location = useLocation()
  const currentPath = location.pathname
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Group navigation items for better UX
  const primaryNavItems = [
    { id: 'about', label: 'About', href: '/about' },
    { id: 'services', label: 'Services', href: '/services' },
    { id: 'portfolio', label: 'Work', href: '/portfolio' }, // Shortened label
    { id: 'blog', label: 'Blog', href: '/blog' }
  ]
  
  const secondaryNavItems = [
    { id: 'contact', label: 'Contact', href: '/contact' }
  ]

  return (
    <>
      <motion.nav
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="navbar-pill backdrop-blur-xl shadow-2xl">
          <div className="flex items-center gap-12"> {/* Increased gap for longer navbar */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2"> {/* Increased gap between nav items */}
              {primaryNavItems.map((item) => (
                <NavItem
                  key={item.id}
                  href={item.href}
                  isActive={currentPath === item.href}
                >
                  {item.label}
                </NavItem>
              ))}
              
              {/* Separator with contact and theme toggle */}
              <div className="flex items-center ml-6">
                <div className="w-px h-4 mx-4" style={{ backgroundColor: 'var(--color-border)' }} />
                {secondaryNavItems.map((item) => (
                  <NavItem
                    key={item.id}
                    href={item.href}
                    isActive={currentPath === item.href}
                    className="contact-nav-item" // Special styling for contact
                  >
                    {item.label}
                  </NavItem>
                ))}
                <div className="w-px h-4 mx-4" style={{ backgroundColor: 'var(--color-border)' }} />
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center gap-3"> {/* Reduced gap */}
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95" // Changed to rounded-full for better UX
                style={{
                  backgroundColor: 'var(--color-bg-secondary)',
                  color: 'var(--color-text-primary)'
                }}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}