const changeImgBtn = document.getElementById('change-img-btn');
const fileInput = document.getElementById('file-input');
const profileImg = document.getElementById('profile-img');

changeImgBtn.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => profileImg.src = e.target.result;
        reader.readAsDataURL(e.target.files[0]);
    }
});

const form = document.getElementById('profile-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('full-name').value;
    const email = document.getElementById('email-addr').value;
    const phone = document.getElementById('phone-num').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;

    if (name) document.getElementById('display-name').textContent = name;
    if (email) document.getElementById('display-email').textContent = email;
    if (phone) document.getElementById('display-phone').textContent = phone;
    if (address || city) document.getElementById('display-address').textContent = `${address}, ${city}`;

    const toast = document.getElementById('toast-msg');
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 3000);
});