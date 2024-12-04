import React, { useState, useEffect } from "react";
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
        return true;
      }
    }
    if (newCells.every((cell) => cell !== null)) {
      setWinner("Draw");
      return true;
    }
    return false;
  };

  const computerMove = () => {
    const emptyCells = cells.map((cell, index) => (cell === null ? index : null)).filter((index) => index !== null);

    if (emptyCells.length === 0) return; // No moves available

    // Check if AI can block the player
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      const line = [cells[a], cells[b], cells[c]];

      // Check if the player is about to win
      if (line.filter((cell) => cell === "X").length === 2 && line.includes(null)) {
        const blockIndex = combination[line.indexOf(null)];
        const newCells = [...cells];
        newCells[blockIndex] = "O";
        setCells(newCells);
        if (!checkWinner(newCells)) {
          setCurrentPlayer("X");
        }
        return;
      }
    }

    // No blocking needed, make a random move
    const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const newCells = [...cells];
    newCells[randomIndex] = "O";
    setCells(newCells);
    if (!checkWinner(newCells)) {
      setCurrentPlayer("X");
    }
  };

  const handleClick = (index) => {
    if (cells[index] || winner || currentPlayer === "O") return;

    const newCells = [...cells];
    newCells[index] = "X";
    setCells(newCells);

    if (!checkWinner(newCells)) {
      setCurrentPlayer("O");
    }
  };

  useEffect(() => {
    if (currentPlayer === "O" && !winner) {
      const timer = setTimeout(computerMove, 500); // Delay for AI realism
      return () => clearTimeout(timer);
    }
  }, [currentPlayer]);

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
