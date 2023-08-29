import { useState, useEffect } from "react";
import "./App.css";
import { saveJoke, setJoke } from "./services/jokeService";
import stevePic from "./assets/steve.png";

export const App = () => {
  const [newJoke, setNewJoke] = useState("");

  return (
    <>
      <div className="app-container">
        <div className="app-heading">
          <div className="app-heading-circle">
            <img className="app-logo" src={stevePic} alt="Good job Steve" />
          </div>
          <h1 className="app-heading-text">Chuckle Checklist</h1>
        </div>

        <div className="joke-add-form">
          <h2>Add Joke:</h2>
          <input
            className="joke-input"
            type="text"
            value={newJoke}
            placeholder="Enter a new joke..."
            onChange={(event) => {
              setNewJoke(event.target.value);
            }}
          />
          <button
            className=""
            onClick={() => {
              setJoke(newJoke);
              saveJoke();
              setNewJoke("");
            }}
          >
            Save that joke!
          </button>
        </div>
      </div>
    </>
  );
};
