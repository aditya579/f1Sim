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
    { position: 8, name: 'Sergio Perez', team: 'Red Bull', points: 4, sec1: '30.620', sec2: '33.033', sec3: '24.382', tyre1: 'H', tyre2: 'H', tyre3: 'M', speed: '331 km/h' }
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
      <div className="map-panel">
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

        <div className="playback-controls">
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
      </div>

      <aside className="data-panel">
        <div className="track-conditions-panel">
          <h3>Track Conditions</h3>
          <div className="track-conditions-table-container">
            <table className="track-conditions-table">
              <tbody>
                <tr>
                  <td>Track Temp</td>
                  <td>{trackConditions.trackTemp}</td>
                </tr>
                <tr>
                  <td>Wind Direction</td>
                  <td>{trackConditions.windDirection}</td>
                </tr>
                <tr>
                  <td>Humidity</td>
                  <td>{trackConditions.humidity}</td>
                </tr>
                <tr>
                  <td>Air Temp</td>
                  <td>{trackConditions.airTemp}</td>
                </tr>
                <tr>
                  <td>Grip Level</td>
                  <td>{trackConditions.gripLevel}</td>
                </tr>
                <tr>
                  <td>Weather</td>
                  <td>{trackConditions.weather}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="ranking-section">
          <h3>Driver Rankings</h3>
          <RankingTable drivers={drivers} />
        </div>
      </aside>
    </div>
  )
}

export default RaceDisplay
