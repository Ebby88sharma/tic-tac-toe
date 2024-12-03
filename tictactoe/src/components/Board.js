import React, { useState } from "react";
import Cell from "./Cell";
import WinnerMessage from "./WinnerMessage";

const Board = () => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (newCells) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (newCells[a] && newCells[a] === newCells[b] && newCells[a] === newCells[c]) {
        setWinner(newCells[a]);
        return;
      }
    }
    if (newCells.every((cell) => cell !== null)) {
      setWinner("Draw");
    }
  };

  const handleClick = (index) => {
    if (cells[index] || winner) return;

    const newCells = [...cells];
    newCells[index] = currentPlayer;
    setCells(newCells);
    checkWinner(newCells);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const restartGame = () => {
    setCells(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <div>
      <div className="board">
        {cells.map((value, index) => (
          <Cell key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>
      {winner && <WinnerMessage winner={winner} onRestart={restartGame} />}
    </div>
  );
};

export default Board;
