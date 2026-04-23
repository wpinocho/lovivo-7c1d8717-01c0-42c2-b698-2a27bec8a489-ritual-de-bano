const benefits = [
  {
    icon: '◯',
    title: 'Agua lechosa y suave',
    description: 'El agua se transforma en una textura suave y sedosa. Una experiencia visual y táctil diferente desde el primer uso.',
  },
  {
    icon: '◯',
    title: 'Un momento especial',
    description: 'Más que un baño, es un ritual de conexión. Un momento para estar presente con tu bebé al final del día.',
  },
  {
    icon: '◯',
    title: 'Rutina nocturna más bonita',
    description: 'Integra el Ritual Lunita en la rutina de tu bebé y convierte el bath time en el momento favorito del día.',
  },
  {
    icon: '◯',
    title: 'Formulado para la piel del bebé',
    description: 'Una fórmula suave, sin colorantes agresivos, diseñada para sentirse bien en la piel sensible del bebé.',
  },
  {
    icon: '◯',
    title: 'Sobres monodosis prácticos',
    description: 'Sin derrames, sin medir. Cada sobre es la dosis exacta para una tina. Fácil de llevar a casa de abuela o de viaje.',
  },
  {
    icon: '◯',
    title: 'Diseño premium para regalar',
    description: 'La caja y los sobres están pensados para ser un regalo bonito. Perfecto para baby shower o como detalle especial.',
  },
]

export const BenefitsSection = () => {
  return (
    <section id="beneficios" className="bg-background py-24 lg:py-32" aria-labelledby="benefits-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-4">
            Por qué vas a amarlo
          </p>
          <h2 id="benefits-title" className="font-display text-4xl lg:text-5xl font-light text-foreground">
            Cada detalle, pensado para ti.
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="group p-8 lg:p-10 bg-card border border-border hover:border-foreground/20 transition-all duration-300 rounded-sm"
            >
              <div className="w-10 h-10 rounded-full bg-accent/40 flex items-center justify-center mb-6">
                <span className="text-foreground/50 text-xs">✦</span>
              </div>
              <h3 className="font-display text-xl font-medium text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="font-body text-sm text-foreground/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visual divider */}
        <div className="section-divider mt-20" />
      </div>
    </section>
  )
}