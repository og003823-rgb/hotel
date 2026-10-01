import { useNavigate } from 'react-router-dom'
import './BackButton.css'

function BackButton() {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      className="back-button"
      onClick={() => navigate(-1)}
      aria-label="Go back"
    >
      <span className="back-arrow">←</span>
      <span>Back</span>
    </button>
  )
}

export default BackButton