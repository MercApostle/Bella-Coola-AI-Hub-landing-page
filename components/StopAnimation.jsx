'use client'

import { useEffect, useState } from 'react'

export default function StopAnimation() {
  const [shouldShow, setShouldShow] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Check if animation has been shown before
    const hasBeenShown = localStorage.getItem('stopAnimationShown')
    
    if (!hasBeenShown) {
      // Show animation for first-time visitors
      setShouldShow(true)
      localStorage.setItem('stopAnimationShown', 'true')
      
      // Fade out after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [])

  if (!shouldShow || !isVisible) return null

  return (
    <div 
      className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none px-4"
      aria-label="Stop"
    >
      <h1 
        className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black uppercase tracking-widest text-red-500 animate-stop-pulse"
        style={{ textShadow: '0 4px 20px rgba(239, 68, 68, 0.5)' }}
      >
        STOP
      </h1>
    </div>
  )
}
