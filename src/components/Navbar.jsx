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

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'services', label: 'Services', href: '/services' },
    { id: 'portfolio', label: 'Portfolio', href: '/portfolio' },
    { id: 'blog', label: 'Blog', href: '/blog' },
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
          <div className="flex items-center gap-8">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <NavItem
                  key={item.id}
                  href={item.href}
                  isActive={currentPath === item.href || (item.id === 'home' && currentPath === '/')}
                >
                  {item.label}
                </NavItem>
              ))}
              <div className="w-px h-6 mx-3" style={{ backgroundColor: 'var(--color-border)' }} />
              <ThemeToggle />
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-lg transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: 'var(--color-bg-secondary)',
                  color: 'var(--color-text-primary)'
                }}
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