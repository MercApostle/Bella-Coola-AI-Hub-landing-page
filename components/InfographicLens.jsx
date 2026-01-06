'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Maximize2, X } from 'lucide-react'
import Image from 'next/image'

export default function InfographicLens({ src, alt = 'Infographic' }) {
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef(null)

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleOpen = () => {
    setIsOpen(true)
    // Push a new history state when opening modal
    if (typeof window !== 'undefined') {
      window.history.pushState({ modalOpen: true }, '')
    }
  }

  // Handle backdrop click - only close on desktop to prevent zoom interference on mobile
  const handleBackdropClick = (e) => {
    // Only close on desktop (window width >= 768px)
    if (e.target === e.currentTarget && window.innerWidth >= 768) {
      handleClose()
    }
  }



  // Handle ESC key and browser back button
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') handleClose()
    }

    const handlePopState = () => {
      if (isOpen) {
        handleClose()
      }
    }
    
    if (isOpen) {
      window.addEventListener('keydown', handleEsc)
      window.addEventListener('popstate', handlePopState)
      return () => {
        window.removeEventListener('keydown', handleEsc)
        window.removeEventListener('popstate', handlePopState)
      }
    }
  }, [isOpen])

  // Hide/show header when modal opens/closes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const header = document.querySelector('header')
      if (header) {
        if (isOpen) {
          header.style.display = 'none'
          // Prevent body scroll
          document.body.style.overflow = 'hidden'
        } else {
          header.style.display = ''
          document.body.style.overflow = ''
        }
      }
    }

    // Cleanup on unmount
    return () => {
      if (typeof document !== 'undefined') {
        const header = document.querySelector('header')
        if (header) {
          header.style.display = ''
          document.body.style.overflow = ''
        }
      }
    }
  }, [isOpen])

  if (!src) return null

  return (
    <>
      {/* Preview - Closed State */}
      <button
        onClick={handleOpen}
        className="relative w-full h-32 rounded-md overflow-hidden border border-gold-dark/30 group hover:border-gold transition-all duration-300"
        style={{ borderColor: '#D4AF37' }}
      >
        {/* Background Image (cropped preview) */}
        <div className="absolute inset-0">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300" />

        {/* Center Icon & Label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Maximize2 
            className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform duration-200" 
            style={{ color: '#D4AF37' }}
          />
          <p className="text-xs uppercase tracking-ultra-wide font-bold" style={{ color: '#D4AF37' }}>
            INFOGRAPHIC
          </p>
        </div>
      </button>

      {/* Modal - Open State */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.98)' }}
            onClick={handleBackdropClick}
          >
            {/* Close button - visible on mobile */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              aria-label="Close infographic"
            >
              <X className="w-6 h-6" style={{ color: '#D4AF37' }} />
            </button>



            {/* Hint Text - Bottom center, desktop only */}
            <div className="absolute bottom-8 left-0 right-0 text-center z-10 hidden md:block">
              <p className="text-xs text-gold-dark/60">
                Tap anywhere to close
              </p>
            </div>

            {/* Mobile: Unoptimized Image for full zoom support */}
            <div className="md:hidden relative w-full h-full overflow-auto">
              <Image
                src={src}
                alt={alt}
                fill
                unoptimized
                className="object-contain"
                style={{ 
                  touchAction: 'pinch-zoom',
                  cursor: 'zoom-in'
                }}
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Desktop: Optimized Next.js Image */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="hidden md:block relative w-full h-full max-w-screen-xl p-16 pt-28"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
