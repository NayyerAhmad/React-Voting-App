import React, { useState } from "react";
import { TextField, Select, MenuItem, Button, FormControl, InputLabel, FormHelperText} from "@material-ui/core";

import "../../assets/Feedback.css"



const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedbackType, setFeedbackType] = useState("");
  const [feedbackDescription, setFeedbackDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
        variant="outlined"
        required
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
        variant="outlined"
        required
        type="email"
      />
      <FormControl fullWidth margin="normal" variant="outlined" required>
        <InputLabel>Feedback Type</InputLabel>
        <Select
          value={feedbackType}
          onChange={(e) => setFeedbackType(e.target.value)}
          label="Feedback Type"
        >
          <MenuItem value="suggestion">Suggestion</MenuItem>
          <MenuItem value="complaint">Complaint</MenuItem>
          <MenuItem value="appreciation">Appreciation</MenuItem>
          <MenuItem value="others">Others</MenuItem>
        </Select>
        <FormHelperText>Select the type of your feedback</FormHelperText>
      </FormControl>
      <TextField
        label="Feedback Description"
        value={feedbackDescription}
        onChange={(e) => setFeedbackDescription(e.target.value)}
        multiline
        rows={4}
        fullWidth
        margin="normal"
        variant="outlined"
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default FeedbackForm;
