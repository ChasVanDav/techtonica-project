import express from 'express';
import cors from 'cors';
import pool from './db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post('/books', async (req, res) => {
  const { title, author, format } = req.body;
  try {
    const newBook = await pool.query(
      'INSERT INTO books (title, author, format) VALUES ($1, $2, $3) RETURNING *',
      [title, author, format]
    );
    res.json(newBook.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.get('/books', async (req, res) => {
  try {
    const allBooks = await pool.query('SELECT * FROM books');
    res.json(allBooks.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.put('/books/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author, format } = req.body;
  try {
    const updateBook = await pool.query(
      'UPDATE books SET title = $1, author = $2, format = $3 WHERE id = $4 RETURNING *',
      [title, author, format, id]
    );
    if (updateBook.rows.length === 0) {
      return res.status(404).send('Book not found');
    }
    res.json(updateBook.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.delete('/books/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleteBook = await pool.query('DELETE FROM books WHERE id = $1', [id]);
    if (deleteBook.rowCount === 0) {
      return res.status(404).send('Book not found');
    }
    res.json({ message: 'Book deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


//---START THE SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Vanessa's server is running on port ${PORT}`);
});
