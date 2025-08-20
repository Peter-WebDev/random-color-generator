import RandomColorButton from "./components/RandomColorButton";

function App() {
  return (
    <div>
      <h1>Slumpmässig färgväxlare</h1>
      <RandomColorButton onColorChange={(color) => console.log(`Färg ändrad till: ${color}`)} />
    </div>
  );
}

export default App;
