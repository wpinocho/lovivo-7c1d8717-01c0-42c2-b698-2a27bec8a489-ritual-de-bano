import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import { Skeleton } from "@/components/ui/skeleton"
import { EcommerceTemplate } from "@/templates/EcommerceTemplate"
import { ShoppingCart, ArrowLeft, Package, Truck, Check, ChevronDown, ChevronUp } from "lucide-react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ProductExpressCheckout from "@/components/ProductExpressCheckout"

/**
 * LUNITA — ProductPageUI
 *
 * Premium PDP for the Ritual de Baño Lechoso.
 * - Custom pricing cards pre-selecting 2 Cajas by default
 * - Inline benefits, how-to, FAQ, upsell
 */

interface ProductPageUIProps {
  logic: {
    product: any
    loading: boolean
    notFound: boolean
    selected: Record<string, string>
    quantity: number
    matchingVariant: any
    currentPrice: number
    currentCompareAt: number | null
    currentImage: string | null
    inStock: boolean
    handleOptionSelect: (optionName: string, value: string) => void
    handleQuantityChange: (quantity: number) => void
    handleAddToCart: () => void
    handleNavigateBack: () => void
    handleBuyNow: () => void
    isOptionValueAvailable: (optionName: string, value: string) => boolean
    formatMoney: (amount: number) => string
    displayImages?: string[]
    [key: string]: any
  }
}

const paqueteDetails: Record<string, {
  price: number
  sachets: string
  shipping: string
  badge: string | null
  featured: boolean
  usp: string
}> = {
  '1 Caja': {
    price: 399,
    sachets: '6 sobres · 1 caja',
    shipping: '+ envío',
    badge: null,
    featured: false,
    usp: 'Para descubrir si el ritual es lo tuyo. Pruébalo sin compromiso.',
  },
  '2 Cajas': {
    price: 699,
    sachets: '12 sobres · 2 cajas',
    shipping: '+ envío',
    badge: 'Más elegida',
    featured: true,
    usp: 'Un mes completo de ritual nocturno. La opción preferida de las familias.',
  },
  '3 Cajas': {
    price: 899,
    sachets: '18 sobres · 3 cajas',
    shipping: 'Envío gratis',
    badge: 'Mejor valor',
    featured: false,
    usp: 'Siempre a la mano, sin quedarte sin. Incluye envío sin costo.',
  },
}

const pdpBenefits = [
  { icon: '◯', text: 'Piel más suave e hidratada — desde la primera vez' },
  { icon: '◯', text: 'Un cierre de día especial para el bebé y para ti' },
  { icon: '◯', text: 'Sin irritantes — seguro hasta para recién nacidos' },
  { icon: '◯', text: 'Sin medir, sin derramar — dosis perfecta en cada sobre' },
  { icon: '◯', text: 'Fragancia suave que invita a la calma, sin ser invasiva' },
  { icon: '◯', text: 'Sin parabenos, sin sulfatos, sin colorantes artificiales' },
]

const pdpSteps = [
  { num: '01', title: 'Abre el sobre', desc: 'Un solo sobre por baño. Fácil de abrir mientras preparas la tina.' },
  { num: '02', title: 'Agrégalo al agua', desc: 'Viértelo mientras llenas la tina y observa cómo el agua se transforma.' },
  { num: '03', title: 'Disfruta el ritual', desc: 'Baña a tu bebé con calma. Un momento suave para cerrar el día.' },
]

const pdpFaqs = [
  { q: '¿Para qué edad está pensado?', a: 'Para bebés desde recién nacidos. Te recomendamos observar la piel de tu bebé las primeras veces, como con cualquier producto nuevo.' },
  { q: '¿Cada cuánto se puede usar?', a: 'En cada baño del bebé. Muchas familias lo incorporan en su rutina nocturna diaria o algunos días a la semana.' },
  { q: '¿Cuánto tiempo tarda en llegar?', a: 'Los pedidos se procesan en 1-2 días hábiles. Entrega en 3-7 días hábiles a toda la República Mexicana.' },
  { q: '¿Tiene aroma?', a: 'Sí, una fragancia muy suave y delicada — no invasiva. Pensada para acompañar el ritual sin ser la protagonista.' },
]

export const ProductPageUI = ({ logic }: ProductPageUIProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [expressAvailable, setExpressAvailable] = useState(false)
  const { ref: ctaRef, inView: ctaInView } = useInView({ threshold: 0 })
  const initialized = useRef(false)
  const location = useLocation()

  // Pre-select variant based on URL param or default to '2 Cajas'
  useEffect(() => {
    if (!initialized.current && logic.product?.options) {
      const hasPaquete = logic.product.options.some((o: any) => o.name === 'Paquete')
      if (hasPaquete) {
        initialized.current = true
        const params = new URLSearchParams(location.search)
        const p = params.get('p')
        if (p === '1') {
          logic.handleOptionSelect('Paquete', '1 Caja')
        } else if (p === '3') {
          logic.handleOptionSelect('Paquete', '3 Cajas')
        } else {
          logic.handleOptionSelect('Paquete', '2 Cajas')
        }
      }
    }
  }, [logic.product]) // eslint-disable-line react-hooks/exhaustive-deps

  // Reset image on variant change
  useEffect(() => {
    setSelectedImage(null)
  }, [logic.matchingVariant])

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const displayImage = selectedImage || logic.displayImages?.[0] || logic.currentImage || '/placeholder.svg'
  const paqueteOption = logic.product?.options?.find((o: any) => o.name === 'Paquete')
  const selectedPaquete = logic.selected?.['Paquete']

  if (logic.loading) {
    return (
      <EcommerceTemplate>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Skeleton className="aspect-square rounded-sm" />
            <div className="space-y-5">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-5 w-1/2" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </EcommerceTemplate>
    )
  }

  if (logic.notFound) {
    return (
      <EcommerceTemplate>
        <div className="text-center py-24">
          <h1 className="font-display text-4xl font-light mb-4 text-foreground">Producto no encontrado</h1>
          <p className="font-body text-foreground/55 mb-8">El producto que buscas no existe o ha sido eliminado.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-sm text-foreground/60 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver al inicio
          </Link>
        </div>
      </EcommerceTemplate>
    )
  }

  if (!logic.product) return null

  return (
    <EcommerceTemplate hideFloatingCartOnMobile>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        {/* Back */}
        <button
          type="button"
          onClick={logic.handleNavigateBack}
          className="inline-flex items-center gap-1.5 font-body text-sm text-foreground/40 hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Volver
        </button>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* ── GALLERY ── */}
          <div className="space-y-4">
            {/* Main image — desktop */}
            <div className="hidden md:block aspect-[4/3] rounded-sm overflow-hidden bg-secondary">
              <img
                src={displayImage}
                alt={logic.product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Mobile carousel */}
            {logic.displayImages && logic.displayImages.length > 1 ? (
              <div className="md:hidden">
                <Carousel className="w-full">
                  <CarouselContent>
                    {logic.displayImages.map((img: string, idx: number) => (
                      <CarouselItem key={idx}>
                        <div className="aspect-[4/3] rounded-sm overflow-hidden bg-secondary">
                          <img src={img} alt={`${logic.product.title} ${idx + 1}`} loading="lazy" className="w-full h-full object-cover" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
            ) : (
              <div className="md:hidden aspect-[4/3] rounded-sm overflow-hidden bg-secondary">
                <img src={displayImage} alt={logic.product.title} className="w-full h-full object-cover" />
              </div>
            )}

            {/* Thumbnails — desktop */}
            {logic.displayImages && logic.displayImages.length > 1 && (
              <div className="hidden md:flex gap-2 overflow-x-auto pb-1">
                {logic.displayImages.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={cn(
                      'flex-shrink-0 w-16 h-16 rounded-sm overflow-hidden border transition-all duration-200',
                      (selectedImage === img || (!selectedImage && idx === 0))
                        ? 'border-foreground'
                        : 'border-border hover:border-foreground/30'
                    )}
                    aria-label={`Ver imagen ${idx + 1}`}
                  >
                    <img src={img} alt="" loading="lazy" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── PRODUCT INFO ── */}
          <div className="space-y-8">
            {/* Title */}
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-foreground/40 mb-3">
                Ritual de Baño · Premium · Para Bebé
              </p>
              <h1 className="font-display text-4xl lg:text-5xl font-light text-foreground leading-tight mb-3">
                Ritual de Baño Lechoso para Bebé
              </h1>
              <p className="font-body text-sm text-foreground/60 leading-relaxed">
                Transforma el baño de cada noche en un momento de pura conexión. Piel más suave, rutina más bella — para bebé y para ti.
              </p>
            </div>

            {/* ── PRICING CARDS ── */}
            {paqueteOption && (
              <div>
                <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-foreground/50 mb-4">
                  Elige tu paquete
                </p>
                <div className="space-y-3">
                  {paqueteOption.values.map((value: string) => {
                    const details = paqueteDetails[value]
                    if (!details) return null
                    const isSelected = selectedPaquete === value
                    const isAvailable = logic.isOptionValueAvailable('Paquete', value)

                    return (
                      <button
                        key={value}
                        type="button"
                        disabled={!isAvailable}
                        onClick={() => logic.handleOptionSelect('Paquete', value)}
                        className={cn(
                          'w-full text-left rounded-sm border transition-all duration-200 px-5 py-4 relative',
                          isSelected
                            ? 'border-foreground bg-foreground text-background'
                            : 'border-border bg-card hover:border-foreground/40',
                          !isAvailable && 'opacity-40 cursor-not-allowed'
                        )}
                        style={{ borderRadius: '4px' }}
                        aria-pressed={isSelected}
                      >
                        {/* Badge */}
                        {details.badge && (
                          <span
                            className={cn(
                              'absolute -top-2.5 right-4 px-3 py-0.5 text-[10px] font-body font-bold tracking-[0.1em] uppercase rounded-full',
                              isSelected
                                ? 'bg-background text-foreground'
                                : 'bg-accent/60 text-foreground'
                            )}
                          >
                            {details.badge}
                          </span>
                        )}

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {/* Radio circle */}
                            <div className={cn(
                              'w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0',
                              isSelected ? 'border-background' : 'border-foreground/30'
                            )}>
                              {isSelected && (
                                <div className="w-2 h-2 rounded-full bg-background" />
                              )}
                            </div>
                            <div>
                              <p className={cn(
                                'font-body text-sm font-semibold',
                                isSelected ? 'text-background' : 'text-foreground'
                              )}>
                                {value}
                              </p>
                              <p className={cn(
                                'font-body text-xs mt-0.5',
                                isSelected ? 'text-background/65' : 'text-foreground/45'
                              )}>
                                {details.sachets}
                              </p>
                            </div>
                          </div>

                          <div className="text-right">
                            <p className={cn(
                              'font-display text-xl font-light',
                              isSelected ? 'text-background' : 'text-foreground'
                            )}>
                              ${details.price.toLocaleString('es-MX')} MXN
                            </p>
                            <p className={cn(
                              'font-body text-[11px] mt-0.5 flex items-center gap-1 justify-end',
                              isSelected ? 'text-background/60' : 'text-foreground/45',
                              details.shipping === 'Envío gratis' && !isSelected && 'text-foreground font-semibold'
                            )}>
                              <Truck className="h-3 w-3" aria-hidden="true" />
                              {details.shipping}
                            </p>
                          </div>
                        </div>

                        {/* USP text when selected */}
                        {isSelected && (
                          <p className="font-body text-xs text-background/60 mt-3 pl-7">
                            {details.usp}
                          </p>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* ── ADD TO CART ── */}
            <div ref={ctaRef} className="space-y-3">
              {/* Express checkout */}
              {logic.inStock && !logic.selectedPlan && (
                <>
                  <ProductExpressCheckout
                    product={logic.product}
                    variant={logic.matchingVariant}
                    sellingPlan={logic.selectedPlan}
                    quantity={logic.quantity}
                    unitPrice={logic.currentPrice}
                    onAvailabilityChange={setExpressAvailable}
                  />
                  {expressAvailable && (
                    <div className="flex items-center gap-3">
                      <div className="flex-1 border-t border-border" />
                      <span className="font-body text-xs text-foreground/35 uppercase tracking-wider">o</span>
                      <div className="flex-1 border-t border-border" />
                    </div>
                  )}
                </>
              )}

              <button
                type="button"
                onClick={logic.handleAddToCart}
                disabled={!logic.inStock}
                className="w-full flex items-center justify-center gap-2.5 bg-foreground text-background py-4 px-6 font-body text-sm font-semibold tracking-wide hover:bg-foreground/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200"
                style={{ borderRadius: '2px' }}
              >
                <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                {logic.inStock ? 'Agregar al carrito' : 'Agotado'}
              </button>

              {logic.inStock && (
                <button
                  type="button"
                  onClick={logic.handleBuyNow}
                  className={cn(
                    'w-full flex items-center justify-center font-body text-sm transition-all duration-200 py-3 px-6',
                    expressAvailable
                      ? 'text-foreground/50 hover:text-foreground text-xs'
                      : 'border border-foreground/25 text-foreground hover:border-foreground/60'
                  )}
                  style={{ borderRadius: '2px' }}
                >
                  Comprar ahora
                </button>
              )}
            </div>

            {/* Micro trust signals */}
            <div className="flex flex-wrap gap-4 font-body text-xs text-foreground/45">
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
                Pago 100% seguro
              </span>
              <span className="flex items-center gap-1.5">
                <Package className="h-3.5 w-3.5" aria-hidden="true" />
                Empaque premium
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="h-3.5 w-3.5" aria-hidden="true" />
                Envío a toda la República
              </span>
            </div>

            {/* Satisfaction guarantee */}
            <p className="font-body text-xs text-foreground/55 text-center py-2 border-t border-border">
              ✦ Si no te encanta en tu primer uso, te lo resolvemos — sin complicaciones.
            </p>

            {/* Ingredient trust pills */}
            <div className="flex flex-wrap gap-2">
              {['Sin parabenos', 'Sin sulfatos', 'Sin colorantes', 'Suave desde el día 1', 'pH neutro'].map((pill) => (
                <span key={pill} className="bg-accent/30 text-foreground/70 text-[11px] font-body px-3 py-1 rounded-full">
                  {pill}
                </span>
              ))}
            </div>

            {/* Benefits list */}
            <div className="border-t border-border pt-8">
              <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-foreground/40 mb-5">
                Por qué te va a encantar
              </p>
              <ul className="space-y-3">
                {pdpBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent-foreground/40 mt-0.5 text-xs flex-shrink-0">✦</span>
                    <span className="font-body text-sm text-foreground/65">{b.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── HOW TO USE ── */}
        <div className="mt-20 lg:mt-28 max-w-4xl">
          <p className="font-body text-xs font-medium tracking-[0.2em] uppercase text-foreground/40 mb-4">
            Muy sencillo
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-foreground mb-10">
            Así se usa el ritual.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {pdpSteps.map((step) => (
              <div key={step.num} className="flex gap-5 items-start">
                <span className="font-display text-4xl font-light text-foreground/12 leading-none flex-shrink-0">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium text-foreground mb-2">{step.title}</h3>
                  <p className="font-body text-sm text-foreground/55 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── EDITORIAL LIFESTYLE STRIP ── */}
        <div className="mt-16 lg:mt-20 -mx-6 lg:-mx-12 relative overflow-hidden" style={{ height: '420px' }}>
          <img
            src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/7c1d8717-01c0-42c2-b698-2a27bec8a489/lunita-baby-bath.webp"
            alt="Mamá disfrutando el ritual de baño con su bebé — Lunita"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(30,25,20,0.72) 0%, rgba(30,25,20,0.04) 100%)' }}
          />
          <div className="absolute inset-0 flex items-center px-10 lg:px-20">
            <blockquote className="max-w-md">
              <p className="font-display text-3xl lg:text-4xl font-light text-white leading-tight mb-4">
                "El momento favorito del día — el de los dos."
              </p>
              <cite className="font-body text-sm text-white/60 not-italic">
                — Lunita, Ritual de Baño Lechoso
              </cite>
            </blockquote>
          </div>
        </div>

        {/* ── UPSELL — 3 Cajas ── */}
        {selectedPaquete !== '3 Cajas' && (
          <div className="mt-16 lg:mt-20 bg-secondary/40 rounded-sm p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            style={{ borderRadius: '6px' }}
          >
            <div>
              <p className="font-body text-xs tracking-[0.15em] uppercase text-foreground/40 mb-2">Más valor para tu rutina</p>
              <h3 className="font-display text-2xl font-light text-foreground mb-1">
                3 Cajas — $899 con envío gratis
              </h3>
              <p className="font-body text-sm text-foreground/55">
                La opción ideal para tener siempre a la mano. Sin preocuparte por reordenar pronto.
              </p>
            </div>
            <button
              type="button"
              onClick={() => logic.handleOptionSelect('Paquete', '3 Cajas')}
              className="flex-shrink-0 inline-flex items-center gap-2 border border-foreground/30 text-foreground px-6 py-3 font-body text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-200 whitespace-nowrap"
              style={{ borderRadius: '2px' }}
            >
              Ver 3 Cajas
            </button>
          </div>
        )}

        {/* ── FAQ ── */}
        <div className="mt-16 lg:mt-20 max-w-2xl">
          <p className="font-body text-xs font-medium tracking-[0.2em] uppercase text-foreground/40 mb-4">
            Preguntas frecuentes
          </p>
          <h2 className="font-display text-3xl font-light text-foreground mb-8">
            Todo lo que necesitas saber.
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {pdpFaqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`pdp-faq-${i}`}
                className="border border-border px-5 rounded-sm data-[state=open]:border-foreground/20 transition-all bg-card"
                style={{ borderRadius: '4px' }}
              >
                <AccordionTrigger className="font-body text-sm font-medium text-foreground hover:no-underline py-4 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-foreground/55 leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* ── STICKY ADD TO CART BAR ── */}
      {logic.inStock && (
        <div
          className={cn(
            'fixed bottom-0 left-0 right-0 z-50 bg-background/97 backdrop-blur-sm border-t border-border shadow-lg transition-transform duration-300 ease-out pb-[env(safe-area-inset-bottom)]',
            ctaInView ? 'translate-y-full' : 'translate-y-0'
          )}
        >
          <div className="max-w-7xl mx-auto px-6 py-3">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="font-display text-base font-medium text-foreground truncate">
                  Ritual de Baño Lechoso
                </p>
                {selectedPaquete && (
                  <p className="font-body text-xs text-foreground/45">
                    {selectedPaquete} · ${paqueteDetails[selectedPaquete]?.price.toLocaleString('es-MX')} MXN
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  type="button"
                  onClick={logic.handleAddToCart}
                  className="flex items-center gap-2 bg-foreground text-background px-5 py-2.5 font-body text-sm font-semibold hover:bg-foreground/90 transition-colors"
                  style={{ borderRadius: '2px' }}
                >
                  <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                  Agregar
                </button>
                <button
                  type="button"
                  onClick={logic.handleBuyNow}
                  className="border border-foreground/25 text-foreground px-5 py-2.5 font-body text-sm hover:border-foreground/50 transition-colors hidden sm:flex items-center"
                  style={{ borderRadius: '2px' }}
                >
                  Comprar ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </EcommerceTemplate>
  )
}