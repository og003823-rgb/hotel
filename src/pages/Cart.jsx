import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'

const rooms = {
  1: {
    name: 'Deluxe King Room',
    category: 'DELUXE ROOM',
    price: 180,
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=80',
  },

  2: {
    name: 'Luxury Suite',
    category: 'LUXURY SUITE',
    price: 280,
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
  },

  3: {
    name: 'Executive Room',
    category: 'EXECUTIVE ROOM',
    price: 220,
    image:
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1000&q=80',
  },

  4: {
    name: 'Presidential Suite',
    category: 'PRESIDENTIAL SUITE',
    price: 450,
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
  },

  5: {
    name: 'Superior Double Room',
    category: 'SUPERIOR ROOM',
    price: 160,
    image:
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=80',
  },

  6: {
    name: 'Classic King Room',
    category: 'CLASSIC ROOM',
    price: 145,
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80',
  },

  7: {
    name: 'Garden View Room',
    category: 'GARDEN ROOM',
    price: 175,
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
  },

  8: {
    name: 'Ocean View Suite',
    category: 'OCEAN SUITE',
    price: 320,
    image:
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80',
  },

  9: {
    name: 'Family Room',
    category: 'FAMILY ROOM',
    price: 240,
    image:
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80',
  },

  10: {
    name: 'Premium Suite',
    category: 'PREMIUM SUITE',
    price: 350,
    image:
      'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1000&q=80',
  },

  11: {
    name: 'Royal Suite',
    category: 'ROYAL SUITE',
    price: 500,
    image:
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1000&q=80',
  },

  12: {
    name: 'Twin Deluxe Room',
    category: 'DELUXE ROOM',
    price: 190,
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80',
  },

  13: {
    name: 'Honeymoon Suite',
    category: 'ROMANTIC SUITE',
    price: 380,
    image:
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80',
  },

  14: {
    name: 'City View Room',
    category: 'CITY ROOM',
    price: 170,
    image:
      'https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1000&q=80',
  },

  15: {
    name: 'Grand Suite',
    category: 'GRAND SUITE',
    price: 420,
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
  },

  16: {
    name: 'Modern Double Room',
    category: 'MODERN ROOM',
    price: 155,
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80',
  },

  17: {
    name: 'Terrace Suite',
    category: 'TERRACE SUITE',
    price: 300,
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=80',
  },

  18: {
    name: 'Luxury Twin Room',
    category: 'LUXURY ROOM',
    price: 210,
    image:
      'https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=1000&q=80',
  },

  19: {
    name: 'Boutique Suite',
    category: 'BOUTIQUE SUITE',
    price: 270,
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
  },

  20: {
    name: 'Royal King Room',
    category: 'ROYAL ROOM',
    price: 250,
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80',
  },
}

function Cart() {
  const [booking, setBooking] = useState(null)

  useEffect(() => {
    const savedBooking = localStorage.getItem('hotelBooking')

    if (savedBooking) {
      try {
        setBooking(JSON.parse(savedBooking))
      } catch (error) {
        console.error('Invalid booking data:', error)
        localStorage.removeItem('hotelBooking')
      }
    }
  }, [])

  const cancelBooking = () => {
    const confirmed = window.confirm(
      'Are you sure you want to cancel this booking?'
    )

    if (!confirmed) {
      return
    }

    localStorage.removeItem('hotelBooking')

    setBooking(null)
  }

  const room = booking
    ? rooms[Number(booking.roomId)]
    : null

  return (
    <main className="cart-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="cart-header">

        <div className="cart-container">

          <span className="cart-label">
            MY RESERVATION
          </span>

          <h1>
            My Booking
          </h1>

          <p>
            View and manage your current hotel reservation.
          </p>

        </div>

      </section>


      {/* =====================================================
          BOOKING CONTENT
      ===================================================== */}

      <section className="cart-section">

        <div className="cart-container">

          {!booking || !room ? (

            /* ================= EMPTY ================= */

            <div className="cart-empty">

              <div className="cart-empty-icon">
                ♡
              </div>

              <span className="cart-empty-label">
                NO BOOKING FOUND
              </span>

              <h2>
                You don't have a booking yet.
              </h2>

              <p>
                Choose a room and complete the reservation
                form to see your booking here.
              </p>

              <Link
                to="/rooms"
                className="cart-gold-button"
              >
                Browse Rooms
              </Link>

            </div>

          ) : (

            /* ================= BOOKING ================= */

            <div className="cart-content">

              <article className="booking-card">

                {/* ROOM IMAGE */}

                <div className="booking-card-image">

                  <img
                    src={room.image}
                    alt={room.name}
                  />

                  <span className="booking-status">
                    CONFIRMED
                  </span>

                </div>


                {/* ROOM CONTENT */}

                <div className="booking-card-content">

                  <div className="booking-card-top">

                    <div>

                      <span className="booking-category">
                        {room.category}
                      </span>

                      <h2>
                        {room.name}
                      </h2>

                    </div>


                    <div className="booking-price">

                      ${room.price}

                      <span>
                        / night
                      </span>

                    </div>

                  </div>


                  {/* BOOKING INFORMATION */}

                  <div className="booking-details">

                    <div className="booking-detail">

                      <small>
                        GUEST
                      </small>

                      <strong>
                        {booking.firstName}{' '}
                        {booking.lastName}
                      </strong>

                    </div>


                    <div className="booking-detail">

                      <small>
                        EMAIL
                      </small>

                      <strong>
                        {booking.email}
                      </strong>

                    </div>


                    <div className="booking-detail">

                      <small>
                        PHONE
                      </small>

                      <strong>
                        {booking.phone}
                      </strong>

                    </div>


                    <div className="booking-detail">

                      <small>
                        GUESTS
                      </small>

                      <strong>
                        {booking.guests}
                      </strong>

                    </div>


                    <div className="booking-detail">

                      <small>
                        CHECK IN
                      </small>

                      <strong>
                        {booking.checkIn}
                      </strong>

                    </div>


                    <div className="booking-detail">

                      <small>
                        CHECK OUT
                      </small>

                      <strong>
                        {booking.checkOut}
                      </strong>

                    </div>

                  </div>


                  {/* SPECIAL REQUESTS */}

                  {booking.requests && (

                    <div className="booking-requests">

                      <small>
                        SPECIAL REQUESTS
                      </small>

                      <p>
                        {booking.requests}
                      </p>

                    </div>

                  )}


                  {/* BUTTONS */}

                  <div className="booking-card-actions">

                    <Link
                      to="/rooms"
                      className="booking-browse-button"
                    >
                      Browse Rooms
                    </Link>

                    <button
                      type="button"
                      className="booking-cancel-button"
                      onClick={cancelBooking}
                    >
                      Cancel Booking
                    </button>

                  </div>

                </div>

              </article>


              {/* INFO BOX */}

              <div className="booking-note">

                <div className="booking-note-icon">
                  ✓
                </div>

                <div>

                  <strong>
                    Reservation Request
                  </strong>

                  <p>
                    Your booking information is saved on this
                    device. Our hotel team will contact you to
                    confirm the reservation.
                  </p>

                </div>

              </div>

            </div>

          )}

        </div>

      </section>

    </main>
  )
}

export default Cart