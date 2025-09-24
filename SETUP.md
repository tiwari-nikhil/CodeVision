# CodeVision - Full Stack Setup

CodeVision is a civic issues reporting platform with a React frontend and Node.js/Express backend.

## Quick Start

### Backend Setup
```bash
cd backend
npm install
npm start
```
Backend will run on `http://localhost:5000`

### Frontend Setup
```bash
# From project root
npm install
npm run dev
```
Frontend will run on `http://localhost:5173`

### API Endpoints
Backend provides a complete RESTful API:
- `GET /api/issues` - Get all reported issues
- `POST /api/issues` - Report a new issue
- `GET /api/leaderboard` - Get user rankings
- `GET /api/map-data` - Get issues for map visualization
- `PATCH /api/issues/:id/vote` - Vote on an issue
- `GET /api/health` - Health check

### Example API Usage
```bash
# Get all issues
curl http://localhost:5000/api/issues

# Report new issue
curl -X POST -H "Content-Type: application/json" \
  -d '{"title":"Pothole on Main St","description":"Large pothole","category":"roads"}' \
  http://localhost:5000/api/issues

# Get leaderboard
curl http://localhost:5000/api/leaderboard
```

## Project Structure
```
CodeVision/
├── backend/          # Express API server
│   ├── server.js     # Main server file
│   ├── package.json  # Backend dependencies
│   └── README.md     # Backend documentation
├── src/              # React frontend
├── package.json      # Frontend dependencies
└── README.md         # This file
```