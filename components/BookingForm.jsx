'use client'

import { useState } from 'react'
import { useUser } from '../lib/UserContext'
import { Calendar, CheckCircle2, Phone, User, Mail, MessageSquare } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BookingForm() {
  const { email } = useUser()
  const [formData, setFormData] = useState({
    name: '',
    email: email || '',
    phone: '',
    motivation: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const payload = {
      ...formData,
      formType: 'booking',
      timestamp: new Date().toISOString()
    }

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setIsSuccess(true)
      } else {
        throw new Error('Failed to submit booking request')
      }
    } catch (err) {
      console.error('Booking Error:', err)
      setError('Something went wrong. Please try again or book directly below.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black-800 border-2 border-gold rounded-lg p-8 text-center space-y-6"
      >
        <div className="flex justify-center">
          <CheckCircle2 className="w-16 h-16 text-gold animate-pulse" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-white">
          Data Received. Choose Your Session.
        </h3>
        <p className="text-gold-100 max-w-md mx-auto">
          Your details have been captured. Please select a time on my calendar that works best for you.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/PLACEHOLDER_INTRO" // Placeholder
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 bg-gold text-black font-black uppercase tracking-tighter hover:bg-white transition-colors rounded-sm"
          >
            <Calendar className="w-5 h-5" />
            20-Min Intro Call
          </a>
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/PLACEHOLDER_DEPTH" // Placeholder
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 border-2 border-gold text-gold font-black uppercase tracking-tighter hover:bg-gold hover:text-black transition-colors rounded-sm"
          >
            <Calendar className="w-5 h-5" />
            60-Min Deep Dive
          </a>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="bg-black-900/50 border border-gold/20 rounded-xl p-6 md:p-10 backdrop-blur-sm">
      <div className="mb-8 space-y-2">
        <h3 className="text-2xl font-bold text-gold uppercase tracking-tight">Reserve Your System Review</h3>
        <p className="text-gold-dark italic">Collect your thoughts before we align them on a call.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gold-dark flex items-center gap-2">
              <User className="w-3 h-3" /> Full Name
            </label>
            <input
              type="text"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-black/40 border border-gold/20 p-4 text-white focus:border-gold outline-none transition-colors rounded-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-gold-dark flex items-center gap-2">
              <Mail className="w-3 h-3" /> Business Email
            </label>
            <input
              type="email"
              required
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-black/40 border border-gold/20 p-4 text-white focus:border-gold outline-none transition-colors rounded-sm"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-gold-dark flex items-center gap-2">
            <Phone className="w-3 h-3" /> Phone Number (Optional)
          </label>
          <input
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-black/40 border border-gold/20 p-4 text-white focus:border-gold outline-none transition-colors rounded-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-gold-dark flex items-center gap-2">
            <MessageSquare className="w-3 h-3" /> What are you looking to achieve?
          </label>
          <textarea
            required
            rows={4}
            placeholder="Tell me a bit about your current bottlenecks or what you're hoping to get out of our conversation..."
            value={formData.motivation}
            onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
            className="w-full bg-black/40 border border-gold/20 p-4 text-white focus:border-gold outline-none transition-colors rounded-sm resize-none"
          />
        </div>

        {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-5 bg-gold/10 border-2 border-gold text-gold font-black uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3"
        >
          {isSubmitting ? 'Transmitting...' : 'Access My Calendar'}
        </button>
      </form>
    </div>
  )
}
