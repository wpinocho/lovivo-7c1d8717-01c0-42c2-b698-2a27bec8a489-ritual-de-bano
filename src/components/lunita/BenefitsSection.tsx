const benefits = [
  {
    number: '01',
    title: 'Piel más suave, desde el primer baño',
    description: 'El agua se transforma en una textura sedosa que envuelve la piel del bebé. Hidratación suave, visible desde la primera vez.',
  },
  {
    number: '02',
    title: 'Un momento de conexión real',
    description: 'Más que un baño, es un ritual. Un momento para estar presente con tu bebé al final del día.',
  },
  {
    number: '03',
    title: 'Rutina nocturna más bonita',
    description: 'Integra el Ritual Lunita y convierte el bath time en el momento favorito de los dos.',
  },
  {
    number: '04',
    title: 'Suave para la piel más delicada',
    description: 'Sin parabenos, sin sulfatos, sin colorantes. Pensado para piel sensible desde recién nacido.',
  },
  {
    number: '05',
    title: 'Sobres monodosis, sin complicaciones',
    description: 'Sin derrames, sin medir. Cada sobre es la dosis exacta para una tina. Ideal para viajes o casa de la abuela.',
  },
  {
    number: '06',
    title: 'El regalo perfecto para baby shower',
    description: 'La caja y los sobres están pensados para lucir bonitos. Perfecto para regalar en cualquier ocasión especial.',
  },
]

export const BenefitsSection = () => {
  return (
    <section id="beneficios" className="bg-background py-16 lg:py-32" aria-labelledby="benefits-title">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-10 lg:mb-16 lg:text-center">
          <p className="font-body text-xs font-medium tracking-[0.2em] uppercase text-foreground/45 mb-4">
            Por qué vas a amarlo
          </p>
          <h2 id="benefits-title" className="font-display text-4xl lg:text-5xl font-light text-foreground max-w-lg lg:mx-auto">
            Cada detalle, pensado para ti.
          </h2>
        </div>

        {/* Benefits — editorial list on mobile, 2-col on desktop */}
        <div className="lg:hidden divide-y divide-border/60">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-5 py-6">
              <span className="font-display text-3xl font-light text-foreground/15 leading-none shrink-0 w-9 pt-0.5">
                {benefit.number}
              </span>
              <div>
                <h3 className="font-display text-lg font-medium text-foreground mb-1.5 leading-snug">
                  {benefit.title}
                </h3>
                <p className="font-body text-sm text-foreground/65 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop 2x3 grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="group">
              <span className="font-display text-4xl font-light text-foreground/15 block mb-4">
                {benefit.number}
              </span>
              <div className="w-8 h-px bg-foreground/20 mb-5" />
              <h3 className="font-display text-xl font-medium text-foreground mb-3 leading-snug">
                {benefit.title}
              </h3>
              <p className="font-body text-sm text-foreground/65 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visual divider */}
        <div className="section-divider mt-16 lg:mt-20" />
      </div>
    </section>
  )
}