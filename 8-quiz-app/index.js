const fetch = require('node-fetch');
const { Client } = require('pg');
require('dotenv').config();

// PostgreSQL credentials
const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
});

async function fetchDataAndStore() {
  try {
    // Connect to the PostgreSQL client
    await client.connect();

    // Fetch data from the API
    const response = await fetch('https://opentdb.com/api.php?amount=5&category=26');
    const data = await response.json();
    console.log('API Data:', data);


    let queryString = 'INSERT INTO mytable (question, correct_answer, incorrect_answers) VALUES'


    // Insert data into the PostgreSQL database
    for (const item of data.results) {
      queryString+= `('${item.question}', '${item.correct_answer}', '${JSON.stringify(item.incorrect_answers)}'),`
    }
      queryString = queryString.slice(0, -1);
      console.log(queryString);

      await client.query(queryString);

    console.log('Data inserted successfully');
  } catch (err) {
    console.error('Error fetching or inserting data:', err);
  } finally {
    // Close the PostgreSQL client connection
    await client.end();
  }
}

fetchDataAndStore();