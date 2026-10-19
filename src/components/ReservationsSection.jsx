import { useState } from 'react'
import './ReservationsSection.css'

export default function ReservationsSection({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2 Guests',
    date: '',
    time: '19:00',
    experience: 'Dinner & Tasting',
    specialNotes: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage('')

    const accessKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '92db64c7-93e6-412c-bdf1-ebbb1d2877b8'

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Table Reservation: ${formData.name} (${formData.guests})`,
          from_name: 'Ọjà Kitchen Booking System',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          guests: formData.guests,
          date: formData.date,
          time: formData.time,
          experience: formData.experience,
          specialNotes: formData.specialNotes || 'None',
        }),
      })

      const result = await response.json()
      if (result.success) {
        setSubmitted(true)
      } else {
        setErrorMessage(result.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setErrorMessage('Network error submitting reservation. Please try again or call us.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="reservation-section" id="reservations">
      <div className="reservation-container">
        <div className="reservation-card-wrapper">
          <div className="reservation-header">
            <span className="section-eyebrow">RESERVE AN EXPERIENCE</span>
            <h2 className="section-title">
              CLAIM YOUR <span>SEAT AT THE FIRE</span>
            </h2>
            <p className="section-subtitle">
              Intimate dining, private chef tables, and celebratory gatherings. Due to our limited
              daily seating, reservations are strongly recommended.
            </p>
          </div>

          {submitted ? (
            <div className="reservation-success-box">
              <div className="success-icon-badge">✓</div>
              <h3>Table Requested for {formData.name}</h3>
              <p>
                We have received your reservation inquiry for {formData.guests} on {formData.date || 'your chosen date'} at {formData.time}.
                Our maître d' will contact you via email ({formData.email}) or phone ({formData.phone}) within 2 hours to confirm your seating.
              </p>
              <button
                type="button"
                className="btn-reserve-submit"
                onClick={() => setSubmitted(false)}
              >
                Book Another Table
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="reservation-form">
              {errorMessage && (
                <div className="reservation-error-alert" style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(239, 68, 68, 0.15)',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  color: '#fca5a5',
                  fontSize: '0.875rem',
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>
                  {errorMessage}
                </div>
              )}
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="res-name">Full Name *</label>
                  <input
                    id="res-name"
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Adebayo Ogunlesi"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="res-email">Email Address *</label>
                  <input
                    id="res-email"
                    type="email"
                    name="email"
                    required
                    placeholder="adebayo@luxury.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="res-phone">Phone Number *</label>
                  <input
                    id="res-phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="+234 803 123 4567"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="res-guests">Number of Guests</label>
                  <select
                    id="res-guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests (Intimate Dining)</option>
                    <option value="4 Guests">4 Guests</option>
                    <option value="6 Guests">6 Guests</option>
                    <option value="8+ Guests">8+ Guests (Private Dining Room)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="res-date">Date</label>
                  <input
                    id="res-date"
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="res-time">Seating Time</label>
                  <select
                    id="res-time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                  >
                    <option value="12:30">12:30 PM (Lunch Seating)</option>
                    <option value="14:00">02:00 PM (Late Lunch)</option>
                    <option value="18:30">06:30 PM (First Dinner)</option>
                    <option value="19:30">07:30 PM (Prime Dinner)</option>
                    <option value="20:30">08:30 PM (Night Tasting)</option>
                    <option value="21:30">09:30 PM (Late Embers)</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="res-notes">Dietary Notes or Celebrations</label>
                <textarea
                  id="res-notes"
                  name="specialNotes"
                  rows="3"
                  placeholder="Anniversary, birthday, allergies, or wine pairing preferences..."
                  value={formData.specialNotes}
                  onChange={handleChange}
                />
              </div>

              <div className="reservation-submit-row">
                <button type="submit" className="btn-reserve-submit" disabled={loading}>
                  <span>{loading ? 'Confirming Reservation...' : 'Confirm Table Reservation'}</span>
                  {!loading && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
                <span className="cancellation-policy">
                  Complimentary cancellation up to 6 hours before reservation.
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
