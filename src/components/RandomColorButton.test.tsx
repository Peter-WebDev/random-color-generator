import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("RandomColorButton", () => {
    it("should display the text 'Slumpmässig färg'", () => {
        render(<RandomColorButton onColorChange={vi.fn()} />);
        expect(screen.getByRole("button")).toHaveTextContent("Slumpmässig färg");
    });
});