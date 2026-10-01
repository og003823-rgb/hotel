import { Link } from 'react-router-dom'
import BackButton from '../components/BackButton'
import './Rooms.css'

const rooms = [
  {
    id: 1,
    name: 'Deluxe King Room',
    category: 'DELUXE ROOM',
    price: 180,
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80',
    description:
      'Elegant room with a comfortable king bed and a relaxing modern atmosphere.',
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
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80',
    description:
      'A spacious luxury suite designed for guests looking for extra comfort and privacy.',
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
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=900&q=80',
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
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    description:
      'Our most exclusive suite featuring generous space and exceptional luxury.',
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
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=900&q=80',
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
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80',
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
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80',
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
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=80',
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
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=900&q=80',
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
      'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=900&q=80',
    description:
      'Premium accommodation combining modern design, comfort and luxury.',
    guests: '3 Guests',
    size: '65 m²',
    bed: 'King Bed',
  },
  {
    id: 11,
    name: 'Royal Suite',
    category: 'ROYAL SUITE',
    price: 500,
    image:
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=900&q=80',
    description:
      'An impressive suite with sophisticated interiors and first-class amenities.',
    guests: '4 Guests',
    size: '90 m²',
    bed: 'King Bed',
  },
  {
    id: 12,
    name: 'Twin Deluxe Room',
    category: 'DELUXE ROOM',
    price: 190,
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=900&q=80',
    description:
      'Two comfortable beds and a stylish interior make this room ideal for friends.',
    guests: '2 Guests',
    size: '40 m²',
    bed: 'Twin Beds',
  },
  {
    id: 13,
    name: 'Honeymoon Suite',
    category: 'ROMANTIC SUITE',
    price: 380,
    image:
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=900&q=80',
    description:
      'A romantic and elegant suite created for unforgettable special occasions.',
    guests: '2 Guests',
    size: '62 m²',
    bed: 'King Bed',
  },
  {
    id: 14,
    name: 'City View Room',
    category: 'CITY ROOM',
    price: 170,
    image:
      'https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=900&q=80',
    description:
      'Modern accommodation with beautiful city views and a calm atmosphere.',
    guests: '2 Guests',
    size: '37 m²',
    bed: 'King Bed',
  },
  {
    id: 15,
    name: 'Grand Suite',
    category: 'GRAND SUITE',
    price: 420,
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
    description:
      'A grand suite offering generous living space and sophisticated comfort.',
    guests: '4 Guests',
    size: '78 m²',
    bed: 'King Bed',
  },
  {
    id: 16,
    name: 'Modern Double Room',
    category: 'MODERN ROOM',
    price: 155,
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80',
    description:
      'A clean contemporary room with comfortable furnishings and modern amenities.',
    guests: '2 Guests',
    size: '34 m²',
    bed: 'Double Bed',
  },
  {
    id: 17,
    name: 'Terrace Suite',
    category: 'TERRACE SUITE',
    price: 300,
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80',
    description:
      'Relax in a beautiful suite featuring a private terrace and elegant interiors.',
    guests: '3 Guests',
    size: '57 m²',
    bed: 'King Bed',
  },
  {
    id: 18,
    name: 'Luxury Twin Room',
    category: 'LUXURY ROOM',
    price: 210,
    image:
      'https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=900&q=80',
    description:
      'A spacious twin room combining luxury finishes with everyday comfort.',
    guests: '2 Guests',
    size: '44 m²',
    bed: 'Twin Beds',
  },
  {
    id: 19,
    name: 'Boutique Suite',
    category: 'BOUTIQUE SUITE',
    price: 270,
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
    description:
      'Unique boutique styling with carefully selected details and premium comfort.',
    guests: '2 Guests',
    size: '50 m²',
    bed: 'King Bed',
  },
  {
    id: 20,
    name: 'Royal King Room',
    category: 'ROYAL ROOM',
    price: 250,
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80',
    description:
      'A beautifully appointed room offering a luxurious stay at an excellent value.',
    guests: '2 Guests',
    size: '46 m²',
    bed: 'King Bed',
  },
]

function Rooms() {
  return (
    <main className="rooms-page">

      {/* ================= PAGE HEADER ================= */}

      <section className="page-header">

        <div className="rooms-container">

          <BackButton />

          <span className="page-subtitle">
            OUR ACCOMMODATION
          </span>

          <h1>
            Rooms & Suites
          </h1>

          <p>
            Discover elegant rooms designed for comfort,
            relaxation and luxury.
          </p>

        </div>

      </section>


      {/* ================= ROOMS ================= */}

      <section className="rooms-section">

        <div className="rooms-container">

          <div className="rooms-intro">

            <span className="home-section-label">
              FIND YOUR PERFECT ROOM
            </span>

            <h2>
              Stay in comfort and style
            </h2>

            <p>
              Choose from our carefully designed collection of
              rooms and suites, each created to make your stay
              truly special.
            </p>

          </div>


          <div className="rooms-grid">

            {rooms.map((room) => (

              <article
                className="room-card"
                key={room.id}
              >

                {/* IMAGE */}

                <div className="room-image">

                  <img
                    src={room.image}
                    alt={room.name}
                  />

                  <div className="room-price">

                    ${room.price}

                    <small>
                      / night
                    </small>

                  </div>

                </div>


                {/* CONTENT */}

                <div className="room-content">

                  <span className="room-category">
                    {room.category}
                  </span>

                  <h2>
                    {room.name}
                  </h2>

                  <p className="room-description">
                    {room.description}
                  </p>


                  {/* ROOM INFO */}

                  <div className="room-info">

                    <span>
                      👤 {room.guests}
                    </span>

                    <span>
                      ▣ {room.size}
                    </span>

                    <span>
                      🛏 {room.bed}
                    </span>

                  </div>


                  {/* BUTTON */}

                  <Link
                    to={`/rooms/${room.id}`}
                    className="room-button"
                  >
                    View Room
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

    </main>
  )
}

export default Rooms