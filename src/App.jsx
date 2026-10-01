import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

import Home from './pages/Home'
import About from './pages/About'
import Rooms from './pages/Rooms'
import RoomDetails from './pages/RoomDetails'
import Booking from './pages/Booking'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Routes>

      </BrowserRouter>
    </AuthProvider>
  )
}

export default App