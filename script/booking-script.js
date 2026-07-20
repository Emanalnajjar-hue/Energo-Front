document.addEventListener('DOMContentLoaded', () => {

    const selectButtons = document.querySelectorAll('.select-btn');
    selectButtons.forEach(button => {
        button.addEventListener('click', function () {

            this.innerText = 'Added!';
            this.style.backgroundColor = '#2d5a27';
            this.style.color = '#ffffff';
            this.style.borderColor = '#2d5a27';


            this.style.transform = 'scale(0.95)';
            setTimeout(() => { this.style.transform = 'scale(1)'; }, 200);
        });
    }); document.addEventListener('DOMContentLoaded', function () {

        const productsDB = {
            1: {
                name: "Portable Generator",
                price: 25.00,
                image: "../images/gen1.png",
                desc: "Quiet, efficient power for camping and home backup.",
                locations: ['north', 'middle']
            },
            2: {
                name: "Digital Monitor",
                price: 8.00,
                image: "../images/acc2.png",
                desc: "Smart display for battery levels.",
                locations: ['south', 'middle']
            },
            3: {
                name: "Heavy Duty Cable",
                price: 5.00,
                image: "../images/acc1.png",
                desc: "10m durable cable.",
                locations: ['north', 'south', 'middle']
            }
        };

        const urlParams = new URLSearchParams(window.location.search);
        const currentProductId = urlParams.get('product_id') || 1;

        const product = productsDB[currentProductId];

        const summaryContainer = document.getElementById('dynamic-summary-product');
        if (product && summaryContainer) {
            summaryContainer.innerHTML = `
                <div class="summary-card summary-product">
                    <img src="${product.image}" alt="${product.name}">
                    <div>
                        <h4>${product.name}</h4>
                        <p>${product.desc}</p>
                        <p class="green-text">$${product.price} / day</p>
                    </div>
                </div>
            `;
        }

        const checkBtn = document.getElementById('check-btn');
        const locationSelect = document.getElementById('location-select');
        const bookBtn = document.getElementById('book-btn');
        const messageDiv = document.getElementById('availability-message');

        if (checkBtn) {
            checkBtn.addEventListener('click', function () {
                const selectedLocation = locationSelect.value;

                if (!selectedLocation) {
                    messageDiv.style.color = 'orange';
                    messageDiv.innerText = "Please select a location first.";
                    return;
                }

                checkBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Checking...';
                messageDiv.innerText = "";
                bookBtn.disabled = true;

                setTimeout(() => {
                    const isAvailable = product.locations.includes(selectedLocation);

                    if (isAvailable) {
                        messageDiv.style.color = 'green';
                        messageDiv.innerText = `Great! ${product.name} is available in ${selectedLocation}.`;
                        bookBtn.disabled = false;
                        bookBtn.style.background = "linear-gradient(to right, #10482D, #02831e)";
                    } else {
                        messageDiv.style.color = 'red';
                        messageDiv.innerText = `Sorry, ${product.name} is currently unavailable in ${selectedLocation}. Please try another location.`;
                        bookBtn.disabled = true;
                        bookBtn.style.background = "#ccc";
                    }

                    checkBtn.innerHTML = 'Update Result <i class="fas fa-sync-alt"></i>';

                }, 1000);
            });
        }

        if (bookBtn) {
            bookBtn.addEventListener('click', function () {
                alert("Proceeding to Payment Gateway...\n(In a real app, this redirects to PayPal)");
            });
        }
    });


    const pickupDate = document.getElementById('pickup-date');
    const returnDate = document.getElementById('return-date');

    returnDate.addEventListener('change', function () {
        if (pickupDate.value && this.value < pickupDate.value) {
            alert("تنبيه: تاريخ الإرجاع لا يمكن أن يكون قبل تاريخ الاستلام!");
            this.value = "";
        }
    });


    const updateBtn = document.querySelector('.update-btn');
    if (updateBtn) {
        updateBtn.addEventListener('click', () => {
            const summarySection = document.querySelector('.summary-section');
            if (summarySection) {
                summarySection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    const summaryCards = document.querySelectorAll('.summary-card');
    summaryCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
});