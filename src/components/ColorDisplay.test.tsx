import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("ColorDisplay", () => {
    it("should display the provided color in uppercase", () => {
        render(<ColorDisplay color="#FF0000" />);
        expect(screen.getByText("#FF0000")).toBeInTheDocument();
        expect(screen.queryByText("#ff0000")).not.toBeInTheDocument();
        // Assuming ColorDisplay component renders the color in uppercase
    });
});