import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
//import { AuthContext } from "../contexts/AuthContext";

class BookList extends Component {
  // this.context is initialized
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
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
  }
}

export default BookList;
