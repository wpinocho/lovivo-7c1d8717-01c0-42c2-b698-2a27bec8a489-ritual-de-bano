import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import { Skeleton } from "@/components/ui/skeleton"
import { EcommerceTemplate } from "@/templates/EcommerceTemplate"
import {
  ShoppingCart, ArrowLeft, Package, Truck, Check,
  Droplets, Heart, Shield, Leaf, Sparkles, Moon,
} from "lucide-react"
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
    usp: 'Para descubrir si el ritual es para ti. Una semana de baños perfectos.',
  },
  '2 Cajas': {
    price: 699,
    sachets: '12 sobres · 2 cajas',
    shipping: '+ envío',
    badge: 'Más elegida',
    featured: true,
    usp: 'Un mes completo de ritual nocturno. El favorito de las mamás primerizas.',
  },
  '3 Cajas': {
    price: 899,
    sachets: '18 sobres · 3 cajas',
    shipping: 'Envío gratis',
    badge: 'Mejor valor',
    featured: false,
    usp: 'Siempre lista para la noche. Sin quedarte sin — incluye envío sin costo.',
  },
}

const pdpBenefits = [
  { icon: Droplets,  title: 'Piel más suave desde el día 1',  desc: 'Hidratación visible desde el primer baño — sin esfuerzo.' },
  { icon: Moon,      title: 'Ritual que invita al sueño',     desc: 'Crea la señal perfecta para que tu bebé descanse tranquilo.' },
  { icon: Shield,    title: 'Seguro para recién nacidos',     desc: 'Sin irritantes, sin sulfatos, pH neutro. Para piel recién llegada.' },
  { icon: Sparkles,  title: 'Sin medir, sin adivinar',        desc: 'Un sobre = un baño perfecto. Cero desperdicio, cero estrés.' },
  { icon: Heart,     title: 'Momento de conexión real',       desc: 'El baño se convierte en el momento favorito del día — para los dos.' },
  { icon: Leaf,      title: 'Fórmula limpia certificada',     desc: 'Sin parabenos ni colorantes artificiales. Lo que tu bebé merece.' },
]

const pdpSteps = [
  {
    num: '01',
    title: 'Abre el sobre',
    desc: 'Un solo sobre por baño. Fácil de abrir mientras preparas la tina.',
    img: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/7c1d8717-01c0-42c2-b698-2a27bec8a489/lunita-box.webp',
  },
  {
    num: '02',
    title: 'Agrégalo al agua',
    desc: 'Viértelo mientras llenas la tina y observa cómo el agua se transforma.',
    img: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/7c1d8717-01c0-42c2-b698-2a27bec8a489/lunita-milky-water.webp',
  },
  {
    num: '03',
    title: 'Disfruta el ritual',
    desc: 'Baña a tu bebé con calma. Un momento suave para cerrar el día y preparar la noche.',
    
    img: 'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/7c1d8717-01c0-42c2-b698-2a27bec8a489/lunita-baby-bath.webp',
  },
]

const pdpReviews = [
  {
    name: 'Valentina R.',
    detail: 'mamá primeriza · bebé de 2 meses',
    text: 'La piel de mi bebé quedó súper suavecita desde la primera vez. El aroma es precioso, nada pesado — y desde que lo usamos el baño es mucho más tranquilo.',
  },
  {
    name: 'Andrea M.',
    detail: 'mamá primeriza · bebé de 5 meses',
    text: 'Lo incorporé a la rutina nocturna y ahora el baño es nuestra señal de que viene la hora de dormir. Emilio se relaja visiblemente. Totalmente recomendado.',
  },
  {
    name: 'Fernanda G.',
    detail: 'mamá primeriza · bebé de 3 meses',
    text: 'El empaque es hermoso, perfecto como regalo. Y funciona de verdad — la piel de Santiago es otra. Ya no le usamos nada más.',
  },
  {
    name: 'Daniela C.',
    detail: 'mamá primeriza · bebé de 4 meses',
    text: 'Pensé que era un lujo, pero después del primer baño ya no me imagino sin él. Ahora es parte de nuestra rutina de buenas noches.',
  },
]

const pdpFaqs = [
  { q: '¿Para qué edad está pensado?', a: 'Para bebés desde recién nacidos. Te recomendamos observar la piel de tu bebé las primeras veces, como con cualquier producto nuevo.' },
  { q: '¿Ayuda al bebé a dormir?', a: 'No es un medicamento, pero sí un aliado poderoso para crear una rutina. Muchas mamás nos cuentan que desde que lo usan, el baño se convierte en la señal perfecta para que el bebé entienda que viene la hora de dormir. La constancia del ritual es lo que transforma las noches.' },
  { q: '¿Cada cuánto se puede usar?', a: 'En cada baño del bebé. Muchas familias lo incorporan en su rutina nocturna diaria o algunos días a la semana.' },
  { q: '¿Cuánto tiempo tarda en llegar?', a: 'Los pedidos se procesan en 1-2 días hábiles. Entrega en 3-7 días hábiles a toda la República Mexicana.' },
  { q: '¿Tiene aroma?', a: 'Sí, una fragancia muy suave y delicada — no invasiva. Pensada para acompañar el ritual sin ser la protagonista.' },
  { q: '¿Es seguro para piel sensible?', a: 'Absolutamente. Fue formulado específicamente para la piel sensible del bebé — sin sulfatos, sin parabenos, sin colorantes artificiales y con pH neutro.' },
]

const StarRow = ({ count = 5, size = 'sm' }: { count?: number; size?: 'sm' | 'xs' }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg
        key={i}
        viewBox="0 0 16 16"
        className={cn(
          'fill-amber-400',
          size === 'xs' ? 'w-3 h-3' : 'w-3.5 h-3.5'
        )}
        aria-hidden="true"
      >
        <path d="M8 1l1.854 3.757L14 5.528l-3 2.924.708 4.131L8 10.573l-3.708 2.01L5 8.452 2 5.528l4.146-.771L8 1z" />
      </svg>
    ))}
  </div>
)

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

  useEffect(() => { setSelectedImage(null) }, [logic.matchingVariant])
  useEffect(() => { window.scrollTo(0, 0) }, [])

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
    <EcommerceTemplate hideFloatingCartOnMobile layout="full-width">

      {/* ── Milky background texture — same image already loaded in step 02, zero extra request ── */}
      <div
        style={{
          background: 'linear-gradient(rgba(247,242,235,0.85), rgba(247,242,235,0.85)), url(https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/7c1d8717-01c0-42c2-b698-2a27bec8a489/lunita-milky-water.webp) center / cover',
          backgroundAttachment: 'local',
        }}
      >

      {/* ════════════════════════════════════════════
          HERO SECTION — Gallery + Product Info
      ════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-0 lg:pt-8 pb-4">
        {/* Back */}
        <button
          type="button"
          onClick={logic.handleNavigateBack}
          className="hidden lg:inline-flex items-center gap-1.5 font-body text-sm text-foreground/40 hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Volver
        </button>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[55%_1fr] gap-8 lg:gap-14 lg:items-start">

          {/* ── GALLERY (sticky on desktop) ── */}
          <div className="space-y-3 lg:sticky lg:top-[80px] lg:self-start">
            {/* Main image — desktop */}
            <div className="hidden md:block aspect-square rounded-lg overflow-hidden bg-secondary">
              <img
                src={displayImage}
                alt={logic.product.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            {/* Mobile carousel — edge-to-edge (no side padding) */}
            {logic.displayImages && logic.displayImages.length > 1 ? (
              <div className="md:hidden -mx-6">
                <Carousel className="w-full">
                  <CarouselContent>
                    {logic.displayImages.map((img: string, idx: number) => (
                      <CarouselItem key={idx}>
                        <div className="aspect-[4/5] overflow-hidden bg-secondary">
                          <img src={img} alt={`${logic.product.title} ${idx + 1}`} loading="lazy" className="w-full h-full object-cover" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-3" />
                  <CarouselNext className="right-3" />
                </Carousel>
              </div>
            ) : (
              <div className="md:hidden -mx-6">
                <div className="aspect-[4/5] overflow-hidden bg-secondary">
                  <img src={displayImage} alt={logic.product.title} className="w-full h-full object-cover" />
                </div>
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
                      'flex-shrink-0 w-[72px] h-[72px] rounded-sm overflow-hidden border-2 transition-all duration-200',
                      (selectedImage === img || (!selectedImage && idx === 0))
                        ? 'border-foreground scale-105'
                        : 'border-transparent hover:border-foreground/25'
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
          <div className="space-y-5 lg:space-y-7">

            {/* Eyebrow + Stars + Title + Subtitle + Benefit bullets */}
            <div>
              <p className="font-body text-[10px] tracking-[0.22em] uppercase text-foreground/45 mb-3 mt-5 lg:mt-0">
                Ritual de Baño · Premium · Para Bebé
              </p>
              <div className="flex items-center gap-2.5 mb-3">
                <StarRow count={5} />
                <span className="font-body text-xs text-foreground/55">4.9 · Mamás primerizas</span>
              </div>
              <h1 className="font-display text-[28px] lg:text-5xl font-light text-foreground leading-tight mb-3">
                El Ritual de Baño para una Noche en Paz
              </h1>
              <p className="font-body text-sm text-foreground/65 leading-relaxed mb-4">
                Transforma el baño de cada noche en un momento de pura conexión — para bebé y para ti.
              </p>

              {/* 3 benefit bullets */}
              <div className="space-y-2.5 pt-1">
                {[
                  { icon: Droplets, label: 'Piel más suave', desc: 'Desde el primer baño, visible.' },
                  { icon: Moon,     label: 'Invita a la calma', desc: 'El ritual que le dice al bebé que es hora de descansar.' },
                  { icon: Heart,    label: 'Conexión real', desc: 'El momento favorito del día — para los dos.' },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-accent/40 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-3.5 w-3.5 text-foreground/60" aria-hidden="true" />
                    </div>
                    <p className="font-body text-sm text-foreground/75">
                      <span className="font-semibold text-foreground/85">{label}</span>
                      {' · '}{desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── PRICING CARDS ── */}
            {paqueteOption && (
              <div>
                <p className="font-body text-[10px] font-semibold tracking-[0.18em] uppercase text-foreground/45 mb-3">
                  Elige tu paquete
                </p>
                <div className="space-y-2.5">
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
                          'w-full text-left rounded-md border-2 transition-all duration-200 px-5 py-4 relative',
                          isSelected
                            ? 'border-foreground bg-foreground text-background shadow-md'
                            : 'border-border bg-card hover:border-foreground/30 hover:shadow-sm',
                          !isAvailable && 'opacity-40 cursor-not-allowed'
                        )}
                        aria-pressed={isSelected}
                      >
                        {details.badge && (
                          <span
                            className={cn(
                              'absolute -top-2.5 right-4 px-3 py-0.5 text-[10px] font-body font-bold tracking-[0.1em] uppercase rounded-full',
                              isSelected
                                ? 'bg-background text-foreground'
                                : 'bg-accent/70 text-foreground'
                            )}
                          >
                            {details.badge}
                          </span>
                        )}

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              'w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0',
                              isSelected ? 'border-background' : 'border-foreground/30'
                            )}>
                              {isSelected && <div className="w-2 h-2 rounded-full bg-background" />}
                            </div>
                            <div>
                              <p className={cn('font-body text-sm font-semibold', isSelected ? 'text-background' : 'text-foreground')}>
                                {value}
                              </p>
                              <p className={cn('font-body text-xs mt-0.5', isSelected ? 'text-background/65' : 'text-foreground/45')}>
                                {details.sachets}
                              </p>
                            </div>
                          </div>

                          <div className="text-right">
                            <p className={cn('font-display text-xl font-light', isSelected ? 'text-background' : 'text-foreground')}>
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

                        {isSelected && (
                          <p className="font-body text-xs text-background/60 mt-3 pl-7">{details.usp}</p>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* ── ADD TO CART ── */}
            <div ref={ctaRef} className="space-y-3">
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
                className="w-full flex items-center justify-center gap-2.5 bg-foreground text-background py-4 px-6 font-body text-sm font-semibold tracking-wide hover:bg-foreground/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 rounded-sm"
              >
                <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                {logic.inStock ? 'Agregar al carrito' : 'Agotado'}
              </button>

              {logic.inStock && (
                <button
                  type="button"
                  onClick={logic.handleBuyNow}
                  className={cn(
                    'w-full flex items-center justify-center font-body text-sm transition-all duration-200 py-3 px-6 rounded-sm',
                    expressAvailable
                      ? 'text-foreground/50 hover:text-foreground text-xs'
                      : 'border border-foreground/25 text-foreground hover:border-foreground/60'
                  )}
                >
                  Comprar ahora
                </button>
              )}
            </div>

            {/* Micro trust signals */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 font-body text-xs text-foreground/50 pt-1">
              <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-foreground/40" aria-hidden="true" />Pago 100% seguro</span>
              <span className="flex items-center gap-1.5"><Package className="h-3.5 w-3.5 text-foreground/40" aria-hidden="true" />Empaque premium</span>
              <span className="flex items-center gap-1.5"><Truck className="h-3.5 w-3.5 text-foreground/40" aria-hidden="true" />Envío a toda la República</span>
            </div>

            {/* Guarantee */}
            <div className="bg-accent/20 border border-accent/40 rounded-md px-4 py-3 flex items-center gap-3">
              <Shield className="h-5 w-5 text-foreground/50 flex-shrink-0" aria-hidden="true" />
              <p className="font-body text-xs text-foreground/65 leading-snug">
                <span className="font-semibold text-foreground/80">Garantía Lunita:</span> Si no te encanta en tu primer uso, te lo resolvemos — sin complicaciones.
              </p>
            </div>

            {/* Ingredient pills — secondary trust, below guarantee */}
            <div>
              <p className="font-body text-[10px] tracking-[0.18em] uppercase text-foreground/45 mb-2.5">Fórmula limpia</p>
              <div className="flex flex-wrap gap-2">
                {['Sin parabenos', 'Sin sulfatos', 'Sin colorantes', 'pH neutro', 'Suave desde el día 1'].map((pill) => (
                  <span key={pill} className="bg-accent/40 text-foreground/70 text-[11px] font-body px-3 py-1 rounded-full border border-accent/60">
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* ── BENEFITS ICON GRID ── */}
            <div className="pt-2">
              <p className="font-body text-[10px] font-semibold tracking-[0.18em] uppercase text-foreground/45 mb-4">
                Por qué te va a encantar
              </p>

              {/* Mobile: clean horizontal list */}
              <div className="sm:hidden divide-y divide-border/40">
                {pdpBenefits.map((b, i) => {
                  const Icon = b.icon
                  return (
                    <div key={i} className="flex items-center gap-3 py-3.5">
                      <div className="w-9 h-9 rounded-full bg-accent/40 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-4 w-4 text-foreground/60" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-body text-sm font-semibold text-foreground/85 leading-snug">{b.title}</p>
                        <p className="font-body text-xs text-foreground/50 leading-snug mt-0.5">{b.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Desktop: 2-col card grid */}
              <div className="hidden sm:grid grid-cols-2 gap-3">
                {pdpBenefits.map((b, i) => {
                  const Icon = b.icon
                  return (
                    <div key={i} className="flex items-start gap-3 bg-background/60 border border-border rounded-md px-3 py-3">
                      <div className="w-8 h-8 rounded-full bg-accent/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="h-3.5 w-3.5 text-foreground/60" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-body text-xs font-semibold text-foreground/85 leading-snug">{b.title}</p>
                        <p className="font-body text-[11px] text-foreground/50 leading-snug mt-0.5">{b.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          HOW TO USE — Visual steps with images
      ════════════════════════════════════════════ */}
      <section className="mt-20 lg:mt-24 bg-secondary/30 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-xs mb-10">
            <p className="font-body text-[10px] font-medium tracking-[0.22em] uppercase text-foreground/45 mb-3">
              Muy sencillo
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-light text-foreground leading-tight">
              Así se usa el ritual.
            </h2>
          </div>

          {/* Mobile: horizontal swipe carousel */}
          <div className="sm:hidden">
            <Carousel opts={{ align: 'start' }}>
              <CarouselContent>
                {pdpSteps.map((step) => (
                  <CarouselItem key={step.num} className="basis-[82%]">
                    <div className="flex flex-col overflow-hidden rounded-md bg-background shadow-sm border border-border/50">
                      <div className="aspect-[3/2] overflow-hidden">
                        <img src={step.img} alt={step.title} loading="lazy" className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4 flex gap-3 items-start">
                        <span className="font-display text-3xl font-light text-foreground/10 leading-none flex-shrink-0 select-none">
                          {step.num}
                        </span>
                        <div>
                          <h3 className="font-display text-base font-medium text-foreground mb-1">{step.title}</h3>
                          <p className="font-body text-sm text-foreground/55 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Desktop: 3-col grid */}
          <div className="hidden sm:grid grid-cols-3 gap-6 lg:gap-10">
            {pdpSteps.map((step) => (
              <div key={step.num} className="flex flex-col gap-0 overflow-hidden rounded-md bg-background shadow-sm border border-border/50">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={step.img}
                    alt={step.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex gap-4 items-start">
                  <span className="font-display text-4xl font-light text-foreground/10 leading-none flex-shrink-0 select-none">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground mb-1">{step.title}</h3>
                    <p className="font-body text-sm text-foreground/55 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          EDITORIAL LIFESTYLE STRIP
      ════════════════════════════════════════════ */}
      <div className="relative overflow-hidden h-[240px] lg:h-[400px]">
        <img
          src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/7c1d8717-01c0-42c2-b698-2a27bec8a489/lunita-baby-bath.webp"
          alt="Mamá disfrutando el ritual de baño con su bebé — Lunita"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(25,20,15,0.80) 0%, rgba(25,20,15,0.05) 100%)' }}
        />
        <div className="absolute inset-0 flex items-center px-6 lg:px-20">
          <blockquote className="max-w-xs lg:max-w-lg">
            <p className="font-display text-xl lg:text-5xl font-light text-white leading-tight mb-3">
              "El baño que se convierte en el ritual de buenas noches."
            </p>
            <cite className="font-body text-sm text-white/55 not-italic">
              — Lunita, Ritual Nocturno para Bebé
            </cite>
          </blockquote>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          REVIEWS — Lo que dicen las mamás
      ════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-secondary/25">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="font-body text-[10px] font-medium tracking-[0.22em] uppercase text-foreground/45 mb-3">
                Lo que dicen las mamás
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-light text-foreground">
                Mamás que ya hacen el ritual.
              </h2>
            </div>
            <div className="flex items-center gap-3 sm:pb-2">
              <StarRow count={5} />
              <span className="font-body text-sm text-foreground/60">4.9 de 5 estrellas</span>
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pdpReviews.map((review, i) => (
              <div
                key={i}
                className="bg-background border border-border/60 rounded-md p-6 flex flex-col gap-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <StarRow count={5} size="xs" />
                  <span className="font-body text-[10px] text-foreground/35 uppercase tracking-wider">Verificado</span>
                </div>
                <p className="font-body text-sm text-foreground/75 leading-relaxed flex-1">
                  "{review.text}"
                </p>
                <div className="border-t border-border/50 pt-4">
                  <p className="font-body text-sm font-semibold text-foreground/80">{review.name}</p>
                  <p className="font-body text-xs text-foreground/45 mt-0.5">{review.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          UPSELL — 3 Cajas
      ════════════════════════════════════════════ */}
      {selectedPaquete !== '3 Cajas' && (
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <div className="bg-foreground text-background rounded-md p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-background/50 mb-2">Para las que ya no pueden sin él</p>
              <h3 className="font-display text-2xl lg:text-3xl font-light text-background mb-1">
                3 Cajas — $899 con envío gratis
              </h3>
              <p className="font-body text-sm text-background/60">
                Nunca te quedes sin tu ritual nocturno. 18 noches más de calma — con envío sin costo.
              </p>
            </div>
            <button
              type="button"
              onClick={() => logic.handleOptionSelect('Paquete', '3 Cajas')}
              className="flex-shrink-0 inline-flex items-center gap-2 bg-background text-foreground px-7 py-3.5 font-body text-sm font-semibold hover:bg-background/90 transition-all duration-200 whitespace-nowrap rounded-sm"
            >
              Elegir 3 Cajas
            </button>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════
          FAQ
      ════════════════════════════════════════════ */}
      <section className="pb-16 lg:pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="mb-8">
            <p className="font-body text-[10px] font-medium tracking-[0.22em] uppercase text-foreground/45 mb-3">
              Preguntas frecuentes
            </p>
            <h2 className="font-display text-3xl font-light text-foreground">
              Todo lo que necesitas saber.
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-2">
            {pdpFaqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`pdp-faq-${i}`}
                className="border border-border rounded-md px-5 bg-card data-[state=open]:border-foreground/20 transition-all"
              >
                <AccordionTrigger className="font-body text-sm font-medium text-foreground hover:no-underline py-4 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-foreground/60 leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          STICKY ADD TO CART BAR
      ════════════════════════════════════════════ */}
      {logic.inStock && (
        <div
          className={cn(
            'fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg transition-transform duration-300 ease-out pb-[env(safe-area-inset-bottom)]',
            ctaInView ? 'translate-y-full' : 'translate-y-0'
          )}
        >
          <div className="max-w-7xl mx-auto px-6 py-3">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="font-display text-base font-medium text-foreground truncate">
                  Ritual de Baño Nocturno
                </p>
                {selectedPaquete && (
                  <p className="font-body text-xs text-foreground/65">
                    {selectedPaquete} · ${paqueteDetails[selectedPaquete]?.price.toLocaleString('es-MX')} MXN
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  type="button"
                  onClick={logic.handleAddToCart}
                  className="flex items-center gap-2 bg-foreground text-background px-5 py-2.5 font-body text-sm font-semibold hover:bg-foreground/90 transition-colors rounded-sm"
                >
                  <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                  Agregar
                </button>
                <button
                  type="button"
                  onClick={logic.handleBuyNow}
                  className="border border-foreground/25 text-foreground px-5 py-2.5 font-body text-sm hover:border-foreground/50 transition-colors hidden sm:flex items-center rounded-sm"
                >
                  Comprar ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>{/* end milky texture wrapper */}
    </EcommerceTemplate>
  )
}