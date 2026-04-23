import { Shield, Leaf, Package } from 'lucide-react'

const trustCards = [
  {
    icon: Shield,
    title: 'Satisfacción garantizada',
    description: 'Si en tu primer uso no te convence, te devolvemos tu dinero. Sin preguntas, sin complicaciones.',
  },
  {
    icon: Leaf,
    title: 'Formulado con cuidado',
    description: 'Sin parabenos, sin sulfatos, sin colorantes. Suave desde el día 1 — pensado para la piel más delicada.',
  },
  {
    icon: Package,
    title: 'Empaque premium',
    description: 'Diseñado para regalar o atesorar. Llega protegido y listo para abrir — el detalle está en los detalles.',
  },
]

export const SocialProofSection = () => {
  return (
    <section id="garantia" className="bg-secondary/30 py-24 lg:py-32" aria-labelledby="trust-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="font-body text-xs font-medium tracking-[0.2em] uppercase text-foreground/60 mb-4">
            Nuestro compromiso
          </p>
          <h2 id="trust-title" className="font-display text-4xl lg:text-5xl font-light text-foreground mb-5">
            Hecho con intención. Respaldado con garantía.
          </h2>
          <p className="font-body text-sm text-foreground/65 leading-relaxed">
            Lunita está diseñado para que lo ames desde la primera vez. Si no es para ti, te lo resolvemos — sin complicaciones.
          </p>
        </div>

        {/* Trust cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {trustCards.map((card, i) => {
            const Icon = card.icon
            return (
              <div
                key={i}
                className="bg-background border border-border rounded-sm p-8 lg:p-10 flex flex-col gap-5"
              >
                <div className="w-11 h-11 rounded-full bg-accent/40 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-foreground/60" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="font-body text-sm text-foreground/65 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom guarantee line */}
        <p className="text-center font-body text-xs text-foreground/50 mt-12 tracking-wide">
          ✦ Lunita — Ritual de Baño Lechoso · Hecho en México · Fórmula certificada
        </p>

      </div>
    </section>
  )
}