import express from 'express'
const app = express()
const port = 3000

const apiToken = '2a4b9240693bc44d971fbf9becc24fef';
let cityName = '';

fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiToken}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

app.get('/', (req, res) => {
  res.send('The Vanessa Weather App Homepage!')
})

app.get('/weather', (req, res) => {
  req.query.cityName;
});





app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
