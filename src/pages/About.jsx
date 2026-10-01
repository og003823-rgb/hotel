import { useNavigate, Link } from 'react-router-dom'
import './About.css'

function About() {
  const navigate = useNavigate()

  return (
    <main className="about-page">

      {/* ================= HERO ================= */}

      <section className="about-hero">

        <div className="about-hero-overlay">

          <div className="about-container">

            <button
              type="button"
              className="about-back-button"
              onClick={() => navigate(-1)}
            >
              ← <span>Back</span>
            </button>

            <div className="about-hero-content">

              <span className="about-label">
                ABOUT OUR HOTEL
              </span>

              <h1>
                A place where
                <br />
                luxury feels natural.
              </h1>

              <p>
                Discover a hotel created around elegance, comfort
                and unforgettable hospitality.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="about-intro">

        <div className="about-container">

          <div className="about-intro-grid">

            <div className="about-intro-image">

              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1100&q=85"
                alt="Luxury hotel exterior"
              />

              <div className="about-image-badge">
                <strong>5</strong>

                <span>
                  STAR
                  <br />
                  EXPERIENCE
                </span>
              </div>

            </div>


            <div className="about-intro-content">

              <span className="about-section-label">
                OUR STORY
              </span>

              <h2>
                More than a hotel,
                <br />
                it's an experience.
              </h2>

              <p>
                Our hotel was created with one simple idea:
                every guest deserves to feel comfortable, welcomed
                and genuinely cared for.
              </p>

              <p>
                From elegant interiors and carefully designed rooms
                to attentive service and unforgettable dining,
                every detail has been thoughtfully created to make
                your stay special.
              </p>

              <p>
                Whether you are travelling for business, celebrating
                a special occasion or simply looking for a peaceful
                escape, our team is here to make every moment count.
              </p>

              <Link
                to="/rooms"
                className="about-gold-button"
              >
                Explore Our Rooms
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}

      <section className="about-stats-section">

        <div className="about-container">

          <div className="about-stats-grid">

            <div className="about-stat">

              <strong>15+</strong>

              <span>
                Years of
                <br />
                Experience
              </span>

            </div>


            <div className="about-stat">

              <strong>20+</strong>

              <span>
                Luxury
                <br />
                Rooms
              </span>

            </div>


            <div className="about-stat">

              <strong>98%</strong>

              <span>
                Happy
                <br />
                Guests
              </span>

            </div>


            <div className="about-stat">

              <strong>24/7</strong>

              <span>
                Guest
                <br />
                Service
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ================= VALUES ================= */}

      <section className="about-values">

        <div className="about-container">

          <div className="about-heading-center">

            <span className="about-section-label">
              WHAT WE BELIEVE
            </span>

            <h2>
              Hospitality with purpose
            </h2>

            <p>
              We believe luxury is not only about beautiful spaces.
              It is about how you feel during every moment of your stay.
            </p>

          </div>


          <div className="about-values-grid">

            <article className="about-value-card">

              <span className="about-value-number">
                01
              </span>

              <div className="about-value-icon">
                ✦
              </div>

              <h3>
                Exceptional Service
              </h3>

              <p>
                Our professional team is dedicated to providing
                warm, personal and attentive service from arrival
                to departure.
              </p>

            </article>


            <article className="about-value-card">

              <span className="about-value-number">
                02
              </span>

              <div className="about-value-icon">
                ◆
              </div>

              <h3>
                Timeless Elegance
              </h3>

              <p>
                Every space combines classic elegance with modern
                comfort to create an atmosphere that feels refined
                and welcoming.
              </p>

            </article>


            <article className="about-value-card">

              <span className="about-value-number">
                03
              </span>

              <div className="about-value-icon">
                ♢
              </div>

              <h3>
                Guest First
              </h3>

              <p>
                Your comfort comes first. We listen to what our
                guests need and continuously improve their experience.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section className="about-experience">

        <div className="about-container">

          <div className="about-experience-grid">

            <div className="about-experience-content">

              <span className="about-section-label">
                THE HOTEL EXPERIENCE
              </span>

              <h2>
                Everything designed
                <br />
                around you.
              </h2>

              <p>
                Wake up in a beautifully designed room, enjoy a
                delicious breakfast, relax by the pool and let our
                team take care of the details.
              </p>

              <div className="about-check-list">

                <div>
                  <span>✓</span>
                  <p>
                    Elegant and comfortable rooms
                  </p>
                </div>

                <div>
                  <span>✓</span>
                  <p>
                    Delicious dining experiences
                  </p>
                </div>

                <div>
                  <span>✓</span>
                  <p>
                    Relaxing swimming pool
                  </p>
                </div>

                <div>
                  <span>✓</span>
                  <p>
                    Professional 24/7 service
                  </p>
                </div>

              </div>

            </div>


            <div className="about-experience-images">

              <div className="about-experience-image main">

                <img
                  src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=900&q=85"
                  alt="Luxury hotel room"
                />

              </div>


              <div className="about-experience-image small">

                <img
                  src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=700&q=85"
                  alt="Hotel swimming pool"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section className="about-services">

        <div className="about-container">

          <div className="about-heading-center">

            <span className="about-section-label">
              OUR SERVICES
            </span>

            <h2>
              Made for a better stay
            </h2>

          </div>


          <div className="about-services-grid">

            <div className="about-service-card">

              <span>01</span>

              <h3>
                Luxury Accommodation
              </h3>

              <p>
                Beautiful rooms and suites with premium furniture,
                comfortable beds and modern facilities.
              </p>

            </div>


            <div className="about-service-card">

              <span>02</span>

              <h3>
                Fine Dining
              </h3>

              <p>
                Enjoy carefully prepared dishes and memorable
                dining experiences throughout your stay.
              </p>

            </div>


            <div className="about-service-card">

              <span>03</span>

              <h3>
                Swimming Pool
              </h3>

              <p>
                Take a break and enjoy a peaceful atmosphere beside
                our beautiful swimming pool.
              </p>

            </div>


            <div className="about-service-card">

              <span>04</span>

              <h3>
                24/7 Reception
              </h3>

              <p>
                Our friendly reception team is available around
                the clock whenever you need assistance.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="about-cta">

        <div className="about-cta-overlay">

          <div className="about-container">

            <div className="about-cta-content">

              <span className="about-label">
                YOUR NEXT ESCAPE
              </span>

              <h2>
                Ready to experience
                <br />
                the difference?
              </h2>

              <p>
                Choose your perfect room and let us make your stay
                something truly memorable.
              </p>

              <div className="about-cta-buttons">

                <Link
                  to="/rooms"
                  className="about-gold-button"
                >
                  Explore Rooms
                </Link>

                <Link
                  to="/"
                  className="about-outline-button"
                >
                  Back Home
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="about-footer">

        <div className="about-container">

          <div className="about-footer-grid">

            <div className="about-footer-brand">

              <h2>
                HOTEL
              </h2>

              <p>
                A luxury hotel experience designed around comfort,
                elegance and unforgettable moments.
              </p>

              <Link
                to="/rooms"
                className="about-footer-button"
              >
                Book Your Stay
              </Link>

            </div>


            <div className="about-footer-column">

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

            </div>


            <div className="about-footer-column">

              <h3>
                SERVICES
              </h3>

              <span>
                Luxury Rooms
              </span>

              <span>
                Fine Dining
              </span>

              <span>
                Swimming Pool
              </span>

              <span>
                24/7 Reception
              </span>

            </div>


            <div className="about-footer-column">

              <h3>
                CONTACT
              </h3>

              <span>
                Cairo, Egypt
              </span>

              <a href="tel:+201000000000">
                +20 100 000 0000
              </a>

              <a href="mailto:info@hotel.com">
                info@hotel.com
              </a>

            </div>

          </div>


          <div className="about-footer-bottom">

            <p>
              © 2026 HOTEL. All Rights Reserved.
            </p>

            <p>
              Luxury · Comfort · Hospitality
            </p>

          </div>

        </div>

      </footer>

    </main>
  )
}

export default About