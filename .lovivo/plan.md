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

### IngredientsSection image (v2 — current)
URL: `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/products/cd592c56uik.webp`
Description: Real client photo — caja Lunita abierta con sobres de baño y flores secas (manzanilla + lavanda)

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

### Reviews Section Images (v2 — NEW ✅)
These are user-uploads to be copied to public/ in Craft Mode and then used via their returned URLs:

| user-uploads filename | Description | Assigned Review |
|----------------------|-------------|-----------------|
| `1777484003785-h4y2gufaghp.webp` | Hand holding sachet over milky tub, Lunita box open in background | Review 4 — Valentina (piel) |
| `1777484003786-vk2pow852km.webp` | Woman's hand opening Lunita box on white quilted bed (unboxing) | Review 3 — Sofía (post-trabajo) |
| `1777484003786-b9pewdazvce.webp` | Lunita box open next to oval tub on textured mat (clean product shot) | Review 5 — Camila (conexión) |
| `1777484003786-zwe2os0x3sb.webp` | Baby sleeping in cream towel on mom's chest, Lunita box beside them | Review 1 — Andrea (rutina sueño) |
| `1777484003786-wpxwdz6usj.webp` | Woman smiling holding Lunita box, selfie-style (face + product) | Review 2 — Mariana (regalo baby shower) |

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
- `IngredientsSection.tsx` — ✅ v2: real client photo (caja abierta con sobres)
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
5. Reviews (4 cards) ← **UPGRADING — see plan below**
6. Gift Section — ✅ image updated to real product photo (caja + sobres + flores)
7. Upsell (3 Cajas dark block)
8. FAQ (6 questions accordion)
9. WhatsApp text link — "¿Tienes alguna duda? Escríbenos por WhatsApp →" (+52 55 3121 5386)
10. Closing CTA
11. Sticky Add-to-Cart bar

## URL Param Convention (PDP)
- `?p=1` → preselect 1 Caja
- `?p=2` or no param → preselect 2 Cajas (default)
- `?p=3` → preselect 3 Cajas

---

## ✅ NEXT TASK — Reviews Section Upgrade (v2)

### What to build
Replace the current plain 4-card reviews grid in `ProductPageUI.tsx` with a photo-first reviews section:
- **5 reviews** (up from 4), each with a real product/lifestyle photo
- **Mobile layout**: horizontal swipe carousel (Embla/Carousel component) showing 1.15 cards visible
- **Desktop layout**: 2-column grid (first row 2 cards, second row 3 cards) OR clean 2-col grid all 5 cards  
  → Actually best: **desktop = 2 col grid, 3 rows** (but 5 cards = 2+2+1 or use featured layout for last card spanning 2 cols)
  → Simpler option: desktop = masonry-feel **3-column grid** with 5 cards (2 on row 1, 3 on row 2 or similar)
  → **RECOMMENDED**: desktop 2-col grid, 5 cards, natural wrap. Clean and simple.

### Implementation Steps

#### Step 1: Copy images from user-uploads to public/
Use lov-copy for each:
- `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/d8a936b6-cd11-4e84-9e9a-1520776f2b9d/1777484003785-h4y2gufaghp.webp` → copy and get URL
- `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/d8a936b6-cd11-4e84-9e9a-1520776f2b9d/1777484003786-vk2pow852km.webp` → copy and get URL
- `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/d8a936b6-cd11-4e84-9e9a-1520776f2b9d/1777484003786-b9pewdazvce.webp` → copy and get URL
- `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/d8a936b6-cd11-4e84-9e9a-1520776f2b9d/1777484003786-zwe2os0x3sb.webp` → copy and get URL
- `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/d8a936b6-cd11-4e84-9e9a-1520776f2b9d/1777484003786-wpxwdz6usj.webp` → copy and get URL

#### Step 2: Update `pdpReviews` array in ProductPageUI.tsx
Replace current 4 reviews with 5 new ones. Each review now includes an `img` field.

```typescript
const pdpReviews = [
  {
    name: 'Andrea M.',
    detail: 'mamá primeriza · bebé de 3 meses',
    text: 'Lo incorporé a la rutina nocturna y ahora el baño es nuestra señal de que viene la hora de dormir. Emilio se relaja visiblemente. Totalmente recomendado.',
    img: '<URL_FROM_COPY_zwe2os0x3sb>', // baby sleeping on mom's chest with box
  },
  {
    name: 'Mariana S.',
    detail: 'regalo de baby shower · bebé de 2 meses',
    text: 'Me lo dieron de regalo en mi baby shower y desde ahí llevo pidiendo más. Nunca pensé que un producto de baño me iba a cambiar tanto las noches con Maite.',
    img: '<URL_FROM_COPY_wpxwdz6usj>', // woman smiling with box selfie
  },
  {
    name: 'Sofía L.',
    detail: 'mamá trabajadora · bebé de 4 meses',
    text: 'Llegaba del trabajo cansada pero ese momento del baño con Luna lo esperaba todo el día. Es nuestro momento, solo de nosotras dos. El aroma me lo confirma cada vez que lo abro.',
    img: '<URL_FROM_COPY_vk2pow852km>', // hand opening box on bed
  },
  {
    name: 'Valentina R.',
    detail: 'mamá primeriza · bebé de 2 meses',
    text: 'La piel de mi bebé quedó súper suavecita desde la primera vez. Tenía miedo porque tiene la piel muy sensible pero no le irritó nada. Ya no le uso otra cosa.',
    img: '<URL_FROM_COPY_h4y2gufaghp>', // hand with sachet over milky tub
  },
  {
    name: 'Camila P.',
    detail: 'mamá primeriza · bebé de 5 meses',
    text: 'Lo espero todo el día. Después del caos del trabajo, llegar a casa y preparar ese baño para Mateo es como soltar todo. Él lo siente también — se me queda viendo y se calma solito.',
    img: '<URL_FROM_COPY_b9pewdazvce>', // product + tub flat lay
  },
]
```

#### Step 3: New Reviews Section Layout
Replace the reviews section JSX (lines ~721-764 in ProductPageUI.tsx) with the new layout:

**Section header** (keep similar):
- Eyebrow: "Lo que dicen las mamás"
- H2: "Mamás que ya hacen el ritual."
- Star row + "4.9 de 5 · 127 reseñas verificadas"

**Card design** (photo-first):
```
┌──────────────────┐
│   PHOTO (4/3)    │  ← object-cover, rounded top
├──────────────────┤
│ ★★★★★  Verificado│
│ "review text..." │
│ Name · detail    │
└──────────────────┘
```

**Mobile (sm:hidden)**:
- Carousel with `opts={{ align: 'start' }}`
- `CarouselItem` with `basis-[85%]` (shows peek of next card)
- No prev/next arrows on mobile
- Card: photo aspect-[4/3] on top, text below

**Desktop (hidden sm:block / sm:grid)**:
- `grid grid-cols-2 gap-5` (5 cards = 2 rows of 2 + 1 last card)
- OR `grid grid-cols-2 lg:grid-cols-3 gap-5` — cleaner with 3 cols on lg
- Last card on desktop if 5 cards in 2-col: last card spans full width with `sm:col-span-2 lg:col-span-1`
  → Easiest: use `grid-cols-2 lg:grid-cols-3` — on lg: row1=3 cards, row2=2 cards (looks great)
  → On sm: row1=2, row2=2, row3=1 (last card spans 2: `sm:last:col-span-2 lg:last:col-span-1`)

**Card styling** (consistent with brand):
```jsx
<div className="bg-background border border-border/60 rounded-md overflow-hidden shadow-sm flex flex-col">
  <div className="aspect-[4/3] overflow-hidden">
    <img src={review.img} alt="..." className="w-full h-full object-cover" loading="lazy" />
  </div>
  <div className="p-5 flex flex-col gap-3 flex-1">
    <div className="flex items-center justify-between">
      <StarRow count={5} size="xs" />
      <span className="font-body text-[10px] text-foreground/35 uppercase tracking-wider">Verificado</span>
    </div>
    <p className="font-body text-sm text-foreground/75 leading-relaxed flex-1">"{review.text}"</p>
    <div className="border-t border-border/50 pt-3">
      <p className="font-body text-sm font-semibold text-foreground/80">{review.name}</p>
      <p className="font-body text-xs text-foreground/45 mt-0.5">{review.detail}</p>
    </div>
  </div>
</div>
```

**Total review count** — add to header:
- Change "4.9 de 5 estrellas" to "4.9 · 127 reseñas verificadas" (adds social proof volume)

#### Step 4: Section background
Keep `bg-secondary/25` for the reviews section to distinguish from surrounding white sections.

### Files to modify
- `src/pages/ui/ProductPageUI.tsx`:
  - Update `pdpReviews` array (add img field, update texts, add 5th review)
  - Replace reviews JSX section (~lines 721–764)
  - Mobile: use Carousel (already imported)
  - Desktop: grid-cols-2 lg:grid-cols-3

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
3. **Real reviews + photo reviews** — ✅ IN PROGRESS — 5 review photos uploaded by client
4. **lunita-ritual.webp replacement** — currently shows wrong sachet format, only in gallery slot [4]
5. **Email capture / Newsletter** — configure for lead capture
6. **Blog** — optional: add content strategy around baby routines/rituals
7. **Analytics** — review conversion funnel once traffic starts
8. **Checkout confirmation** — configure thank you page for Lunita branding
9. **Pixel/Meta Ads** — connect Meta Pixel once paid traffic begins
10. **UGC photo strip** — once real customer photos arrive (Instagram-style strip, 4-6 images)
11. **Homepage sticky CTA (móvil)** — barra fija "Comprar 2 cajas — $699" que aparece al hacer scroll más allá del hero. Solo visible en móvil. Pendiente.
12. **Reviews con foto** — ✅ IN PROGRESS
13. **PDP How To Use** — same HowItWorksSection component — already updated with real photos ✅