import './StorySection.css'

export default function StorySection({ story }) {
  return (
    <section className="story-section" id="story">
      <div className="story-container">
        <div className="story-split-grid">
          <div className="story-text-column">
            <span className="section-eyebrow">{story.subtitle}</span>
            <h2 className="section-title">
              FROM THE HEARTH TO <span>ROYALTY</span>
            </h2>
            <div className="story-gold-divider" />
            <p className="story-paragraph highlight">{story.p1}</p>
            <p className="story-paragraph">{story.p2}</p>

            <div className="story-pillars">
              <div className="pillar-item">
                <span className="pillar-num">01</span>
                <div>
                  <h5>Single-Origin Yaji</h5>
                  <p>Hand-pounded northern ginger, uda pods & toasted kuli-kuli</p>
                </div>
              </div>

              <div className="pillar-item">
                <span className="pillar-num">02</span>
                <div>
                  <h5>Hardwood Fire Smoke</h5>
                  <p>Aged cherrywood and mangrove char for authentic bottom-pot aroma</p>
                </div>
              </div>

              <div className="pillar-item">
                <span className="pillar-num">03</span>
                <div>
                  <h5>Artisanal Cold-Pressed Palm</h5>
                  <p>Sustainably harvested from ancestral groves in ancient Edo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="story-visual-column">
            <div className="story-image-stack">
              <div className="story-image-primary-wrapper">
                <img
                  src="/dishes/pepper_soup.png"
                  alt="Steaming fresh river catfish pepper soup in cast iron pot"
                  className="story-img-primary"
                  loading="lazy"
                />
              </div>
              <div className="story-card-overlay">
                <span className="overlay-quote">
                  "Food is our love language, our ceremony, our triumph."
                </span>
                <span className="overlay-author">— Executive Chef Adewale</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
