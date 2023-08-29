const transientState = new Map();
transientState.set("text", "");
transientState.set("told", false);

export const saveJoke = async () => {
  const toObject = Object.fromEntries(transientState);
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(toObject),
  };
  const response = await fetch("http://localhost:8088/jokes", postOptions);
};
