import { Link, useParams } from 'react-router-dom'
import { FaUsers, FaBed, FaRulerCombined, FaCheck } from 'react-icons/fa'
import rooms from '../data/rooms.json'

function Details() {
  const { id } = useParams()

  const room = rooms.find((item) => item.id === Number(id))

  if (!room) {
    return (
      <main className="not-found-page">
        <div className="container text-center py-5">
          <h1>Room Not Found</h1>

          <p>
            Sorry, we couldn't find the room you're looking for.
          </p>

          <Link to="/rooms" className="btn btn-gold">
            Back to Rooms
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="details-page">

      <section className="page-header">
        <div className="container text-center">
          <p className="page-subtitle">
            ROOM DETAILS
          </p>

          <h1>{room.name}</h1>

          <p>
            Discover everything about your room.
          </p>
        </div>
      </section>

      <section className="details-section py-5">
        <div className="container">

          <div className="row g-5 align-items-start">

            <div className="col-lg-7">

              <div className="details-image">
                <img
                  src={room.image}
                  alt={room.name}
                />
              </div>

            </div>

            <div className="col-lg-5">

              <div className="details-content">

                <p className="room-category">
                  {room.category}
                </p>

                <h2>{room.name}</h2>

                <div className="details-price">
                  ${room.price}
                  <span>/ night</span>
                </div>

                <p className="details-description">
                  {room.description}
                </p>

                <div className="details-info">

                  <div>
                    <FaUsers />
                    <span>
                      <strong>Guests</strong>
                      {room.capacity} People
                    </span>
                  </div>

                  <div>
                    <FaBed />
                    <span>
                      <strong>Beds</strong>
                      {room.beds}
                    </span>
                  </div>

                  <div>
                    <FaRulerCombined />
                    <span>
                      <strong>Room Size</strong>
                      {room.size}
                    </span>
                  </div>

                </div>

                <div className="amenities">

                  <h3>
                    Room Amenities
                  </h3>

                  <div className="amenities-list">

                    <span>
                      <FaCheck />
                      Free Wi-Fi
                    </span>

                    <span>
                      <FaCheck />
                      Air Conditioning
                    </span>

                    <span>
                      <FaCheck />
                      Smart TV
                    </span>

                    <span>
                      <FaCheck />
                      Room Service
                    </span>

                    <span>
                      <FaCheck />
                      Private Bathroom
                    </span>

                    <span>
                      <FaCheck />
                      Breakfast Included
                    </span>

                  </div>

                </div>

                <div className="details-actions">

                  <button
                    className="btn btn-gold btn-lg"
                    onClick={() => {
                      const cart =
                        JSON.parse(localStorage.getItem('hotelCart')) || []

                      const exists = cart.some(
                        (item) => item.id === room.id
                      )

                      if (!exists) {
                        localStorage.setItem(
                          'hotelCart',
                          JSON.stringify([...cart, room])
                        )

                        alert('Room added to cart successfully!')
                      } else {
                        alert('This room is already in your cart.')
                      }
                    }}
                  >
                    Add to Cart
                  </button>

                  <Link
                    to="/rooms"
                    className="btn btn-outline-dark btn-lg"
                  >
                    Back to Rooms
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  )
}

export default Details