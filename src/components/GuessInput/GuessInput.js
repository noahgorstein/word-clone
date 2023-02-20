import React from "react";

function GuessInput({ addGuess, disabled }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    addGuess(guess);
    setGuess("");
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={disabled}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value;
          const capitalizedInput = nextGuess.toUpperCase();
          setGuess(capitalizedInput);
        }}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
