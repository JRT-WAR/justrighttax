// signin.js
document.addEventListener('DOMContentLoaded', () => {
    const vaultForm = document.getElementById('vaultSecureForm');
    const modal = document.getElementById('popupModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    vaultForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const userInput = document.getElementById('vUser').value.trim();
        const passInput = document.getElementById('vPass').value;

        if (userInput === 'taxpayer' && passInput === 'secure99') {
            modalTitle.textContent = "AES-256 Tunnel Verified";
            modalTitle.style.color = "#0f766e";
            modalMessage.textContent = "Access Granted. Initializing synchronization routine for corporate profiles and processing active IRS document downloads.";
        } else {
            modalTitle.textContent = "Authentication Breach Alert";
            modalTitle.style.color = "#b91c1c";
            modalMessage.textContent = "Invalid credential validation hash key pattern sequence logged. Security trace generated. (Simulation Hint: use 'taxpayer' / 'secure99').";
        }
        modal.classList.add('show');
    });

    modalCloseBtn.addEventListener('click', () => modal.classList.remove('show'));
});