import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("ColorBackground", () => {
    it("should apply background color from props", () => {
        // Render component with specific color
        render(<ColorBackground backgroundColor="#FFAA00">Test</ColorBackground>);

        // Find element with class name by using getByTestId
        const backgroundDiv = screen.getByTestId('color-background');

        // Using toHaveStyle matching the background color
        expect(backgroundDiv).toHaveStyle('background-color: #FFAA00');
    });
});