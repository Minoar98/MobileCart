## Mobile Cart Feature Requirements

📦 Tech Stack Used

⚛️ React (with useState)

🧠 JavaScript ES6+

🎨 Tailwind CSS

🌐 HTML5 (semantic, responsive)

🛒 Responsive Shopping Cart - Feature Guide

This guide describes a responsive shopping cart (Bag UI) built with React, JavaScript ES6, HTML5, and styled using Tailwind CSS. It covers essential interactivity, logic, and UI responsiveness.

✨ Features Overview

Functionality

Logic Used

✅ Clear All Products

setItems([])

✅ Remove Single Product

filter()

✅ Quantity Management

map() + filter()

✅ Total Price Calculation

reduce()

✅ Cart Item Count

reduce()

🧹 1. Clear Cart Button

Action: Clicking the CLEAR CART button will:

🗑️ Remove all product items from the cart.

💲 Set Total to $0.00.

🧺 Set Cart Count in Header to 0.

🔁 On reload, default product list returns (from data.js).

const clearCart = () => {
setItems([]);
};

❌ 2. Remove Individual Product

Action: Clicking remove beside a product removes that product only.

const remove = (id) => {
setItems(prevItems => prevItems.filter(item => item.id !== id));
};

🔼🔽 3. Quantity Control with Validation

Action:

⬆️ Clicking the Up Arrow → quantity + 1

⬇️ Clicking the Down Arrow → quantity - 1

❗ If quantity === 0 → Product is removed

const increase = (id) => {
setItems(prevItems =>
prevItems.map(item =>
item.id === id ? { ...item, quantity: item.quantity + 1 } : item
)
);
};

const decrease = (id) => {
setItems(prevItems =>
prevItems
.map(item =>
item.id === id ? { ...item, quantity: item.quantity - 1 } : item
)
.filter(item => item.quantity > 0)
);
};

💰 4. Total Cost Calculation

Action: Always reflects live sum of: price × quantity

const total = products.reduce((acc, item) => acc + item.price \* item.quantity, 0);

🔢 5. Total Cart Item Count

Action: Shows total quantity of all items (for cart badge).
