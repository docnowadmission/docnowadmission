const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Enable CORS for frontend requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// MySQL connection with environment variables
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'docnow',
  password: process.env.DB_PASSWORD || '123456789',
  database: process.env.DB_NAME || 'docnow',
  port: process.env.DB_PORT || 3306
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
    return;
  }
  console.log('Connected to MySQL!');
});

// Root route
app.get('/', (req, res) => {
  res.send('Backend with MySQL is running!');
});

// Example: Get all enquiries
app.get('/enquiries', (req, res) => {
  db.query('SELECT * FROM enquiries', (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
      return;
    }
    res.json(results);
  });
});

// POST: Create new enquiry
app.post('/enquiries', (req, res) => {
  const { name, email, message } = req.body;
  
  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = 'INSERT INTO enquiries (name, email, message, created_at) VALUES (?, ?, ?, NOW())';
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).json({ error: 'Failed to save enquiry' });
      return;
    }
    res.status(201).json({ 
      message: 'Enquiry submitted successfully',
      id: result.insertId 
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 