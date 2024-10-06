const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); 
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Use CORS to allow cross-origin requests from the frontend
app.use(cors());
//formats JSON data in requests into a workable JavaScript object
app.use(express.json());

// API route that fetches trivia questions from the external API
app.get('/api/questions', async (req, res) => {
  try {
    // Fetch trivia questions directly from the external API
    const response = await fetch('https://opentdb.com/api.php?amount=5&category=26');
    const data = await response.json();

    // formatting back into JSON to send to client(frontend)
    res.json(data.results);
  } catch (error) {
    console.error('Error fetching data from external API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
