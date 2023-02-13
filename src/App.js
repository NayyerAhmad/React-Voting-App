import React, { useState } from "react";

function App() {
  const [options, setOptions] = useState([
    { id: 1, name: "Option 1", votes: 0 },
    { id: 2, name: "Option 2", votes: 0 },
    { id: 3, name: "Option 3", votes: 0 },
  ]);

  const handleVote = (id) => {
    setOptions(
      options.map((option) =>
        option.id === id
          ? { ...option, votes: option.votes + 1 }
          : option
      )
    );
  };

  const handleRefresh = () => {
    if (window.confirm("Are you sure you want to refresh the votes?")) {
      setOptions([
        { id: 1, name: "Option 1", votes: 0 },
        { id: 2, name: "Option 2", votes: 0 },
        { id: 3, name: "Option 3", votes: 0 },
      ]);
    }
  };

  return (
    <div className="container">
      <h1>Voting App</h1>
      <div className="options">
        {options.map((option) => (
          <div className="option" key={option.id}>
            <h3>{option.name}</h3>
            <p>Votes: {option.votes}</p>
            <button onClick={() => handleVote(option.id)}>Vote</button>
          </div>
        ))}
      </div>
      <div className="votes">
        <table>
          <thead>
            <tr>
              <th>Option</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {options.map((option) => (
              <tr key={option.id}>
                <td>{option.name}</td>
                <td>{option.votes}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleRefresh}>Refresh</button>
      </div>
    </div>
  );
}

export default App;
