import './Footer.css'

export default function Footer({ data }) {
  return (
    <footer className="footer-root">
      <div className="footer-container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <img src="/favicon.png" alt="Ọjà Kitchen Logo" className="footer-logo-img" />
              <span className="brand-title">{data.name}</span>
            </div>
            <p className="footer-tagline">
              An ancestral love letter to Nigerian open-fire cooking and luxury dining.
              Revered by epicures from Lagos to London.
            </p>
            <div className="footer-hours">
              <span className="hours-label">Service Hours:</span>
              <span className="hours-value">{data.hours}</span>
            </div>
          </div>

          {/* Locations */}
          <div className="footer-col">
            <h5 className="footer-col-title">Locations</h5>
            <div className="location-block">
              <h6>Lagos Main Sanctuary</h6>
              <p>Plot 14B, Victoria Island, Lagos, Nigeria</p>
              <p className="location-tel">+234 (0) 1 892 4400</p>
            </div>
            <div className="location-block">
              <h6>London Atelier</h6>
              <p>42 Berkeley Square, Mayfair, London W1J 5AW</p>
              <p className="location-tel">+44 20 7946 0912</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h5 className="footer-col-title">Experience</h5>
            <ul className="footer-nav-list">
              <li><a href="#dishes">Dishes Showcase</a></li>
              <li><a href="#menu">À La Carte Menu</a></li>
              <li><a href="#story">Ancestral Heritage</a></li>
              <li><a href="#reservations">Private Room Bookings</a></li>
              <li><a href="#reservations">Press & Accolades</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col newsletter-col">
            <h5 className="footer-col-title">The Culinary Dispatch</h5>
            <p className="newsletter-desc">
              Subscribe to receive private invitations to chef tasting previews and seasonal secret menus.
            </p>
            <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="btn-newsletter-join">Join</button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Ọjà Kitchen. All rights reserved. Crafted with passion.</p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Dining</a>
            <span>•</span>
            <a href="#">Sommelier Inquiries</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
