// import { useState } from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import './Header.css'

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false)

//   const closeMenu = () => setMenuOpen(false)

//   return (
//     <header className="hotel-header">
//       <div className="hotel-header-container">

//         <Link
//           to="/"
//           className="hotel-logo"
//           onClick={closeMenu}
//         >
//           HOTEL
//         </Link>

//         <button
//           className="hotel-menu-button"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Open menu"
//         >
//           ☰
//         </button>

//         <nav className={`hotel-nav ${menuOpen ? 'open' : ''}`}>

//           <NavLink
//             to="/"
//             end
//             onClick={closeMenu}
//           >
//             Home
//           </NavLink>

//           <NavLink
//             to="/rooms"
//             onClick={closeMenu}
//           >
//             Rooms
//           </NavLink>

//           <NavLink
//             to="/about"
//             onClick={closeMenu}
//           >
//             About
//           </NavLink>

//           <NavLink
//             to="/bookings"
//             onClick={closeMenu}
//           >
//             My Bookings
//           </NavLink>

//           <Link
//             to="/rooms"
//             className="hotel-nav-button"
//             onClick={closeMenu}
//           >
//             Book Now
//           </Link>

//         </nav>

//       </div>
//     </header>
//   )
// }

// export default Header