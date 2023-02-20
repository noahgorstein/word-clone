import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Banner({ status, answer, numOfGuesses }) {
  const className = status === "won" ? "happy" : "sad";

  return (
    <div className={`banner ${className}`}>
      {status === "won" ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numOfGuesses} guesses.</strong>
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState("running");

  function addGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (nextGuesses.includes(answer)) {
      setStatus("won");
    }

    if (
      nextGuesses.length >= NUM_OF_GUESSES_ALLOWED &&
      !nextGuesses.includes(answer)
    ) {
      setStatus("lost");
    }
  }

  return (
    <>
      {status !== "running" && (
        <Banner status={status} numOfGuesses={guesses.length} answer={answer} />
      )}
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput addGuess={addGuess} disabled={status !== "running"} />
    </>
  );
}

export default Game;
