// desplay an individial option and handle voting

import React from "react";

function Option({ id, name, votes, handleVote }) {
  return (
    <div className="option">
      <h3>{name}</h3>
      <p>Votes: {votes}</p>
      <button onClick={() => handleVote(id)}>Vote</button>
    </div>
  );
}

export default Option;
