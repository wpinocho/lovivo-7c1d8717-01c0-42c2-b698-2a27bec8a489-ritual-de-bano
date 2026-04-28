const steps = [
  {
    number: '01',
    title: 'Abre el sobre',
    description: 'Cada caja incluye 6 sobres monodosis. Abre uno mientras preparas la tina del bebé.',
    image: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/7c1d8717-01c0-42c2-b698-2a27bec8a489/lunita-box-v2.webp',
  },
  {
    number: '02',
    title: 'Agrégalo al agua',
    description: 'Viértelo mientras la tina se llena. Observa cómo el agua se transforma en un baño suave y lechoso.',
    image: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/7c1d8717-01c0-42c2-b698-2a27bec8a489/lunita-milky-water.webp',
  },
  {
    number: '03',
    title: 'Disfruta el ritual',
    description: 'Baña a tu bebé con calma. Un baño suave y especial para cerrar el día de la mejor manera.',
    image: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/7c1d8717-01c0-42c2-b698-2a27bec8a489/lunita-baby-bath.webp',
  },
]

export const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="bg-card py-16 lg:py-32 scroll-mt-20" aria-labelledby="how-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-20">
          <p className="font-body text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-4">
            Tres pasos
          </p>
          <h2 id="how-title" className="font-display text-4xl lg:text-5xl font-light text-foreground">
            Así de sencillo es el ritual.
          </h2>
        </div>

        {/* Mobile: horizontal scroll carousel */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-6 px-6 pb-6 scrollbar-hide">
          {steps.map((step) => (
            <article key={step.number} className="snap-center flex-shrink-0 w-[78vw] flex flex-col gap-4">
              <div
                className="aspect-[4/3] overflow-hidden bg-secondary"
                style={{ borderRadius: '4px' }}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-4 items-start">
                <span className="font-display text-3xl font-light text-foreground/20 leading-none mt-0.5 flex-shrink-0">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium text-foreground mb-1.5">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile scroll dots */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {steps.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-foreground/25" />
          ))}
        </div>

        {/* Desktop: 3-col grid */}
        <div className="hidden md:grid grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step) => (
            <article key={step.number} className="flex flex-col gap-6">
              <div
                className="aspect-[4/3] overflow-hidden rounded-sm bg-secondary"
                style={{ borderRadius: '4px' }}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-5 items-start">
                <span className="font-display text-4xl font-light text-foreground/20 leading-none mt-0.5 flex-shrink-0">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}