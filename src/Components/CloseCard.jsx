export default function CloseCard() {
    const card = document.querySelector('.card');
    const button = document.querySelector('.click-button');

    // Hide card and show button
    card.classList.add('hidden');
    button.classList.remove('hidden');
}