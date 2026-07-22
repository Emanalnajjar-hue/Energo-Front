document.addEventListener('DOMContentLoaded', () => {

    // Select buttons
    const selectButtons = document.querySelectorAll('.select-btn');
    selectButtons.forEach(button => {
        button.addEventListener('click', function () {
            this.innerText = 'Added!';
            this.style.backgroundColor = '#2d5a27';
            this.style.color = '#ffffff';
            this.style.borderColor = '#2d5a27';

            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Products Database
    const productsDB = {
        1: {
            name: "Universal Toolkits",
            price: 10.00,
            image: "../images/toolkit.png",
            desc: "Universal maintenance toolkit.",
            locations: ['north', 'middle', 'south']
        },
        2: {
            name: "Digital Monitor",
            price: 8.00,
            image: "../images/monitor.png",
            desc: "Smart display for battery levels.",
            locations: ['north', 'middle', 'south']
        },
        3: {
            name: "Heavy-Duty Cables",
            price: 5.00,
            image: "../images/cables.png",
            desc: "Heavy-duty power cables.",
            locations: ['north', 'middle', 'south']
        },
        4: {
            name: "Portable Generator",
            price: 25.00,
            image: "../images/generator_portable.png",
            desc: "Portable generator for home and outdoor use.",
            locations: ['north', 'middle', 'south']
        },
        5: {
            name: "Green Power Station",
            price: 20.00,
            image: "../images/power_station_green.png",
            desc: "Eco-friendly portable power station.",
            locations: ['north', 'middle', 'south']
        },
        6: {
            name: "Pro Power Station",
            price: 30.00,
            image: "../images/power_station_pro.png",
            desc: "Professional power station for heavy loads.",
            locations: ['north', 'middle', 'south']
        },
        7: {
            name: "Compact Inverter",
            price: 15.00,
            image: "../images/inverter.png",
            desc: "Compact inverter for efficient energy conversion.",
            locations: ['north', 'middle', 'south']
        },
        8: {
            name: "Lithium Cells",
            price: 4.00,
            image: "../images/lithium_cells.png",
            desc: "High-performance lithium battery cells.",
            locations: ['north', 'middle', 'south']
        },
        9: {
            name: "Home Power Battery",
            price: 25.00,
            image: "../images/battery_home.png",
            desc: "Reliable home backup battery.",
            locations: ['north', 'middle', 'south']
        },
        10: {
            name: "Charger",
            price: 20.00,
            image: "../images/ch1.png",
            desc: "Fast charger for batteries.",
            locations: ['north', 'middle', 'south']
        },
        11: {
            name: "Charger Unit",
            price: 50.00,
            image: "../images/ch2.png",
            desc: "Professional charging unit.",
            locations: ['north', 'middle', 'south']
        }
    };

    // Get selected product
    const urlParams = new URLSearchParams(window.location.search);
    const currentProductId = urlParams.get('product_id') || '1';
    const product = productsDB[currentProductId];

    // Show selected product
    const summaryContainer = document.getElementById('dynamic-summary-product');

    if (summaryContainer && product) {
        summaryContainer.innerHTML = `
            <div class="summary-card summary-product">
                <img src="${product.image}" alt="${product.name}">
                <div>
                    <h4>${product.name}</h4>
                    <p>${product.desc}</p>
                    <p class="green-text">$${product.price.toFixed(2)} / day</p>
                </div>
            </div>
        `;
    }

    const checkBtn = document.getElementById('check-btn');
    const locationSelect = document.getElementById('location-select');
    const bookBtn = document.getElementById('book-btn');
    const messageDiv = document.getElementById('availability-message');

    if (checkBtn && product) {
        checkBtn.addEventListener('click', function () {

            const selectedLocation = locationSelect.value;

            if (!selectedLocation) {
                alert("Please select a location first.");
                return;
            }

            const isAvailable = product.locations.includes(selectedLocation);

            if (isAvailable) {
                if (messageDiv) {
                    messageDiv.style.color = "green";
                    messageDiv.innerText =
                        `${product.name} is available in ${selectedLocation}.`;
                }

                bookBtn.disabled = false;
            } else {
                if (messageDiv) {
                    messageDiv.style.color = "red";
                    messageDiv.innerText =
                        `${product.name} is not available in ${selectedLocation}.`;
                }

                bookBtn.disabled = true;
            }
        });
    }

    const pickupDate = document.getElementById('pickup-date');
    const returnDate = document.getElementById('return-date');

    if (pickupDate && returnDate) {
        returnDate.addEventListener('change', function () {
            if (pickupDate.value && this.value < pickupDate.value) {
                alert("Return date cannot be before pickup date.");
                this.value = "";
            }
        });
    }
    
   if (bookBtn) {
    bookBtn.addEventListener('click', function () {


        const bookingData = {
            productId: currentProductId,
            productName: product.name,
            productImage: product.image,
            price: product.price,

            location: locationSelect.value,

            pickupDate: pickupDate.value,
            returnDate: returnDate.value
        };


        localStorage.setItem(
            "bookingSummary",
            JSON.stringify(bookingData)
        );


        window.location.href = "../pages/payment_summary.html";

    });
}


});