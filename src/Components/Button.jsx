import ToggleCard from "./ToggleCard"
export default function Button() {
    return (
        <button className="click-button" onClick={ToggleCard}>
            <span>Click Me</span>
        </button>
    )
}