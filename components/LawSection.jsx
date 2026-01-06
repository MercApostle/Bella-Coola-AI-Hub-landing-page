'use client'

import { useState } from 'react'
import LazyVideoPlayer from './LazyVideoPlayer'
import PodcastPlayer from './PodcastPlayer'
import InfographicLens from './InfographicLens'
import { useUser } from '../lib/UserContext'

export default function LawSection({ law }) {
  const { email, isGatePassed } = useUser()
  const [formData, setFormData] = useState({
    q1: '',
    q2: '',
    q3: '',
    honeypot: '', // Anti-spam field
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Check if honeypot was filled (bot detection)
    if (formData.honeypot) {
      console.log('Bot detected - silent rejection')
      return
    }

    // Validate that email/consent gate has been passed
    if (!isGatePassed || !email) {
      alert('Please complete the email/consent section above before submitting answers.')
      return
    }

    setIsSubmitting(true)

    try {
      // Get Apps Script URL from environment
      const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec'
      
      console.log('📤 Submitting to:', APPS_SCRIPT_URL)

      // Prepare simple payload
      const payload = {
        timestamp: new Date().toISOString(),
        email: email,
        law_id: law.id,
        q1: formData.q1 || '',
        q2: formData.q2 || '',
        q3: formData.q3 || '',
        consent: true
      }
      
      console.log('📦 Data:', payload)

      // Submit to Apps Script (mode: no-cors is required for Apps Script)
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      
      console.log('✅ Sent successfully')

      // Show success toast
      showToast("Answers saved successfully.", 'success')

      // Reset form
      setFormData({
        q1: '',
        q2: '',
        q3: '',
        honeypot: '',
      })
      setHasSubmitted(true)

    } catch (error) {
      console.error('❌ Error:', error)
      showToast('Something went wrong. Please try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section 
      id={law.id} 
      className="law-section section-container scroll-mt-20"
    >
      <div className="mb-8">
        <h2 
          className="text-2xl md:text-3xl font-black uppercase tracking-widest text-gold mb-3 text-shadow"
          style={{ color: hasSubmitted ? law.color : '#d4af37' }}
        >
          {law.title}
        </h2>
        <p className="text-lg md:text-xl font-bold text-gold-200 mb-2">
          {law.hook}
        </p>
        <p className="text-sm md:text-base text-gold-100">
          {law.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {law.videoSrc && (
          <div className="w-full space-y-4">
            <LazyVideoPlayer 
                videoSrc={law.videoSrc} 
                thumbnailSrc={law.thumbnailSrc}
                lawColor={law.color} 
              />
            {law.audioSrc && (
              <PodcastPlayer src={law.audioSrc} />
            )}
            {law.infographicSrc && (
              <InfographicLens src={law.infographicSrc} alt={`${law.title} Infographic`} />
            )}
          </div>
        )}

        <div className={law.videoSrc ? '' : 'lg:col-span-2'}>
          {!isGatePassed && (
            <div className="mb-6 p-4 bg-gold/10 border border-gold/30 rounded-md">
              <p className="text-sm text-gold-100">
                ⚠️ Please complete the <a href="#email-consent-gate" className="text-gold underline hover:text-gold-200">email section above</a> to unlock this form.
              </p>
            </div>
          )}
          
          <p className="text-xs text-gold-dark italic mb-6">
            Questions are optional.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleInputChange}
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

            <div>
              <label htmlFor={`q1-${law.id}`} className="block text-sm font-medium text-gold-100 mb-2">
                {law.questions[0]}
              </label>
              <textarea
                id={`q1-${law.id}`}
                name="q1"
                value={formData.q1}
                onChange={handleInputChange}
                rows="3"
                className="w-full"
                placeholder="Your answer..."
                disabled={!isGatePassed}
              />
            </div>

            <div>
              <label htmlFor={`q2-${law.id}`} className="block text-sm font-medium text-gold-100 mb-2">
                {law.questions[1]}
              </label>
              <textarea
                id={`q2-${law.id}`}
                name="q2"
                value={formData.q2}
                onChange={handleInputChange}
                rows="3"
                className="w-full"
                placeholder="Your answer..."
                disabled={!isGatePassed}
              />
            </div>

            <div>
              <label htmlFor={`q3-${law.id}`} className="block text-sm font-medium text-gold-100 mb-2">
                {law.questions[2]}
              </label>
              <textarea
                id={`q3-${law.id}`}
                name="q3"
                value={formData.q3}
                onChange={handleInputChange}
                rows="3"
                className="w-full"
                placeholder="Your answer..."
                disabled={!isGatePassed}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !isGatePassed}
              className="px-8 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-all duration-200 bg-black-800 border-2 border-gold-dark/30 text-gold-100 hover:border-gold hover:bg-gold/10"
              style={{
                borderColor: isSubmitting ? law.color : '',
                backgroundColor: isSubmitting ? law.color + '20' : '',
                color: isSubmitting ? law.color : '',
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.borderColor = law.color
                  e.currentTarget.style.backgroundColor = law.color + '20'
                  e.currentTarget.style.color = law.color
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.borderColor = 'rgba(170, 138, 46, 0.3)'
                  e.currentTarget.style.backgroundColor = 'rgba(20, 20, 20, 0.8)'
                  e.currentTarget.style.color = '#fef3c7'
                }
              }}
            >
              {isSubmitting ? 'Saving...' : law.submitLabel}
            </button>
          </form>

          {hasSubmitted && (
            <p className="mt-4 text-sm text-gold-dark italic">
              ✓ Saved.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

function showToast(message, type = 'success') {
  const toast = document.createElement('div')
  toast.className = `toast ${type}`
  toast.textContent = message
  document.body.appendChild(toast)
  setTimeout(() => {
    toast.style.opacity = '0'
    setTimeout(() => {
      document.body.removeChild(toast)
    }, 300)
  }, 4000)
}
