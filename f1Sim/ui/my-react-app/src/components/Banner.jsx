import '../styles/Banner.css'

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-left">
          <div className="f1-logo-container">
            <svg className="f1-logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="f1Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF1801" />
                  <stop offset="100%" stopColor="#DC0000" />
                </linearGradient>
              </defs>
              <text x="50" y="70" textAnchor="middle" fontSize="60" fontWeight="bold" fill="url(#f1Gradient)" fontFamily="Arial, sans-serif">
                F1
              </text>
            </svg>
          </div>
          <div className="banner-text">
            <span className="banner-label">Grand Prix Live</span>
            <h1 className="banner-title">Race Recap</h1>
            <div className="banner-info">
              <span>British GP</span>
              <span>Silverstone</span>
              <span>56 Laps</span>
            </div>
          </div>
        </div>

        <div className="banner-status">
          <span className="status-pill live">LIVE</span>
          <span className="status-pill">Track 33°C</span>
          <span className="status-pill">Dry</span>
        </div>
      </div>
    </div>
  )
}

export default Banner
