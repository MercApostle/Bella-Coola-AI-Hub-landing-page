import StopAnimation from './StopAnimation'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="section-container min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Billboard Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/branding-billboard.jpg"
          alt="Bella Coola AI Hub"
          fill
          className="object-cover opacity-20"
          priority
          quality={90}
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      </div>

      {/* STOP Animation */}
      <StopAnimation />

      {/* Hero Content */}
      <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-widest text-white leading-tight">
          Take your time with this.
        </h1>

        <div className="space-y-6 text-lg md:text-xl text-slate-300 leading-relaxed">
          <p>
            What follows is designed to give you back freedom of time, clarity of focus, and space for what actually matters—by aligning how you work with the underlying mechanics that produce results.
          </p>

          <p className="text-xl md:text-2xl font-bold text-white">
            Mastering these laws means mastering your time.
          </p>

          <p>
            Most people work harder to get ahead.
          </p>

          <p>
            Aligned systems reduce effort, increase leverage, and win over time.
          </p>
        </div>
      </div>
    </section>
  )
}
