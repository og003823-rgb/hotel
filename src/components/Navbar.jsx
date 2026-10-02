import { Link } from 'react-router-dom'
import { FaHotel, FaShoppingCart } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">

        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <FaHotel />
          <span>HOTEL</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#hotelNavbar"
          aria-controls="hotelNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="hotelNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/rooms">Rooms</Link>
            </li>

            {/* <li className="nav-item">
              <Link className="nav-link d-flex align-items-center gap-1" to="/cart">
                <FaShoppingCart />
                Cart
              </Link>
            </li> */}

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar