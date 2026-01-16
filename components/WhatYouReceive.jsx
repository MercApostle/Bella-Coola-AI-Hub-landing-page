import Image from 'next/image'

export default function WhatYouReceive() {
  return (
    <section id="receive" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-gold mb-12 text-shadow text-center">
          What You&apos;ll Receive
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 text-gold-100 leading-relaxed order-2 lg:order-1">
            <p>
              The customized PDF you receive is designed to work with <strong className="text-gold">any large language model</strong> and <strong className="text-gold">emerging AI systems</strong>—now and in the future.
            </p>

            <p>
              It is not tied to a specific tool or platform.
            </p>

            <p>
              Using the information you provide, the owner translates your situation into a <strong className="text-gold">clear, structured document</strong> you can use with:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>current LLMs</li>
              <li>future AI tools</li>
              <li>or any system that helps you think, plan, and execute more effectively</li>
            </ul>

            <p>
              The purpose of the PDF is to help you create <strong className="text-gold">real, useful outcomes</strong>—for yourself and for your company—without added complexity or cost.
            </p>

            <p className="text-lg font-medium text-gold">
              This is about leverage, not dependency.
              <br />
              Clarity, not automation for its own sake.
            </p>

            {/* Microcopy */}
            <div className="mt-8 space-y-2 text-sm text-gold-dark border-l-2 border-gold-dark/30 pl-4">
              <p>• Works with free and paid AI tools</p>
              <p>• No platform lock-in</p>
              <p>• Designed to stay useful as tools evolve</p>
            </div>
          </div>

          {/* Device Mockup Image */}
          <div className="relative h-[400px] lg:h-[500px] order-1 lg:order-2">
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gold-dark/30 shadow-[0_0_60px_rgba(212,175,55,0.3)]">
              <Image 
                src="/branding-devices.png"
                alt="Bella Coola AI Hub on multiple devices"
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
