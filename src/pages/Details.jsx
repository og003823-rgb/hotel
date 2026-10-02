
import { Link, useParams } from 'react-router-dom'
import {
  FaUsers,
  FaBed,
  FaRulerCombined,
  FaCheck,
} from 'react-icons/fa'

import Navbar from '../components/Navbar'
import useWOW from '../hooks/useWOW'
import rooms from '../data/rooms.json'

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85'

function Details() {
  useWOW()

  const { id } = useParams()
  const room = rooms.find((item) => item.id === Number(id))

  // لو الغرفة مش موجودة
  if (!room) {
    return (
      <main className="details-page">
        <Navbar />

        <section className="page-header">
          <span className="page-subtitle">404</span>

          <h1>Room Not Found</h1>

          <p>
            Sorry, we couldn't find the room you're looking for.
          </p>
        </section>

        <section className="details-section">
          <div
            className="rooms-container"
            style={{
              textAlign: 'center',
              paddingBottom: '60px',
            }}
          >
            <Link to="/rooms" className="details-back-btn">
              Back to Rooms
            </Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="details-page">
      <Navbar />

      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="rooms-container wow fadeInUp">
          <span className="page-subtitle">
            ROOM DETAILS
          </span>

          <h1>{room.name}</h1>

          <p>
            Discover everything about your room.
          </p>
        </div>
      </section>

      {/* DETAILS */}
      <section className="details-section">
        <div className="rooms-container">
          <div className="details-grid">

            {/* IMAGE */}
            <div className="details-image wow fadeInLeft">
              <img
                src={room.image || FALLBACK_IMAGE}
                alt={room.name}
                onError={(e) => {
                  e.currentTarget.onerror = null
                  e.currentTarget.src = FALLBACK_IMAGE
                }}
              />
            </div>

            {/* CONTENT */}
            <div className="details-content wow fadeInRight">
              <span className="room-category">
                {room.category}
              </span>

              <h2>{room.name}</h2>

              <div className="details-price">
                ${room.price}
                <span>/ night</span>
              </div>

              <p className="details-description">
                {room.description}
              </p>

              {/* ROOM INFO */}
              <div className="details-info">
                <div>
                  <span>
                    <FaUsers />
                  </span>

                  <div>
                    <strong>Guests</strong>
                    <span>{room.capacity} People</span>
                  </div>
                </div>

                <div>
                  <span>
                    <FaBed />
                  </span>

                  <div>
                    <strong>Beds</strong>
                    <span>{room.beds}</span>
                  </div>
                </div>

                <div>
                  <span>
                    <FaRulerCombined />
                  </span>

                  <div>
                    <strong>Room Size</strong>
                    <span>{room.size}</span>
                  </div>
                </div>
              </div>

              {/* AMENITIES */}
              <div className="amenities">
                <h3>Room Amenities</h3>

                <div className="amenities-list">
                  <span>
                    <FaCheck /> Free Wi-Fi
                  </span>

                  <span>
                    <FaCheck /> Air Conditioning
                  </span>

                  <span>
                    <FaCheck /> Smart TV
                  </span>

                  <span>
                    <FaCheck /> Room Service
                  </span>

                  <span>
                    <FaCheck /> Private Bathroom
                  </span>

                  <span>
                    <FaCheck /> Breakfast Included
                  </span>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="details-buttons">
                <Link
                  to={`/register?roomId=${room.id}`}
                  className="details-book-btn"
                >
                  Book Now
                </Link>

                <Link
                  to="/rooms"
                  className="details-back-btn"
                >
                  Back to Rooms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Details