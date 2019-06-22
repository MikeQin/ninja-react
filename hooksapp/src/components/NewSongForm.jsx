import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";

const NewSongForm = props => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  const context = useContext(AuthContext);
  const { isAuthenticated, toggleAuth } = context;

  const handleChange = event => {
    // Example 1: setState
    setTitle(event.target.value);
    console.log(title);
  };

  const handleSubmit = event => {
    props.addSong(title);
    setTitle("");
    // Example 2: setState based on prevState
    setCount(prevCount => {
      return prevCount + 1;
    });

    event.preventDefault();
  };

  useEffect(() => {
    document.title = "Song to be added: " + title;
  }, [title]);

  return (
    <>
      <div onClick={toggleAuth}>
        <h1>Auth: {isAuthenticated ? "logged in" : "logged out"}</h1>
      </div>
      {isAuthenticated ? (
        <>
          <form onSubmit={handleSubmit}>
            <label>Song name:</label>
            <input type="text" required value={title} onChange={handleChange} />
            <input type="submit" value="Add Song" />
          </form>
          <div>Count: {count}</div>
        </>
      ) : (
        <div>Please click the above to log in.</div>
      )}
    </>
  );
};

export default NewSongForm;
