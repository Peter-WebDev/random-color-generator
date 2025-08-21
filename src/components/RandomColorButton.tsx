interface RandomColorButtonProps {
    onColorChange: (color: string) => void;
}

function getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

function RandomColorButton({ onColorChange }: RandomColorButtonProps) {
    const handleClick = () => {
        const newColor = getRandomColor();
        onColorChange(newColor);
    }
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