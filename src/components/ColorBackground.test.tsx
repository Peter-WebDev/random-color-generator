import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ColorBackground from "./ColorBackground";

describe("ColorBackground", () => {
    it("should apply background color from props", () => {
        render(<ColorBackground backgroundColor="#FFAA00">Test</ColorBackground>);

        const backgroundElement = screen.getByTestId('color-background');

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