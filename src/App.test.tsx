import { render, screen } from "@testing-library/react";
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
});
