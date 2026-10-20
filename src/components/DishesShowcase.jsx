import { useState, useEffect, useRef } from 'react'
import './DishesShowcase.css'

export default function DishesShowcase({ dishes, onSelectDish }) {
  const [activeDishIndex, setActiveDishIndex] = useState(0)
  const dishSectionRef = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      itemRefs.current.forEach((el, index) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        // Check if item is in the focal middle of the viewport
        if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.4) {
          setActiveDishIndex(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const activeDish = dishes[activeDishIndex] || dishes[0]

  return (
    <section className="dishes-showcase-section" id="dishes" ref={dishSectionRef}>
      {/* Background ambient lighting based on active dish */}
      <div className="showcase-ambient-glow" />

      <div className="showcase-header">
        <span className="section-eyebrow">THE CULINARY REVELATION</span>
        <h2 className="section-title">
          SCROLL THROUGH THE <span>FEAST</span>
        </h2>
        <p className="section-subtitle">
          Each dish is an architectural tribute to West African heritage. Watch the smoke rise,
          the spices infuse, and the textures speak.
        </p>
      </div>

      <div className="showcase-split-stage">
        {/* Sticky Visual Stage on Desktop / Tablet */}
        <div className="showcase-sticky-stage">
          <div className="stage-frame">
            <div className="dish-visual-wrapper">
              {dishes.map((dish, idx) => (
                <div
                  key={dish.id}
                  className={`dish-image-slide ${idx === activeDishIndex ? 'active' : ''}`}
                >
                  <img
                    src={dish.image}
                    alt={dish.title}
                    className="dish-featured-img"
                    loading="lazy"
                  />
                  <div className="dish-image-overlay" />
                  <div className="dish-floating-badge">{dish.badge}</div>
                  <div className="dish-floating-price">{dish.price}</div>
                </div>
              ))}
            </div>

            {/* Micro steam effect overlay */}
            <div className="steam-line-1" />
            <div className="steam-line-2" />

            {/* Quick interactive dots */}
            <div className="stage-dots-indicator">
              {dishes.map((dish, idx) => (
                <button
                  key={dish.id}
                  type="button"
                  className={`stage-dot ${idx === activeDishIndex ? 'active' : ''}`}
                  onClick={() => {
                    setActiveDishIndex(idx)
                    itemRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  }}
                  aria-label={`Go to ${dish.title}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scrolling Story Cards */}
        <div className="showcase-scroll-column">
          {dishes.map((dish, idx) => {
            const isActive = idx === activeDishIndex
            return (
              <article
                key={dish.id}
                ref={(el) => (itemRefs.current[idx] = el)}
                className={`dish-story-card ${isActive ? 'is-focused' : ''}`}
              >
                {/* Mobile direct photo preview */}
                <div className="dish-card-mobile-media">
                  <img src={dish.image} alt={dish.title} />
                  <span className="mobile-dish-badge">{dish.badge}</span>
                </div>

                <div className="dish-card-header">
                  <span className="dish-card-step">0{idx + 1} / 0{dishes.length}</span>
                  <span className="dish-card-tag">{dish.tag}</span>
                </div>

                <h3 className="dish-card-title">{dish.title}</h3>
                <div className="dish-card-price-row">
                  <span className="dish-price">{dish.price}</span>
                  <span className="dish-origin-tag">Signature Recipe</span>
                </div>

                <p className="dish-card-desc">{dish.description}</p>

                <div className="dish-flavor-notes">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                  <span>{dish.notes}</span>
                </div>

                <div className="dish-card-actions">
                  <button
                    type="button"
                    className="btn-order-dish"
                    onClick={() => onSelectDish(dish)}
                  >
                    <span>Taste This Dish</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                  <span className="order-hint">Available for Dine-in & Tasting Menu</span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
