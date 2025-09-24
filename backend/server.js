const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage (for development - replace with database in production)
let issues = [];
let users = [
  { id: 1, name: 'John Doe', points: 150, issuesReported: 5, issuesResolved: 3 },
  { id: 2, name: 'Jane Smith', points: 120, issuesReported: 4, issuesResolved: 2 },
  { id: 3, name: 'Mike Johnson', points: 90, issuesReported: 3, issuesResolved: 1 }
];

// Routes

// Get all issues
app.get('/api/issues', (req, res) => {
  res.json({ success: true, data: issues });
});

// Create a new issue
app.post('/api/issues', (req, res) => {
  const { title, description, category, location, priority, reportedBy } = req.body;
  
  if (!title || !description || !category) {
    return res.status(400).json({ 
      success: false, 
      message: 'Title, description, and category are required' 
    });
  }

  const newIssue = {
    id: Date.now(),
    title,
    description,
    category,
    location: location || { lat: 0, lng: 0 },
    priority: priority || 'medium',
    status: 'open',
    reportedBy: reportedBy || 'Anonymous',
    reportedAt: new Date().toISOString(),
    votes: 0
  };

  issues.push(newIssue);
  res.status(201).json({ success: true, data: newIssue });
});

// Update issue status
app.patch('/api/issues/:id/status', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  
  const issue = issues.find(i => i.id == id);
  if (!issue) {
    return res.status(404).json({ success: false, message: 'Issue not found' });
  }
  
  issue.status = status;
  res.json({ success: true, data: issue });
});

// Vote on an issue
app.patch('/api/issues/:id/vote', (req, res) => {
  const { id } = req.params;
  
  const issue = issues.find(i => i.id == id);
  if (!issue) {
    return res.status(404).json({ success: false, message: 'Issue not found' });
  }
  
  issue.votes += 1;
  res.json({ success: true, data: issue });
});

// Get leaderboard data
app.get('/api/leaderboard', (req, res) => {
  const sortedUsers = users.sort((a, b) => b.points - a.points);
  res.json({ success: true, data: sortedUsers });
});

// Get map data (issues with location info)
app.get('/api/map-data', (req, res) => {
  const mapIssues = issues.map(issue => ({
    id: issue.id,
    title: issue.title,
    category: issue.category,
    location: issue.location,
    status: issue.status,
    priority: issue.priority
  }));
  
  res.json({ success: true, data: mapIssues });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'CodeVision Backend API is running',
    timestamp: new Date().toISOString()
  });
});

// Default route
app.get('/', (req, res) => {
  res.json({ 
    message: 'CodeVision Backend API', 
    version: '1.0.0',
    endpoints: {
      issues: '/api/issues',
      leaderboard: '/api/leaderboard',
      mapData: '/api/map-data',
      health: '/api/health'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}`);
});