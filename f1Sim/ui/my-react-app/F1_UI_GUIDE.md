# F1 Race Simulator UI - Setup & Usage Guide

## Overview
A comprehensive Formula 1 race simulator UI built with React and Vite. The application displays race maps, provides playback controls, and shows driver rankings.

## Project Structure
```
src/
├── components/
│   ├── Banner.jsx           # F1 logo & Race Recap header
│   ├── RaceSelector.jsx     # Year/Race dropdown selector
│   ├── RaceDisplay.jsx      # Map display & playback controls
│   └── RankingTable.jsx     # Driver rankings table
├── styles/
│   ├── Banner.css           # Banner styling
│   ├── RaceSelector.css     # Selector dropdown styling
│   ├── RaceDisplay.css      # Display area styling
│   └── RankingTable.css     # Table styling
├── App.jsx                  # Main application component
├── App.css                  # App-wide styles
├── index.css                # Global styles
└── main.jsx                 # Entry point
```

## Features

### 1. **Banner**
- Displays F1 logo with gradient effect
- Shows "Race Recap" header title
- Professional F1-themed styling

### 2. **Race Selection**
- Dropdown menu with years 2020-2026
- Hover over year to reveal races
- Click race to load map and data

### 3. **Map Display**
- Shows race map retrieved from backend
- Loading state while fetching
- Centered display with padding

### 4. **Playback Controls**
- **Play/Pause Button**: Toggle race replay
- **Rewind Button**: Reset to start
- **Progress Bar**: Drag to seek through replay
- Progress updates at 100ms intervals

### 5. **Driver Rankings Table**
- Shows top drivers with positions, names, teams, and points
- Sticky header for easy scrolling
- Color-coded for visual hierarchy
- Hover effects for interactivity

## Backend Integration

### API Endpoint
```
GET /api/getMapImage/{raceName}
```

**Expected Response**: Image file (PNG, JPG, etc.)

**Example Call**:
```javascript
GET http://localhost:8080/api/getMapImage/Monaco
```

The application sends the selected race name as a path variable to fetch the map image.

## Getting Started

### Installation
```bash
cd my-react-app
npm install
```

### Development Server
```bash
npm run dev
```
The app will start at `http://localhost:5173` (or another available port)

### Build for Production
```bash
npm run build
npm run preview
```

## How to Use

1. **Select a Year**: Click on a year in the dropdown (2020-2026)
2. **Select a Race**: Click on a race name that appears - this triggers the API call
3. **View Map**: The race map displays on the left side
4. **Control Playback**: 
   - Click **Play** (▶️) to start the replay animation
   - Click **Pause** (⏸️) to pause
   - Click **Rewind** (⏮️) to reset to start
   - Drag the progress bar to seek
5. **Check Rankings**: View driver standings on the right side

## Styling Theme

### Color Palette
- **F1 Red**: `#FF1801` (Primary accent)
- **Dark Background**: `#15151E`
- **Light Text**: `#F5F5F5`
- **Accent Blue**: `#0082FA`
- **Accent Green**: `#00D084`

### Responsive Design
- Desktop optimized with grid layout
- Tablet support with adjusted spacing
- Mobile support with responsive styling

## Customization

### Update Race Data
Edit the `raceData` object in [App.jsx](App.jsx#L14) to add/modify races:
```javascript
const raceData = {
  2020: ['Bahrain', 'Abu Dhabi', ...],
  // ... more years
}
```

### Customize Driver Rankings
Modify the `drivers` state in [RaceDisplay.jsx](src/components/RaceDisplay.jsx) or fetch from backend API.

### Adjust Colors
Update CSS variables in [App.css](App.css#L1):
```css
:root {
  --f1-red: #FF1801;
  --f1-dark: #15151E;
  /* ... more variables */
}
```

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Future Enhancements
- Real-time race telemetry integration
- WebSocket connection for live race updates
- Driver profile pages
- Historical race data comparison
- Animation transitions for replay
- Multi-language support

## Notes
- Ensure backend API is running on `http://localhost:8080`
- CORS must be enabled on backend for frontend requests
- Current driver rankings are sample data (connect to backend for real data)
- Progress bar progress is in percentage (0-100)
