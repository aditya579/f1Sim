import { useState } from 'react'
import '../styles/RaceSelector.css'

function RaceSelector({ years, selectedYear, onYearChange, races, onRaceSelect, selectedRace }) {
  const [expandedYear, setExpandedYear] = useState(selectedYear)

  const handleYearHover = (year) => {
    setExpandedYear(year)
    onYearChange(year)
  }

  const handleYearLeave = () => {
    setExpandedYear(null)
  }

  return (
    <div className="race-selector">
      <h2>Select Race</h2>
      <div className="year-dropdown">
        <div className="years-container">
          {years.map((year) => (
            <div
              key={year}
              className={`year-item ${selectedYear === year ? 'selected' : ''}`}
              onMouseEnter={() => handleYearHover(year)}
              onMouseLeave={handleYearLeave}
            >
              <button className="year-button">{year}</button>
              {expandedYear === year && (
                <div className="races-submenu">
                  {races.map((race) => (
                    <div
                      key={race}
                      className={`race-item ${selectedRace === race ? 'active' : ''}`}
                      onClick={() => onRaceSelect(race)}
                    >
                      {race}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {selectedRace && (
        <div className="selected-race-info">
          Selected: <strong>{selectedRace}</strong> ({selectedYear})
        </div>
      )}
    </div>
  )
}

export default RaceSelector
