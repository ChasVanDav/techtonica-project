import { useEffect, useState } from 'react';
import axios from 'axios';
import Book from './Book.jsx';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [format, setFormat] = useState('');
  const [editingBook, setEditingBook] = useState(null);

  const API_URL = 'http://localhost:5000/books';

  // Fetch books from the backend
  const fetchBooks = async () => {
    try {
      const response = await axios.get(API_URL);
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  // Add a new book
  const addBook = async () => {
    try {
      const response = await axios.post(API_URL, { title, author, format });
      setBooks([...books, response.data]);
      setTitle('');
      setAuthor('');
      setFormat('');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  // Delete a book
  const deleteBook = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setBooks(books.filter(book => book.id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  // Update a book
  const updateBook = async (book) => {
    try {
      const response = await axios.put(`${API_URL}/${book.id}`, { title, author, format });
      setBooks(books.map(b => (b.id === book.id ? response.data : b)));
      setEditingBook(null);
      setTitle('');
      setAuthor('');
      setFormat('');
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingBook) {
      updateBook(editingBook);
    } else {
      addBook();
    }
  };

  const handleEdit = (book) => {
    setEditingBook(book);
    setTitle(book.title);
    setAuthor(book.author);
    setFormat(book.format);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="App">
      <h1>Book List</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Author" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Format" 
          value={format} 
          onChange={(e) => setFormat(e.target.value)} 
          required 
        />
        <button type="submit">{editingBook ? 'Update Book' : 'Add Book'}</button>
      </form>
      <div className="books-list">
        {books.map(book => (
          <Book 
            key={book.id} 
            book={book} 
            onDelete={deleteBook} 
            onEdit={handleEdit} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
