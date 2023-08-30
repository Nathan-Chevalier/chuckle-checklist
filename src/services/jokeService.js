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
