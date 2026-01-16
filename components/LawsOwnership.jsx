export default function LawsOwnership() {
  const laws = [
    'Mentalism',
    'Correspondence',
    'Vibration',
    'Polarity',
    'Rhythm',
    'Cause & Effect',
    'Gender',
  ]

  return (
    <section className="section-container py-20 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl text-gold font-bold uppercase tracking-wider mb-12 md:mb-16">
          Own Your Brand
        </h2>

        {/* Law statements */}
        <div className="space-y-4 md:space-y-6 mb-12 md:mb-16">
          {laws.map((law, index) => (
            <p
              key={index}
              className="text-xl md:text-2xl text-gold-100 font-bold leading-relaxed"
            >
              Own Your {law}
            </p>
          ))}
        </div>

        {/* Catchphrase */}
        <p className="text-lg md:text-xl text-gold-100 italic leading-relaxed">
          Own your culture. Own what you bring into the world.
        </p>
      </div>
    </section>
  )
}
