import { Link, useParams } from 'react-router-dom'
import roomsData from '../data/rooms.json'
import './RoomDetails.css'

function RoomDetails() {
  const { id } = useParams()

  const room = roomsData.find((item) => item.id === Number(id))

  if (!room) {
    return (
      <main className="details-page">
        <section className="page-header">
          <div className="rooms-container">
            <span className="page-subtitle">
              HOTEL ROOMS
            </span>

            <h1>Room Not Found</h1>

            <p>
              Sorry, we could not find the room you are looking for.
            </p>

            <Link
              to="/rooms"
              className="home-btn home-btn-gold"
            >
              Back To Rooms
            </Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="details-page">

      {/* ================= HEADER ================= */}

      <section className="page-header">

        <div className="rooms-container">

          <span className="page-subtitle">
            {room.category}
          </span>

          <h1>{room.name}</h1>

          <p>
            Everything you need for a comfortable and luxurious stay.
          </p>

        </div>

      </section>


      {/* ================= DETAILS ================= */}

      <section className="details-section">

        <div className="rooms-container">

          <div className="details-grid">

            {/* IMAGE */}

            <div className="details-image">

              <img
                src={room.image}
                alt={room.name}
              />

            </div>


            {/* CONTENT */}

            <div className="details-content">

              <span className="room-category">
                {room.category}
              </span>

              <h2>
                {room.name}
              </h2>

              <div className="details-price">
                ${room.price}
                <span> / night</span>
              </div>


              <p className="details-description">
                {room.description}
              </p>


              {/* ROOM INFO */}

              <div className="details-info">

                <div>

                  <span>👤</span>

                  <div>
                    <strong>Guests</strong>
                    <span>{room.capacity} Guests</span>
                  </div>

                </div>


                <div>

                  <span>▣</span>

                  <div>
                    <strong>Room Size</strong>
                    <span>{room.size}</span>
                  </div>

                </div>


                <div>

                  <span>🛏</span>

                  <div>
                    <strong>Bed Type</strong>
                    <span>{room.beds}</span>
                  </div>

                </div>

              </div>


              {/* AMENITIES */}

              <div className="amenities">

                <h3>
                  Room Amenities
                </h3>

                <div className="amenities-list">

                  <span>✓ Free Wi-Fi</span>

                  <span>✓ Air Conditioning</span>

                  <span>✓ Smart TV</span>

                  <span>✓ Room Service</span>

                  <span>✓ Mini Bar</span>

                  <span>✓ Private Bathroom</span>

                </div>

              </div>


              {/* BUTTONS */}

              <div className="details-buttons">

                <Link
                  to="/register"
                  onClick={() => {
                    localStorage.setItem(
                      'hotelPendingBooking',
                      JSON.stringify({ roomId: room.id })
                    )
                  }}
                  className="details-book-btn"
                >
                  Book Now
                </Link>

                <Link
                  to="/rooms"
                  className="details-back-btn"
                >
                  Back To Rooms
                </Link>

              

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default RoomDetails