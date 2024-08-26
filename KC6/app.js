import express from 'express';
const app = express();
const port = 3000;

// Replace 'YOUR_OAUTH_TOKEN' with your actual OAuth token
const oauthToken = 'A3XSTVU3JTDU5KHJFB5P';

// Fetch user details from Eventbrite API and log them
fetch(`https://www.eventbriteapi.com/v3/users/me/?token=A3XSTVU3JTDU5KHJFB5P`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Example route for home page
app.get('/', (req, res) => {
    res.send('Hello Vanessa World');
})

// Example route for fetching event details
app.get('/event/:id', (req, res) => {
  const eventID = req.params.id;
  fetch(`https://www.eventbriteapi.com/v3/events/${eventID}`, { 
    headers: {
    'Authorization': `Bearer ${oauthToken}`,
    'Content-Type': 'application/json'
    }
});
  .then(response => response.json())
  .then(data => res.json(data))
  .catch(error => res.status(500).json({error: error.message}));
});


// Example route for fetching event details
app.get('/event/:id', (req, res) => {
  const eventID = req.params.id;
  fetch(`https://www.eventbriteapi.com/v3/events/${eventID}/?expand=venue`, { 
    headers: {
    'Authorization': `Bearer ${oauthToken}`,
    'Content-Type': 'application/json'
    }
});
  .then(response => response.json())
  .then(data => res.json(data))
  .catch(error => res.status(500).json({error: error.message}));
});

// Example route for fetching guestlist  details
app.get('/event/:id', (req, res) => {
  const eventID = req.params.id;
  fetch(`https://www.eventbriteapi.com/v3/events/${eventID}/?token=${oauthToken}&expand=guestlist_metrics		`)
  .then(response => response.json())
  .then(data => res.json(data))
  .catch(error => res.status(500).json({error: error.message}));
});

// Example route for fetching ticket class details
app.get('/event/:id', (req, res) => {
  const eventID = req.params.id;
  fetch(`https://www.eventbriteapi.com/v3/events/${eventID}/?token=${oauthToken}&expand=ticket_classes`)
  .then(response => response.json())
  .then(data => res.json(data))
  .catch(error => res.status(500).json({error: error.message}));
});

// Example route for fetching order details
app.get('/event/:id', (req, res) => {
  const eventID = req.params.id;
  fetch(`https://www.eventbriteapi.com/v3/events/${eventID}/?token=${oauthToken}&expand=ticket_availability	`)
  .then(response => response.json())
  .then(data => res.json(data))
  .catch(error => res.status(500).json({error: error.message}));
});

// Example route for fetching venue details
app.get('/event/:id', (req, res) => {
  const eventID = req.params.id;
  fetch(`https://www.eventbriteapi.com/v3/events/${eventID}/?token=${oauthToken}&expand=venue`)
  .then(response => response.json())
  .then(data => res.json(data))
  .catch(error => res.status(500).json({error: error.message}));
});

// Example route for fetching organizer details
app.get('/event/:id', (req, res) => {
  const eventID = req.params.id;
  fetch(`https://www.eventbriteapi.com/v3/events/${eventID}/?token=${oauthToken}&expand=organizer	`)
  .then(response => response.json())
  .then(data => res.json(data))
  .catch(error => res.status(500).json({error: error.message}));
});

// this didn't work curl -X GET   https://www.eventbriteapi.com/v3/events/{event_id}/?expand=venue   -H 'Authorization: Bearer PERSONAL_OAUTH_TOKEN' 


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
