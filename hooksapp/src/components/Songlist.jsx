import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";
import AuthContextProvider from "./AuthContext";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Almost home", id: uuid() },
    { title: "Memory gospel", id: uuid() },
    { title: "This wild darkness", id: uuid() }
  ]);

  const addSong = title => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  useEffect(() => {
    console.log("useEffect hook ran", songs);
  }, [songs]);

  return (
    <div className="song-list">
      <ul>
        {songs.map((song, i) => {
          return <li key={i}>{song.title}</li>;
        })}
      </ul>
      <AuthContextProvider>
        <NewSongForm addSong={addSong} />
      </AuthContextProvider>
    </div>
  );
};

export default SongList;
