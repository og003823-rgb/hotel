import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SiApplepay, SiVodafone } from 'react-icons/si'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { useAuth } from '../context/AuthContext'
import './Register.css'

// أيقونة InstaPay بألوان البراند الرسمية (مش موجودة في مكتبات الأيقونات)
function InstaPayIcon({ size = 30 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="21" fill="#0B6B57" />
      <path
        d="M14.5 27.5A10 10 0 0 1 27 14.8"
        stroke="#8FF0C8"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M33.5 20.5A10 10 0 0 1 21 33.2"
        stroke="#8FF0C8"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path d="M28.6 10.9l1.2 6.5-6.4-1.6 5.2-4.9z" fill="#8FF0C8" />
      <path d="M19.4 37.1l-1.2-6.5 6.4 1.6-5.2 4.9z" fill="#8FF0C8" />
    </svg>
  )
}

const PAYMENT_METHODS = [
  { id: 'InstaPay', name: 'InstaPay', icon: <InstaPayIcon size={30} /> },
  {
    id: 'Vodafone Cash',
    name: 'Vodafone Cash',
    icon: <SiVodafone size={30} color="#E60000" />,
  },
  { id: 'Apple Pay', name: 'Apple Pay', icon: <SiApplepay size={34} /> },
]

function Register() {
  const navigate = useNavigate()
  const { user, register, bookRoom } = useAuth()
  const [error, setError] = useState('')

  const [pendingBooking] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('hotelPendingBooking'))
    } catch {
      return null
    }
  })

  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    roomId: pendingBooking?.roomId || '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    payment: 'InstaPay',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!formData.roomId || Number(formData.roomId) < 1) {
      setError('Please enter a valid room number.')
      return
    }

    if (!formData.checkIn || !formData.checkOut) {
      setError('Please select both check-in and check-out dates.')
      return
    }

    if (formData.checkOut <= formData.checkIn) {
      setError('Check-out date must be after check-in date.')
      return
    }

    const bookingInfo = {
      roomId: formData.roomId,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: formData.guests,
      payment: formData.payment,
    }

    if (user) {
      const result = bookRoom(bookingInfo)

      if (!result.ok) {
        setError('Something went wrong. Please try again.')
        return
      }

      Swal.fire({
        icon: 'success',
        title: 'Booking Confirmed! 🎉',
        text: `Your room has been reserved. Payment: ${formData.payment}`,
        confirmButtonText: 'Go to My Bookings',
        confirmButtonColor: '#c49b2c',
      }).then(() => navigate('/booking'))
      return
    }

    const result = register(formData, bookingInfo)

    if (!result.ok) {
      setError(result.message)
      return
    }

    Swal.fire({
      icon: 'success',
      title: 'Booking Confirmed! 🎉',
      text: `Your account has been created. Payment: ${formData.payment}`,
      confirmButtonText: 'Go to My Bookings',
      confirmButtonColor: '#c49b2c',
    }).then(() => navigate('/booking'))
  }

  return (
    <main className="register-page">

      <div className="register-container">

        <div className="register-grid">

          {/* ================= LEFT — INFO ================= */}

          <div className="register-info">

            <span className="register-label">
              Hotel Reservation
            </span>

            <h2>
              Your journey to a
              <br />
              perfect stay starts here.
            </h2>

            <p className="register-info-text">
              Choose your room and dates, create your account in less than a
              minute — your booking is saved instantly and stays safe even
              after refreshing the page.
            </p>


            <div className="register-benefits">

              <div>
                <span className="register-benefit-icon">✓</span>
                <div>
                  <strong>Best Rate</strong>
                  <span>Guaranteed competitive prices</span>
                </div>
              </div>


              <div>
                <span className="register-benefit-icon">✓</span>
                <div>
                  <strong>Easy &amp; Secure Booking</strong>
                  <span>Simple reservation saved to your account</span>
                </div>
              </div>


              <div>
                <span className="register-benefit-icon">✓</span>
                <div>
                  <strong>Flexible Payment</strong>
                  <span>InstaPay, Vodafone Cash or Apple Pay</span>
                </div>
              </div>

            </div>

          </div>


          {/* ================= RIGHT — FORM ================= */}

          <div className="register-form-wrapper">

            <div className="register-form-head">

              <h2>
                {user ? 'Complete Your Booking' : 'Create Account'}
              </h2>

              <p>
                {user
                  ? 'You are logged in — just pick your dates'
                  : 'Register and book your room in one step'}
              </p>

            </div>


            {error && (
              <div className="register-error">
                {error}
              </div>
            )}


            <form onSubmit={handleSubmit}>

              {/* ===== ACCOUNT DETAILS ===== */}

              <div className="register-divider">
                Account Details
              </div>


              <div className="register-row">

                <div className="register-field">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="Ahmed"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>


                <div className="register-field">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Mohamed"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>


              <div className="register-row">

                <div className="register-field">
                  <label htmlFor="email">Email</label>
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


                <div className="register-field">
                  <label htmlFor="phone">Phone</label>
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


              {/* ===== BOOKING DETAILS ===== */}

              <div className="register-divider">
                Booking Details
              </div>


              <div className="register-row">

                <div className="register-field">
                  <label htmlFor="roomId">Room Number</label>
                  <input
                    id="roomId"
                    type="number"
                    min="1"
                    name="roomId"
                    placeholder="e.g. 2"
                    value={formData.roomId}
                    onChange={handleChange}
                    required
                  />
                </div>


                <div className="register-field">
                  <label htmlFor="guests">Guests</label>
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

              </div>


              <div className="register-row">

                <div className="register-field">
                  <label htmlFor="checkIn">Check In</label>
                  <input
                    id="checkIn"
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                  />
                </div>


                <div className="register-field">
                  <label htmlFor="checkOut">Check Out</label>
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


              {/* ===== PAYMENT METHOD ===== */}

              <div className="register-divider">
                Payment Method
              </div>


              <div className="register-payment-options">

                {PAYMENT_METHODS.map((method) => (
                  <label
                    key={method.id}
                    className="register-payment-option"
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={formData.payment === method.id}
                      onChange={handleChange}
                    />

                    <div className="register-payment-card">

                      <span className="register-payment-icon">
                        {method.icon}
                      </span>

                      <span className="register-payment-name">
                        {method.name}
                      </span>

                    </div>

                  </label>
                ))}

              </div>


              <button type="submit" className="register-submit">
                {user ? 'Confirm Booking Now' : 'Create Account and Save Booking'}
              </button>

            </form>


            {!user && (
              <p className="register-alt">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            )}

          </div>

        </div>

      </div>

    </main>
  )
}

export default Register