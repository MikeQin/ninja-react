import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const bookStyle = { background: theme.ui };
  const bookListStyle = { color: theme.syntax, background: theme.bg };

  return (
    <div className="book-list" style={bookListStyle}>
      <ul>
        <li style={bookStyle}>the way of kings</li>
        <li style={bookStyle}>the name of the wind</li>
        <li style={bookStyle}>the final empire</li>
      </ul>
    </div>
  );
};

export default BookList;
