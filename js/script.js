document.addEventListener('DOMContentLoaded', () => {

    // Save Job Button Toggle
    const saveJobBtn = document.getElementById('saveJobBtn');
    if (saveJobBtn) {
        const heartIcon = saveJobBtn.querySelector('.heart-icon');
        let isSaved = false;

        saveJobBtn.addEventListener('click', () => {
            isSaved = !isSaved;
            if (isSaved) {
                heartIcon.setAttribute('fill', 'currentColor'); // Fill the heart
                saveJobBtn.style.backgroundColor = '#f0f4f8';
                saveJobBtn.innerHTML = `
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" class="heart-icon"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    Saved
                `;
            } else {
                heartIcon.setAttribute('fill', 'none'); // Unfill
                saveJobBtn.style.backgroundColor = 'var(--color-white)';
                saveJobBtn.innerHTML = `
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="heart-icon"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    Save job
                `;
            }
        });
    }

    // Copy Link Button
    const copyLinkBtn = document.getElementById('copyLinkBtn');
    if (copyLinkBtn) {
        // const jobLinkText = document.getElementById('jobLinkText'); // Unused but safe if removed

        copyLinkBtn.addEventListener('click', () => {
            const fullLink = "https://www.upwork.com/jobs/0123456789"; // Example Real Link
            navigator.clipboard.writeText(fullLink).then(() => {
                const originalText = copyLinkBtn.textContent;
                copyLinkBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyLinkBtn.textContent = originalText;
                }, 2000);
            });
        });
    }


    // Billing Page Logic
    const billingList = document.getElementById('billingList');
    const addBillingForm = document.getElementById('addBillingForm');
    const addBillingBtn = document.getElementById('addBillingBtn');
    const cancelBillingBtn = document.getElementById('cancelBillingBtn');
    const saveBillingBtn = document.getElementById('saveBillingBtn');

    if (billingList && addBillingForm) {
        // Show Form
        addBillingBtn.addEventListener('click', () => {
            billingList.classList.add('hidden');
            addBillingForm.classList.remove('hidden');
        });

        // Hide Form (Cancel)
        cancelBillingBtn.addEventListener('click', () => {
            addBillingForm.classList.add('hidden');
            billingList.classList.remove('hidden');
        });

        // Mock Save
        saveBillingBtn.addEventListener('click', () => {
            alert("Billing method saved! (This is a prototype)");
            addBillingForm.classList.add('hidden');
            billingList.classList.remove('hidden');
        });

        // Payment Method Toggle
        const radioButtons = document.querySelectorAll('input[name="paymentType"]');
        const formCard = document.getElementById('form-card');
        const formInsta = document.getElementById('form-insta');
        const formWallet = document.getElementById('form-wallet');

        radioButtons.forEach(radio => {
            radio.addEventListener('change', (e) => {
                // Hide all sections first
                formCard.classList.add('hidden');
                formInsta.classList.add('hidden');
                formWallet.classList.add('hidden');

                // Show selected
                if (e.target.value === 'card') {
                    formCard.classList.remove('hidden');
                } else if (e.target.value === 'insta') {
                    formInsta.classList.remove('hidden');
                } else if (e.target.value === 'wallet') {
                    formWallet.classList.remove('hidden');
                }
            });
        });
    }

});

// Settings Page Toggle Function (Global Scope for onclick attribute)
function toggleEdit(cardId) {
    const card = document.getElementById(cardId);
    if (!card) return;

    const viewMode = card.querySelector('.view-mode');
    const editMode = card.querySelector('.edit-mode');
    const editBtn = card.querySelector('.edit-btn');

    if (viewMode.classList.contains('hidden')) {
        // Switch to View Mode
        viewMode.classList.remove('hidden');
        editMode.classList.add('hidden');
        editBtn.style.display = 'flex'; // Show pencil
    } else {
        // Switch to Edit Mode
        viewMode.classList.add('hidden');
        editMode.classList.remove('hidden');
        editBtn.style.display = 'none'; // Hide pencil
    }
}
