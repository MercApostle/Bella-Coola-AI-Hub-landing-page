export default function WhatYouReceive() {
  return (
    <section id="receive" className="section-container">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-gold mb-8 text-shadow">
          What You&apos;ll Receive
        </h2>

        <div className="space-y-6 text-gold-100 leading-relaxed">
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
        </div>

        {/* Microcopy */}
        <div className="mt-8 space-y-2 text-sm text-gold-dark">
          <p>• Works with free and paid AI tools</p>
          <p>• No platform lock-in</p>
          <p>• Designed to stay useful as tools evolve</p>
        </div>
      </div>
    </section>
  )
}
