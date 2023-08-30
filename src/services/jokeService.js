export const getAllJokes = () => {
  return fetch("http://localhost:8088/jokes").then((response) =>
    response.json()
  );
};

export const setJoke = async (chosenJoke) => {
  const jokeObject = { text: chosenJoke, told: false };

  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObject),
  };
  const response = await fetch("http://localhost:8088/jokes", postOptions);
};

export const setJokeTold = async (joke, API) => {
  const jokeObject = { text: joke, told: true };

  const putOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObject),
  };
  const response = await fetch(API, putOptions);
};

export const setJokeUntold = async (joke, API) => {
  const jokeObject = { text: joke, told: false };

  const putOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObject),
  };
  const response = await fetch(API, putOptions);
};

export const deleteJoke = async (API) => {
  const deleteOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(API, deleteOptions);
};
