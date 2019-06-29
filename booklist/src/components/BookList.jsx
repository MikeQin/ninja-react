import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book, index) => {
          return <BookDetails book={book} id={index} key={index} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read. Hello free time :)</div>
  );
};

export default BookList;
