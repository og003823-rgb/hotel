import { useEffect, useRef, useState } from 'react'
import './HotelStats.css'

// الإحصائيات — غيّر الأرقام براحتك
const STATS = [
  { id: 1, target: 25, suffix: '+', label: 'Years of Excellence' },
  { id: 2, target: 350, suffix: '+', label: 'Luxury Rooms & Suites' },
  { id: 3, target: 50, suffix: 'K+', label: 'Happy Guests' },
  { id: 4, target: 40, suffix: '+', label: 'Awards Won' },
]

// عداد بيتعد من 0 للرقم النهائي لما يظهر في الشاشة
function Counter({ target, suffix, duration = 1800 }) {
  const [value, setValue] = useState(0)
  const counterRef = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true

            const startTime = performance.now()

            const tick = (now) => {
              const progress = Math.min(
                (now - startTime) / duration,
                1
              )

              const eased = 1 - Math.pow(1 - progress, 3)

              setValue(Math.round(eased * target))

              if (progress < 1) {
                requestAnimationFrame(tick)
              }
            }

            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [target, duration])

  return (
    <strong ref={counterRef}>
      {value}
      {suffix}
    </strong>
  )
}

function HotelStats() {
  return (
    <section className="hotel-stats">

      <div className="hotel-stats-container">

        <span className="hotel-stats-label">
          Hotel in Numbers
        </span>

        <h2 className="hotel-stats-title">
          A legacy of luxury
          <br />
          and hospitality.
        </h2>

        <p className="hotel-stats-text">
          For over two decades, we have been redefining the art of
          hospitality — one unforgettable stay at a time.
        </p>


        <div className="hotel-stats-grid">

          {STATS.map((stat) => (
            <div
              key={stat.id}
              className="hotel-stat-card"
            >
              <Counter
                target={stat.target}
                suffix={stat.suffix}
              />
              <span>
                {stat.label}
              </span>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default HotelStats