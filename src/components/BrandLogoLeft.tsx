export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Lunita — Inicio" className="flex items-center gap-2 group">
      {/* Crescent moon mark */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-foreground flex-shrink-0"
        aria-hidden="true"
      >
        <path
          d="M19.5 12.5C18.5 17 14.5 20.5 10 20.5C4.75 20.5 1 16.5 1 11.5C1 6.5 4.75 2.5 10 2.5C10.5 2.5 11 2.55 11.5 2.65C9.5 4.15 8.25 6.65 8.25 9.5C8.25 14.5 11.75 18.25 16.5 18.25C17.6 18.25 18.6 18.05 19.5 17.65C19.65 15.97 19.65 14.1 19.5 12.5Z"
          fill="currentColor"
          fillOpacity="0.15"
        />
        <path
          d="M19.5 12.5C18.5 17 14.5 20.5 10 20.5C4.75 20.5 1 16.5 1 11.5C1 6.5 4.75 2.5 10 2.5C10.5 2.5 11 2.55 11.5 2.65C9.5 4.15 8.25 6.65 8.25 9.5C8.25 14.5 11.75 18.25 16.5 18.25C17.6 18.25 18.6 18.05 19.5 17.65"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className="font-display text-xl font-semibold tracking-wide text-foreground leading-none"
        style={{ letterSpacing: '0.04em' }}
      >
        Lunita
      </span>
    </a>
  )
}