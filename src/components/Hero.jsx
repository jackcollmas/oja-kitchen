import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero({ data, onOpenReserve }) {
  const heroRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const scrolled = window.scrollY
      // Parallax effect on hero background
      const rate = scrolled * 0.35
      const bg = heroRef.current.querySelector('.hero-bg-media')
      if (bg) {
        bg.style.transform = `translate3d(0, ${rate}px, 0) scale(${1 + scrolled * 0.0003})`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero-section" ref={heroRef} id="home">
      {/* Background with luxury gradient overlays & subtle animated embers */}
      <div className="hero-bg-wrapper">
        <img
          src={data.hero.image}
          alt="Charcoal woodfire grill suya at Oja Kitchen"
          className="hero-bg-media"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero-overlay-radial" />
        <div className="hero-overlay-dark" />
        <div className="hero-overlay-bottom" />
        
        {/* Animated ambient ember dots */}
        <div className="ember-particle ember-1" />
        <div className="ember-particle ember-2" />
        <div className="ember-particle ember-3" />
        <div className="ember-particle ember-4" />
      </div>

      <div className="hero-content-container">
        {/* Heritage Crest / Badge */}
        <div className="hero-badge-pill">
          <span className="badge-glow-dot" />
          <span className="badge-text">{data.hero.badge}</span>
        </div>

        {/* Main Grand Display Title */}
        <h1 className="hero-title">
          <span className="hero-title-top">THE SOUL OF</span>
          <span className="hero-title-accent">NIGERIAN FIRE</span>
        </h1>

        <p className="hero-description">{data.hero.subtitle}</p>

        {/* Interactive CTA button group */}
        <div className="hero-cta-group">
          <button
            type="button"
            className="btn-hero-primary"
            onClick={onOpenReserve}
            id="hero-reserve-btn"
          >
            <span>Book Your Table</span>
            <span className="btn-shine" />
          </button>

          <a href="#dishes" className="btn-hero-secondary" id="hero-explore-dishes">
            <span>Explore The Feast</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 13l5 5 5-5M12 4v14" />
            </svg>
          </a>
        </div>

        {/* Stats Row */}
        <div className="hero-stats-row">
          <div className="stat-card">
            <span className="stat-value">{data.hero.stat1.value}</span>
            <span className="stat-label">{data.hero.stat1.label}</span>
          </div>
          <div className="stat-separator" />
          <div className="stat-card">
            <span className="stat-value">{data.hero.stat2.value}</span>
            <span className="stat-label">{data.hero.stat2.label}</span>
          </div>
          <div className="stat-separator" />
          <div className="stat-card">
            <span className="stat-value">{data.hero.stat3.value}</span>
            <span className="stat-label">{data.hero.stat3.label}</span>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <a href="#dishes" className="scroll-indicator" aria-label="Scroll to dishes">
        <span className="scroll-text">SCROLL TO TASTE</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
      </a>
    </section>
  )
}
