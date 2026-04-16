import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const PRODUCT_SLUG = 'ritual-de-bao-lechoso-para-beb'

export const ClosingCTASection = () => {
  return (
    <section className="relative overflow-hidden bg-foreground py-28 lg:py-40" aria-label="Cierre y llamada a la acción">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/7c1d8717-01c0-42c2-b698-2a27bec8a489/lunita-milky-water.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center">
        {/* Moon mark */}
        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center">
            <span className="text-background/60 text-lg">🌙</span>
          </div>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-background leading-tight mb-6 text-balance">
          Un momento más especial. Cada noche.
        </h2>
        <p className="font-body text-base text-background/55 leading-relaxed mb-12 max-w-md mx-auto">
          Empieza hoy el ritual de baño más lindo del día. Tu bebé — y tú — lo van a disfrutar.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={`/productos/${PRODUCT_SLUG}`}
            className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-10 py-4 text-sm font-body font-semibold tracking-wide hover:bg-background/90 transition-colors duration-200"
            style={{ borderRadius: '2px' }}
          >
            Comprar 2 cajas — $699
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to={`/productos/${PRODUCT_SLUG}?p=3`}
            className="inline-flex items-center justify-center gap-2 border border-background/30 text-background px-10 py-4 text-sm font-body font-medium hover:border-background/60 hover:bg-background/5 transition-all duration-200"
            style={{ borderRadius: '2px' }}
          >
            3 cajas con envío gratis — $899
          </Link>
        </div>

        {/* Trust signal */}
        <p className="font-body text-xs text-background/30 mt-10 tracking-wide">
          Envío a toda la República · Pago 100% seguro · Empaque premium
        </p>
      </div>
    </section>
  )
}