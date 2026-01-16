import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative border-t border-gold-dark/20 py-12 mt-24 overflow-hidden">
      {/* Stationery Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/branding-stationery.jpg"
          alt="Bella Coola brand materials"
          fill
          className="object-cover opacity-5"
          quality={75}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/90" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Privacy Statement */}
          <p className="text-sm text-gold-dark">
            <a href="#" className="underline hover:text-gold transition-colors">
              Privacy Policy
            </a>
          </p>

          <p className="text-sm font-medium text-gold-100">
            We do not sell your data.
          </p>

          {/* Disclaimer */}
          <p className="text-xs text-gold-dark/70 leading-relaxed max-w-2xl mx-auto">
            This site is for educational and operational purposes. The information provided is designed to help you align your business practices with effective principles. Results may vary based on individual circumstances and effort.
          </p>

          {/* Copyright */}
          <p className="text-xs text-gold-dark/50">
            © {new Date().getFullYear()} Bella Coola AI Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
