import { Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-16" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-3xl font-black mb-3" style={{ color: 'var(--color-text-primary)' }}>AF.</h3>
            <p className="mb-2" style={{ color: 'var(--color-text-primary)' }}>Anyanwu Franklin</p>
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>Full-Stack MERN Developer</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" style={{ color: 'var(--color-text-secondary)' }} />
                <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>anyanwufranklin@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" style={{ color: 'var(--color-text-secondary)' }} />
                <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>+234 912 739 1830</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>Pages</h4>
            <div className="space-y-3">
              <Link to="/" className="block transition-colors hover:translate-x-1 duration-200" style={{ color: 'var(--color-text-secondary)' }}>Home</Link>
              <Link to="/about" className="block transition-colors hover:translate-x-1 duration-200" style={{ color: 'var(--color-text-secondary)' }}>About</Link>
              <Link to="/services" className="block transition-colors hover:translate-x-1 duration-200" style={{ color: 'var(--color-text-secondary)' }}>Services</Link>
              <Link to="/portfolio" className="block transition-colors hover:translate-x-1 duration-200" style={{ color: 'var(--color-text-secondary)' }}>Portfolio</Link>
              <Link to="/contact" className="block transition-colors hover:translate-x-1 duration-200" style={{ color: 'var(--color-text-secondary)' }}>Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>Resources</h4>
            <div className="space-y-3">
              <Link to="/blog" className="block transition-colors hover:translate-x-1 duration-200" style={{ color: 'var(--color-text-secondary)' }}>Blog</Link>
              <Link to="/cv" className="block transition-colors hover:translate-x-1 duration-200" style={{ color: 'var(--color-text-secondary)' }}>My CV</Link>
              <Link to="/faq" className="block transition-colors hover:translate-x-1 duration-200" style={{ color: 'var(--color-text-secondary)' }}>FAQ</Link>
              <Link to="/privacy" className="block transition-colors hover:translate-x-1 duration-200" style={{ color: 'var(--color-text-secondary)' }}>Privacy Policy</Link>
              <Link to="/terms" className="block transition-colors hover:translate-x-1 duration-200" style={{ color: 'var(--color-text-secondary)' }}>Terms of Service</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="https://github.com/DevHubFusionX" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-all duration-200 hover:scale-110" style={{ backgroundColor: 'var(--color-bg-secondary)', color: 'var(--color-text-secondary)' }}>
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/anyanwufranklin" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-all duration-200 hover:scale-110" style={{ backgroundColor: 'var(--color-bg-secondary)', color: 'var(--color-text-secondary)' }}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/DevHubFusionX" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg transition-all duration-200 hover:scale-110" style={{ backgroundColor: 'var(--color-bg-secondary)', color: 'var(--color-text-secondary)' }}>
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Available for freelance projects</p>
          </div>
        </div>

        <div className="pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              © 2024 Anyanwu Franklin. All rights reserved.
            </p>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}