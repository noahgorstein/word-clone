import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((guessNum) => (
        <Guess answer={answer} key={guessNum} value={guesses[guessNum]} />
      ))}
    </div>
  );
}

export default GuessResults;
