import { useState } from "react";
import ColorBackground from "./components/ColorBackground";
import ColorDisplay from "./components/ColorDisplay";
import RandomColorButton from "./components/RandomColorButton";
import "./styles/App.css";

function App() {
    const [backgroundColor, setBackgroundcolor] = useState('#FFFFFF');

    return (
        <ColorBackground backgroundColor={backgroundColor}>
            <h1>Random Color Generator</h1>

            <RandomColorButton onColorChange={setBackgroundcolor} />

            <ColorDisplay color={backgroundColor} />
        </ColorBackground>
    );
}

export default App;