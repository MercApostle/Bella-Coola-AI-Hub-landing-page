'use client'

import BookingForm from './BookingForm'

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-gold mb-6 text-shadow">
            System Alignment & Support
          </h2>
          <p className="text-gold-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to apply these laws to your own operation? Book a free session to audit your current system and identify your highest-leverage next move.
          </p>
        </div>

        <BookingForm />

        <div className="mt-16 grid md:grid-cols-2 gap-8 pt-12 border-t border-gold/10">
          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Direct Communication</h4>
            <div className="space-y-2 text-gold-100/60 text-sm">
              <p>Email: <span className="text-gold-100 italic">being finalized</span></p>
              <p>Presence: <span className="text-gold-100 italic">Bella Coola, BC</span></p>
            </div>
          </div>
          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">The Protocol</h4>
            <p className="text-gold-100/60 leading-relaxed text-sm">
              Sessions are structured health checks designed to give you clarity of focus and space for what actually matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
