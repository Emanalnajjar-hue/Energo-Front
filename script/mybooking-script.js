function removeBooking(button) {
    if (confirm("Are you sure you want to cancel this booking?")) {
        const row = button.closest('.booking-row');
        row.remove();
    }

    function updateUserInfo(name, email, phone) {
        document.querySelector('.sidebar h3').innerText = name;
        document.querySelector('.email').innerText = email;

    }

    function saveData() {
        const email = document.getElementById('userEmail').value;
        const phone = document.getElementById('userPhone').value;
        const location = document.getElementById('userLocation').value;

        console.log("Saved:", { email, phone, location });

        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPhone', phone);
        localStorage.setItem('userLocation', location);
    }

    window.onload = function () {
        if (localStorage.getItem('userEmail')) {
            document.getElementById('userEmail').value = localStorage.getItem('userEmail');
            document.getElementById('userPhone').value = localStorage.getItem('userPhone');
            document.getElementById('userLocation').value = localStorage.getItem('userLocation');
        }
    };

    function removeBooking(button) {
        if (confirm("Are you sure you want to cancel this booking?")) {
            const row = button.closest('.booking-row');
            row.remove();
        }
    }
}