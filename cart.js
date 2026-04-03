let cart = [];

    function addToCart(name, price) {
        // Check if item already exists in cart
        let item = cart.find(p => p.name === name);
        if (item) {
            item.qty++;
        } else {
            cart.push({ name, price, qty: 1 });
        }
        renderCart();
    }

    function removeFromCart(name) {
        cart = cart.filter(p => p.name !== name);
        renderCart();
    }

    function updateQty(name, qty) {
        let item = cart.find(p => p.name === name);
        if (item) {
            item.qty = parseInt(qty) || 1; // Ensure valid number
        }
        renderCart();
    }

    function renderCart() {
        let tbody = document.querySelector("#cart-table tbody");
        tbody.innerHTML = "";
        let grandTotal = 0;

        cart.forEach(item => {
            let total = item.price * item.qty;
            grandTotal += total;

            let row = `<tr>
                <td>${item.name}</td>
                <td>$${item.price}</td>
                <td><input type="number" min="1" value="${item.qty}" onchange="updateQty('${item.name}', this.value)"></td>
                <td>$${total}</td>
                <td><button class="remove" onclick="removeFromCart('${item.name}')">Remove</button></td>
            </tr>`;
            tbody.innerHTML += row;
        });

        document.getElementById("grand-total").innerText = `Grand Total: $${grandTotal}`;
    }