import { useState, useRef, useEffect } from 'react'
import './CustomDatePicker.css'

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const DAYS_SHORT = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

export default function CustomDatePicker({ value, onChange, minDate }) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)

  const initialDate = value ? new Date(value) : new Date()
  const [viewYear, setViewYear] = useState(initialDate.getFullYear())
  const [viewMonth, setViewMonth] = useState(initialDate.getMonth())

  const min = minDate ? new Date(minDate) : new Date()
  min.setHours(0, 0, 0, 0)

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Calculate days in month
  const firstDayOfMonth = new Date(viewYear, viewMonth, 1).getDay()
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
  const prevMonthDays = new Date(viewYear, viewMonth, 0).getDate()

  const handlePrevMonth = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (viewMonth === 0) {
      setViewMonth(11)
      setViewYear(viewYear - 1)
    } else {
      setViewMonth(viewMonth - 1)
    }
  }

  const handleNextMonth = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (viewMonth === 11) {
      setViewMonth(0)
      setViewYear(viewYear + 1)
    } else {
      setViewMonth(viewMonth + 1)
    }
  }

  const handleSelectDay = (day) => {
    const monthStr = String(viewMonth + 1).padStart(2, '0')
    const dayStr = String(day).padStart(2, '0')
    const formatted = `${viewYear}-${monthStr}-${dayStr}`
    onChange({ target: { name: 'date', value: formatted } })
    setIsOpen(false)
  }

  // Format display label
  const formatDisplay = (dateString) => {
    if (!dateString) return 'Select dining date'
    const [y, m, d] = dateString.split('-').map(Number)
    const dateObj = new Date(y, m - 1, d)
    return dateObj.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  const daysGrid = []
  // Padding days from previous month
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    daysGrid.push({ day: prevMonthDays - i, isCurrentMonth: false, disabled: true })
  }
  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    const currentDate = new Date(viewYear, viewMonth, d)
    currentDate.setHours(0, 0, 0, 0)
    const isDisabled = currentDate < min
    daysGrid.push({ day: d, isCurrentMonth: true, disabled: isDisabled, date: currentDate })
  }

  return (
    <div className="custom-datepicker-container" ref={containerRef}>
      <button
        type="button"
        className={`custom-datepicker-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <span className={value ? 'value-selected' : 'value-placeholder'}>
          {formatDisplay(value)}
        </span>
        <svg
          className="calendar-icon-indicator"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </button>

      {isOpen && (
        <div className="custom-datepicker-popover">
          {/* Header navigation */}
          <div className="cal-header">
            <span className="cal-title">
              {MONTH_NAMES[viewMonth]} {viewYear}
            </span>
            <div className="cal-nav-buttons">
              <button
                type="button"
                className="cal-nav-btn"
                onClick={handlePrevMonth}
                aria-label="Previous month"
              >
                ‹
              </button>
              <button
                type="button"
                className="cal-nav-btn"
                onClick={handleNextMonth}
                aria-label="Next month"
              >
                ›
              </button>
            </div>
          </div>

          {/* Weekday labels */}
          <div className="cal-weekdays">
            {DAYS_SHORT.map((day) => (
              <span key={day} className="cal-weekday">
                {day}
              </span>
            ))}
          </div>

          {/* Days grid */}
          <div className="cal-days-grid">
            {daysGrid.map((item, idx) => {
              if (!item.isCurrentMonth) {
                return (
                  <span key={idx} className="cal-day day-other-month">
                    {item.day}
                  </span>
                )
              }

              const isSelected =
                value &&
                value ===
                  `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}-${String(item.day).padStart(2, '0')}`

              const isToday =
                new Date().getDate() === item.day &&
                new Date().getMonth() === viewMonth &&
                new Date().getFullYear() === viewYear

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={item.disabled}
                  className={`cal-day ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''} ${item.disabled ? 'disabled' : ''}`}
                  onClick={() => handleSelectDay(item.day)}
                >
                  {item.day}
                </button>
              )
            })}
          </div>

          {/* Quick Footer */}
          <div className="cal-footer">
            <button
              type="button"
              className="cal-btn-today"
              onClick={() => {
                const today = new Date()
                setViewYear(today.getFullYear())
                setViewMonth(today.getMonth())
                handleSelectDay(today.getDate())
              }}
            >
              Today
            </button>
            <span className="cal-hours-badge">Seating: 12:00 PM – 11:30 PM</span>
          </div>
        </div>
      )}
    </div>
  )
}
