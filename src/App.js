import React, { useState } from "react";

function App() {
  const [options, setOptions] = useState([
    { id: 1, text: "Option 1" },
    { id: 2, text: "Option 2" },
    { id: 3, text: "Option 3" }
  ]);
  const [votes, setVotes] = useState({});

  const handleVote = optionId => {
    setVotes({ ...votes, [optionId]: (votes[optionId] || 0) + 1 });
  };

  return (
    <div>
      {options.map(option => (
        <div key={option.id}>
          <p>{option.text}</p>
          <p>Votes: {votes[option.id] || 0}</p>
          <button onClick={() => handleVote(option.id)}>Vote</button>
        </div>
      ))}
    </div>
  );
}

export default App;
