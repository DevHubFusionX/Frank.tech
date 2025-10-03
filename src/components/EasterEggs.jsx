import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Code, Cpu, Database } from 'lucide-react'

export default function EasterEggs() {
  const [konamiActivated, setKonamiActivated] = useState(false)
  const [devModeActive, setDevModeActive] = useState(false)
  const [matrixMode, setMatrixMode] = useState(false)
  const [showKonamiHint, setShowKonamiHint] = useState(false)

  // Konami Code: ↑↑↓↓←→←→BA
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ]
  const [konamiIndex, setKonamiIndex] = useState(0)

  // Professional Console Messages
  useEffect(() => {
    const messages = [
      {
        text: 'System initialized successfully',
        style: 'color: #10b981; font-family: monospace; font-size: 12px;'
      },
      {
        text: 'Portfolio v2.0.1 - Built with React 18 + Vite',
        style: 'color: #3b82f6; font-family: monospace; font-size: 12px;'
      },
      {
        text: 'Performance: Lighthouse Score 98/100',
        style: 'color: #8b5cf6; font-family: monospace; font-size: 12px;'
      },
      {
        text: 'Security: CSP enabled, XSS protection active',
        style: 'color: #f59e0b; font-family: monospace; font-size: 12px;'
      },
      {
        text: 'Easter egg detected. Try: ↑↑↓↓←→←→BA',
        style: 'color: #ef4444; font-family: monospace; font-size: 12px; font-weight: bold;'
      },
      {
        text: 'Available commands: devMode(), matrix(), stats()',
        style: 'color: #06b6d4; font-family: monospace; font-size: 12px;'
      }
    ]

    messages.forEach((msg, i) => {
      setTimeout(() => console.log(`%c${msg.text}`, msg.style), i * 800)
    })

    // Professional console commands
    window.devMode = () => {
      setDevModeActive(true)
      console.log('%c[DEV MODE] Developer tools activated', 'color: #10b981; font-family: monospace; background: #1f2937; padding: 8px; border-left: 4px solid #10b981;')
      setTimeout(() => setDevModeActive(false), 8000)
    }

    window.matrix = () => {
      setMatrixMode(true)
      console.log('%c[MATRIX] Entering the matrix...', 'color: #00ff00; font-family: monospace; background: #000; padding: 8px;')
      setTimeout(() => setMatrixMode(false), 6000)
    }

    window.stats = () => {
      console.group('%cPortfolio Statistics', 'color: #3b82f6; font-size: 16px; font-weight: bold;')
      console.log('%cTotal Projects: 12', 'color: #10b981; font-family: monospace;')
      console.log('%cTechnologies: React, Node.js, MongoDB, TypeScript', 'color: #8b5cf6; font-family: monospace;')
      console.log('%cExperience: 3+ years', 'color: #f59e0b; font-family: monospace;')
      console.log('%cResponse Time: < 24 hours', 'color: #06b6d4; font-family: monospace;')
      console.groupEnd()
    }

    // Konami hint repeating timer
    const konamiTimer = setInterval(() => {
      if (!konamiActivated) {
        setShowKonamiHint(true)
        setTimeout(() => setShowKonamiHint(false), 3000)
      }
    }, 10000)

    return () => {
      delete window.devMode
      delete window.matrix
      delete window.stats
      clearInterval(konamiTimer)
    }
  }, [konamiActivated])

  // Konami Code Detection
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === konamiCode[konamiIndex]) {
        setKonamiIndex(prev => prev + 1)
        if (konamiIndex === konamiCode.length - 1) {
          activateKonami()
          setKonamiIndex(0)
        }
      } else {
        setKonamiIndex(0)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [konamiIndex])

  const activateKonami = () => {
    setKonamiActivated(true)
    console.log('%c[KONAMI] Access granted. Welcome to the developer zone.', 'color: #00ff00; font-family: monospace; background: #000; padding: 10px; border: 2px solid #00ff00;')
    
    setTimeout(() => {
      setKonamiActivated(false)
    }, 6000)
  }

  return (
    <>
      {/* Developer Hint - Desktop Only */}
      <motion.div
        className="fixed bottom-4 left-4 z-30 bg-black/90 text-green-400 px-3 py-2 rounded font-mono text-xs border border-green-400/30 hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 5, duration: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <Terminal className="w-3 h-3" />
          <span>Dev tools detected. Press F12 for secrets...</span>
        </div>
      </motion.div>

      {/* Konami Hint - Repeating - Desktop Only */}
      <AnimatePresence>
        {showKonamiHint && (
          <motion.div
            className="fixed top-20 left-4 z-30 bg-gray-900/95 text-gray-300 px-3 py-2 rounded font-mono text-xs border border-gray-600 hidden md:block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <Code className="w-3 h-3" />
              <span>Try: ↑↑↓↓←→←→BA</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Professional Konami Success */}
      <AnimatePresence>
        {konamiActivated && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-black border-2 border-green-400 text-green-400 px-8 py-6 font-mono text-center shadow-2xl"
              initial={{ scale: 0, rotateX: -90 }}
              animate={{ scale: 1, rotateX: 0 }}
              exit={{ scale: 0, rotateX: 90 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm mb-2">[SYSTEM ACCESS GRANTED]</div>
              <div className="text-lg font-bold mb-2">DEVELOPER MODE UNLOCKED</div>
              <div className="text-xs opacity-80">Console commands now available</div>
              <div className="text-xs mt-2 text-green-300">Try: devMode() | matrix() | stats()</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Developer Mode Overlay */}
      <AnimatePresence>
        {devModeActive && (
          <motion.div
            className="fixed top-4 right-4 z-40 bg-black/90 border border-green-400 text-green-400 p-4 font-mono text-sm rounded"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-4 h-4" />
              <span>DEV MODE ACTIVE</span>
            </div>
            <div className="text-xs space-y-1 text-green-300">
              <div>• React DevTools: Enabled</div>
              <div>• Performance Monitor: ON</div>
              <div>• Debug Mode: Active</div>
              <div>• Console Logging: Verbose</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Matrix Mode */}
      <AnimatePresence>
        {matrixMode && (
          <motion.div
            className="fixed inset-0 z-40 pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/80" />
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-green-400 font-mono text-sm"
                style={{ left: `${i * 5}%`, top: '-100px' }}
                animate={{ y: window.innerHeight + 100 }}
                transition={{ 
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              >
                {Array.from({ length: 20 }).map((_, j) => (
                  <div key={j} className="opacity-80">
                    {String.fromCharCode(33 + Math.random() * 94)}
                  </div>
                ))}
              </motion.div>
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-green-400 font-mono text-center">
                <div className="text-2xl mb-4">ENTERING THE MATRIX</div>
                <div className="text-sm opacity-80">Reality is just code...</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Professional Hidden Features */}
      <div
        className="fixed bottom-0 left-0 w-8 h-8 opacity-0 cursor-pointer z-10"
        onClick={() => {
          console.log('%c[EASTER EGG] Performance metrics unlocked', 'color: #3b82f6; font-family: monospace;')
          console.table({
            'Load Time': '1.2s',
            'Bundle Size': '245KB',
            'Lighthouse': '98/100',
            'Core Web Vitals': 'Passed'
          })
        }}
      />
      
      <div
        className="fixed top-0 right-0 w-8 h-8 opacity-0 cursor-pointer z-10"
        onDoubleClick={() => {
          console.log('%c[SYSTEM] Tech stack information', 'color: #8b5cf6; font-family: monospace;')
          console.group('Technology Stack')
          console.log('Frontend: React 18, Vite, Tailwind CSS')
          console.log('Animation: Framer Motion')
          console.log('3D Graphics: Three.js, React Three Fiber')
          console.log('Icons: Lucide React')
          console.log('Deployment: Vercel')
          console.groupEnd()
        }}
      />
    </>
  )
}