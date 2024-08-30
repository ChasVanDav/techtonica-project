import express from 'express'
const app = express()
const port = 3000

const apiToken = 'a798fd84a2c6e6b9e00c84561c872b9c'; 
const cityName = 'New York';

// const apiToken = process.env.apikey

app.get('/', (req, res) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiToken}&units=imperial`)
  .then(response => response.json())
  .then(data => res.send(data))
  .catch(error => res.send(error));
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
