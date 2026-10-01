import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { useAuth } from '../context/AuthContext'

function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({ email: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    const result = login(formData)

    if (!result.ok) {
      setError(result.message)
      return
    }

    Swal.fire({
      icon: 'success',
      title: 'Welcome back! 👋',
      text: 'You are logged in.',
      confirmButtonText: 'Go to My Bookings',
      confirmButtonColor: '#c49b2c',
    }).then(() => navigate('/booking'))
  }

  return (
    <main
      className="d-flex align-items-center justify-content-center py-5"
      style={{ minHeight: '100vh', background: '#f7f2ea' }}
    >
      <div
        className="card border-0 shadow-sm"
        style={{
          width: '100%',
          maxWidth: 420,
          background: '#ffffff',
          borderTop: '3px solid #c49b2c',
          borderRadius: 0,
        }}
      >
        <div className="card-body p-4 p-md-5">

          <span
            className="text-uppercase d-block mb-1"
            style={{ color: '#c49b2c', letterSpacing: 3, fontSize: 12, fontWeight: 600 }}
          >
            Welcome Back
          </span>

          <h2 className="mb-1" style={{ color: '#222', fontWeight: 700 }}>
            Login
          </h2>

          <p style={{ color: '#7a7a7a' }}>
            Enter your email to access your bookings.
          </p>

          {error && (
            <div
              className="py-2 px-3 small mb-3"
              style={{
                background: '#fdecea',
                borderLeft: '3px solid #c0392b',
                color: '#96281b',
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label" style={{ color: '#555', fontSize: 14 }}>
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn w-100 text-white fw-bold py-2"
              style={{ background: '#c49b2c', border: 'none' }}
            >
              Login
            </button>
          </form>

          <p className="mt-3 mb-0 text-center" style={{ color: '#7a7a7a' }}>
            Dont have an account?{' '}
            <Link to="/register" style={{ color: '#c49b2c', fontWeight: 600 }}>
              Register
            </Link>
          </p>

        </div>
      </div>
    </main>
  )
}

export default Login