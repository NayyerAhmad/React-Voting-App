import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("create options", () => {
    const { getByText } = render(<App />);
    const button = getByText("Create Options");
    fireEvent.click(button);

    // Check that options state has been set correctly
    expect(App.options).toHaveLength(3);
    expect(App.options[0].name).toBe("Option 1");
    expect(App.options[1].name).toBe("Option 2");
    expect(App.options[2].name).toBe("Option 3");
  });

  test("handle vote", () => {
    const { getByText } = render(<App />);
    const voteButton = getByText("Vote");
    fireEvent.click(voteButton);

    // Check that votes state has been updated correctly
    expect(App.options[0].votes).toBe(1);
  });
});
