import React, { useState } from "react";

function App() {
  const [options, setOptions] = useState([]);

  const handleCreateOptions = () => {
    const numberOfOptions = (
      window.prompt("Enter the number of options:")
    );


    if (!isNaN(numberOfOptions) && numberOfOptions > 0) {
      const newOptions = [];
      for (let i = 0; i < numberOfOptions; i++) {
        const name = window.prompt(`Enter name for option ${i + 1}:`);
        newOptions.push({ id: i + 1, name, votes: 0 });
      }
      setOptions(newOptions);
    } else {
      alert("Please enter a valid number.");
    }
  };

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
      setOptions(options.map((option) => ({ ...option, votes: 0 })));
    }
  };

  const handleClearOptions = () => {
    if (window.confirm("Are you sure you want to clear all options?")) {
      setOptions([]);
    }
  };

  return (
    <div className="container App">
      <h1>Voting App</h1>
      {options.length === 0 && (
        <button onClick={handleCreateOptions}>Create Options</button>
      )}
      {options.length > 0 && (
        <div>
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
            <button onClick={handleRefresh}>Refresh Vote Count</button>
            <button onClick={handleClearOptions}>Recreate Options</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;