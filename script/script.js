function showForm(formId) {
    const allForms = document.querySelectorAll('.form-section');
    allForms.forEach(form => {
        form.style.display = 'none';
    });

    const selectedForm = document.getElementById(formId);
    if (selectedForm) {
        selectedForm.style.display = 'flex';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const actionButtons = document.querySelectorAll('.btn-submit');

    actionButtons.forEach(button => {
        button.addEventListener('click', function () {
            window.location.href = 'home.html';
        });
    });
});