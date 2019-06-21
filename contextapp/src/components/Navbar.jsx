import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

class Navbar extends Component {
  //static contextType = ThemeContext;
  render() {
    //console.log(this.context);
    return (
      <ThemeContext.Consumer>
        {themeContext => {
          const { isLightTheme, light, dark } = themeContext;
          const theme = isLightTheme ? light : dark;
          return (
            <AuthContext.Consumer>
              {authContext => {
                const { isAuthenticated, toggleAuth } = authContext;
                const menu = (
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                );
                const value = (
                  <nav style={{ background: theme.ui, color: theme.syntax }}>
                    <h1>Context App</h1>
                    <div onClick={toggleAuth}>
                      <h3 style={{ color: "#4286f4" }}>
                        Toggle: Logged {isAuthenticated ? "in" : "out"}
                      </h3>
                    </div>
                    {isAuthenticated ? menu : ""}
                  </nav>
                );
                return value;
              }}
            </AuthContext.Consumer>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
