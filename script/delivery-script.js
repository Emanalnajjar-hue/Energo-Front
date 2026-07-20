document.getElementById('deliveryForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = this.querySelector('.submit-btn');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.style.opacity = '0.8';

    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Request Sent!';
        btn.style.background = '#28a745';
        alert('Your delivery request has been sent successfully!');

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.style.opacity = '1';
            this.reset();
        }, 3000);
    }, 1500);
});