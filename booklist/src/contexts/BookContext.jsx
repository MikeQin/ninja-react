import React, { createContext, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, dispatch] = useReducer(bookReducer, []);
  // const [books, setBooks] = useState([
  //   { title: 'Name of the Wind', author: 'Patrick Rothfuss', id: uuid() },
  //   { title: 'The Final Empire', author: 'Brandon Sanderson', id: uuid() }
  // ]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
