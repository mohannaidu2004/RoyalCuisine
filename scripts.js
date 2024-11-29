let cart = [];

function addToCart(dishName, price) {
    cart.push({ dishName, price });
    updateCart();
}

function updateCart() {
    // Update the cart count
    document.getElementById("cart-count").textContent = cart.length;

    // Update cart modal content
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.dishName} - ₹${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    document.getElementById("total-price").textContent = total;

    
}

function toggleCart() {
    document.getElementById("cart-modal").style.display = 'flex';
}

function closeCart() {
    document.getElementById("cart-modal").style.display = 'none';
}

function placeOrder() {
    const orderId = "#" + Math.floor(Math.random() * 1000000);
    document.getElementById("order-id").textContent = orderId;
    document.getElementById("cart-modal").style.display = 'none';
    document.getElementById("order-confirmation").style.display = 'flex';
}

function closeOrderConfirmation() {
    document.getElementById("order-confirmation").style.display = 'none';
}

document.getElementById("hamburger-menu").addEventListener("click", function () {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
});

// Example data for the menu items
const menuItems = {
    samosa: { count: 0, id: "count-samosa" },
    pakora: { count: 0, id: "count-pakora" },
    chat: { count: 0, id: "count-chat" },
    paneer: { count: 0, id: "count-paneer" },
    dhokla: { count: 0, id: "count-dhokla" },
    biryani: { count: 0, id: "count-biryani" },
    naan: { count: 0, id: "count-naan" },
    lemonRice: { count: 0, id: "count-lemon-rice" },
    vegDumBiryani: { count: 0, id: "count-veg-dum-biryani" },
    curdRice: { count: 0, id: "count-curd-rice" },
    rasgulla: { count: 0, id: "count-rasgulla" },
    gulabJamun: { count: 0, id: "count-gulab-jamun" },
    jalebi: { count: 0, id: "count-jalebi" },
    masalaChai: { count: 0, id: "count-masala-chai" },
    badamMilk: { count: 0, id: "count-badam-milk" },
  };
  
// Reusable function to increment item count and update the badge
function incrementItemCount(itemKey) {
    // Access the item from the menuItems object using the key
    const item = menuItems[itemKey];

    // Increment item count
    item.count++;

    // Update the respective badge
    const badge = document.getElementById(item.id);
    badge.textContent = item.count;
    badge.style.display = "inline-block"; // Ensure the badge is visible
}

// Add event listeners to buttons
document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (e) => {
        const itemKey = e.target.dataset.item; // Retrieve the unique key from the button's data attribute
        incrementItemCount(itemKey); // Call the reusable function
        console.log("Debugger");
    });
});

function incrementItemCount(event) {
    // Get the clicked button element
    const button = event.target;
    
    // Get the item name from the data attribute
    const itemName = button.getAttribute('data-item');
    
    // Get the corresponding span element by dynamic ID
    const countElement = document.getElementById('count-' + itemName);

    // Check if the element exists to avoid errors
    if (countElement) {
        // Get the current count and increment it
        let currentCount = parseInt(countElement.textContent);
        countElement.textContent = currentCount + 1;  // Update the count
    } else {
        console.error('Count element not found for item:', itemName);
    }
}