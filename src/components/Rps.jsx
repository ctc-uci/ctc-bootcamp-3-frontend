import React, { useState } from 'react';
import './RPSMovesPage.css'; // Assuming you have a CSS file for styling

// Helper functions for dummy members
const generateRandomMove = () => {
  const moves = ["Rock", "Paper", "Scissors"];
  return moves[Math.floor(Math.random() * moves.length)];
};

const createDummyMembers = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    memberId: i + 1, // Member IDs from 1 to 12
    move: generateRandomMove(),
  }));
};

const determineWinner = (member1, member2) => {
  const rules = {
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper",
  };

  if (member1.move === member2.move) {
    return "Draw";
  } else if (rules[member1.move] === member2.move) {
    return `Member ${member1.memberId} wins`;
  } else {
    return `Member ${member2.memberId} wins`;
  }
};

// RPSMovesPage component
const RPSMovesPage = () => {
  const members = createDummyMembers();
  const results = [];

  for (let i = 0; i < members.length; i += 2) {
    const result = determineWinner(members[i], members[i + 1]);
    results.push({ ...members[i], opponent: members[i + 1], result });
  }

  // State for user vs computer game
  const [userMove, setUserMove] = useState(null);
  const [computerMove, setComputerMove] = useState(null);
  const [gameResult, setGameResult] = useState('');

  // Handle user move and computer move
  const handleUserMove = (move) => {
    const compMove = generateRandomMove();
    setUserMove(move);
    setComputerMove(compMove);
    setGameResult(determineWinner({ move }, { move: compMove }));
  };

  return (
    <div>
      <h1>Rock Paper Scissors Game</h1>

      {/* Dummy members game */}
      <div className="game-results">
        {results.map(({ memberId, move, opponent, result }, index) => (
          <div key={index} className="game-match">
            <p>Member {memberId} ({move}) vs Member {opponent.memberId} ({opponent.move})</p>
            <p className="winner">{result}</p>
          </div>
        ))}
      </div>

      {/* User vs computer game */}
      <div className="user-game">
        <h2>Play Against A Computer</h2>
        <div className="move-buttons">
          {["Rock", "Paper", "Scissors"].map((move) => (
            <button key={move} onClick={() => handleUserMove(move)}>
              {move}
            </button>
          ))}
        </div>
        {userMove && (
          <div className="game-result">
            <p>Member Move {userMove}</p>
            <p> Move: {computerMove}</p>
            <p className="winner">{gameResult}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RPSMovesPage;
