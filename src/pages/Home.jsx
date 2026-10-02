import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useWOW from '../hooks/useWOW'
import './Home.css'

function Home() {
  useWOW()

  const [showTopButton, setShowTopButton] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="hotel-home">

      {/* =====================================================
          HEADER (STICKY — بينزل معاك بالسكرول)
      ===================================================== */}

      <header className="hotel-header">

        <div className="hotel-header-container">

          <Link to="/" className="hotel-logo" onClick={closeMenu}>
            HOTEL
          </Link>

          <nav className={`hotel-nav ${menuOpen ? 'open' : ''}`}>

            <Link to="/" onClick={closeMenu}>Home</Link>

            <Link to="/about" onClick={closeMenu}>About</Link>

            <Link to="/rooms" onClick={closeMenu}>Rooms</Link>

            <a href="#hotel-experience" onClick={closeMenu}>Services</a>

            <a href="#hotel-gallery" onClick={closeMenu}>Gallery</a>

            <Link to="/booking" className="hotel-booking-card" onClick={closeMenu}>
              <span className="hotel-booking-icon">♡</span>
              <span className="hotel-booking-text">
                <small>MY</small>
                BOOKING
              </span>
            </Link>

            <Link to="/rooms" className="hotel-nav-button" onClick={closeMenu}>
              Book Now
            </Link>

          </nav>

          <button
            className="hotel-menu-button"
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hotel-hero">

        <div className="hotel-hero-overlay">

          <div className="hotel-home-container">

            <div className="hotel-hero-content">

              <span className="hotel-label wow fadeInUp">
                WELCOME TO HOTEL
              </span>

              <h1 className="wow fadeInUp" data-wow-delay="0.2s">
                Experience
                <br />
                Luxury & Comfort
              </h1>

              <p className="wow fadeInUp" data-wow-delay="0.4s">
                Discover a world of elegance, comfort and exceptional
                hospitality. Your perfect stay starts here.
              </p>

              <div className="hotel-hero-buttons wow fadeInUp" data-wow-delay="0.6s">

                <Link to="/rooms" className="hotel-gold-btn">
                  Explore Rooms
                </Link>

                <a href="#hotel-about" className="hotel-outline-btn">
                  Discover More
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section className="hotel-about" id="hotel-about">

        <div className="hotel-home-container">

          <div className="hotel-about-grid">

            <div className="hotel-about-photo wow fadeInLeft">

              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85"
                alt="Luxury Hotel"
              />

              <div className="hotel-photo-badge wow zoomIn" data-wow-delay="0.4s">
                <strong>5</strong>
                <span>
                  STAR
                  <br />
                  HOTEL
                </span>
              </div>

            </div>


            <div className="hotel-about-text wow fadeInRight">

              <span className="hotel-section-label">
                ABOUT OUR HOTEL
              </span>

              <h2>
                Where every stay
                <br />
                becomes a memory
              </h2>

              <p>
                Welcome to our luxury hotel, where timeless elegance
                meets modern comfort. We create beautiful experiences
                for guests who appreciate exceptional service.
              </p>

              <p>
                From our carefully designed rooms to our warm
                hospitality, every detail has been created with you
                in mind.
              </p>


              <div className="hotel-about-stats">

                <div className="wow fadeInUp">
                  <strong>20+</strong>
                  <span>Luxury Rooms</span>
                </div>

                <div className="wow fadeInUp" data-wow-delay="0.15s">
                  <strong>15+</strong>
                  <span>Years Experience</span>
                </div>

                <div className="wow fadeInUp" data-wow-delay="0.3s">
                  <strong>98%</strong>
                  <span>Happy Guests</span>
                </div>

              </div>


              <Link to="/rooms" className="hotel-text-link">
                Discover Our Rooms →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section className="hotel-features" id="hotel-experience">

        <div className="hotel-home-container">

          <div className="hotel-heading-center wow fadeInUp">

            <span className="hotel-section-label">
              HOTEL EXPERIENCE
            </span>

            <h2>
              Everything you need
            </h2>

            <p>
              Enjoy premium services designed to make your stay
              comfortable and unforgettable.
            </p>

          </div>


          <div className="hotel-feature-grid">

            <div className="hotel-feature-card wow fadeInUp">
              <div className="hotel-feature-icon">01</div>
              <h3>Luxury Rooms</h3>
              <p>
                Beautifully designed rooms with premium furniture,
                comfortable beds and modern facilities.
              </p>
            </div>


            <div className="hotel-feature-card wow fadeInUp" data-wow-delay="0.15s">
              <div className="hotel-feature-icon">02</div>
              <h3>Fine Dining</h3>
              <p>
                Enjoy delicious meals and an unforgettable dining
                experience prepared by our professional chefs.
              </p>
            </div>


            <div className="hotel-feature-card wow fadeInUp" data-wow-delay="0.3s">
              <div className="hotel-feature-icon">03</div>
              <h3>Swimming Pool</h3>
              <p>
                Relax beside our beautiful pool and enjoy a peaceful
                atmosphere throughout your stay.
              </p>
            </div>


            <div className="hotel-feature-card wow fadeInUp" data-wow-delay="0.45s">
              <div className="hotel-feature-icon">04</div>
              <h3>24/7 Service</h3>
              <p>
                Our professional team is available around the clock
                to make sure you have everything you need.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ROOMS PREVIEW
      ===================================================== */}

      <section className="hotel-rooms-preview">

        <div className="hotel-home-container">

          <div className="hotel-heading-row wow fadeInUp">

            <div>
              <span className="hotel-section-label">
                OUR ROOMS
              </span>

              <h2>
                Stay in comfort
              </h2>
            </div>


            <Link to="/rooms" className="hotel-text-link">
              View All Rooms →
            </Link>

          </div>


          <div className="hotel-room-preview-grid">


            {/* ROOM 1 */}

            <div className="hotel-preview-card wow fadeInUp">

              <div className="hotel-preview-image">

                <img
                  src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=85"
                  alt="Deluxe Room"
                />

                <span>$120 / NIGHT</span>

              </div>


              <div className="hotel-preview-content">

                <small>DELUXE ROOM</small>

                <h3>Deluxe Room</h3>

                <p>Elegant comfort for a relaxing stay.</p>

                <Link to="/rooms/1" className="hotel-card-book">
                  View Room
                </Link>

              </div>

            </div>


            {/* ROOM 2 */}

            <div className="hotel-preview-card wow fadeInUp" data-wow-delay="0.2s">

              <div className="hotel-preview-image">

                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=85"
                  alt="Luxury Double Room"
                />

                <span>$180 / NIGHT</span>

              </div>


              <div className="hotel-preview-content">

                <small>DOUBLE ROOM</small>

                <h3>Luxury Double Room</h3>

                <p>Spacious comfort for families and friends.</p>

                <Link to="/rooms/2" className="hotel-card-book">
                  View Room
                </Link>

              </div>

            </div>


            {/* ROOM 3 */}

            <div className="hotel-preview-card wow fadeInUp" data-wow-delay="0.4s">

              <div className="hotel-preview-image">

                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85"
                  alt="Executive Suite"
                />

                <span>$250 / NIGHT</span>

              </div>


              <div className="hotel-preview-content">

                <small>EXECUTIVE SUITE</small>

                <h3>Executive Suite</h3>

                <p>Premium space with exceptional comfort.</p>

                <Link to="/rooms/3" className="hotel-card-book">
                  View Room
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section className="hotel-gallery" id="hotel-gallery">

        <div className="hotel-home-container">

          <div className="hotel-heading-center wow fadeInUp">

            <span className="hotel-section-label">
              HOTEL GALLERY
            </span>

            <h2>
              Elegance in every detail
            </h2>

            <p>
              Take a look at some of the beautiful moments
              and spaces waiting for you.
            </p>

          </div>


          <div className="hotel-gallery-grid">

            <div className="hotel-gallery-item large wow zoomIn">

              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=85"
                alt="Hotel exterior"
              />

            </div>


            <div className="hotel-gallery-item wow zoomIn" data-wow-delay="0.15s">

              <img
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=700&q=85"
                alt="Hotel room"
              />

            </div>


            <div className="hotel-gallery-item wow zoomIn" data-wow-delay="0.3s">

              <img
                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=700&q=85"
                alt="Hotel suite"
              />

            </div>


            <div className="hotel-gallery-item wow zoomIn" data-wow-delay="0.45s">

              <img
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=700&q=85"
                alt="Hotel pool"
              />

            </div>


            <div className="hotel-gallery-item wow zoomIn" data-wow-delay="0.6s">

              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=85"
                alt="Fine dining restaurant"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="hotel-cta">

        <div className="hotel-cta-overlay">

          <div className="hotel-home-container">

            <div className="hotel-cta-content wow fadeInUp">

              <span className="hotel-label">
                YOUR PERFECT STAY AWAITS
              </span>

              <h2>
                Ready to experience
                <br />
                something special?
              </h2>

              <p>
                Choose your perfect room and book your stay today.
              </p>


              <div className="hotel-hero-buttons">

                {/* <Link
                  to="/rooms"
                  className="hotel-gold-btn"
                >
                  Book Your Room
                </Link> */}


              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="hotel-footer">

        <div className="hotel-home-container">

          <div className="hotel-footer-grid">


            {/* BRAND */}

            <div className="hotel-footer-brand">

              <h2>
                HOTEL
              </h2>

              <p>
                A luxury hotel experience designed around
                comfort, elegance and unforgettable moments.
              </p>

              <Link
                to="/rooms"
                className="hotel-footer-book"
              >
                Book Your Stay
              </Link>

            </div>


            {/* QUICK LINKS */}

            <div className="hotel-footer-column">

              <h3>
                QUICK LINKS
              </h3>

              <Link to="/">
                Home
              </Link>

              <Link to="/rooms">
                Rooms
              </Link>

              <Link to="/about">
                About Us
              </Link>

              <Link to="/rooms">
                Book Now
              </Link>

            </div>


            {/* SERVICES */}

            <div className="hotel-footer-column">

              <h3>
                SERVICES
              </h3>

              <a href="#hotel-experience">
                Luxury Rooms
              </a>

              <a href="#hotel-experience">
                Fine Dining
              </a>

              <a href="#hotel-experience">
                Swimming Pool
              </a>

              <a href="#hotel-experience">
                24/7 Reception
              </a>

            </div>


            {/* CONTACT */}

            <div className="hotel-footer-column">

              <h3>
                CONTACT
              </h3>

              <span>
                Cairo, Egypt
              </span>

              <a href="tel:+201000000000">
                01069771495
              </a>

              <a href="mailto:info@hotel.com">
                og003823@gmail.com
              </a>

            </div>

          </div>


          <div className="hotel-footer-bottom">

            <p>
              © 2026 HOTEL. All Rights Reserved.
            </p>

            <p>
              Luxury · Comfort · Hospitality
            </p>

          </div>

        </div>

      </footer>


      {/* =====================================================
          BACK TO TOP
      ===================================================== */}

      {showTopButton && (
        <button
          className="hotel-back-to-top"
          onClick={scrollToTop}
          type="button"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

    </div>
  )
}

export default Home