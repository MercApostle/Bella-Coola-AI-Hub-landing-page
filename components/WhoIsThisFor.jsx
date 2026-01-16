import Image from 'next/image'

export default function WhoIsThisFor() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
            Who Is This For?
          </h2>
          <p className="text-xl lg:text-2xl text-neutral-300 leading-relaxed">
            This is for owners, managers, and anyone responsible for how time gets used—especially people who understand that time isn&apos;t managed by trying harder; it&apos;s managed by{' '}
            <span className="text-amber-400 font-semibold">removing bottlenecks</span> and{' '}
            <span className="text-amber-400 font-semibold">tightening the system</span>.
          </p>
        </div>

        {/* Main Content - Image + Criteria */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-16">
          {/* Professional Image */}
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden border border-amber-900/30 shadow-[0_0_50px_rgba(217,119,6,0.2)]">
            <Image 
              src="/branding-professional.png"
              alt="Professional using Bella Coola AI Hub"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Criteria Section */}
          <div>
            <p className="text-lg lg:text-xl text-neutral-300 mb-8">
              It&apos;s for people who:
            </p>

            {/* Criteria List */}
            <div className="space-y-4">
              {criteria.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-neutral-900 to-black border border-amber-900/30 rounded-xl p-4 transition-all duration-300 hover:border-amber-600/50 hover:shadow-[0_0_30px_rgba(217,119,6,0.15)]"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/0 to-amber-900/0 group-hover:from-amber-600/5 group-hover:to-amber-900/5 rounded-xl transition-all duration-300" />
                  
                  {/* Number indicator */}
                  <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-xs font-bold text-black shadow-lg">
                    {index + 1}
                  </div>

                  <div className="relative z-10 flex items-start pl-4">
                    {/* Checkmark icon */}
                    <svg 
                      className="w-5 h-5 text-amber-500 mr-3 mt-0.5 flex-shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2.5} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>

                    <p className="text-neutral-200 leading-relaxed">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="max-w-3xl mx-auto mt-16">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}

const criteria = [
  "want their business to run smoother, not louder",
  "care about where time actually goes (not just how \"busy\" everyone is)",
  "like clear steps instead of guessing",
  "are willing to slow down and answer the questions seriously",
  "can take ownership of their actions and choices",
  "are okay with hearing the truth, even when it's uncomfortable",
  "are willing to test their systems and change them when they're not working",
  "can adapt as things change—new tools, new problems, new seasons",
  "are solution-oriented (they look for fixes, not excuses)",
  "will follow through after they learn what needs to change"
]
