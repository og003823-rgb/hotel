import { Link } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Navbar from '../components/Navbar'
import useWOW from '../hooks/useWOW'

import './Rooms.css'
const rooms = [
  {
    id: 1,
    name: 'Deluxe Room',
    category: 'DELUXE ROOM',
    price: 120,
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80',
    description:
      'Elegant comfort with a king-size bed, warm lighting and modern amenities. Perfect for a relaxing stay for two.',
    guests: '2 Guests',
    size: '35 m²',
    bed: 'King Bed',
  },
  {
    id: 2,
    name: 'Luxury Double Room',
    category: 'DOUBLE ROOM',
    price: 180,
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80',
    description:
      'Spacious room with two comfortable beds, a cozy seating area and beautiful views. Ideal for families and friends.',
    guests: '3 Guests',
    size: '45 m²',
    bed: '2 Double Beds',
  },
  {
    id: 3,
    name: 'Executive Suite',
    category: 'EXECUTIVE SUITE',
    price: 250,
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    description:
      'A premium suite with a separate living area, luxury bathroom and exceptional comfort for an unforgettable stay.',
    guests: '4 Guests',
    size: '60 m²',
    bed: 'King Bed + Sofa',
  },
  {
    id: 4,
    name: 'Standard Room',
    category: 'STANDARD ROOM',
    price: 90,
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80',
    description:
      'A cozy and comfortable room with everything you need for a pleasant stay at a great value.',
    guests: '2 Guests',
    size: '28 m²',
    bed: 'Queen Bed',
  },
  {
    id: 5,
    name: 'Family Room',
    category: 'FAMILY ROOM',
    price: 210,
    image:
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=900&q=80',
    description:
      'A generous room designed for families, with multiple beds and plenty of space for everyone to relax.',
    guests: '5 Guests',
    size: '55 m²',
    bed: '3 Double Beds',
  },
  {
    id: 6,
    name: 'Royal Suite',
    category: 'ROYAL SUITE',
    price: 400,
    image:
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=80',
    description:
      'Our most luxurious suite with panoramic views, elegant interiors and a private experience like no other.',
    guests: '6 Guests',
    size: '90 m²',
    bed: '2 King Beds',
  },
  {
    id: 7,
    name: 'Classic Queen Room',
    category: 'CLASSIC ROOM',
    price: 110,
    image:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80',
    description:
      'A charming room with a comfortable queen bed and thoughtful touches for a restful night.',
    guests: '2 Guests',
    size: '30 m²',
    bed: 'Queen Bed',
  },
  {
    id: 8,
    name: 'Standard Twin Room',
    category: 'TWIN ROOM',
    price: 115,
    image:
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=900&q=80',
    description:
      'Two comfortable single beds in a bright, modern room — perfect for friends travelling together.',
    guests: '2 Guests',
    size: '30 m²',
    bed: '2 Single Beds',
  },
  {
    id: 9,
    name: 'Deluxe King Room',
    category: 'DELUXE ROOM',
    price: 135,
    image:
      'https://images.unsplash.com/photo-1631049035182-249067d7618e?auto=format&fit=crop&w=900&q=80',
    description:
      'Extra space and extra comfort with a luxurious king bed and elegant contemporary design.',
    guests: '2 Guests',
    size: '38 m²',
    bed: 'King Bed',
  },
{
  id: 10,
  name: 'Superior Room',
  category: 'SUPERIOR ROOM',
  price: 145,
  image:
    'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=900&q=80',
  description:
    'A refined room with a king bed, cozy sofa and premium amenities for a truly comfortable stay.',
  guests: '3 Guests',
  size: '40 m²',
  bed: 'King Bed + Sofa',
},
  {
    id: 11,
    name: 'Garden View Room',
    category: 'GARDEN ROOM',
    price: 160,
    image:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=80',
    description:
      'Wake up to peaceful garden views from your private window in this bright, elegant room.',
    guests: '2 Guests',
    size: '42 m²',
    bed: 'King Bed',
  },
  {
    id: 12,
    name: 'Pool View Room',
    category: 'POOL VIEW ROOM',
    price: 170,
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80',
    description:
      'Enjoy stunning views of our swimming pool right from your room, with modern comfort throughout.',
    guests: '2 Guests',
    size: '42 m²',
    bed: 'King Bed',
  },
  {
    id: 13,
    name: 'Business Suite',
    category: 'BUSINESS SUITE',
    price: 180,
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=900&q=80',
    description:
      'Designed for business travelers with a dedicated workspace, fast Wi-Fi and a relaxing atmosphere.',
    guests: '2 Guests',
    size: '45 m²',
    bed: 'King Bed',
  },
  {
    id: 14,
    name: 'Junior Suite',
    category: 'JUNIOR SUITE',
    price: 200,
    image:
      'https://images.unsplash.com/photo-1568495248636-6432b97bd949?auto=format&fit=crop&w=900&q=80',
    description:
      'A stylish suite with a separate lounge corner, perfect for guests who want extra space to unwind.',
    guests: '3 Guests',
    size: '50 m²',
    bed: 'King Bed + Sofa',
  },
  {
    id: 15,
    name: 'Deluxe Sea View',
    category: 'SEA VIEW ROOM',
    price: 230,
    image:
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=80',
    description:
      'Breathtaking sea views, a spacious layout and a private balcony to enjoy your morning coffee.',
    guests: '2 Guests',
    size: '48 m²',
    bed: 'King Bed',
  },
  {
    id: 16,
    name: 'Panorama Suite',
    category: 'PANORAMA SUITE',
    price: 270,
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    description:
      'Floor-to-ceiling windows with panoramic city views and a sophisticated, modern interior.',
    guests: '4 Guests',
    size: '65 m²',
    bed: '2 King Beds',
  },
  {
    id: 17,
    name: 'Honeymoon Suite',
    category: 'ROMANTIC SUITE',
    price: 290,
    image:
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=900&q=80',
    description:
      'A romantic suite with ambient lighting, champagne service and everything for an unforgettable escape.',
    guests: '2 Guests',
    size: '60 m²',
    bed: 'King Bed',
  },
  {
    id: 18,
    name: 'Presidential Suite',
    category: 'PRESIDENTIAL SUITE',
    price: 320,
    image:
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=900&q=80',
    description:
      'The ultimate in luxury living with an elegant living room, dining area and first-class service.',
    guests: '4 Guests',
    size: '75 m²',
    bed: '2 King Beds',
  },
  {
    id: 19,
    name: 'Penthouse Suite',
    category: 'PENTHOUSE SUITE',
    price: 450,
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
    description:
      'Our stunning top-floor suite with a private terrace, luxury interiors and unmatched views.',
    guests: '6 Guests',
    size: '110 m²',
    bed: '3 King Beds',
  },
  {
    id: 20,
    name: 'VIP Royal Suite',
    category: 'VIP SUITE',
    price: 550,
    image:
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=900&q=80',
    description:
      'An exclusive royal experience with private butler service, luxurious bedrooms and legendary comfort.',
    guests: '6 Guests',
    size: '120 m²',
    bed: '3 King Beds',
  },
]

function Rooms() {
  useWOW()

  return (
    <main className="rooms-page">

      {/* ================= HEADER (ثابت مع السكرول) ================= */}

      {/* <Navbar /> */}


      {/* ================= PAGE HEADER ================= */}

      <section className="page-header">

        <div className="rooms-container">

          <BackButton />

          <span className="page-subtitle wow fadeInUp">
            OUR ACCOMMODATION
          </span>

          <h1 className="wow fadeInUp" data-wow-delay="0.2s">
            Rooms & Suites
          </h1>

          <p className="wow fadeInUp" data-wow-delay="0.4s">
            Discover elegant rooms designed for comfort,
            relaxation and luxury.
          </p>

        </div>

      </section>


      {/* ================= ROOMS ================= */}

      <section className="rooms-section">

        <div className="rooms-container">

          <div className="rooms-intro wow fadeInUp">

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

            {rooms.map((room, index) => (

              <article
                className="room-card wow fadeInUp"
                key={room.id}
                data-wow-delay={`${(index % 3) * 0.15}s`}
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