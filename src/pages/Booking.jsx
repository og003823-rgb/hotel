import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Header from '../components/Header'
import './Booking.css'

const BOOKINGS_KEY = 'hotelBookings'

// قراءة كل الحجوزات المحفوظة من المتصفح
const getBookings = () => {
  try {
    const saved = localStorage.getItem(BOOKINGS_KEY)
    const parsed = saved ? JSON.parse(saved) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function Booking() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()

  const [bookings, setBookings] = useState(getBookings)
  const [showForm, setShowForm] = useState(false)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    requests: '',
  })

  // أي تغيير في الحجوزات بيتحفظ فورًا في المتصفح
  useEffect(() => {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings))
  }, [bookings])

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newBooking = {
      id: Date.now(),
      roomId: id,
      userId: user ? user.id : null,
      ...formData,
      payment: '',
      status: 'pending',
      bookedAt: new Date().toISOString(),
    }

    // المستخدم مش مسجل → خزّن الحجز مؤقتًا وروّحه صفحة التسجيل
    if (!user) {
      localStorage.setItem('hotelPendingBooking', JSON.stringify(newBooking))
      navigate('/register')
      return
    }

    // المستخدم مسجل → أضف الحجز للقائمة
    setBookings((prev) => [...prev, newBooking])

    // تفريغ الفورم بعد الحجز
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: '2',
      requests: '',
    })

    // رجوع لقائمة الحجوزات
    setShowForm(false)
  }

  // تأكيد الحجز
  const confirmBooking = (bookingId) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.id === bookingId ? { ...b, status: 'confirmed' } : b
      )
    )
  }

  // إلغاء الحجز
  const cancelBooking = (bookingId) => {
    setBookings((prev) => prev.filter((b) => b.id !== bookingId))
  }

  // كل مستخدم يشوف حجوزاته هو بس
  const myBookings = user
    ? bookings.filter((b) => b.userId === user.id)
    : []

  const totalRooms = myBookings.length
  const confirmedRooms = myBookings.filter((b) => b.status === 'confirmed').length
  const pendingRooms = totalRooms - confirmedRooms

  return (
    <main className="booking-page">

      {/* ================= HEADER (ثابت مع السكرول) ================= */}

      <Header showBookNow={true} />


      {/* ================= PAGE HEADER ================= */}

      <section className="booking-header">

        <div className="booking-container">

          <Link
            to="/rooms"
            className="booking-back-button"
          >
            ← Back to Rooms
          </Link>

          <span className="booking-header-label">
            RESERVATION
          </span>

          <h1>
            My Bookings
          </h1>

          <p>
            Manage your room reservations below.
          </p>

        </div>

      </section>


      {/* ================= BOOKINGS SECTION ================= */}

      <section className="booking-section">

        <div className="booking-container">

          {/* ================= STATS ================= */}

          <div className="bookings-stats">

            <div className="booking-stat-card">
              <strong>
                {totalRooms}
              </strong>
              <span>
                Rooms Booked
              </span>
            </div>

            <div className="booking-stat-card">
              <strong>
                {confirmedRooms}
              </strong>
              <span>
                Confirmed
              </span>
            </div>

            <div className="booking-stat-card">
              <strong>
                {pendingRooms}
              </strong>
              <span>
                Pending
              </span>
            </div>

          </div>


          {/* ================= TOOLBAR ================= */}

          <div className="bookings-toolbar">

            <button
              type="button"
              className="booking-gold-btn"
              onClick={() => setShowForm((s) => !s)}
            >
              {showForm
                ? 'Close Form'
                : id
                  ? `+ Book Room #${id}`
                  : '+ New Booking'}
            </button>

          </div>


          {/* ================= FORM (مخفي افتراضيًا) ================= */}

          {showForm && (

            <div className="booking-grid">

              {/* ================= INFO ================= */}

              <div className="booking-info">

                <span className="booking-label">
                  HOTEL RESERVATION
                </span>

                <h2>
                  Make your stay
                  <br />
                  unforgettable.
                </h2>

                <p>
                  Fill in your details and preferred dates.
                  Our hotel team will take care of the rest.
                </p>


                <div className="booking-benefits">

                  <div>
                    <strong>
                      ✓ Best Rate
                    </strong>
                    <span>
                      Guaranteed competitive prices
                    </span>
                  </div>


                  <div>
                    <strong>
                      ✓ Easy Booking
                    </strong>
                    <span>
                      Simple and secure reservation
                    </span>
                  </div>


                  <div>
                    <strong>
                      ✓ Premium Service
                    </strong>
                    <span>
                      Our team is here for you
                    </span>
                  </div>

                </div>

              </div>


              {/* ================= FORM ================= */}

              <div className="booking-form-wrapper">

                <form
                  className="booking-form"
                  onSubmit={handleSubmit}
                >

                  <div className="booking-form-title">

                    <div>
                      <span>
                        RESERVATION
                      </span>

                      <h2>
                        Reservation Details
                      </h2>
                    </div>

                    <p>
                      Room ID: #{id || '—'}
                    </p>

                  </div>


                  {/* ================= NAME ================= */}

                  <div className="booking-row">

                    <div className="booking-field">
                      <label htmlFor="firstName">
                        First Name
                      </label>

                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>


                    <div className="booking-field">
                      <label htmlFor="lastName">
                        Last Name
                      </label>

                      <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                  </div>


                  {/* ================= CONTACT ================= */}

                  <div className="booking-row">

                    <div className="booking-field">
                      <label htmlFor="email">
                        Email Address
                      </label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>


                    <div className="booking-field">
                      <label htmlFor="phone">
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="+20 100 000 0000"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                  </div>


                  {/* ================= DATES ================= */}

                  <div className="booking-row">

                    <div className="booking-field">
                      <label htmlFor="checkIn">
                        Check In
                      </label>

                      <input
                        id="checkIn"
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        required
                      />
                    </div>


                    <div className="booking-field">
                      <label htmlFor="checkOut">
                        Check Out
                      </label>

                      <input
                        id="checkOut"
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        required
                      />
                    </div>

                  </div>


                  {/* ================= GUESTS ================= */}

                  <div className="booking-field">

                    <label htmlFor="guests">
                      Number of Guests
                    </label>

                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                    </select>

                  </div>


                  {/* ================= REQUESTS ================= */}

                  <div className="booking-field">

                    <label htmlFor="requests">
                      Special Requests
                    </label>

                    <textarea
                      id="requests"
                      name="requests"
                      rows="4"
                      placeholder="Any special requests?"
                      value={formData.requests}
                      onChange={handleChange}
                    />

                  </div>


                  {/* ================= SUBMIT ================= */}

                  <button
                    type="submit"
                    className="booking-submit"
                  >
                    Confirm Reservation
                  </button>

                </form>

              </div>

            </div>

          )}


          {/* ================= BOOKINGS LIST ================= */}

          {totalRooms === 0 ? (

            /* ================= EMPTY ================= */

            <div className="booking-empty">

              <div className="success-icon">
                🏨
              </div>

              <h2>
                No bookings yet
              </h2>

              <p>
                You haven't booked any rooms. Browse our rooms and
                reserve your stay.
              </p>

              <Link
                to="/rooms"
                className="booking-gold-btn"
              >
                Browse Rooms
              </Link>

            </div>

          ) : (

            /* ================= BOOKING CARDS ================= */

            <div className="bookings-list">

              {myBookings.map((booking) => (

                <div
                  key={booking.id}
                  className="booking-card"
                >

                  {/* CARD TOP */}

                  <div className="booking-card-top">

                    <h3>
                      Room #{booking.roomId}
                    </h3>

                    <span className={`booking-status ${booking.status}`}>
                      {booking.status === 'confirmed'
                        ? 'Confirmed'
                        : 'Pending'}
                    </span>

                  </div>


                  {/* CARD DETAILS */}

                  <div className="booking-card-details">

                    <div>
                      <span>
                        Guest
                      </span>
                      <strong>
                        {booking.firstName} {booking.lastName}
                      </strong>
                    </div>

                    <div>
                      <span>
                        Check In
                      </span>
                      <strong>
                        {booking.checkIn || '—'}
                      </strong>
                    </div>

                    <div>
                      <span>
                        Check Out
                      </span>
                      <strong>
                        {booking.checkOut || '—'}
                      </strong>
                    </div>

                    <div>
                      <span>
                        Guests
                      </span>
                      <strong>
                        {booking.guests}
                      </strong>
                    </div>

                    <div>
                      <span>
                        Payment
                      </span>
                      <strong>
                        {booking.payment || '—'}
                      </strong>
                    </div>

                  </div>


                  {/* CARD ACTIONS */}

                  <div className="booking-card-actions">

                    {booking.status !== 'confirmed' && (
                      <button
                        type="button"
                        className="booking-confirm-btn"
                        onClick={() => confirmBooking(booking.id)}
                      >
                        ✓ Confirm Booking
                      </button>
                    )}

                    <button
                      type="button"
                      className="booking-cancel-btn"
                      onClick={() => cancelBooking(booking.id)}
                    >
                      ✕ Cancel Booking
                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </section>

    </main>
  )
}

export default Booking