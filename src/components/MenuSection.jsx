import { useState, useEffect, useRef } from 'react'
import './MenuSection.css'

export default function MenuSection({ fullMenu, onSelectDish }) {
  const [activeTab, setActiveTab] = useState('mains')
  const stickyRef = useRef(null)
  const sentinelRef = useRef(null)

  // Detect when the tabs bar becomes sticky and apply glass effect
  useEffect(() => {
    const sentinel = sentinelRef.current
    const stickyEl = stickyRef.current
    if (!sentinel || !stickyEl) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When sentinel is out of view, the tabs bar is stuck
        stickyEl.classList.toggle('is-stuck', !entry.isIntersecting)
      },
      { threshold: 0, rootMargin: '-68px 0px 0px 0px' }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  const tabs = [
    { key: 'mains', label: 'Grand Mains & Pots' },
    { key: 'smallChops', label: 'Small Chops & Starters' },
    { key: 'drinks', label: 'Heritage Libations & Cocktails' },
  ]

  const currentItems = fullMenu[activeTab] || []

  return (
    <section className="menu-section" id="menu">
      <div className="menu-container">
        {/* Section Header */}
        <div className="menu-header">
          <span className="section-eyebrow">CURATED TASTING</span>
          <h2 className="section-title">
            THE <span>À LA CARTE</span> REPERTOIRE
          </h2>
          <p className="section-subtitle">
            Every creation is prepared freshly upon order, marrying time-honoured West African cooking
            techniques with modern fine-dining precision.
          </p>
        </div>
      </div>

      {/* Sticky Category Tabs */}
      <div ref={sentinelRef} className="menu-tabs-sentinel" aria-hidden="true" />
      <div ref={stickyRef} className="menu-tabs-sticky-wrapper">
        <div className="menu-tabs-bar" role="tablist" aria-label="Menu categories">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.key}
              className={`menu-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="menu-container">
        {/* Menu Grid */}
        <div className="menu-items-grid">
          {currentItems.map((item) => (
            <div key={item.name} className="menu-card">
              {item.image && (
                <div className="menu-card-media">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="menu-card-img"
                    loading="lazy"
                  />
                  <div className="menu-card-img-overlay" />
                </div>
              )}

              <div className="menu-card-content">
                <div className="menu-card-top">
                  <h4 className="menu-item-name">{item.name}</h4>
                  <div className="menu-item-line" />
                  <span className="menu-item-price">{item.price}</span>
                </div>
                <p className="menu-item-desc">{item.desc}</p>
                <div className="menu-card-footer">
                  <span className="menu-dietary-badge">Chef Crafted</span>
                  <button
                    type="button"
                    className="menu-quick-add"
                    onClick={() => onSelectDish(item)}
                  >
                    + View & Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download / Private Dining Notice */}
        <div className="menu-tasting-banner">
          <div className="tasting-info">
            <span className="tasting-badge">ROYAL TASTING MENU</span>
            <h3>7-Course Ancestral Tasting Experience</h3>
            <p>
              Paired with premium fermented palm wine cocktails and aged African rums. Available
              for intimate gatherings and private bookings.
            </p>
          </div>
          <a href="#reservations" className="btn-tasting-book">
            Reserve Tasting Table <br /> • ₦ 65,000 / Guest
          </a>
        </div>
      </div>
    </section>
  )
}
