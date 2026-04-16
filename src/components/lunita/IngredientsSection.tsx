const attributes = [
  {
    label: 'Formulado para la piel del bebé',
    desc: 'Una fórmula suave, pensada para la piel sensible de los más pequeños.',
  },
  {
    label: 'Sin colorantes artificiales',
    desc: 'El agua lechosa es natural. Sin tintes ni colorantes que manchen o irriten.',
  },
  {
    label: 'Fragancia suave y delicada',
    desc: 'Un aroma tenue y cálido que acompaña el ritual sin ser invasivo.',
  },
  {
    label: 'Monodosis práctico',
    desc: 'Cada sobre está pensado para una sola tina. Sin desperdicios, sin error en la dosis.',
  },
]

export const IngredientsSection = () => {
  return (
    <section id="ingredientes" className="bg-accent/15 py-24 lg:py-32" aria-labelledby="ing-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-sm overflow-hidden bg-secondary">
              <img
                src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/7c1d8717-01c0-42c2-b698-2a27bec8a489/lunita-box.webp"
                alt="Empaque premium del Ritual de Baño Lechoso Lunita"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="font-body text-xs font-medium tracking-[0.2em] uppercase text-foreground/40 mb-4">
              Lo que hay adentro
            </p>
            <h2 id="ing-title" className="font-display text-4xl lg:text-5xl font-light text-foreground mb-6 text-balance">
              Suave por diseño,<br />especial por intención.
            </h2>
            <p className="font-body text-sm text-foreground/60 leading-relaxed mb-10 max-w-md">
              El Ritual de Baño Lechoso Lunita está diseñado para sentirse bien en la piel del bebé y transformar el baño en una experiencia premium y especial — sin exageraciones.
            </p>

            <div className="space-y-6">
              {attributes.map((attr, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1 bg-accent rounded-full flex-shrink-0 mt-1" style={{ minHeight: '40px' }} />
                  <div>
                    <h3 className="font-body text-sm font-semibold text-foreground mb-1">
                      {attr.label}
                    </h3>
                    <p className="font-body text-xs text-foreground/55 leading-relaxed">
                      {attr.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}