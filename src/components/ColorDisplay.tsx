interface ColorDisplayProps {
    color: string;
}

function ColorDisplay({ color }: ColorDisplayProps) {
    return (
        <div>
            <p>Aktuell färgkod:</p>
            <p>{color.toUpperCase()}</p>
        </div>
    );
}

export default ColorDisplay;