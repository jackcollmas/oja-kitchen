import './DishModal.css'

export default function DishModal({ dish, onClose, onBookTable }) {
  if (!dish) return null

  return (
    <div className="dish-modal-backdrop" onClick={onClose}>
      <div className="dish-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="btn-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="modal-image-pane">
          <img
            src={dish.image || '/dishes/suya'}
            alt={dish.title || dish.name}
            className="modal-cover-img"
          />
          <div className="modal-img-gradient" />
          <div className="modal-floating-badge">{dish.badge || 'Chef Selection'}</div>
        </div>

        <div className="modal-details-pane">
          <div className="modal-category-tag">{dish.tag || 'Fine Dining Selection'}</div>
          <h3 className="modal-dish-title">{dish.title || dish.name}</h3>
          <div className="modal-price-tag">{dish.price}</div>

          <p className="modal-description">
            {dish.description || dish.desc}
          </p>

          {dish.notes && (
            <div className="modal-flavor-card">
              <span className="flavor-label">Palate & Aroma Profile:</span>
              <p>{dish.notes}</p>
            </div>
          )}

          <div className="modal-actions-row">
            <button
              type="button"
              className="btn-modal-reserve"
              onClick={() => {
                onClose()
                onBookTable()
              }}
            >
              <span>Reserve Table for this Dish</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button type="button" className="btn-modal-secondary" onClick={onClose}>
              Back to Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
