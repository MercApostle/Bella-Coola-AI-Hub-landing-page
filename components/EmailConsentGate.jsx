'use client'

import { useState } from 'react'
import { useUser } from '../lib/UserContext'

export default function EmailConsentGate() {
  const { email, hasConsented, isGatePassed, updateEmail, updateConsent } = useUser()
  const [localEmail, setLocalEmail] = useState(email)
  const [localConsent, setLocalConsent] = useState(hasConsented)
  const [honeypot, setHoneypot] = useState('')
  const [isSaving, setIsSaving] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Check if honeypot was filled (bot detection)
    if (honeypot) {
      console.log('Bot detected - silent rejection')
      return
    }

    // Validate
    if (!localEmail || !localConsent) {
      alert('Please enter your email and agree to be contacted.')
      return
    }

    setIsSaving(true)

    // Update global context
    updateEmail(localEmail)
    updateConsent(localConsent)

    setIsSaving(false)

    // Smooth scroll to first law section (Mentalism)
    // We target the ID logic directly to ensure it goes to the right place
    setTimeout(() => {
      const firstLaw = document.getElementById('mentalism')
      if (firstLaw) {
        const offset = 100 // Adjust for header height
        const elementPosition = firstLaw.getBoundingClientRect().top + window.scrollY
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  // If already completed, show success state
  if (isGatePassed) {
    return (
      <section id="email-consent-gate" className="section-container">
        <div className="max-w-2xl mx-auto">
          <div className="bg-black-800 border-2 border-gold/30 rounded-lg p-8 text-center">
            <div className="text-5xl mb-4">✓</div>
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-gold mb-4">
              You&apos;re All Set
            </h2>
            <p className="text-gold-100 mb-2">
              Email: <span className="text-gold font-semibold">{email}</span>
            </p>
            <p className="text-sm text-gold-dark italic">
              You can now answer questions in any of the law sections below.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="email-consent-gate" className="section-container">
      <div className="max-w-2xl mx-auto">
        <div className="bg-black-800 border-2 border-gold/30 rounded-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-gold mb-4 text-shadow">
            Before You Begin
          </h2>
          <p className="text-gold-100 mb-6 leading-relaxed">
            To receive your customized PDF and prompt pack, please enter your email and agree to be contacted with your results.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              name="honeypot"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

            {/* Email */}
            <div>
              <label htmlFor="gate-email" className="block text-sm font-medium text-gold-100 mb-2">
                Email Address <span className="text-gold">*</span>
              </label>
              <input
                id="gate-email"
                type="email"
                value={localEmail}
                onChange={(e) => setLocalEmail(e.target.value)}
                required
                className="w-full"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3">
              <input
                id="gate-consent"
                type="checkbox"
                checked={localConsent}
                onChange={(e) => setLocalConsent(e.target.checked)}
                required
                className="mt-1"
              />
              <label htmlFor="gate-consent" className="text-sm text-gold-100">
                I agree to be contacted with my results and resources. <span className="text-gold">*</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSaving}
              className="w-full px-8 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-all duration-200 bg-black-800 border-2 border-gold-dark/30 text-gold-100 hover:border-gold hover:bg-gold/10 hover:text-gold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSaving ? 'Saving...' : 'Continue to Law Sections'}
            </button>
          </form>

          <p className="text-xs text-gold-dark italic mt-4 text-center">
            This information will be used for all law sections you complete.
          </p>
        </div>
      </div>
    </section>
  )
}
