const items = [
  '✦ Suave desde recién nacido',
  '✦ Sin parabenos ni sulfatos',
  '✦ Monodosis práctico',
  '✦ Envío a toda la República',
  '✦ Satisfacción garantizada',
  '✦ Empaque premium',
  '✦ Fórmula para piel delicada',
  '✦ 6 sobres por caja',
]

const ticker = [...items, ...items]

export const TrustTickerSection = () => {
  return (
    <div
      className="bg-foreground py-3 overflow-hidden"
      aria-hidden="true"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {ticker.map((item, i) => (
          <span
            key={i}
            className="font-body text-xs font-medium tracking-[0.18em] uppercase text-background/55 mx-6 flex-shrink-0"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}