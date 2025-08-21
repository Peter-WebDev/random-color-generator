import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("ColorBackground", () => {
    it("should apply background color from props", () => {
        // Render component with specific color
        render(<ColorBackground backgroundColor="#FFAA00">Test</ColorBackground>);

        // Find element with class name by using getByTestId
        const backgroundElement = screen.getByTestId('color-background');

        // Using toHaveStyle matching the background color
        expect(backgroundElement).toHaveStyle('background-color: #FFAA00');
    });

    it("should change background color when props change", () => {
        const { rerender } = render(<ColorBackground backgroundColor="#FFAA00">Test</ColorBackground>);

        const backgroundElement = screen.getByTestId('color-background');
        expect(backgroundElement).toHaveStyle('background-color: #FFAA00');

        rerender(<ColorBackground backgroundColor="#FF00AA">Test</ColorBackground>);
        expect(backgroundElement).toHaveStyle('background-color: #FF00AA');
    });
});