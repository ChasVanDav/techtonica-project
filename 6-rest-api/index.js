import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import books from './books.js';


const app = express();
const port = 5000

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.send("Hello Homepage!");
});

app.get("/api/books", (req, res) => {
    res.json(books);
  });

  app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

