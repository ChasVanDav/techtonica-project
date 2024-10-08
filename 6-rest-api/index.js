import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import books from './books.js';
import dotenv from 'dotenv';

const app = express();
app.use(cors());

app.use(express.static('public'));

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
app.get("/api/books/:id", (req, res) => {
    const bookID = req.params.id;
    const book = books.find(b => b.id === bookID);
    if(!book) {
        return res.status(404).json({message: "Book not found"});
    }
    res.json(book);
});

//PUT request by id
app.put("/api/books/:id", (req, res) => {
    const bookID = req.params.id;
    const book = books.find(b => b.id === bookID); 

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;
    book.format = req.body.format || book.format;

    res.json(book); 
});


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
app.delete("/api/books/:id", (req, res) => {
    const bookID = req.params.id;
    const bookIndex = books.findIndex(b => b.id === bookID);
    if (bookIndex === -1) {
        return res.status(404).json({ message: "Book not found" });
    }

    books.splice(bookIndex, 1);

    res.status(204).send();
});

//start the server
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Listening on Vanessa's http://localhost:${PORT}`));

