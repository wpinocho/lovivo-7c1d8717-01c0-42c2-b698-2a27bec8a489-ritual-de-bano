import { ReactNode, useState } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { Link } from 'react-router-dom'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useCartUISafe } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'
import { ScrollLink } from '@/components/ScrollLink'

/**
 * LUNITA — EcommerceTemplate
 * 
 * Clean premium header + editorial footer for the Lunita brand.
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
  hideFloatingCartOnMobile?: boolean
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default',
  hideFloatingCartOnMobile = false
}: EcommerceTemplateProps) => {
  const cartUI = useCartUISafe()
  const openCart = cartUI?.openCart ?? (() => {})
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'El Ritual', href: '/#como-funciona' },
    { label: '¿Cómo funciona?', href: '/#como-funciona' },
    { label: 'Paquetes', href: '/#paquetes' },
    { label: 'FAQ', href: '/#faq' },
  ]

  const header = (
    <div className={`py-0 ${headerClassName ?? ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <BrandLogoLeft />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.href}
                to={link.href}
                className="font-body text-sm text-foreground/55 hover:text-foreground transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </ScrollLink>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <ProfileMenu />

            {showCart && (
              <button
                onClick={openCart}
                className="relative flex items-center justify-center w-10 h-10 text-foreground/70 hover:text-foreground transition-colors"
                aria-label="Ver carrito de compras"
              >
                <ShoppingCart className="h-5 w-5" aria-hidden="true" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-foreground text-background text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center font-body">
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </button>
            )}

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 space-y-1">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.href}
                to={link.href}
                className="block font-body text-sm text-foreground/65 hover:text-foreground py-3 px-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </ScrollLink>
            ))}
            <Link
              to="/productos/ritual-de-bao-lechoso-para-beb"
              className="block font-body text-sm font-semibold text-foreground py-3 px-2 mt-2 border-t border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              Comprar ahora →
            </Link>
          </div>
        )}

        {/* Page Title (for inner pages) */}
        {pageTitle && (
          <div className="py-4 border-t border-border">
            <h1 className="font-display text-2xl font-medium text-foreground">{pageTitle}</h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <footer className={`bg-foreground text-background py-16 lg:py-20 ${footerClassName ?? ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-5">
              <span className="font-display text-2xl font-light text-background tracking-wide">Lunita</span>
            </a>
            <p className="font-body text-sm text-background/50 leading-relaxed max-w-xs">
              Ritual de Baño Lechoso para Bebé. Hecho para hacer del bath time el momento más lindo del día.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-background/40 mb-5">
              Navegar
            </h3>
            <div className="space-y-3">
              <Link to="/" className="block font-body text-sm text-background/60 hover:text-background transition-colors">
                Inicio
              </Link>
              <Link to="/productos/ritual-de-bao-lechoso-para-beb" className="block font-body text-sm text-background/60 hover:text-background transition-colors">
                El Producto
              </Link>
              <a href="/#faq" className="block font-body text-sm text-background/60 hover:text-background transition-colors">
                Preguntas frecuentes
              </a>
              <Link to="/terminos-y-condiciones" className="block font-body text-sm text-background/60 hover:text-background transition-colors">
                Términos y Condiciones
              </Link>
              <Link to="/aviso-de-privacidad" className="block font-body text-sm text-background/60 hover:text-background transition-colors">
                Aviso de Privacidad
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-background/40 mb-5">
              Síguenos
            </h3>
            <SocialLinks />
            <p className="font-body text-xs text-background/35 mt-6 leading-relaxed">
              Envíos a toda la República Mexicana.
            </p>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-background/35 tracking-wide">
            © 2025 Lunita. Todos los derechos reservados.
          </p>
          <p className="font-body text-xs text-background/25">
            México 🇲🇽
          </p>
        </div>
      </div>
    </footer>
  )

  return (
    <>
      <PageTemplate
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>

      {showCart && <FloatingCart hideOnMobile={hideFloatingCartOnMobile} />}
    </>
  )
}