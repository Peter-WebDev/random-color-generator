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
    // Mock for specific color
    mockMathRandom.mockReturnValue(0.5); // Gives #7FFFFF
    console.log(mockMathRandom);

    render(<App />);

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByText("#7FFFFF")).toBeInTheDocument();
  });

  it("should change background color when button i clicked", () => {
    render(<App />);

    const backgroundElement = screen.getByTestId("color-background");

    // Test initial color value
    expect(backgroundElement).toHaveStyle("background-color: #FFFFFF");

    fireEvent.click(screen.getByRole("button"));

    // Test color after click to NOT be white
    expect(backgroundElement).not.toHaveStyle("background-color: #FFFFFF");
  });
});
