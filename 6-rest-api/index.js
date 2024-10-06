import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import books from './books.js';
import dotenv from 'dotenv';

const app = express();
app.use(cors());

dotenv.config();
const PORT = process.env.PORT


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.send("Hello Homepage!");
});

app.get("/api/books", (req, res) => {
    res.json(books);
  });

  //start the server
  app.listen(port, () => console.log(`Listening on Vanessa's http://localhost:${PORT}`));

