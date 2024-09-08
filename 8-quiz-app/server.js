const express = require('express');
const cors = require('cors');
const { Client } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Use CORS to allow cross-origin requests from the frontend
app.use(cors());

// PostgreSQL credentials (same as index.js)
const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
});

// API route that returns the stored trivia questions
app.get('/api/questions', async (req, res) => {
  try {
    await client.connect(); // Connect to PostgreSQL
    const result = await client.query('SELECT * FROM mytable'); // Query the database
    res.json(result.rows); // Send the data back as JSON
  } catch (error) {
    console.error('Error fetching data from database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await client.end(); // Close the PostgreSQL connection
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});