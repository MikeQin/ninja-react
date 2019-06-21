import React, { Component } from "react";
import { AuthContext } from "../contexts/AuthContext";

class AuthToggle extends Component {
  static contextType = AuthContext;
  render() {
    const { toggleAuth } = this.context;
    console.log(this.context);
    return <button onClick={toggleAuth}>Toggle the Auth</button>;
  }
}

export default AuthToggle;
