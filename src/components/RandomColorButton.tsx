interface RandomColorButtonProps {
    onColorChange: (color: string) => void;
}


function RandomColorButton({ onColorChange }: RandomColorButtonProps) {
    // Function to generate a random hex color code
    return (
        <button
            onClick={handleClick}
            className="random-color-button"
            type="button"
        >
            Slumpmässig färg
        </button>
    );
};

export default RandomColorButton;