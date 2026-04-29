# Lunita — Store Plan
(Auto-updated by Lovivo AI)

## Current State
Brand: **Lunita** (temporary name — to be finalized by client)
Product: **Ritual de baño para bebé** (renamed from "El Ritual de Baño para una Noche en Paz")
Market: Mexico, NSE medio-alto, mamás y papás 25-40 años

## Design System
- Background: warm cream #F7F2EB → HSL(35, 44%, 95%)
- Foreground/text: #3F3A36 → HSL(27, 8%, 23%)
- Secondary/oat: #E8DDCF → HSL(34, 28%, 86%)
- Accent/sage: #C8D3C7 → HSL(115, 12%, 80%)
- Blue-gray: #B8C5CC → HSL(201, 14%, 75%)
- Typography: Cormorant Garamond (display/headings) + Inter (body)
- Font class: `font-display` for headings, `font-body` for body text

## Text Contrast Convention
- Eyebrow labels: `text-foreground/45` (tracking [0.22em])
- Body descriptions: `text-foreground/65` minimum
- Small detail text: `text-foreground/55` minimum
- On dark (featured) cards: `text-background/60` min, `text-background/80` for body

## Product
- Product ID: 101a5e33-0397-4283-8050-ea72235d00fd
- Slug: `ritual-de-bao-para-beb` ← UPDATED (was `ritual-de-bao-lechoso-para-beb`)
- 3 variants on "Paquete" option:
  - 1 Caja → $399 MXN + envío (variant id: 54ca26e4-fa51-4136-9aa2-86cc78442560)
  - 2 Cajas → $699 MXN + envío / **DEFAULT SELECTED** (variant id: 30af3f81-710b-4c3b-9c0d-04f54bda0a15)
  - 3 Cajas → $899 MXN + envío gratis (variant id: 20b81493-8043-4cda-9d57-26cf5ca0b0d2)
- 5 product images updated to new set (see below)

## IMAGE INVENTORY v6 — CURRENT ✅

All product images at base path: `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/7c1d8717-01c0-42c2-b698-2a27bec8a489/`

### Current Image Set

| File | Description | Used In |
|------|-------------|---------|
| `lunita-lifestyle-hero.webp` | Close-up baby face in cream muslin, mother's hands, warm candle bokeh | PDP gallery [0], PDP editorial strip |
| `lunita-box-v2.webp` | Flat lay: cream box LUNITA branding + sachets, chamomile, lavender, oats | PDP gallery [1] |
| `lunita-milky-water.webp` | Aerial view milky water swirls in white ceramic tub | PDP gallery [2], Closing CTA bg |
| `lunita-baby-bath-v3.webp` | Baby in cream waffle muslin in white round tub — **DEPRECATED for hero** | — |
| `lunita-baby-bath.webp` | Old hero image (has candles) — deprecated, do NOT use | — |
| `lunita-ritual.webp` | Hands over milky water (cloth sachet) — de-prioritized | PDP gallery [4] only |

### IngredientsSection image (homepage — v2 — current)
URL: `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/products/cd592c56uik.webp`
Description: Real client photo — caja Lunita abierta con sobres de baño y flores secas (manzanilla + lavanda)

### PDP Ingredients Section image (NEW — v1)
Source: `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/d8a936b6-cd11-4e84-9e9a-1520776f2b9d/1777491311119-6jvrb5wsgao.webp`
Description: AI-generated flat lay — caja LUNITA cerrada + sobres de tela + avena + almidón en cuenco + manzanilla + lavanda + extracto de lechuga + frasco de extracto botánico. Fondo tela cream texturada. MUY premium.
→ **In Craft Mode: copy with lov-copy('https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/d8a936b6-cd11-4e84-9e9a-1520776f2b9d/1777491311119-6jvrb5wsgao.webp', 'public/lunita-ingredients-flatlay.webp') and use returned URL**

### Homepage Hero (v4 — current)
URL: `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/d8a936b6-cd11-4e84-9e9a-1520776f2b9d/1777481497971-27f5uiaptzdi.webp`
Description: Real client photo — mamá bañando bebé recién nacido en tina redonda, baño claro con canasta y cortinas

### HowItWorks Steps (real product photos — uploaded by client)
| URL | Step | Description |
|-----|------|-------------|
| `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/d8a936b6-cd11-4e84-9e9a-1520776f2b9d/1777480936323-x17i5ei8x4o.webp` | Step 01 — Abre el sobre | Real product: LUNITA box open with sachets, chamomile, lavender, oats |
| `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/d8a936b6-cd11-4e84-9e9a-1520776f2b9d/1777480936324-qptx5gewg4f.webp` | Step 02 — Agrégalo al agua | Hand pouring sachet into milky oval tub |
| `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/d8a936b6-cd11-4e84-9e9a-1520776f2b9d/1777480936324-i93fuswsnsi.webp` | Step 03 — Disfruta el ritual | Mother bathing newborn in round tub (real lifestyle photo) |

### PDP Gift Section image (v2 — current)
URL: `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/d8a936b6-cd11-4e84-9e9a-1520776f2b9d/1777480936323-x17i5ei8x4o.webp`
Description: Real product photo — caja Lunita abierta con sobres individuales y flores secas (manzanilla + lavanda + avena)

### Reviews Section Images (v2 — IMPLEMENTED ✅)
All stored in Supabase message-images bucket:

| Supabase URL | Review | Description |
|-------------|---------|-------------|
| `.../1777484003786-zwe2os0x3sb.webp` | Andrea M. (rutina sueño) | Baby sleeping in cream towel on mom's chest, Lunita box beside them |
| `.../1777484003786-wpxwdz6usj.webp` | Mariana S. (baby shower) | Woman smiling holding Lunita box, selfie-style |
| `.../1777484003786-vk2pow852km.webp` | Sofía L. (post-trabajo) | Woman's hand opening Lunita box on white quilted bed |
| `.../1777484003785-h4y2gufaghp.webp` | Valentina R. (piel sensible) | Hand holding sachet over milky tub, Lunita box open in background |
| `.../1777484003786-b9pewdazvce.webp` | Camila P. (conexión) | Lunita box open next to oval tub on textured mat |

Base path: `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/d8a936b6-cd11-4e84-9e9a-1520776f2b9d/`

## FILES BUILT
### Design System
- `src/index.css` — brand design tokens, Cormorant Garamond + Inter fonts, marquee + scrollbar-hide utilities
- `tailwind.config.ts` — brand color palette + font-display/font-body + marquee keyframe/animation
- `index.html` — SEO meta tags, structured data, font imports

### Components
- `src/components/BrandLogoLeft.tsx` — Lunita moon logo
- `src/templates/EcommerceTemplate.tsx` — premium header with mobile menu + editorial footer
- `src/templates/PageTemplate.tsx` — full-width layout fix
- `src/pages/ui/IndexUI.tsx` — landing page (now includes TrustTickerSection after hero)
- `src/pages/ui/ProductPageUI.tsx` — premium PDP

### Lunita Section Components (src/components/lunita/)
- `HeroSection.tsx` — full-bleed hero; ✅ v4 uses real client photo (mamá + bebé en tina)
- `TrustTickerSection.tsx` — dark strip with 8 trust items, marquee animation
- `HowItWorksSection.tsx` — ✅ UPDATED v3 — real client photos for all 3 steps
- `WhyDifferentSection.tsx` — smaller gap/padding on mobile
- `BenefitsSection.tsx` — mobile: editorial numbered list (01–06) with dividers; desktop: 3-col grid
- `OfferSection.tsx` — scale-[1.03] only on md+
- `IngredientsSection.tsx` — homepage "Lo que hay adentro" section (product attributes, NOT ingredient list)
- `SocialProofSection.tsx` — p-6 mobile
- `FAQSection.tsx` — removed duplicate FAQ question
- `ClosingCTASection.tsx` — py-20 mobile

## ProductPageUI.tsx — Current State
### Section Order
1. Hero (Gallery + Product Info)
   - Urgency bar: "🟢 Stock disponible · Envío en 1–3 días hábiles a todo México"
   - Payment badges: Visa, Mastercard, OXXO, AMEX (below micro trust signals)
2. Trust Ticker — infinite scroll dark strip
3. How To Use (3 steps carousel)
4. Editorial Lifestyle Strip
5. Reviews (5 cards) ← ✅ UPGRADED v2 — with photos, carousel mobile + grid desktop
6. **[NEW] PDP Ingredients Section** ← INSERT HERE (before Gift Section)
7. Gift Section — ✅ image updated to real product photo (caja + sobres + flores)
8. Upsell (3 Cajas dark block)
9. FAQ (6 questions accordion)
10. WhatsApp text link — "¿Tienes alguna duda? Escríbenos por WhatsApp →" (+52 55 3121 5386)
11. Closing CTA
12. Sticky Add-to-Cart bar

---

## NEXT TASK: PDP Ingredients Section (PENDING — ready to build in Craft Mode)

### What the user wants
A new section in the PDP, positioned BEFORE the Gift Section ("Listo para regalar"), showing:
- The new AI-generated flat-lay photo (box + sachets + ingredients spread on cream fabric)
- An elegant ingredient list (NOT a table) — bold name + brief description per ingredient
- Small chips/tags at the bottom: "Sobres individuales", "Aroma suave", "Rutina nocturna"

### Implementation Steps

**Step 1: Copy the image**
```
lov-copy('https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/d8a936b6-cd11-4e84-9e9a-1520776f2b9d/1777491311119-6jvrb5wsgao.webp', 'public/lunita-ingredients-flatlay.webp')
```
Use the returned URL for the `src` attribute.

**Step 2: Create `src/components/lunita/PDPIngredientsSection.tsx`**

Design spec:
- Section background: `bg-secondary/30` (warm oat) for contrast with surrounding white sections
- Padding: `py-16 lg:py-24`
- Max width container: `max-w-7xl mx-auto px-6 lg:px-12`
- Layout:
  - **Mobile**: stacked — image on top (aspect-[4/3], rounded-sm), content below
  - **Desktop (lg+)**: 2-column grid `grid-cols-2 gap-12 lg:gap-20 items-center` — IMAGE on LEFT, text on RIGHT

**Image treatment:**
- `aspect-[4/3]` on mobile, `lg:aspect-auto lg:h-full` with `min-h-[500px]` on desktop
- `rounded-sm overflow-hidden`
- `object-cover` fill
- Subtle scale on hover: `hover:scale-[1.02] transition-transform duration-700`

**Text side layout:**
```
Eyebrow: "Lo que hay adentro" — font-body text-[10px] tracking-[0.22em] uppercase text-foreground/45 mb-4
H2: "Ingredientes que cuidan a tu bebé." — font-display text-3xl lg:text-4xl font-light text-foreground mb-2 leading-tight
Subtext: "Una fórmula suave, sin artificios." — font-body text-sm text-foreground/60 mb-8
```

**Ingredient list** — elegant vertical list with subtle dividers:
```tsx
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
```

Each item:
```tsx
<div className="py-4 border-b border-border/40 last:border-b-0">
  <p className="font-body text-sm font-semibold text-foreground mb-1">{ing.name}</p>
  <p className="font-body text-xs text-foreground/65 leading-relaxed">{ing.desc}</p>
</div>
```

**Chips row** (below ingredient list, `mt-6`):
```tsx
const chips = ['Sobres individuales', 'Aroma suave', 'Rutina nocturna']
```
Style each chip: `inline-flex items-center px-3 py-1.5 rounded-full bg-accent/30 border border-accent/50 font-body text-[11px] text-foreground/65`
Wrap in `flex flex-wrap gap-2`

**Step 3: Import and insert in `src/pages/ui/ProductPageUI.tsx`**
- Import `PDPIngredientsSection` at the top
- Insert it BETWEEN the Reviews section (`</section>`) and the Gift Section block (`{/* GIFT SECTION */}`)
- The insertion point is around line 803-808 in the current file

### Reviews Section v2 (DONE ✅)
- 5 reviews with real photos (photo-first card design)
- Mobile: Embla carousel, basis-[82%] (peek of next card)
- Desktop sm: grid-cols-2, Desktop lg: grid-cols-3
- 5th card: sm:col-span-2 lg:col-span-1
- Counter: "4.9 · 127 reseñas verificadas"
- No em-dash (—) in review texts — sounds natural/authentic
- `ReviewCard` component defined above `ProductPageUI` export

### ReviewCard pattern
```tsx
const ReviewCard = ({ review }: { review: typeof pdpReviews[0] }) => (
  <div className="bg-background border border-border/60 rounded-md overflow-hidden shadow-sm flex flex-col h-full">
    <div className="aspect-[4/3] overflow-hidden">
      <img src={review.img} ... className="... hover:scale-[1.03]" loading="lazy" />
    </div>
    <div className="p-5 flex flex-col gap-3 flex-1">
      <StarRow count={5} size="xs" /> + Verificado badge
      <p>"{review.text}"</p>
      <div className="border-t"> name + detail </div>
    </div>
  </div>
)
```

## URL Param Convention (PDP)
- `?p=1` → preselect 1 Caja
- `?p=2` or no param → preselect 2 Cajas (default)
- `?p=3` → preselect 3 Cajas

---

## Known Issues / Notes
- Product slug was updated to `ritual-de-bao-para-beb` after user renamed product in dashboard
- All internal CTAs updated to reference new slug ✅
- Newsletter section removed from homepage — can be re-added later
- PDP shows 404 in preview (backend not connected to preview env — works in production)
- `lunita-baby-bath.webp` (old) is deprecated — has candles; replaced by real client photo v4
- `lunita-baby-bath-v3.webp` — AI-generated, no longer used for hero

## Pending / Future Sessions
1. **Brand name finalization** — replace "Lunita" everywhere once name is confirmed
2. **Real product photography** — replace AI images with actual product photos when available
3. **lunita-ritual.webp replacement** — currently shows wrong sachet format, only in gallery slot [4]
4. **Email capture / Newsletter** — configure for lead capture
5. **Blog** — optional: add content strategy around baby routines/rituals
6. **Analytics** — review conversion funnel once traffic starts
7. **Checkout confirmation** — configure thank you page for Lunita branding
8. **Pixel/Meta Ads** — connect Meta Pixel once paid traffic begins
9. **UGC photo strip** — once real customer photos arrive (Instagram-style strip, 4-6 images)
10. **Homepage sticky CTA (móvil)** — barra fija "Comprar 2 cajas — $699" que aparece al hacer scroll más allá del hero. Solo visible en móvil. Pendiente.
11. **PDP How To Use** — same HowItWorksSection component — already updated with real photos ✅