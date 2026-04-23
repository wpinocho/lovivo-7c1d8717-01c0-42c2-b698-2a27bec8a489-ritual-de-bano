import { Star } from 'lucide-react'

export const SocialProofSection = () => {
  return (
    <section id="resenas" className="bg-background py-24 lg:py-32" aria-labelledby="proof-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-4">
            Comunidad
          </p>
          <h2 id="proof-title" className="font-display text-4xl lg:text-5xl font-light text-foreground">
            Lo que dicen las familias.
          </h2>
        </div>

        {/* Empty state — ready for real reviews */}
        <div className="max-w-2xl mx-auto text-center py-16 border border-dashed border-border rounded-sm bg-secondary/20">
          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-foreground/20 fill-foreground/10" aria-hidden="true" />
            ))}
          </div>
          <p className="font-display text-xl font-light text-foreground/60 mb-3">
            Las primeras reseñas llegan pronto.
          </p>
          <p className="font-body text-sm text-foreground/60 leading-relaxed max-w-sm mx-auto">
            Sé de los primeros en probar el Ritual Lunita y compartir tu experiencia.
          </p>
        </div>

        {/* UGC grid placeholder */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-12 opacity-30">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-secondary rounded-sm"
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="text-center font-body text-xs text-foreground/50 mt-4 tracking-wide">
          Espacio reservado para UGC y fotos de la comunidad
        </p>
      </div>
    </section>
  )
}