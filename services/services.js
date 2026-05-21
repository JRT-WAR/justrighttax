// services.js
document.addEventListener('DOMContentLoaded', () => {
    const calcService = document.getElementById('calcService');
    const calcAddon = document.getElementById('calcAddon');
    const calcDisplayTotal = document.getElementById('calcDisplayTotal');

    function calculateTotal() {
        const baseValue = parseInt(calcService.value) || 0;
        const addonValue = parseInt(calcAddon.value) || 0;
        const totalSum = baseValue + addonValue;
        calcDisplayTotal.textContent = `$${totalSum}`;
    }

    calcService.addEventListener('change', calculateTotal);
    calcAddon.addEventListener('change', calculateTotal);
});