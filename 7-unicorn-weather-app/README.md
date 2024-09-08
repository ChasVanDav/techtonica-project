# Unicorn Weather App

![Weather App Image](WeatherAppScreenshot.png)

### Overview
Tired of checking the weather and seeing the same boring, bland UI? The Unicorn Weather App is an easy to use solution that adds a unique twist on a classical weather app. Unicorn Weather App was created specifically for those who like to add a little ✨razzle dazzle✨ to every aspect of their lives! It fetches weather data (ex. temperature, wind speed, etc.) using [OpenWeatherAPI](https://openweathermap.org/api) from any city in the world and displays it to the user in a uniquely responsive and interactive way using React and Node.js.
### Features
- City-Based Weather Search: Users can enter the name of any city to retrieve its current weather data.
- Weather Details Displayed: Includes temperature, weather description, humidity, pressure, and wind speed.
- Weather Icons: Displays weather conditions with corresponding icons.
- Responsive Design: Built with React, ensuring a responsive and user-friendly interface.
### Technologies
- Frontend:
  - React: JavaScript library for building responsive user interfaces.
  - CSS: Styling and layout of the app.
  - Fetch API: Makes HTTP requests to the backend.
- Backend:
  - Express.js: A Node.js framework for setting up the server and handling HTTP requests.
  - Node.js: JavaScript environment used to run the Express server.
  - Cors: Middleware to handle Cross-Origin Resource Sharing.
  - Fetch (Node.js): Retrieves data from the OpenWeatherMap API.
- API:
  - OpenWeatherMap API: Provides weather data for various cities worldwide.
### Installation
To run the Weather App on your local machine, follow these steps:
#### Prerequisites
Make sure you have the following installed on your machine:
- Node.js (which includes npm): [Download Node.js](https://nodejs.org/en/download/package-manager)
- Git (for cloning the repository): [Download Git](https://git-scm.com/downloads)
1. Clone the repository <br>
   `git clone https://github.com/ChasVanDav/techtonica-projects.git`
   <br>
   `cd unicorn-weather-app`
3. Set up the backend
- navigate to `server.js`
- install backend dependencies: `npm install`
4. Start the server using `npm start`
5. Set up the front end
- navigate to `cd client`
- install dependencies `npm install`
6. Start the React development server using `npm run dev`
7. Sign up/log in to get your own API key from [OpenWeatherAPI](https://openweathermap.org/api)
### API Endpoints
- GET /
  - Fetches weather data for a specified city.
  - Query parameter: city (optional, defaults to "Honolulu").
### Stretch Goals
--touch base about any stretch goals--
### Contributing
For any questions, comments, or contributions, please reach out to me via email or open an issue on the GitHub repository.
### License
This project is licensed under the MIT License.
