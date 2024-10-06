import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import books from './books.js';
import dotenv from 'dotenv';

const app = express();
app.use(cors());

dotenv.config();
const PORT = process.env.PORT

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
app.get("", (req, res) => {

});

//PUT request by id
app.put("", (req, res) => {

});

//POST request
app.post("", (req, res) => {

});

//Delete request
app.delete("", (req, res) => {

});

//start the server
app.listen(PORT, () => console.log(`Listening on Vanessa's http://localhost:${PORT}`));

