'use client'

import { useState, useRef, useEffect } from 'react'
import { Play } from 'lucide-react'
import Image from 'next/image'

export default function LazyVideoPlayer({ videoSrc, thumbnailSrc, lawColor = '#d4af37' }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)
  const containerRef = useRef(null)

  // Intersection Observer to only load when in viewport
  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Preload video when section comes into view (but don't auto-play)
        if (entries[0].isIntersecting && !isLoaded) {
          // Optional: could add a small delay here if needed
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [isLoaded])

  const handlePlayClick = () => {
    setIsLoaded(true)
    setIsPlaying(true)
  }

  const handleVideoLoaded = () => {
    if (videoRef.current && isPlaying) {
      videoRef.current.play().catch(err => {
        console.log('Autoplay prevented:', err)
      })
    }
  }

  if (!videoSrc) return null

  return (
    <div ref={containerRef} className="relative w-full">
      {!isLoaded ? (
        // State 1: Idle - Thumbnail with Play Button
        <button
          onClick={handlePlayClick}
          className="relative w-full aspect-video bg-black border-2 border-gold-dark/30 rounded-lg overflow-hidden group hover:border-gold transition-all duration-300 cursor-pointer"
          style={{
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)',
          }}
          aria-label="Play video"
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.4)'
            e.currentTarget.style.borderColor = lawColor
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.2)'
            e.currentTarget.style.borderColor = 'rgba(170, 138, 46, 0.3)'
          }}
        >
          {/* Thumbnail Image */}
          {thumbnailSrc && (
            <Image
              src={thumbnailSrc}
              alt="Video thumbnail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
          )}

          {/* Dark Overlay */}
          <div 
            className="absolute inset-0 transition-all duration-300"
            style={{
              background: thumbnailSrc 
                ? 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))'
                : 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(20,20,20,0.95) 100%)'
            }}
          />
          
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-20 h-20 rounded-full bg-gold/10 border-2 flex items-center justify-center group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300"
              style={{ borderColor: '#D4AF37' }}
            >
              <Play 
                className="w-10 h-10 ml-1" 
                style={{ color: '#D4AF37' }}
                fill="#D4AF37"
              />
            </div>
          </div>

          {/* "Click to play" hint */}
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-sm text-gold-dark/70 group-hover:text-gold-dark transition-colors">
              Click to play video
            </p>
          </div>
        </button>
      ) : (
        // State 2: Active - Actual Video Player
        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden border-2 border-gold-dark/30">
          <video
            ref={videoRef}
            className="w-full h-full"
            controls
            onLoadedData={handleVideoLoaded}
            playsInline
            preload="metadata"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  )
}
