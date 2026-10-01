import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

const USERS_KEY = 'hotelUsers'
const CURRENT_USER_KEY = 'hotelCurrentUser'
const BOOKINGS_KEY = 'hotelBookings'
const PENDING_BOOKING_KEY = 'hotelPendingBooking'

const readJSON = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : fallback
  } catch {
    return fallback
  }
}

// إنشاء حجز حقيقي مربوط بالمستخدم في "الداتابيز"
const createBooking = (safeUser, info) => {
  const bookings = readJSON(BOOKINGS_KEY, [])

  const newBooking = {
    id: Date.now(),
    roomId: info.roomId,
    userId: safeUser.id,
    firstName: safeUser.firstName,
    lastName: safeUser.lastName,
    email: safeUser.email,
    phone: safeUser.phone,
    checkIn: info.checkIn || '',
    checkOut: info.checkOut || '',
    guests: info.guests || '2',
    requests: info.requests || '',
    status: 'pending',
    bookedAt: new Date().toISOString(),
  }

  localStorage.setItem(BOOKINGS_KEY, JSON.stringify([...bookings, newBooking]))
  localStorage.removeItem(PENDING_BOOKING_KEY)

  return true
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readJSON(CURRENT_USER_KEY, null))

  // الجلسة تفضل شغالة حتى بعد الـ Refresh
  useEffect(() => {
    if (user) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user))
    } else {
      localStorage.removeItem(CURRENT_USER_KEY)
    }
  }, [user])

  const register = (data, bookingInfo = null) => {
    const users = readJSON(USERS_KEY, [])

    const exists = users.some(
      (u) => u.email.toLowerCase() === data.email.toLowerCase()
    )

    if (exists) {
      return {
        ok: false,
        message: 'This email is already registered. Please login.',
      }
    }

    const newUser = {
      id: Date.now(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      password: data.password,
    }

    localStorage.setItem(USERS_KEY, JSON.stringify([...users, newUser]))

    const safeUser = {
      id: newUser.id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      phone: newUser.phone,
    }

    setUser(safeUser)

    // التسجيل + الحجز في نفس اللحظة بالتفاصيل اللي المستخدم كتبها
    const bookingCreated = bookingInfo
      ? createBooking(safeUser, bookingInfo)
      : false

    return { ok: true, bookingCreated }
  }

  // حجز مباشر لمستخدم مسجل خلاص
  const bookRoom = (bookingInfo) => {
    if (!user) return { ok: false }
    const created = createBooking(user, bookingInfo)
    return { ok: created }
  }

  const login = ({ email, password }) => {
    const users = readJSON(USERS_KEY, [])

    const found = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password
    )

    if (!found) {
      return { ok: false, message: 'Invalid email or password.' }
    }

    const safeUser = {
      id: found.id,
      firstName: found.firstName,
      lastName: found.lastName,
      email: found.email,
      phone: found.phone,
    }

    setUser(safeUser)

    return { ok: true, bookingCreated: false }
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, register, login, logout, bookRoom }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)