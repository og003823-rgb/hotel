
import { useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Rooms from './pages/Rooms'
import Details from './pages/Details'
import Cart from './pages/Cart'
import Booking from './pages/Booking'
import Register from './pages/Register'
import { AuthProvider } from './context/AuthContext'

// يرجع الصفحة لفوق مع أي تنقل
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// صفحة 404
function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5f0e7',
        fontFamily: 'Poppins, sans-serif',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <div>
        <h1
          style={{
            fontSize: '90px',
            color: '#c9a227',
            margin: 0,
          }}
        >
          404
        </h1>

        <h2 style={{ color: '#291b13', margin: '10px 0' }}>
          Page Not Found
        </h2>

        <p style={{ color: '#756b64', marginBottom: '28px' }}>
          The page you are looking for doesn't exist.
        </p>

        <Link
          to="/"
          style={{
            background: '#c9a227',
            color: '#ffffff',
            padding: '13px 28px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '700',
          }}
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Rooms */}
          <Route path="/rooms" element={<Rooms />} />

          {/* Room Details */}
          <Route path="/rooms/:id" element={<Details />} />

          {/* Cart */}
          <Route path="/cart" element={<Cart />} />

          {/* Register */}
          <Route path="/register" element={<Register />} />

          {/* Booking */}
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking/:id" element={<Booking />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App