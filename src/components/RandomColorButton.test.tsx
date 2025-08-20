import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("RandomColorButton", () => {
    it("should display the text 'Slumpmässig färg'", () => {
        render(<RandomColorButton onColorChange={vi.fn()} />);
        expect(screen.getByRole("button")).toHaveTextContent("Slumpmässig färg");
    });

    it("should have the class 'random-color-button'", () => {
        render(<RandomColorButton onColorChange={vi.fn()} />);
        expect(screen.getByRole("button")).toHaveClass("random-color-button");
    })
});