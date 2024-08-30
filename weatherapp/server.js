import express from 'express';
import fetch from 'node-fetch';

const app = express()
const port = 3000

const apiToken = 'a798fd84a2c6e6b9e00c84561c872b9c'; 
const cityName = req.query.city || 'New York'; //setting the default city

// const apiToken = process.env.apikey

app.get('/', (req, res) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiToken}&units=imperial`)
  .then(response => response.json())
  .then(data => res.send(data))
  //error message for developer and user
  .catch(error => res.status(500).send({ error:'Oh no! Something went wrong!' }));
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
