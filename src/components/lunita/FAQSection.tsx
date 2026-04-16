import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    q: '¿Qué es el Ritual de Baño Lechoso para Bebé?',
    a: 'Es un sobre monodosis que transforma el agua del baño de tu bebé en un baño lechoso, suave y especial. Cada caja contiene 6 sobres — uno por baño — pensados para convertir el bath time en un ritual nocturno premium.',
  },
  {
    q: '¿Cómo se usa?',
    a: 'Es muy sencillo: abre un sobre, viértelo en el agua mientras llenas la tina de tu bebé y disfruta. No requiere mezclar ni medir nada más. Cada sobre es la dosis exacta para una tina estándar de bebé.',
  },
  {
    q: '¿Para qué edad está pensado?',
    a: 'Está diseñado para bebés desde recién nacidos. Como con cualquier producto nuevo, te recomendamos observar la piel de tu bebé las primeras veces.',
  },
  {
    q: '¿Cada cuánto se puede usar?',
    a: 'Puede usarse en cada baño del bebé. Muchas familias lo incorporan en su rutina nocturna diaria o algunos días a la semana, como cierre especial del día.',
  },
  {
    q: '¿El producto tiene aroma?',
    a: 'Sí, tiene una fragancia suave y delicada — no invasiva. Está pensada para acompañar el ritual sin ser la protagonista.',
  },
  {
    q: '¿Cuánto tarda en llegar mi pedido?',
    a: 'Los pedidos se procesan en 1-2 días hábiles. El tiempo de entrega en México es de 3 a 7 días hábiles dependiendo de tu ubicación.',
  },
  {
    q: '¿Cuál opción me conviene más?',
    a: 'La opción de 2 cajas ($699 + envío) es la más elegida: cubre aproximadamente un mes de ritual y tiene el mejor balance de precio por sobre. La de 3 cajas ($899 con envío gratis) es ideal si quieres siempre tener a la mano.',
  },
]

export const FAQSection = () => {
  return (
    <section id="faq" className="bg-secondary/30 py-24 lg:py-32 scroll-mt-20" aria-labelledby="faq-title">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-body text-xs font-medium tracking-[0.2em] uppercase text-foreground/40 mb-4">
            Preguntas frecuentes
          </p>
          <h2 id="faq-title" className="font-display text-4xl lg:text-5xl font-light text-foreground">
            Todo lo que necesitas saber.
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border px-6 rounded-sm data-[state=open]:border-foreground/25 transition-all"
              style={{ borderRadius: '4px' }}
            >
              <AccordionTrigger className="font-body text-sm font-medium text-foreground hover:no-underline py-5 text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-foreground/60 leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}