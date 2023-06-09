import Card from "./Card";
import GuessForm from "./GuessForm";
import Encryption from "./Encryption";
import ScoreCard from "./ScoreCard";
import { useState } from "react";
import Options from "./Options";

function Game({ inputs }) {
  const [guess, setGuess] = useState("");

  const handleGuess = (value) => {
    setGuess(value);
    console.log(value)
  };

  let sentence = "You are the shuckiest shuck faced shuck in the world";
  let key = "THIS IS WORKING";
  let encrypted = Encryption(key, sentence);

  let puzzle = encrypted.split(" ");

  // let objectPairs = []
  let pairedObject = {};

  sentence.split(" ");
  encrypted.split(" ");
  for (let i = 0; i < encrypted.length; i++) {
    pairedObject[encrypted[i].toUpperCase()] = sentence[i];
  }
  // console.log(pairedObject)

  let keys = [...new Set(encrypted)]; //make new array have one of each character
  keys.forEach((key) => (inputs[key] = ""));
  // console.log(inputs);

  const [score, setScore] = useState(0);

  function renderScore(score) {
    setScore(score);
  }
  //
  // puzzle = puzzle.split('')
  let new_puzzle = puzzle.join("");
  new_puzzle = new_puzzle.split("");
  console.log(new_puzzle) //! ['F', 'B', 'P', 'V', 'M', 'H']

  const keySelect = (puzzled) => {
    const options = [];
    for (key in puzzled) {
      options.push(
        <Options key = {key} value = {new_puzzle[key]}/>
      );
    }
  
    return options;
  };

  let letter = puzzle.map((w) => {
    // game display characters
    return (
      <div className="word">
        {w.split("").map((character) => (
          <Card character={character} value={pairedObject[character]} />
        ))}
      </div>
    );
  });

  return (
    <div className="Game">
      <p id="score">
        Score: {"\n"}
        {score}
      </p>
      <div className="Game-Display">{letter}</div>
      <div className="Game-Keys">
        <form className="Game-Form">
          <select>
            <option></option>
            {keySelect(new_puzzle)}
          </select>

          <GuessForm handleGuess={handleGuess} />
          <button>Submit</button>
        </form>
        <aside className="timerStyle">
          <ScoreCard renderScore={renderScore} />
        </aside>
      </div>
    </div>
  );
}

export default Game;
