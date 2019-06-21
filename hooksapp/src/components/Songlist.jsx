import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Almost home", id: uuid() },
    { title: "Memory gospel", id: uuid() },
    { title: "This wild darkness", id: uuid() }
  ]);

  let songTitle = null;
  const addSong = event => {
    if (songTitle) {
      setSongs([...songs, { title: songTitle, id: uuid() }]);
    }
    event.preventDefault();
  };

  const handleChange = event => {
    songTitle = event.target.value;
  };

  return (
    <div className="song-list">
      <ul>
        {songs.map((song, i) => {
          return <li key={i}>{song.title}</li>;
        })}
      </ul>
      <form name="song-form" onSubmit={addSong}>
        <input
          name="songInput"
          type="text"
          onChange={handleChange}
          value={songTitle}
        />
        <input type="submit" value="Add a Song" />
      </form>
    </div>
  );
};

export default SongList;
