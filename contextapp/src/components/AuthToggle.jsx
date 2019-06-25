import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const AuthToggle = () => {
  const { toggleAuth } = useContext(AuthContext);
  return <button onClick={toggleAuth}>Toggle Auth</button>;
};

export default AuthToggle;
