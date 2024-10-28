import React from 'react';

const Book = ({ book, onDelete, onEdit }) => {
  return (
    <div className="book">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Format: {book.format}</p>
      <button onClick={() => onEdit(book)}>Edit</button>
      <button onClick={() => onDelete(book.id)}>Delete</button>
    </div>
  );
};

export default Book;
