import { Link, useParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './RoomDetails.css'

const rooms = [
  {
    id: 1,
    name: 'Deluxe King Room',
    category: 'DELUXE ROOM',
    price: 180,
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80',
    description:
      'Elegant room with a comfortable king bed and a relaxing modern atmosphere. Perfect for guests looking for comfort and a peaceful stay.',
    guests: '2 Guests',
    size: '38 m²',
    bed: 'King Bed',
  },
  {
    id: 2,
    name: 'Luxury Suite',
    category: 'LUXURY SUITE',
    price: 280,
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    description:
      'A spacious luxury suite designed for guests looking for extra comfort, privacy and an unforgettable hotel experience.',
    guests: '3 Guests',
    size: '55 m²',
    bed: 'King Bed',
  },
  {
    id: 3,
    name: 'Executive Room',
    category: 'EXECUTIVE ROOM',
    price: 220,
    image:
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1200&q=80',
    description:
      'A refined room with elegant details, premium amenities and a peaceful view.',
    guests: '2 Guests',
    size: '42 m²',
    bed: 'King Bed',
  },
  {
    id: 4,
    name: 'Presidential Suite',
    category: 'PRESIDENTIAL SUITE',
    price: 450,
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    description:
      'Our most exclusive suite featuring generous space, exceptional luxury and premium hotel services.',
    guests: '4 Guests',
    size: '85 m²',
    bed: 'King Bed',
  },
  {
    id: 5,
    name: 'Superior Double Room',
    category: 'SUPERIOR ROOM',
    price: 160,
    image:
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80',
    description:
      'Comfortable and stylish accommodation perfect for couples or friends.',
    guests: '2 Guests',
    size: '35 m²',
    bed: 'Double Bed',
  },
  {
    id: 6,
    name: 'Classic King Room',
    category: 'CLASSIC ROOM',
    price: 145,
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    description:
      'A warm and comfortable room with everything you need for a pleasant stay.',
    guests: '2 Guests',
    size: '32 m²',
    bed: 'King Bed',
  },
  {
    id: 7,
    name: 'Garden View Room',
    category: 'GARDEN ROOM',
    price: 175,
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    description:
      'Wake up to beautiful garden views in this peaceful and naturally bright room.',
    guests: '2 Guests',
    size: '36 m²',
    bed: 'King Bed',
  },
  {
    id: 8,
    name: 'Ocean View Suite',
    category: 'OCEAN SUITE',
    price: 320,
    image:
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    description:
      'Enjoy breathtaking views and an elegant suite designed for memorable stays.',
    guests: '3 Guests',
    size: '60 m²',
    bed: 'King Bed',
  },
  {
    id: 9,
    name: 'Family Room',
    category: 'FAMILY ROOM',
    price: 240,
    image:
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
    description:
      'A spacious family-friendly room offering comfort for everyone.',
    guests: '4 Guests',
    size: '58 m²',
    bed: '2 Double Beds',
  },
  {
    id: 10,
    name: 'Premium Suite',
    category: 'PREMIUM SUITE',
    price: 350,
    image:
      'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80',
    description:
      'Premium accommodation combining modern design, comfort and luxury.',
    guests: '3 Guests',
    size: '65 m²',
    bed: 'King Bed',
  },
]

function RoomDetails() {
  const { id } = useParams()
  const { user } = useAuth()

  const room = rooms.find((item) => item.id === Number(id))

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
                    <span>{room.guests}</span>
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
                    <span>{room.bed}</span>
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
                    // مش مسجل → خزّن الغرفة المطلوبة وروّح التسجيل علطول
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