import { useState, useEffect } from 'react'
import RankingTable from './RankingTable'
import '../styles/RaceDisplay.css'

function RaceDisplay({ mapImage, selectedRace, loading, playbackTime, setPlaybackTime, isPlaying, setIsPlaying }) {
  const [drivers, setDrivers] = useState([
    { position: 1, name: 'Max Verstappen', team: 'Red Bull', points: 25, sec1: '29.452', sec2: '32.118', sec3: '23.561', tyre1: 'M', tyre2: 'S', tyre3: 'H', speed: '343 km/h' },
    { position: 2, name: 'Lewis Hamilton', team: 'Mercedes', points: 18, sec1: '29.712', sec2: '32.209', sec3: '23.682', tyre1: 'S', tyre2: 'H', tyre3: 'H', speed: '339 km/h' },
    { position: 3, name: 'Lando Norris', team: 'McLaren', points: 15, sec1: '29.889', sec2: '32.427', sec3: '23.804', tyre1: 'H', tyre2: 'H', tyre3: 'S', speed: '337 km/h' },
    { position: 4, name: 'George Russell', team: 'Mercedes', points: 12, sec1: '30.041', sec2: '32.530', sec3: '23.912', tyre1: 'M', tyre2: 'M', tyre3: 'H', speed: '336 km/h' },
    { position: 5, name: 'Charles Leclerc', team: 'Ferrari', points: 10, sec1: '30.198', sec2: '32.663', sec3: '24.041', tyre1: 'S', tyre2: 'S', tyre3: 'H', speed: '335 km/h' },
    { position: 6, name: 'Carlos Sainz', team: 'Ferrari', points: 8, sec1: '30.375', sec2: '32.790', sec3: '24.158', tyre1: 'H', tyre2: 'M', tyre3: 'S', speed: '334 km/h' },
    { position: 7, name: 'Oscar Piastri', team: 'McLaren', points: 6, sec1: '30.493', sec2: '32.905', sec3: '24.260', tyre1: 'M', tyre2: 'S', tyre3: 'S', speed: '332 km/h' },
    { position: 8, name: 'Sergio Perez', team: 'Red Bull', points: 4, sec1: '30.620', sec2: '33.033', sec3: '24.382', tyre1: 'H', tyre2: 'H', tyre3: 'M', speed: '331 km/h' },
    { position: 9, name: 'Pierre Gasly', team: 'Alpine', points: 3, sec1: '30.748', sec2: '33.250', sec3: '24.501', tyre1: 'M', tyre2: 'S', tyre3: 'H', speed: '330 km/h' },
    { position: 10, name: 'Fernando Alonso', team: 'Aston Martin', points: 2, sec1: '30.860', sec2: '33.390', sec3: '24.650', tyre1: 'S', tyre2: 'H', tyre3: 'M', speed: '329 km/h' },
    { position: 11, name: 'Lance Stroll', team: 'Aston Martin', points: 1, sec1: '31.015', sec2: '33.602', sec3: '24.782', tyre1: 'H', tyre2: 'M', tyre3: 'S', speed: '328 km/h' },
    { position: 12, name: 'Esteban Ocon', team: 'Alpine', points: 0, sec1: '31.128', sec2: '33.728', sec3: '24.915', tyre1: 'S', tyre2: 'S', tyre3: 'H', speed: '327 km/h' },
    { position: 13, name: 'Valtteri Bottas', team: 'Sauber', points: 0, sec1: '31.255', sec2: '33.892', sec3: '25.012', tyre1: 'M', tyre2: 'H', tyre3: 'M', speed: '326 km/h' },
    { position: 14, name: 'Guanyu Zhou', team: 'Sauber', points: 0, sec1: '31.342', sec2: '34.004', sec3: '25.118', tyre1: 'H', tyre2: 'S', tyre3: 'H', speed: '325 km/h' },
    { position: 15, name: 'Alex Albon', team: 'Williams', points: 0, sec1: '31.468', sec2: '34.160', sec3: '25.191', tyre1: 'M', tyre2: 'M', tyre3: 'S', speed: '324 km/h' },
    { position: 16, name: 'Logan Sargeant', team: 'Williams', points: 0, sec1: '31.592', sec2: '34.294', sec3: '25.285', tyre1: 'H', tyre2: 'M', tyre3: 'H', speed: '323 km/h' },
    { position: 17, name: 'Mick Schumacher', team: 'Haas', points: 0, sec1: '31.701', sec2: '34.415', sec3: '25.392', tyre1: 'S', tyre2: 'H', tyre3: 'H', speed: '322 km/h' },
    { position: 18, name: 'Nico Hülkenberg', team: 'Haas', points: 0, sec1: '31.812', sec2: '34.538', sec3: '25.508', tyre1: 'H', tyre2: 'M', tyre3: 'S', speed: '321 km/h' },
    { position: 19, name: 'Yuki Tsunoda', team: 'AlphaTauri', points: 0, sec1: '31.935', sec2: '34.653', sec3: '25.612', tyre1: 'S', tyre2: 'S', tyre3: 'M', speed: '320 km/h' },
    { position: 20, name: 'Daniel Ricciardo', team: 'AlphaTauri', points: 0, sec1: '32.048', sec2: '34.789', sec3: '25.741', tyre1: 'M', tyre2: 'H', tyre3: 'H', speed: '319 km/h' }
  ])

  const trackConditions = {
    trackTemp: '42°C',
    windDirection: 'North-East',
    humidity: '52%',
    airTemp: '26°C',
    gripLevel: 'High',
    weather: 'Sunny'
  }

  useEffect(() => {
    let interval
    if (isPlaying) {
      interval = setInterval(() => {
        setPlaybackTime((prev) => (prev >= 100 ? 0 : prev + 1))
      }, 100)
    }
    return () => clearInterval(interval)
  }, [isPlaying, setPlaybackTime])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleRewind = () => {
    setPlaybackTime(0)
    setIsPlaying(false)
  }

  return (
    <div className="race-display">
      <div className="left-column">
        <div className="map-section">
          <div className="map-container">
            {loading ? (
              <div className="loading-spinner">
                <p>Loading map...</p>
              </div>
            ) : mapImage ? (
              <img src={mapImage} alt="Race Map" className="race-map" />
            ) : (
              <div className="placeholder">
                <p>Select a race to view the map</p>
              </div>
            )}
          </div>
        </div>

        <div className="bottom-controls-row">
          <div className="playback-controls compact">
            <h3>Playback Controls</h3>
            <div className="controls-group">
              <button
                className="control-button rewind"
                onClick={handleRewind}
                title="Rewind"
              >
                ⏮️
              </button>
              <button
                className={`control-button ${isPlaying ? 'pause' : 'play'}`}
                onClick={handlePlayPause}
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? '⏸️' : '▶️'}
              </button>
            </div>

            <div className="playback-progress">
              <input
                type="range"
                min="0"
                max="100"
                value={playbackTime}
                onChange={(e) => {
                  setPlaybackTime(Number(e.target.value))
                  setIsPlaying(false)
                }}
                className="progress-bar"
              />
              <div className="time-display">
                {Math.floor(playbackTime)}% - {selectedRace ? selectedRace : 'No race selected'}
              </div>
            </div>
          </div>

          <div className="track-conditions-panel compact">
            <h3>Track Conditions</h3>
            <div className="track-condition-grid">
              <div className="track-condition-card">
                <div className="track-condition-icon">🌡️</div>
                <div>
                  <div className="track-condition-label">Air</div>
                  <div className="track-condition-value">{trackConditions.airTemp}</div>
                </div>
              </div>
              <div className="track-condition-card">
                <div className="track-condition-icon">🔥</div>
                <div>
                  <div className="track-condition-label">Track</div>
                  <div className="track-condition-value">{trackConditions.trackTemp}</div>
                </div>
              </div>
              <div className="track-condition-card">
                <div className="track-condition-icon">💨</div>
                <div>
                  <div className="track-condition-label">Wind</div>
                  <div className="track-condition-value">{trackConditions.windDirection}</div>
                </div>
              </div>
              <div className="track-condition-card">
                <div className="track-condition-icon">💧</div>
                <div>
                  <div className="track-condition-label">Humidity</div>
                  <div className="track-condition-value">{trackConditions.humidity}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <aside className="ranking-section">
        <h3>Driver Rankings</h3>
        <RankingTable drivers={drivers} />
      </aside>
    </div>
  )
}

export default RaceDisplay
