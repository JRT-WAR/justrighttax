// contact.js
document.addEventListener('DOMContentLoaded', () => {
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const nextBtn = document.getElementById('nextBtn');
    const backBtn = document.getElementById('backBtn');
    const intakeForm = document.getElementById('advancedIntakeForm');

    const modal = document.getElementById('popupModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    nextBtn.addEventListener('click', () => {
        if(document.getElementById('cName').value && document.getElementById('cEmail').value) {
            step1.style.display = 'none';
            step2.style.display = 'block';
        } else {
            alert('Please populate required logistical items before continuing.');
        }
    });

    backBtn.addEventListener('click', () => {
        step2.style.display = 'none';
        step1.style.display = 'block';
    });

    intakeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const clientName = document.getElementById('cName').value;
        const targetService = document.getElementById('cService').value;

        modalTitle.textContent = "Intake Dossier Transmitted";
        modalMessage.textContent = `Thank you, ${clientName}. Your data folder for "${targetService}" has been securely routed. An onboarding agent will follow up within 24 business hours.`;
        modal.classList.add('show');

        this.reset();
        step2.style.display = 'none';
        step1.style.display = 'block';
    });

    modalCloseBtn.addEventListener('click', () => modal.classList.remove('show'));
});