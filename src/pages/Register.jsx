import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SiApplepay, SiVodafone } from 'react-icons/si'
import { FaArrowLeft } from 'react-icons/fa'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { useAuth } from '../context/AuthContext'
import './Register.css'

// أيقونة InstaPay — مربع بنفسجي متدرج + برق أبيض
function InstaPayIcon({ size = 30 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="instapayGradient" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0" stopColor="#8E3FFC" />
          <stop offset="1" stopColor="#4B1D9E" />
        </linearGradient>
      </defs>

      <rect width="48" height="48" rx="12" fill="url(#instapayGradient)" />

      <path
        d="M27 9 L15 27 H22.5 L21 39 L33 21 H25.5 Z"
        fill="#ffffff"
      />
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

// بيانات حساب الفندق — غيّرها لبياناتك الحقيقية
const HOTEL_ACCOUNTS = {
  InstaPay: {
    title: 'Transfer to our InstaPay address',
    address: 'grandhotel@instapay',
    note: 'Grand Hotel Co. — CIB Bank',
  },
  'Vodafone Cash': {
    title: 'Send money to our Vodafone Cash wallet',
    address: '0100 123 4567',
    note: 'Grand Hotel — Wallet Owner',
  },
}

// أسعار الغرف (لليلة واحدة)
const ROOM_PRICES = {
  1: 180, 2: 280, 3: 220, 4: 450, 5: 160,
  6: 145, 7: 175, 8: 320, 9: 240, 10: 350,
}

const getRoomPrice = (id) => ROOM_PRICES[Number(id)] || 150

// رقم عملية لـ Apple Pay (لأنها بتتم فورًا من غير رقم مرجعي)
const makeTransactionId = () =>
  'TXN-' +
  Date.now().toString(36).toUpperCase() +
  '-' +
  Math.random().toString(36).slice(2, 6).toUpperCase()

function Register() {
  const navigate = useNavigate()
  const { user, register, bookRoom } = useAuth()
  const [error, setError] = useState('')
  const [step, setStep] = useState('form') // form | payment
  const [paying, setPaying] = useState(false)

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
    payment: '',
    transactionRef: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // الرجوع للصفحة اللي قبلها
  const goBack = () => {
    if (step === 'payment') {
      setStep('form') // لو في صفحة الدفع → ارجع للفورم
    } else {
      navigate(-1) // لو في الفورم → ارجع للصفحة اللي جاية منها
    }
  }

  // نسخ بيانات الحساب
  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Copied!',
          text: text,
          showConfirmButton: false,
          timer: 1200,
        })
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Could not copy',
          text: 'Please copy the account details manually.',
          confirmButtonColor: '#c49b2c',
        })
      })
  }

  // حساب عدد الليالي والإجمالي
  const nights = (() => {
    if (!formData.checkIn || !formData.checkOut) return 0
    const diff = new Date(formData.checkOut) - new Date(formData.checkIn)
    return Math.max(1, Math.round(diff / 86400000))
  })()

  const totalPrice = getRoomPrice(formData.roomId) * nights

  // ===== الخطوة 1: التحقق من الفورم → فتح صفحة الدفع =====
  const handleFormSubmit = (e) => {
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

    if (!formData.payment) {
      Swal.fire({
        icon: 'warning',
        title: 'Payment Required 💳',
        text: 'Please select a payment method to complete your booking.',
        confirmButtonText: 'Choose Payment',
        confirmButtonColor: '#c49b2c',
      })
      return
    }

    setStep('payment')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // ===== الخطوة 2: تنفيذ الدفع =====
  const handlePayNow = () => {
    const ref = formData.transactionRef.trim().replace(/\s+/g, '')

    // ===== التحقق من رقم العملية (InstaPay / Vodafone Cash) =====
    if (formData.payment === 'InstaPay' || formData.payment === 'Vodafone Cash') {

      // لو سيبها فاضية
      if (!ref) {
        Swal.fire({
          icon: 'warning',
          title: 'Reference Required 🧾',
          text: `Please transfer $${totalPrice} to the account shown above, then enter the transaction reference number from your payment app.`,
          confirmButtonText: 'OK',
          confirmButtonColor: '#c49b2c',
        })
        return
      }

      // لو الرقم غلط (مش أرقام أو أقل من 6 أو أكتر من 20)
      if (!/^\d{6,20}$/.test(ref)) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Transaction Reference ❌',
          html: `
            <p>The reference number you entered is <b>wrong</b>.</p>
            <p style="font-size:13.5px; color:#777;">
              It must be <b>digits only</b> (6 to 20 digits), exactly as it
              appears in your payment app confirmation.
            </p>
          `,
          confirmButtonText: 'Try Again',
          confirmButtonColor: '#c49b2c',
        })
        return
      }
    }

    setPaying(true)

    // شاشة المعالجة
    Swal.fire({
      title: 'Processing Payment…',
      html: `Verifying <b>$${totalPrice}</b> payment via ${formData.payment}`,
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading()
      },
    })

    setTimeout(() => {
      // Apple Pay بيولّد رقم عملية تلقائي — الباقي رقم التحويل من المستخدم
      const transactionId =
        formData.payment === 'Apple Pay'
          ? makeTransactionId()
          : ref

      const bookingInfo = {
        roomId: formData.roomId,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        guests: formData.guests,
        payment: formData.payment,
        paymentStatus: 'paid',
        transactionId: transactionId,
        paidAt: new Date().toISOString(),
        walletRef:
          formData.payment === 'Apple Pay'
            ? 'Apple Pay'
            : HOTEL_ACCOUNTS[formData.payment].address,
      }

      // الحجز بيتسجل في الداتابيز بعد نجاح الدفع
      const result = user
        ? bookRoom(bookingInfo)
        : register(formData, bookingInfo)

      Swal.close()
      setPaying(false)

      if (!result.ok) {
        Swal.fire({
          icon: 'error',
          title: 'Oops…',
          text: result.message || 'Something went wrong.',
          confirmButtonColor: '#c49b2c',
        })
        return
      }

      Swal.fire({
        icon: 'success',
        title: 'Payment Successful! 🎉',
        html: `
          <p>Your room has been reserved.</p>
          <p>Paid: <b>$${totalPrice}</b> via <b>${formData.payment}</b></p>
          <p style="color:#888; font-size:13px;">Transaction: <b>${transactionId}</b></p>
        `,
        confirmButtonText: 'Go to My Bookings',
        confirmButtonColor: '#c49b2c',
      }).then(() => navigate('/booking'))
    }, 2200)
  }

  return (
    <main className="register-page">

      <div className="register-container">

        {/* ===== BACK BUTTON ===== */}

        <button
          type="button"
          className="register-back-button"
          onClick={goBack}
        >
          <FaArrowLeft />
          <span>Back</span>
        </button>

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


          {/* ================= RIGHT — FORM / PAYMENT ================= */}

          <div className="register-form-wrapper">

            {/* ==================== PAYMENT STEP ==================== */}

            {step === 'payment' ? (

              <div className="register-payment-step">

                <div className="register-form-head">

                  <h2>Complete Payment</h2>

                  <p>
                    Review your order and confirm payment
                  </p>

                </div>


                {/* ===== ORDER SUMMARY ===== */}

                <div className="register-summary">

                  <div className="register-summary-row">
                    <span>Room</span>
                    <strong>#{formData.roomId}</strong>
                  </div>

                  <div className="register-summary-row">
                    <span>Check In</span>
                    <strong>{formData.checkIn}</strong>
                  </div>

                  <div className="register-summary-row">
                    <span>Check Out</span>
                    <strong>{formData.checkOut}</strong>
                  </div>

                  <div className="register-summary-row">
                    <span>Guests</span>
                    <strong>{formData.guests}</strong>
                  </div>

                  <div className="register-summary-row">
                    <span>Nights</span>
                    <strong>{nights}</strong>
                  </div>

                  <div className="register-summary-row">
                    <span>Price / night</span>
                    <strong>${getRoomPrice(formData.roomId)}</strong>
                  </div>

                  <div className="register-summary-row">
                    <span>Payment Method</span>
                    <strong>{formData.payment}</strong>
                  </div>

                  <div className="register-summary-total">
                    <span>Total</span>
                    <strong>${totalPrice}</strong>
                  </div>

                </div>


                {/* ===== HOTEL ACCOUNT DETAILS ===== */}

                {(formData.payment === 'InstaPay' ||
                  formData.payment === 'Vodafone Cash') && (

                  <div className="register-bank-box">

                    <div className="register-bank-head">
                      {HOTEL_ACCOUNTS[formData.payment].title}
                    </div>

                    <div className="register-bank-details">

                      <strong>
                        {HOTEL_ACCOUNTS[formData.payment].address}
                      </strong>

                      <button
                        type="button"
                        className="register-copy-btn"
                        onClick={() =>
                          handleCopy(HOTEL_ACCOUNTS[formData.payment].address)
                        }
                      >
                        Copy
                      </button>

                    </div>

                    <small>
                      {HOTEL_ACCOUNTS[formData.payment].note} — Amount to
                      transfer: <b>${totalPrice}</b>
                    </small>

                  </div>

                )}


                {/* ===== TRANSACTION REFERENCE INPUT ===== */}

                {(formData.payment === 'InstaPay' ||
                  formData.payment === 'Vodafone Cash') && (

                  <div className="register-field">
                    <label htmlFor="transactionRef">
                      Transaction Reference Number
                    </label>
                    <input
                      id="transactionRef"
                      type="text"
                      name="transactionRef"
                      inputMode="numeric"
                      placeholder="e.g. 945612321"
                      value={formData.transactionRef}
                      onChange={handleChange}
                    />
                    <small className="register-field-hint">
                      After transferring the amount, enter the reference
                      number shown in your payment app confirmation.
                    </small>
                  </div>

                )}


                {/* ===== APPLE PAY NOTE ===== */}

                {formData.payment === 'Apple Pay' && (

                  <div className="register-pay-note">
                     You will confirm this payment with Face ID
                  </div>

                )}


                {/* ===== PAY BUTTON ===== */}

                <button
                  type="button"
                  className="register-submit"
                  onClick={handlePayNow}
                  disabled={paying}
                >
                  {paying ? 'Processing…' : `Pay $${totalPrice} Now`}
                </button>


                <button
                  type="button"
                  className="register-back-link"
                  onClick={() => setStep('form')}
                >
                  ← Back to details
                </button>

              </div>

            ) : (

            /* ==================== FORM STEP ==================== */

            <>

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


              <form onSubmit={handleFormSubmit}>

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
                  Proceed to Payment 💳
                </button>

              </form>


              {!user && (
                <p className="register-alt">
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              )}

            </>

            )}

          </div>

        </div>

      </div>

    </main>
  )
}

export default Register