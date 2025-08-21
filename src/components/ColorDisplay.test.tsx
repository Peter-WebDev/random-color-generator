import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("ColorDisplay", () => {
    it("should display the provided color in uppercase", () => {
        render(<ColorDisplay color="#aAcCeE" />);
        expect(screen.getByText("#AACCEE")).toBeInTheDocument();
        expect(screen.queryByText("#aAcCeE")).not.toBeInTheDocument();
        // Assuming ColorDisplay component renders the color in uppercase
    });
});