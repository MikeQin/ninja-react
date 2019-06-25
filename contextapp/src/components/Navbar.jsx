import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  // ThemeContext
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  // AuthContext
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const menu = (
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  );

  const navStyle = { background: theme.ui, color: theme.syntax };

  return (
    <nav style={navStyle}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        <h3 style={{ color: "#4286f4" }}>
          Toggle: Logged {isAuthenticated ? "in" : "out"}
        </h3>
      </div>
      {isAuthenticated ? menu : ""}
    </nav>
  );
};

export default Navbar;
