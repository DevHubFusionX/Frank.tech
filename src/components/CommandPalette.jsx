import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Home, User, Briefcase, Mail, FileText, Command } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const commands = [
    { id: 'home', label: 'Home', icon: Home, action: () => navigate('/') },
    { id: 'about', label: 'About Me', icon: User, action: () => navigate('/about') },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase, action: () => navigate('/portfolio') },
    { id: 'services', label: 'Services', icon: FileText, action: () => navigate('/services') },
    { id: 'contact', label: 'Contact', icon: Mail, action: () => navigate('/contact') },
    { id: 'cv', label: 'My CV', icon: FileText, action: () => navigate('/cv') },
  ]

  const filteredCommands = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
        setQuery('')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const executeCommand = (command) => {
    command.action()
    setIsOpen(false)
    setQuery('')
  }

  return (
    <>
      {/* Trigger Hint - Desktop Only */}
      <motion.div
        className="fixed bottom-6 right-24 z-40 px-3 py-2 rounded-lg text-sm flex items-center gap-2 hidden md:flex"
        style={{ 
          backgroundColor: 'var(--color-bg-secondary)', 
          color: 'var(--color-text-primary)',
          border: '1px solid var(--color-border)'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
      >
        <Command className="w-4 h-4" />
        <span>Press ⌘K to search</span>
      </motion.div>

      {/* Command Palette */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden"
              style={{ backgroundColor: 'var(--color-bg-primary)' }}
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Input */}
              <div className="flex items-center gap-3 p-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
                <Search className="w-5 h-5" style={{ color: 'var(--color-text-secondary)' }} />
                <input
                  type="text"
                  placeholder="Search pages..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 outline-none text-lg"
                  style={{ 
                    backgroundColor: 'transparent',
                    color: 'var(--color-text-primary)'
                  }}
                  autoFocus
                />
              </div>

              {/* Commands */}
              <div className="max-h-80 overflow-y-auto">
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((command, index) => {
                    const IconComponent = command.icon
                    return (
                      <button
                        key={command.id}
                        onClick={() => executeCommand(command)}
                        className="w-full flex items-center gap-3 p-4 transition-colors text-left"
                        style={{
                          ':hover': { backgroundColor: 'var(--color-bg-secondary)' }
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-bg-secondary)'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        <IconComponent className="w-5 h-5" style={{ color: 'var(--color-text-secondary)' }} />
                        <span style={{ color: 'var(--color-text-primary)' }}>{command.label}</span>
                      </button>
                    )
                  })
                ) : (
                  <div className="p-8 text-center" style={{ color: 'var(--color-text-secondary)' }}>
                    No results found for "{query}"
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}