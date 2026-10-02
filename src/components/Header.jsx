import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Header.css'

function Header({
  showCart = false,
  showBooking = false,
  showSections = false,
  showBookNow = true,
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // اقفل قائمة الموبايل تلقائياً مع أي تنقل بين الصفحات
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const closeMenu = () => setMenuOpen(false)

  // Services / Gallery: سكرول ناعم جوه الهوم
  const handleSection = (event, hash) => {
    closeMenu()

    if (location.pathname !== '/') {
      return
    }

    event.preventDefault()

    const el = document.querySelector(hash)

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="site-header">

      <div className="site-header-container">

        <Link to="/" className="site-logo" onClick={closeMenu}>
          HOTEL
        </Link>

        <nav className={`site-nav ${menuOpen ? 'open' : ''}`}>

          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/rooms" onClick={closeMenu}>
            Rooms
          </NavLink>

          {/* لينكات الأقسام — بتظهر في الهوم بس افتراضياً */}

          {showSections && (
            <>
              <Link
                to="/#hotel-experience"
                onClick={(event) => handleSection(event, '#hotel-experience')}
              >
                Services
              </Link>

              <Link
                to="/#hotel-gallery"
                onClick={(event) => handleSection(event, '#hotel-gallery')}
              >
                Gallery
              </Link>
            </>
          )}

          {/* MY BOOKING CARD — اختياري */}

          {showBooking && (
            <Link to="/booking" className="site-booking-card" onClick={closeMenu}>
              <span className="site-booking-icon">♡</span>
              <span className="site-booking-text">
                <small>MY</small>
                BOOKING
              </span>
            </Link>
          )}

          {/* BOOK NOW — اختياري */}

          {showBookNow && (
            <Link to="/rooms" className="site-nav-button" onClick={closeMenu}>
              Book Now
            </Link>
          )}

        </nav>

        <button
          className="site-menu-button"
          type="button"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

    </header>
  )
}

export default Header