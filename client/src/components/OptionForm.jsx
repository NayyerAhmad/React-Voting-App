//form with an input field for users to enter the number of options they way to create

import React, { useState } from "react";

function OptionForm({ handleCreateOption }) {
  const [numberOfOptions, setNumberOfOptions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isNaN(numberOfOptions) && numberOfOptions > 0) {
      handleCreateOption(Number(numberOfOptions));
      setNumberOfOptions("");
    } else {
      alert("Please enter a valid number.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Number of Options for my voting
        <input
          type="text"
          value={numberOfOptions}
          onChange={(e) => setNumberOfOptions(e.target.value)}
        />
      </label>
      <button type="submit">Create Options</button>
    </form>
  );
}

export default OptionForm;
