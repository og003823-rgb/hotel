import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Rooms from './pages/Rooms'
import Details from './pages/Details'
import Cart from './pages/Cart'
import Booking from './pages/Booking'

// يرجع الصفحة لفوق مع أي تنقل — لمسة رعة 😄
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// صفحة 404 شيك — خلاص مفيش صفحات فاضية تاني
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
        <h1 style={{ fontSize: '90px', color: '#c9a227', margin: 0 }}>
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
    <BrowserRouter>

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/rooms" element={<Rooms />} />

        {/* ✅ الراوت ده كان الناقص — ده اللي بيفتح صفحة الغرفة */}

        <Route path="/rooms/:id" element={<Details />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/booking" element={<Booking />} />

        {/* أي لينك غلط → 404 بدل الصفحة الفاضية */}

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App