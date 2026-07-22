document.addEventListener("DOMContentLoaded", () => {

    const productsDB = {
        1: {
            name: "Universal Toolkits",
            price: 10,
            image: "../images/toolkit.png"
        },
        2: {
            name: "Digital Monitor",
            price: 8,
            image: "../images/monitor.png"
        },
        3: {
            name: "Heavy-Duty Cables",
            price: 5,
            image: "../images/cables.png"
        },
        4: {
            name: "Portable Generator",
            price: 25,
            image: "../images/generator_portable.png"
        },
        5: {
            name: "Green Power Station",
            price: 20,
            image: "../images/power_station_green.png"
        },
        6: {
            name: "Pro Power Station",
            price: 30,
            image: "../images/power_station_pro.png"
        },
        7: {
            name: "Compact Inverter",
            price: 15,
            image: "../images/inverter.png"
        },
        8: {
            name: "Lithium Cells",
            price: 4,
            image: "../images/lithium_cells.png"
        },
        9: {
            name: "Home Power Battery",
            price: 25,
            image: "../images/battery_home.png"
        },
        10: {
            name: "Charger",
            price: 20,
            image: "../images/ch1.png"
        },
        11: {
            name: "Charger Unit",
            price: 50,
            image: "../images/ch2.png"
        }
    };
    const booking =
JSON.parse(localStorage.getItem("bookingSummary"));

    

   const container = document.getElementById("payment-product-summary");

if (booking && container) {

    container.innerHTML = `
        <img src="${booking.productImage}" 
             class="prod-thumb" 
             alt="${booking.productName}">

        <div>
            <h4>${booking.productName}</h4>

            <p class="location-tag">
                <i class="fa-solid fa-map-marker-alt"></i>
                ${booking.location}
            </p>

            <p>
                Pickup: ${booking.pickupDate}
            </p>

            <p>
                Return: ${booking.returnDate}
            </p>
        </div>

        <div class="prod-price-total">
            $${booking.price.toFixed(2)}
        </div>
    `;
}

    

});