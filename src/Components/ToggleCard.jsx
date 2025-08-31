export default function ToggleCard() {
    const card = document.querySelector('.card');
    const button = document.querySelector('.click-button');

    // Hide button and show card
    button.classList.add('hidden');
    card.classList.remove('hidden');
}