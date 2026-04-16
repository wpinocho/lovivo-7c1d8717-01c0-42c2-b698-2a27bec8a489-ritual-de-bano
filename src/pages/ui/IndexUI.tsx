import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { HeroSection } from '@/components/lunita/HeroSection'
import { HowItWorksSection } from '@/components/lunita/HowItWorksSection'
import { WhyDifferentSection } from '@/components/lunita/WhyDifferentSection'
import { BenefitsSection } from '@/components/lunita/BenefitsSection'
import { OfferSection } from '@/components/lunita/OfferSection'
import { IngredientsSection } from '@/components/lunita/IngredientsSection'
import { SocialProofSection } from '@/components/lunita/SocialProofSection'
import { FAQSection } from '@/components/lunita/FAQSection'
import { ClosingCTASection } from '@/components/lunita/ClosingCTASection'
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex'

/**
 * LUNITA — Homepage Landing
 * 
 * Single-product hero landing page for the premium baby bath ritual brand.
 * 100% conversion-focused. Each section drives toward the 2-box offer.
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  return (
    <EcommerceTemplate showCart={true} layout="full-width" className="!py-0">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Cómo funciona */}
      <HowItWorksSection />

      {/* 3. Por qué es distinto */}
      <WhyDifferentSection />

      {/* 4. Beneficios principales */}
      <BenefitsSection />

      {/* 5. Oferta destacada — main conversion section */}
      <OfferSection />

      {/* 6. Ingredientes / confianza */}
      <IngredientsSection />

      {/* 7. Social proof */}
      <SocialProofSection />

      {/* 8. FAQ */}
      <FAQSection />

      {/* 9. Cierre final */}
      <ClosingCTASection />
    </EcommerceTemplate>
  )
}