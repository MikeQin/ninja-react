import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLightTheme: true,
      light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
      dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
    };
  }

  // Auto bind
  toggleTheme = () => {
    this.setState(prevState => {
      return { isLightTheme: !prevState.isLightTheme };
    });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
