export default function HowThisWorks() {
  return (
    <section id="how-it-works" className="section-container">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-gold mb-8 text-shadow">
          How This Works
        </h2>

        <ol className="space-y-6 text-gold-100 leading-relaxed">
          <li className="flex gap-4">
            <span className="text-2xl font-black text-laws-correspondence flex-shrink-0">1.</span>
            <div>
              <p className="text-lg">
                Answer any section <span className="text-slate-400 italic">(~60 seconds)</span>
              </p>
            </div>
          </li>

          <li className="flex gap-4">
            <span className="text-2xl font-black text-laws-correspondence flex-shrink-0">2.</span>
            <div>
              <p className="text-lg">
                Owner reviews your input alongside your business context
              </p>
            </div>
          </li>

          <li className="flex gap-4">
            <span className="text-2xl font-black text-laws-correspondence flex-shrink-0">3.</span>
            <div>
              <p className="text-lg">
                You receive a customized PDF + prompt pack by email within <strong className="text-gold">24–48 hours</strong>
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}
