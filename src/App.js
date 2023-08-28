import { useState, useEffect } from "react";
import "./App.css";

export const App = () => {
  const [newJoke, setNewJoke] = useState("");

  return (
    <div>
      <input
        className=""
        type="text"
        value={newJoke}
        placeholder="Enter a new joke..."
        onChange={(event) => {
          setNewJoke(event.target.value);
        }}
      />
    </div>
  );
};
