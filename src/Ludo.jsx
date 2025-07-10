import { useState } from "react";

export default function Ludo() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, red: 0, green: 0 });
  let updateBlue = () => {
    setMoves((prevMov) => {
      return { ...prevMov, blue: prevMov.blue + 1 };
    });
  };
  let updateGreen = () => {
    setMoves((prevMov) => {
      return { ...prevMov, green: prevMov.green + 1 };
    });
  };
  let updateYellow = () => {
    setMoves((prevMov) => {
      return { ...prevMov, yellow: prevMov.yellow + 1 };
    });
  };

  let updateRed = () => {
    setMoves((prevMov) => {
      return { ...prevMov, red: prevMov.red + 1 };
    });
  };

  return (
    <div>
      <p>Game Begins</p>
      <div className="board">
        <p>Blue Moves = {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Green Moves = {moves.green} </p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
        <p>Yellow Moves = {moves.yellow} </p>
        <button style={{ backgroundColor: "yellow" }} onClick={updateYellow}>
          +1
        </button>
        <p>Red Moves = {moves.red} </p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
          +1
        </button>
      </div>
    </div>
  );
}
