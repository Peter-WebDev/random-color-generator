function RandomColorButton() {
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