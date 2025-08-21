import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("ColorDisplay", () => {
    it("should display the provided color in uppercase", () => {
        render(<ColorDisplay color="#aAcCeE" />);
        expect(screen.getByText("#AACCEE")).toBeInTheDocument();
        expect(screen.queryByText("#aAcCeE")).not.toBeInTheDocument();
        // Assuming ColorDisplay component renders the color in uppercase
    });

    it("should display different colors correctly", () => {
        const { rerender } = render(<ColorDisplay color="#FF0000" />);
        expect(screen.getByText("#FF0000")).toBeInTheDocument();

        rerender(<ColorDisplay color="#00FF00" />);
        expect(screen.getByText("#00FF00")).toBeInTheDocument();
    });
});