# CodeVision Backend API

A RESTful API server for the CodeVision civic issues reporting platform.

## Features

- Issue reporting and management
- User leaderboard system
- Map data for issue visualization  
- CORS enabled for frontend integration

## API Endpoints

### Issues
- `GET /api/issues` - Get all issues
- `POST /api/issues` - Create a new issue
- `PATCH /api/issues/:id/status` - Update issue status
- `PATCH /api/issues/:id/vote` - Vote on an issue

### Leaderboard
- `GET /api/leaderboard` - Get user leaderboard data

### Map
- `GET /api/map-data` - Get issues with location data

### System
- `GET /api/health` - Health check endpoint
- `GET /` - API information

## Installation

```bash
npm install
```

## Usage

```bash
# Development
npm start

# Production
npm run dev (requires nodemon)
```

## Environment Variables

- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment mode

## Data Storage

Currently uses in-memory storage for development. In production, integrate with a database like MongoDB or PostgreSQL.