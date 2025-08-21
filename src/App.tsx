import ColorDisplay from "./components/ColorDisplay";
import RandomColorButton from "./components/RandomColorButton";

function App() {
  return (
    <div>
      <h1>Slumpmässig färgväxlare</h1>
      <RandomColorButton onColorChange={(color) => console.log(`Color changed to: ${color}`)} />
      <ColorDisplay color="#aAcCeE" />
    </div>
  );
}

export default App;
