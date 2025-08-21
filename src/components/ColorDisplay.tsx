interface ColorDisplayProps {
    color: string;
}

function ColorDisplay({ color }: ColorDisplayProps) {
    console.log(`Color displayed: ${color}`); // For debugging purposes
    return (
        <div>
            <p>Aktuell färgkod:</p>
            <p>{color.toUpperCase()}</p>
        </div>
    )
}

export default ColorDisplay;