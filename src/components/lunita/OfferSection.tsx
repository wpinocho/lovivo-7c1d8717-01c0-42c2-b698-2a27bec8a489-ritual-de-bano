import { Link } from 'react-router-dom'
import { ArrowRight, Package, Truck } from 'lucide-react'

const PRODUCT_SLUG = 'ritual-de-bao-lechoso-para-beb'

const offers = [
  {
    id: 1,
    param: '1',
    label: '1 Caja',
    sachets: '6 sobres',
    price: '$399',
    shipping: '+ envío',
    badge: null,
    featured: false,
    description: 'Perfecta para probar el ritual por primera vez.',
    ctaText: 'Comprar 1 caja',
  },
  {
    id: 2,
    param: '2',
    label: '2 Cajas',
    sachets: '12 sobres',
    price: '$699',
    shipping: '+ envío',
    badge: 'Más elegida',
    featured: true,
    description: 'La opción preferida. Cubre todo un mes de ritual nocturno.',
    ctaText: 'Comprar 2 cajas — $699',
  },
  {
    id: 3,
    param: '3',
    label: '3 Cajas',
    sachets: '18 sobres',
    price: '$899',
    shipping: 'Envío gratis',
    badge: 'Mejor valor',
    featured: false,
    description: 'Para tener siempre a la mano. Incluye envío sin costo.',
    ctaText: 'Comprar 3 cajas',
  },
]

export const OfferSection = () => {
  return (
    <section id="paquetes" className="bg-card py-24 lg:py-32" aria-labelledby="offer-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-xs font-medium tracking-[0.2em] uppercase text-foreground/40 mb-4">
            Elige tu paquete
          </p>
          <h2 id="offer-title" className="font-display text-4xl lg:text-5xl font-light text-foreground mb-4">
            Más ritual, más valor.
          </h2>
          <p className="font-body text-sm text-foreground/55 max-w-md mx-auto">
            Sin compromisos. Un solo pago. Envío a toda la República Mexicana.
          </p>
        </div>

        {/* Offer cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {offers.map((offer) => (
            <article
              key={offer.id}
              className={`relative flex flex-col rounded-sm transition-all duration-300 ${
                offer.featured
                  ? 'bg-foreground text-background border-2 border-foreground shadow-xl scale-[1.03] z-10'
                  : 'bg-background border border-border hover:border-foreground/30'
              }`}
              style={{ borderRadius: '4px' }}
            >
              {/* Badge */}
              {offer.badge && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-[11px] font-body font-semibold tracking-[0.1em] uppercase rounded-full whitespace-nowrap ${
                    offer.featured
                      ? 'bg-background text-foreground'
                      : 'bg-accent/60 text-foreground'
                  }`}
                >
                  {offer.badge}
                </div>
              )}

              <div className="p-8 flex flex-col h-full">
                {/* Label + sachets */}
                <div className="mb-6">
                  <h3
                    className={`font-display text-2xl font-medium mb-1 ${
                      offer.featured ? 'text-background' : 'text-foreground'
                    }`}
                  >
                    {offer.label}
                  </h3>
                  <p
                    className={`font-body text-xs tracking-wide ${
                      offer.featured ? 'text-background/75' : 'text-foreground/65'
                    }`}
                  >
                    {offer.sachets}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-3">
                  <span
                    className={`font-display text-4xl font-light ${
                      offer.featured ? 'text-background' : 'text-foreground'
                    }`}
                  >
                    {offer.price}
                  </span>
                  <span
                    className={`font-body text-xs ml-2 ${
                      offer.featured ? 'text-background/75' : 'text-foreground/65'
                    }`}
                  >
                    MXN
                  </span>
                </div>

                {/* Shipping */}
                <div
                  className={`flex items-center gap-1.5 mb-6 font-body text-xs ${
                    offer.featured
                      ? offer.id === 3 ? 'text-background font-semibold' : 'text-background/75'
                      : offer.id === 3 ? 'text-foreground font-semibold' : 'text-foreground/65'
                  }`}
                >
                  <Truck className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{offer.shipping}</span>
                </div>

                {/* Description */}
                <p
                  className={`font-body text-xs leading-relaxed mb-8 flex-1 ${
                    offer.featured ? 'text-background/80' : 'text-foreground/68'
                  }`}
                >
                  {offer.description}
                </p>

                {/* CTA */}
                <Link
                  to={`/productos/${PRODUCT_SLUG}?p=${offer.param}`}
                  className={`inline-flex items-center justify-center gap-2 py-3.5 px-5 text-sm font-body font-semibold tracking-wide transition-all duration-200 ${
                    offer.featured
                      ? 'bg-background text-foreground hover:bg-background/90'
                      : 'border border-foreground/30 text-foreground hover:bg-foreground hover:text-background'
                  }`}
                  style={{ borderRadius: '2px' }}
                >
                  {offer.ctaText}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Reassurance */}
        <div className="flex flex-wrap justify-center gap-8 mt-14 font-body text-xs text-foreground/60 tracking-wide">
          <span className="flex items-center gap-2">
            <Package className="h-3.5 w-3.5" aria-hidden="true" />
            Empaque seguro y premium
          </span>
          <span className="flex items-center gap-2">
            <Truck className="h-3.5 w-3.5" aria-hidden="true" />
            Envío a toda la República
          </span>
          <span>✦ Pago 100% seguro</span>
        </div>
      </div>
    </section>
  )
}