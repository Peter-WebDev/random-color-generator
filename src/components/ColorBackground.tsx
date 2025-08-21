import { ReactNode } from "react";

interface ColorBackgroundProps {
    backgroundColor: string;
    children: ReactNode;
}

function ColorBackground({ backgroundColor, children }: ColorBackgroundProps) {
    return (
        <div
            style={{ backgroundColor: backgroundColor }}
            className="color-background"
            data-testid="color-background"
        >
            <div>
                {children}
            </div>
        </div>
    );
}

export default ColorBackground;