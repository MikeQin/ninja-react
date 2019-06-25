import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const initState = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
  };

  const [themeState, setThemeState] = useState(initState);
  // Auto bind
  const toggleTheme = () => {
    setThemeState(prevState => {
      return { ...prevState, isLightTheme: !prevState.isLightTheme };
    });
  };

  return (
    <ThemeContext.Provider value={{ ...themeState, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
