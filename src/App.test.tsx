import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("should render headline", () => {
    render(<App />);
    const headline = screen.getByText("Random Color Generator");
    expect(headline).toBeInTheDocument();
  });

  it("should show initial white color", () => {
    render(<App />);

    // Test initial color state in ColorDisplay
    expect(screen.getByText("#FFFFFF")).toBeInTheDocument();
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
