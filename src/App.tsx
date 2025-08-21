import { useState } from "react";

function App() {
    const [backgroundColor, setBackgroundcolor] = useState('#FFFFFF');

    return (
        <div>
            <h1>Random Color Generator</h1>
        </div>
    );
}

export default App;