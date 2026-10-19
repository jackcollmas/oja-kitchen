import { useState } from 'react'
import { RESTAURANT_DATA } from './data/restaurant'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DishesShowcase from './components/DishesShowcase'
import MenuSection from './components/MenuSection'
import StorySection from './components/StorySection'
import ReservationsSection from './components/ReservationsSection'
import Footer from './components/Footer'
import DishModal from './components/DishModal'

function App() {
  const [selectedDish, setSelectedDish] = useState(null)

  const handleOpenReservations = () => {
    const el = document.getElementById('reservations')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app-root">
      {/* Top Floating Luxury Navbar */}
      <Navbar onOpenReserve={handleOpenReservations} />

      {/* Hero Section with Parallax, Embers & Badges */}
      <main>
        <Hero data={RESTAURANT_DATA} onOpenReserve={handleOpenReservations} />

        {/* Scroll-Triggered Sensory Dishes Showcase */}
        <DishesShowcase
          dishes={RESTAURANT_DATA.signatureDishes}
          onSelectDish={(dish) => setSelectedDish(dish)}
        />

        {/* À La Carte Repertoire with Interactive Tabs */}
        <MenuSection
          fullMenu={RESTAURANT_DATA.fullMenu}
          onSelectDish={(item) => setSelectedDish(item)}
        />

        {/* Heritage & Philosophy Section */}
        <StorySection story={RESTAURANT_DATA.story} />

        {/* Table & Private Dining Reservation Experience */}
        <ReservationsSection />
      </main>

      {/* Global Luxury Footer with Multi-City Footprint */}
      <Footer data={RESTAURANT_DATA} />

      {/* Interactive Modal Preview for any selected dish */}
      {selectedDish && (
        <DishModal
          dish={selectedDish}
          onClose={() => setSelectedDish(null)}
          onBookTable={handleOpenReservations}
        />
      )}
    </div>
  )
}

export default App
