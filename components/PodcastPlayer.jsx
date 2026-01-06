'use client'

import { useState, useRef } from 'react'
import { Play, Pause } from 'lucide-react'

export default function PodcastPlayer({ src }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
  }

  if (!src) return null

  return (
    <div 
      className="flex items-center justify-between px-4 py-3 rounded-md border border-gold-dark/30"
      style={{
        backgroundColor: '#121212',
        borderColor: '#D4AF37',
      }}
    >
      {/* Label */}
      <div className="flex-1">
        <p className="text-xs font-bold uppercase tracking-ultra-wide text-gold">
          DEEPER DIVE PODCAST
        </p>
      </div>

      {/* Audio Element (Hidden) */}
      <audio
        ref={audioRef}
        onEnded={handleEnded}
        preload="metadata"
      >
        <source src={src} type="audio/mp4" />
        <source src={src} type="audio/x-m4a" />
        Your browser does not support the audio element.
      </audio>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-gold/10"
        style={{
          border: '2px solid #D4AF37',
          backgroundColor: isPlaying ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
        }}
        aria-label={isPlaying ? 'Pause podcast' : 'Play podcast'}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5" style={{ color: '#D4AF37' }} fill="#D4AF37" />
        ) : (
          <Play className="w-5 h-5 ml-0.5" style={{ color: '#D4AF37' }} fill="#D4AF37" />
        )}
      </button>
    </div>
  )
}
