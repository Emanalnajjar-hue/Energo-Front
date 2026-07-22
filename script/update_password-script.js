document.addEventListener('DOMContentLoaded', () => {
    const mockUserData = {
        fullName: "DoDoon M Lubbad",
        email: "doaolubbad2003@email.com",
        phone: "+972 79 123 4567",
        address: "Gaza, Palestine",
        membershipLevel: "Silver Member",
        totalRentals: 8
    };

    function loadUserData() {
        setTimeout(() => {
            document.getElementById('display-name').innerText = mockUserData.fullName;
            document.getElementById('display-email').innerText = mockUserData.email;
            document.getElementById('display-phone').innerText = mockUserData.phone;
            document.getElementById('display-address').innerText = mockUserData.address;
            document.getElementById('display-membership').innerText = mockUserData.membershipLevel;

            animateCounter('rental-count-display', mockUserData.totalRentals);
        }, 500);
    }

    loadUserData();

    document.getElementById('password-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const errorDiv = document.getElementById('error-message');
        errorDiv.style.display = 'none';

        const newPass = document.getElementById('new-password').value;
        const confirmPass = document.getElementById('confirm-password').value;

        if (newPass !== confirmPass) {
            errorDiv.innerText = "Passwords do not match!";
            errorDiv.style.display = 'block';
            return;
        }

        const btn = document.querySelector('.save-btn');
        const originalText = btn.innerText;
        btn.innerText = "Password Updated!";
        btn.style.backgroundColor = "#28a745";

        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = "";
            document.getElementById('password-form').reset();
        }, 3000);
    });

    function animateCounter(id, targetValue) {
        let count = 0;
        const element = document.getElementById(id);
        element.innerText = count + " Rentals";

        const timer = setInterval(() => {
            count++;
            element.innerText = count + " Rentals";
            if (count >= targetValue) clearInterval(timer);
        }, 100);
    }
});