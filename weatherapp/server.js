import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

// const apiToken = 'a798fd84a2c6e6b9e00c84561c872b9c'; 

const apiToken = process.env.apiToken;

app.get('/', (req, res) => {
  const cityName = req.query.city || 'Honolulu'; //setting the default city //
 
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiToken}&units=imperial`)
  .then(response => response.json())
  .then(data => res.send(data))
  //error message for developer and user
  .catch(error => res.status(500).send({ error:'Oh no! Something went wrong!' }));
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
