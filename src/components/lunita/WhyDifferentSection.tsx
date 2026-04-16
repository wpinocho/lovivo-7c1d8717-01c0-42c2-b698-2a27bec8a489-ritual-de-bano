const before = [
  'Agua transparente y fría',
  'Solo un jabón genérico',
  'Una limpieza más, sin especial',
  'Sin ritual, sin intención',
  'Empaque de farmacia',
]

const after = [
  'Agua lechosa, suave y cálida',
  'Un sobre premium monodosis',
  'Un momento de conexión real',
  'Un ritual nocturno bonito',
  'Diseño pensado para regalar',
]

export const WhyDifferentSection = () => {
  return (
    <section className="bg-secondary/40 py-24 lg:py-32" aria-labelledby="diff-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-xs font-medium tracking-[0.2em] uppercase text-foreground/40 mb-4">
            La diferencia
          </p>
          <h2 id="diff-title" className="font-display text-4xl lg:text-5xl font-light text-foreground max-w-xl mx-auto text-balance">
            No es solo un jabón. Es el ritual.
          </h2>
        </div>

        {/* Comparison table */}
        <div className="max-w-3xl mx-auto">
          {/* Column headers */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center">
              <span className="font-body text-xs tracking-[0.15em] uppercase text-foreground/40 font-medium">
                Baño normal
              </span>
            </div>
            <div className="text-center">
              <span className="font-body text-xs tracking-[0.15em] uppercase text-foreground font-semibold">
                Ritual Lunita
              </span>
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-3">
            {before.map((item, i) => (
              <div key={i} className="grid grid-cols-2 gap-4">
                {/* Before */}
                <div className="bg-card/60 border border-border px-5 py-4 rounded-sm flex items-center gap-3">
                  <span className="text-foreground/25 text-lg leading-none flex-shrink-0">—</span>
                  <p className="font-body text-sm text-foreground/45 leading-snug">{item}</p>
                </div>
                {/* After */}
                <div className="bg-foreground px-5 py-4 rounded-sm flex items-center gap-3">
                  <span className="text-background/60 text-sm leading-none flex-shrink-0">✦</span>
                  <p className="font-body text-sm text-background/85 leading-snug">{after[i]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}