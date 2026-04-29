const INGREDIENTS_IMAGE =
  'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/d8a936b6-cd11-4e84-9e9a-1520776f2b9d/1777491311119-6jvrb5wsgao.webp'

const ingredients = [
  {
    name: 'Avena coloidal',
    desc: 'Aporta una sensación suave y lechosa al agua, ideal para un baño delicado que ayuda a la piel.',
  },
  {
    name: 'Almidón de arroz / tapioca',
    desc: 'Ayuda a crear una textura sedosa y ligera en la tina.',
  },
  {
    name: 'Manzanilla',
    desc: 'Un botánico clásico asociado con rutinas suaves y momentos de calma.',
  },
  {
    name: 'Toque mínimo de lavanda cosmética',
    desc: 'Aporta una nota aromática sutil para acompañar el ritual nocturno.',
  },
  {
    name: 'Extracto botánico de lechuga',
    desc: 'Inspirado en rituales tradicionales de baño.',
  },
]

const chips = ['Sobres individuales', 'Aroma suave', 'Rutina nocturna']

export function PDPIngredientsSection() {
  return (
    <section
      aria-label="Ingredientes del ritual de baño Lunita"
      className="bg-secondary/30 py-10 lg:py-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* ── IMAGE ── */}
          <div className="aspect-[4/3] lg:aspect-auto lg:min-h-[500px] rounded-sm overflow-hidden shadow-sm">
            <img
              src={INGREDIENTS_IMAGE}
              alt="Caja Lunita abierta rodeada de avena, manzanilla, lavanda, almidón y extractos botánicos sobre tela cream"
              className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
              loading="lazy"
            />
          </div>

          {/* ── TEXT ── */}
          <div>
            {/* Eyebrow */}
            <p className="font-body text-[10px] tracking-[0.22em] uppercase text-foreground/45 mb-4">
              Lo que hay adentro
            </p>

            {/* Heading */}
            <h2 className="font-display text-3xl lg:text-4xl font-light text-foreground leading-tight mb-1.5">
              Ingredientes que cuidan a tu bebé.
            </h2>
            <p className="font-body text-sm text-foreground/60 mb-4">
              Una fórmula suave, sin artificios.
            </p>

            {/* Ingredient list */}
            <div>
              {ingredients.map((ing) => (
                <div
                  key={ing.name}
                  className="py-2.5 border-b border-border/40 last:border-b-0"
                >
                  <p className="font-body text-sm font-semibold text-foreground mb-1">
                    {ing.name}
                  </p>
                  <p className="font-body text-xs text-foreground/65 leading-relaxed">
                    {ing.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mt-4">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/30 border border-accent/50 font-body text-[11px] text-foreground/65"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}