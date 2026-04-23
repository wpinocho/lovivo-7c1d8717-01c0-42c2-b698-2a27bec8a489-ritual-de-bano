import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const PRODUCT_SLUG = 'ritual-de-bao-lechoso-para-beb'

export const HeroSection = () => {
  return (
    <section
      className="relative min-h-[95vh] flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/7c1d8717-01c0-42c2-b698-2a27bec8a489/lunita-baby-bath.webp"
          alt="Ritual de baño lechoso para bebé — agua suave y luminosa"
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay — strong on left where text is, fades right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(30,25,20,0.82) 0%, rgba(30,25,20,0.60) 38%, rgba(30,25,20,0.20) 65%, rgba(30,25,20,0.04) 100%)',
          }}
        />
        {/* Bottom fade for scroll indicator */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{
            background:
              'linear-gradient(to top, rgba(30,25,20,0.35) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 py-28 lg:py-40">
        <div className="max-w-[560px]">
          {/* Eyebrow */}
          <p className="text-xs font-body font-medium tracking-[0.22em] uppercase text-white/65 mb-8">
            Ritual de Baño · Premium · Para Bebé
          </p>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-[5.5rem] font-light text-white leading-[1.05] mb-7 text-balance drop-shadow-sm">
            Convierte el baño del bebé en un ritual nocturno.
          </h1>

          {/* Subheadline */}
          <p className="font-body text-base lg:text-lg text-white/80 leading-relaxed mb-10 max-w-[420px]">
            Un baño lechoso suave y reconfortante para hacer del cierre del día un momento más especial.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to={`/productos/${PRODUCT_SLUG}?p=2`}
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-4 text-sm font-body font-semibold tracking-wide hover:bg-white/90 transition-colors duration-200"
              style={{ borderRadius: '2px' }}
            >
              Comprar 2 cajas — $699
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 border border-white/50 text-white px-8 py-4 text-sm font-body font-medium hover:border-white hover:bg-white/10 transition-all duration-200"
              style={{ borderRadius: '2px' }}
            >
              Ver cómo funciona
            </a>
          </div>

          {/* Trust micro-signals */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-10 font-body text-xs text-white/55 tracking-wide">
            <span>✦ 6 sobres por caja</span>
            <span>✦ Suave para la piel del bebé</span>
            <span>✦ Envío a toda la República</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 z-10 hidden lg:flex">
        <span className="font-body text-[10px] tracking-[0.15em] uppercase">Descubre</span>
        <div className="w-px h-8 bg-white/30" />
      </div>
    </section>
  )
}