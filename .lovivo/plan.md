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

## IMAGE INVENTORY v5 — CURRENT ✅

All product images at base path: `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/7c1d8717-01c0-42c2-b698-2a27bec8a489/`

### Current Image Set

| File | Description | Used In |
|------|-------------|---------|
| `lunita-lifestyle-hero.webp` | Close-up baby face in cream muslin, mother's hands, warm candle bokeh | PDP gallery [0], PDP editorial strip |
| `lunita-box-v2.webp` | Flat lay: cream box LUNITA branding + sachets, chamomile, lavender, oats | PDP gallery [1], Gift section, IngredientsSection |
| `lunita-milky-water.webp` | Aerial view milky water swirls in white ceramic tub | PDP gallery [2], Closing CTA bg |
| `lunita-baby-bath-v3.webp` | Baby in cream waffle muslin in white round tub, parent's hands, lamp + dried flowers bg, NO candles — **DEPRECATED for hero** | — |
| `lunita-baby-bath.webp` | Old hero image (has candles) — deprecated, do NOT use | — |
| `lunita-ritual.webp` | Hands over milky water (cloth sachet) — de-prioritized | PDP gallery [4] only |

### Homepage Hero (v4 — current)
URL: `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/d8a936b6-cd11-4e84-9e9a-1520776f2b9d/1777481497971-27f5uiaptzdi.webp`
Description: Real client photo — mamá bañando bebé recién nacido en tina redonda, baño claro con canasta y cortinas

### HowItWorks Steps (real product photos — uploaded by client)
| URL | Step | Description |
|-----|------|-------------|
| `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/d8a936b6-cd11-4e84-9e9a-1520776f2b9d/1777480936323-x17i5ei8x4o.webp` | Step 01 — Abre el sobre | Real product: LUNITA box open with sachets, chamomile, lavender, oats |
| `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/d8a936b6-cd11-4e84-9e9a-1520776f2b9d/1777480936324-qptx5gewg4f.webp` | Step 02 — Agrégalo al agua | Hand pouring sachet into milky oval tub |
| `https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/message-images/d8a936b6-cd11-4e84-9e9a-1520776f2b9d/1777480936324-i93fuswsnsi.webp` | Step 03 — Disfruta el ritual | Mother bathing newborn in round tub (real lifestyle photo) |

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
- `IngredientsSection.tsx` — image first on mobile
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
5. Reviews (4 cards)
6. Gift Section
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
3. **Real reviews + photo reviews** — integrate once orders start coming in
4. **lunita-ritual.webp replacement** — currently shows wrong sachet format, only in gallery slot [4]
5. **Email capture / Newsletter** — configure for lead capture
6. **Blog** — optional: add content strategy around baby routines/rituals
7. **Analytics** — review conversion funnel once traffic starts
8. **Checkout confirmation** — configure thank you page for Lunita branding
9. **Pixel/Meta Ads** — connect Meta Pixel once paid traffic begins
10. **UGC photo strip** — once real customer photos arrive (Instagram-style strip, 4-6 images)
11. **Homepage sticky CTA (móvil)** — barra fija "Comprar 2 cajas — $699" que aparece al hacer scroll más allá del hero. Solo visible en móvil. Pendiente.
12. **Reviews con foto** — agregar avatares/fotos reales cuando el cliente las proporcione
13. **PDP How To Use** — same HowItWorksSection component — already updated with real photos ✅