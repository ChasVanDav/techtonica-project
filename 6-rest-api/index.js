import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import books from './books.js';
import dotenv from 'dotenv';

const app = express();
app.use(cors());

dotenv.config();

//handle json objects
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//root
app.get('/', (req, res) =>{
    res.send("Hello Homepage!");
});

//GET request for all books
app.get("/api/books", (req, res) => {
    res.json(books);
  });

//GET request by id
// app.get("/api/books/:id", (req, res) => {

// });

//PUT request by id
// app.put("/api/books/:id", (req, res) => {

// });

//POST request
app.post("/api/books", (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        format: req.body.format
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

//Delete request
// app.delete("/api/books/:id", (req, res) => {

// });

//start the server
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Listening on Vanessa's http://localhost:${PORT}`));

