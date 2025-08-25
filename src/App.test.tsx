import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";

describe("App Integration", () => {
  let mockMathRandom: any;

  beforeEach(() => {
    // Mock Math.random to get predictable results
    mockMathRandom = vi.spyOn(Math, 'random');
  });

  afterEach(() => {
    mockMathRandom.mockRestore();
  });

  it("should show initial white background color in ColorDisplay", () => {
    render(<App />);
    expect(screen.getByText("#FFFFFF")).toBeInTheDocument();
  });

  it("should show generated color in ColorDisplay when button is clicked", () => {
    // Mock random number to get a specific hex value
    mockMathRandom.mockReturnValue(0.5); // Gives #7FFFFF
    console.log(mockMathRandom);

    render(<App />);

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByText("#7FFFFF")).toBeInTheDocument();
  });

  it("should change background color when button is clicked", () => {
    // Mock random number to get a specific hex value
    mockMathRandom.mockReturnValue(0.2); // Gives #333333
    render(<App />);

    const backgroundElement = screen.getByTestId("color-background");

    // Verify initial background color
    expect(backgroundElement).toHaveStyle("background-color: #FFFFFF");

    fireEvent.click(screen.getByRole("button"));

    // Verify that the new background color has changed to the mocked value
    expect(backgroundElement).toHaveStyle("background-color: #333333");
  });

  it("should generate different colors on multiple clicks", () => {
    render(<App />);

    // Mock the first color
    mockMathRandom.mockReturnValueOnce(0.4); // Gives #666666
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("#666666")).toBeInTheDocument();

    // Mock the second color
    mockMathRandom.mockReturnValue(0.6); // Gives #999999
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("#999999")).toBeInTheDocument();
  });
});
