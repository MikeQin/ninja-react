import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });
  // const [books, setBooks] = useState([
  //   { title: 'Name of the Wind', author: 'Patrick Rothfuss', id: uuid() },
  //   { title: 'The Final Empire', author: 'Brandon Sanderson', id: uuid() }
  // ]);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
