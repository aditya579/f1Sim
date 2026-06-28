import '../styles/RaceSelector.css'

function RaceSelector({ years, selectedYear, onYearChange, races, onRaceSelect, selectedRace }) {
  return (
    <div className="race-selector">
      <div className="race-selector-grid">
        <div className="selector-panel year-panel">
          <div className="panel-heading">SELECT YEAR</div>
          <select
            className="year-select"
            value={selectedYear}
            onChange={(event) => onYearChange(Number(event.target.value))}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="selector-panel race-panel">
          <div className="panel-heading">SELECT RACE</div>
          <select
            className="race-select"
            value={selectedRace || ''}
            onChange={(event) => onRaceSelect(event.target.value)}
          >
            <option value="" disabled>
              Choose a race
            </option>
            {races.map((race) => (
              <option key={race} value={race}>
                {race}
              </option>
            ))}
          </select>
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
