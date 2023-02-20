import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer}) {
  const guessStatus = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((index) => (
        <span
          className={`cell ${value ? guessStatus[index].status : ""}`}
          key={index}
        >
          {value ? value[index] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
