document.addEventListener("DOMContentLoaded", () => {


    const revealElements = document.querySelectorAll('.step-card, .hero-text, .hero-image');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });


    setInterval(() => {
        const icons = document.querySelectorAll('.icon-circle');
        icons.forEach(icon => {
            icon.style.transform = 'scale(1.1) rotate(0deg)';
            setTimeout(() => icon.style.transform = 'scale(1)', 300);
        });
    }, 5000);
    const userBtn = document.getElementById('userBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');

    if (userBtn && dropdownMenu) {
        userBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            dropdownMenu.classList.toggle('open-menu');
        });

        document.addEventListener('click', function (e) {
            if (!userBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.remove('open-menu');
            }
        });
    }
});