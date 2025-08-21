import { ReactNode } from "react";

interface ColorBackgroundProps {
    backgroundColor: string;
    children: ReactNode;
}

function ColorBackground({ backgroundColor, children }: ColorBackgroundProps) {
    return (
        <div></div>
    );
}

export default ColorBackground;