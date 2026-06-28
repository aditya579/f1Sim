import '../styles/RankingTable.css'

function RankingTable({ drivers }) {
  return (
    <div className="ranking-table-container">
      <table className="ranking-table">
        <thead>
          <tr>
            <th rowSpan="2">Pos</th>
            <th rowSpan="2">Driver</th>
            <th rowSpan="2">Team</th>
            <th rowSpan="2">Points</th>
            <th rowSpan="2">Sec 1</th>
            <th rowSpan="2">Sec 2</th>
            <th rowSpan="2">Sec 3</th>
            <th colSpan="3">Tyre History</th>
            <th rowSpan="2">Speed</th>
          </tr>
          <tr>
            <th>Tyre 1</th>
            <th>Tyre 2</th>
            <th>Tyre 3</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.position} className="driver-row">
              <td className="position">{driver.position}</td>
              <td className="driver-name">{driver.name}</td>
              <td className="team-name">{driver.team}</td>
              <td className="points">{driver.points}</td>
              <td className="sector">{driver.sec1}</td>
              <td className="sector">{driver.sec2}</td>
              <td className="sector">{driver.sec3}</td>
              <td className="tyre-cell">{driver.tyre1}</td>
              <td className="tyre-cell">{driver.tyre2}</td>
              <td className="tyre-cell">{driver.tyre3}</td>
              <td className="speed">{driver.speed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RankingTable
