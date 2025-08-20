import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("RandomColorButton", () => {
    it("should display the text 'Slumpmässig färg'", () => {
        render(<RandomColorButton onColorChange={vi.fn()} />);
        expect(screen.getByRole("button")).toHaveTextContent("Slumpmässig färg");
    });

    it("should have the class 'random-color-button'", () => {
        render(<RandomColorButton onColorChange={vi.fn()} />);
        expect(screen.getByRole("button")).toHaveClass("random-color-button");
    });

    it("should call onColorChange when clicked", () => {
        const handleColorChange = vi.fn();
        render(<RandomColorButton onColorChange={handleColorChange} />);
        fireEvent.click(screen.getByRole("button"));
        expect(handleColorChange).toHaveBeenCalledOnce();
    });

    it("should call onColorChange with a valid hex color code", () => {
        const handleColorChange = vi.fn();
        render(<RandomColorButton onColorChange={handleColorChange} />);
        fireEvent.click(screen.getByRole("button"));
        expect(handleColorChange).toHaveBeenCalledWith(
            expect.stringMatching(/^#[0-9A-F]{6}$/i)
        );
    })
});