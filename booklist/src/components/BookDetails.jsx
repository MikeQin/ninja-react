import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book, id }) => {
  const { dispatch } = useContext(BookContext);

  return (
    <li
      key={book.id}
      onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}
    >
      <div className="title">
        {id + 1} Title: {book.title}
      </div>
      <div className="author">Author: {book.author}</div>
    </li>
  );
};

export default BookDetails;
