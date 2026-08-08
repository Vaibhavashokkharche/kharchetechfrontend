const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { admin, enquiries } = require('./data');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_key_change_this';

// Simple credentials (single admin)
const ADMIN_USER = { username: 'admin', password: 'admin123' };

function authenticateToken(req, res, next) {
  const auth = req.headers['authorization'];
  if (!auth) return res.status(401).json({ message: 'Missing token' });
  const parts = auth.split(' ');
  if (parts.length !== 2) return res.status(401).json({ message: 'Invalid token' });
  const token = parts[1];
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USER.username && password === ADMIN_USER.password) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '8h' });
    return res.json({ token });
  }
  return res.status(401).json({ message: 'Invalid credentials' });
});

// Alias route for legacy frontend path
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USER.username && password === ADMIN_USER.password) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '8h' });
    return res.json({ token });
  }
  return res.status(401).json({ message: 'Invalid credentials' });
});

app.get('/api/admin', authenticateToken, (req, res) => {
  res.json(admin);
});

app.get('/api/enquiries', authenticateToken, (req, res) => {
  res.json(enquiries);
});

app.post('/api/enquiries', (req, res) => {
  const { name, email, message } = req.body;
  const id = enquiries.length ? enquiries[enquiries.length - 1].id + 1 : 1;
  const item = { id, name, email, message, createdAt: new Date().toISOString() };
  enquiries.push(item);
  res.status(201).json(item);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
