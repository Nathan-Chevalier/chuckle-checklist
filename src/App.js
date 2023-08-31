import "./App.css";
import { useState, useEffect } from "react";
import {
  getAllJokes,
  setJokeTold,
  setJoke,
  setJokeUntold,
  deleteJoke,
} from "./services/jokeService";
import stevePic from "./assets/steve.png";

export const App = () => {
  const [newJoke, setNewJoke] = useState("");
  const [allJokes, setAllJokes] = useState([]);
  const [toldJokes, setToldJokes] = useState([]);
  const [untoldJokes, setUntoldJokes] = useState([]);

  // ? Function to set the jokes state based on the API jokes array
  const jokeUpdate = () => {
    getAllJokes().then((jokesArray) => {
      setAllJokes(jokesArray);
    });
  };

  // ? Render initial state with API jokes array, re-renders when a new joke is added
  useEffect(() => {
    jokeUpdate();
  }, []);

  // ? Sets filtered states for told & untold jokes
  useEffect(() => {
    const toldFilter = allJokes.filter((toldJoke) => toldJoke.told === true);
    const untoldFilter = allJokes.filter(
      (untoldJoke) => untoldJoke.told === false
    );
    setToldJokes(toldFilter);
    setUntoldJokes(untoldFilter);
  }, [allJokes]);

  return (
    <>
      <div className="app-container">
        <div className="app-heading">
          <div className="app-heading-circle">
            <img className="app-logo" src={stevePic} alt="Good job Steve" />
          </div>
          <h1 className="app-heading-text">Chuckle Checklist</h1>
        </div>
        <div>
          <h2>Add Joke:</h2>
          <div className="joke-add-form">
            <div className="app-heading"></div>
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
              className="joke-input-submit"
              onClick={() => {
                newJoke !== "" ? setJoke(newJoke) : Error("Nope, write a joke");
                jokeUpdate();
                setNewJoke("");
              }}
            >
              Save that joke!
            </button>
          </div>
        </div>
        <div className="joke-lists-container">
          <div className="joke-list-container">
            <h2>
              Untold Jokes
              <span className="untold-count"> ({untoldJokes.length})</span>
            </h2>
            <div className="app-heading"></div>
            <ul>
              {untoldJokes.map((joke) => {
                const API = `http://localhost:8088/jokes/${joke.id}`;
                return (
                  <li className="joke-list-item" key={joke.id}>
                    <p className="joke-list-item-text">{joke.text}</p>
                    <button
                      className=""
                      onClick={async () => {
                        await setJokeTold(joke.text, API);
                        jokeUpdate();
                      }}
                    >
                      <i className="fa-solid fa-arrows-turn-right"></i>
                    </button>
                    <button
                      className=""
                      onClick={async () => {
                        await deleteJoke(API);
                        jokeUpdate();
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="joke-list-container">
            <h2>
              Told Jokes
              <span className="told-count"> ({toldJokes.length})</span>
            </h2>
            <div className="app-heading"></div>
            <ul>
              {toldJokes.map((joke) => {
                const API = `http://localhost:8088/jokes/` + joke.id;
                return (
                  <li className="joke-list-item" key={joke.id}>
                    <p className="joke-list-item-text">{joke.text}</p>
                    <button
                      className=""
                      onClick={async () => {
                        await setJokeUntold(joke.text, API);
                        jokeUpdate();
                      }}
                    >
                      <i className="fa-solid fa-arrows-turn-right fa-flip-horizontal"></i>
                    </button>
                    <button
                      className=""
                      onClick={async () => {
                        await deleteJoke(API);
                        jokeUpdate();
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
