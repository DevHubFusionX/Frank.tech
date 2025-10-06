import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.scrollTo) {
        window.scrollTo(0, 0)
      }
    } catch (error) {
      console.error('Failed to scroll to top:', error)
    }
  }, [pathname])

  return null
}