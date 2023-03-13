import React, { useState } from "react";
import Option from "./components/Option";
import OptionForm from "./components/OptionForm";

function App() {
  const [options, setOptions] = useState([]);

  const handleCreateOptions = (numberOfOptions) => {
    const newOptions = [];
    for (let i = 0; i < numberOfOptions; i++) {
      const name = window.prompt(`Enter name for option ${i + 1}:`);
      newOptions.push({ id: i + 1, name, votes: 0 });
    }
    setOptions(newOptions);
  };

  const handleVote = (id) => {
    setOptions(
      options.map((option) =>
        option.id === id ? { ...option, votes: option.votes + 1 } : option
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
      <h1>Cast Your Vote</h1>
      {options.length === 0 && (
        <OptionForm handleCreateOption={handleCreateOptions} />
      )}
      {options.length > 0 && (
        <div>
          <div className="options">
            {options.map((option) => (
              <Option
                key={option.id}
                id={option.id}
                name={option.name}
                votes={option.votes}
                handleVote={handleVote}
              />
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
