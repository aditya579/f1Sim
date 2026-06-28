import { useState, useEffect } from 'react'
import './App.css'
import './index.css'
import Banner from './components/Banner'
import RaceSelector from './components/RaceSelector'
import RaceDisplay from './components/RaceDisplay'

const raceData = {
  2020: ['Bahrain', 'Emilia Romagna', 'Portugal', 'Spain'],
  2021: ['Bahrain', 'Monaco', 'Austria', 'British'],
  2022: ['Bahrain', 'Saudi Arabia', 'Australian', 'Monaco'],
  2023: ['Bahrain', 'Imola', 'Monaco', 'Monza'],
  2024: ['Bahrain', 'Monaco', 'Canada', 'Belgium'],
  2025: ['Bahrain', 'Monaco', 'Silverstone', 'Spa'],
  2026: ['Bahrain', 'Monaco', 'Monza', 'Suzuka']
}

function App() {
  const years = Object.keys(raceData).map((y) => Number(y)).sort((a, b) => b - a)

  const [selectedYear, setSelectedYear] = useState(years[0])
  const [races, setRaces] = useState(raceData[selectedYear])
  const [selectedRace, setSelectedRace] = useState(null)
  const [mapImage, setMapImage] = useState(null)
  const [loading, setLoading] = useState(false)

  const [playbackTime, setPlaybackTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    setRaces(raceData[selectedYear] || [])
    setSelectedRace(null)
    setMapImage(null)
  }, [selectedYear])

  const handleYearChange = (year) => {
    setSelectedYear(year)
  }

  const handleRaceSelect = async (race) => {
    setSelectedRace(race)
    setLoading(true)
    setMapImage(null)

    try {
      // Use backend endpoint directly. If backend serves images, the browser can load them by URL.
      const url = `http://localhost:8080/api/getMapImage/${encodeURIComponent(race)}`
      // quick HEAD check to set loading state appropriately (optional)
      const res = await fetch(url, { method: 'HEAD' })
      if (res.ok) {
        setMapImage(url)
      } else {
        // fallback: still set URL (backend might stream image without HEAD support)
        setMapImage(url)
      }
    } catch (err) {
      // network error — still set the url so user can see browser error
      const url = `http://localhost:8080/api/getMapImage/${encodeURIComponent(race)}`
      setMapImage(url)
    } finally {
      setLoading(false)
      setPlaybackTime(0)
      setIsPlaying(false)
    }
  }

  return (
    <div className="page-container">
      <Banner />

      <main className="page-main">
        <div className="selector-top">
          <RaceSelector
            years={years}
            selectedYear={selectedYear}
            onYearChange={handleYearChange}
            races={races}
            onRaceSelect={handleRaceSelect}
            selectedRace={selectedRace}
          />
        </div>

        <RaceDisplay
          mapImage={mapImage}
          selectedRace={selectedRace}
          loading={loading}
          playbackTime={playbackTime}
          setPlaybackTime={setPlaybackTime}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </main>
    </div>
  )
}

export default App
