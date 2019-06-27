import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {

  const { books } = useContext(BookContext);

  return (
    <ul>
      {books.map((book, index) => (
        <React.Fragment key={index}>
          <li key={index}>{book.title} - {book.author} - id: {book.id}</li>
          <BookDetails book={book}></BookDetails>
        </React.Fragment>
      ))}
    </ul>
  );
}

export default BookList;