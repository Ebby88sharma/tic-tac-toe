import React from "react";

const WinnerMessage = ({ winner, onRestart }) => {
  return (
    <div className="message">
      {winner === "Draw" ? (
        <p>It's a Draw!</p>
      ) : (
        <p>{winner} Wins!</p>
      )}
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};

export default WinnerMessage;
