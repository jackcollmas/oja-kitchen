import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar({ onOpenReserve }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Dishes Experience', href: '#dishes' },
    { label: 'The Menu', href: '#menu' },
    { label: 'Our Story', href: '#story' },
    { label: 'Atmosphere', href: '#ambiance' },
    { label: 'Private Dining', href: '#reservations' },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="navbar-brand">
          <img src="/favicon.png" alt="Ọjà Kitchen Logo" className="brand-logo-img" />
          <div className="brand-text-group">
            <span className="brand-title">ỌJÀ KITCHEN</span>
            <span className="brand-sub">LAGOS • LONDON</span>
          </div>
        </a>

        <nav className="navbar-links-desktop">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            type="button"
            className="btn-reserve-nav"
            onClick={onOpenReserve}
            aria-label="Reserve a Table"
          >
            <span>Book A Table</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          <button
            type="button"
            className={`btn-hamburger ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-inner">
          <div className="mobile-crest-tag">CULINARY EXCELLENCE</div>
          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="mobile-link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mobile-nav-cta">
            <button
              type="button"
              className="btn-primary-mobile"
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenReserve()
              }}
            >
              Reserve an Experience
            </button>
            <p className="mobile-contact-note">
              Victoria Island, Lagos • +234 (0) 1 892 4400
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
