let cart = []; // cart array open

function displayCart() {//this is a display cart funtion with show product image
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';

    if (cart.length === 0) {//check cart is not emty
        cartDiv.innerHTML = '<p>Your cart is empty</p>';
        return;
    }

    const ul = document.createElement('ul');//createlist

    cart.forEach((item, index) => {
        const li = document.createElement('li');//list item add
        
        const img = document.createElement('img');//img function
        img.src = item.imageUrl;
        img.alt = item.product;
        img.style.width = '80px'; 
        img.style.height = '90px';
        li.appendChild(img);
        
        const itemDetails = document.createElement('span');//name,price,quntity
        itemDetails.innerHTML = `${item.product} - $${item.price} x ${item.quantity}`;
        li.appendChild(itemDetails);
        
        const deleteButton = document.createElement('button');//delete button
        deleteButton.className = 'delete-item';
        deleteButton.textContent = "delete";
        deleteButton.onclick = () => deleteCartItem(index);
        li.appendChild(deleteButton);

        ul.appendChild(li);
    });

    cartDiv.appendChild(ul);

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);//show total
    const totalDiv = document.createElement('div');
    totalDiv.textContent = `Total: $${total.toFixed(2)}`;
    totalDiv.style.fontWeight = 'bold';
    totalDiv.style.fontSize = '30px'; 
    cartDiv.appendChild(totalDiv);
}

function deleteCartItem(index) {//delete item
    cart.splice(index, 1);
    displayCart();
}

function increaseQuantity(id) {//+ button press increase
    const input = document.getElementById(id);
    input.value = parseInt(input.value) + 1;
}

function decreaseQuantity(id) {//- button press increase
    const input = document.getElementById(id);
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

function openCart() {//open cart
    displayCart();
    document.getElementById('cartModal').style.display = "block";//open cart
    document.getElementById("topLeftButton").style.display = "none";//close cart button
}

function closeCart() {
    document.getElementById('cartModal').style.display = "none";//close cart
    document.getElementById("topLeftButton").style.display = "block";//display button
}

function pay() {//pay button
    const cardNumber = document.getElementById('cardNumber').value;
    const expirationDate = document.getElementById('expirationDate').value;
    const cvv = document.getElementById('cvv').value;

        alert('Payment successful! Thank you for your purchase. ');//payment sucess ful massege
        cart = []; // reset cart
        displayCart(); // Refresh  cart display
    
}
window.onclick = function(event) {//payment form out side click close payment form
    const modal = document.getElementById('paymentForm');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
function addToCart(product, price, quantity) {//this add cart function
    const item = cart.find(item => item.product === product);
    if (item) {
        item.quantity += parseInt(quantity);
    } else {
        let imageUrl;//get img url
        switch (product) {
            case 'Water Filters':
                imageUrl = 'filter.jpeg';
                break;
            case 'Reverse Osmosis Systems':
                imageUrl = 'rofilter.jpg';
                break;
            case 'water softer ':
                imageUrl = 'softener.jpg';
                break;
            case 'uv filter ':
                imageUrl = 'uv.jpg';
                break;
            case 'Alkaline Water Systems':
                imageUrl = 'alkine.jpg';
                break;
            case 'water distiliser':
                imageUrl = 'distil.jpg';
                break;
            case 'Whole House Filtration Systems':
                imageUrl = 'product7.jpg';
                break;
            case 'Shower Filters':
                imageUrl = 'shower.jpg';
                break;
            case 'Replacement Filters and Cartridges':
                imageUrl = 'replace.jpg';
                break;
            case 'Bottled Water':
                imageUrl = 'bottle.jpg';
                break;
            default:
                imageUrl = '';
        }

        cart.push({ product, price, quantity: parseInt(quantity), imageUrl });//get all detail from product
    }
    displayCart();
    alert(`Successfully added  to the cart.product is ${product} at $${price*quantity}`);
}

function showPaymentForm() {
    if(cart.length === 0){
        alert('Your cart is empty. Add items to your cart before paying.');//cart empty display this
    }else{
            const paymentForm = document.getElementById('paymentForm');
            paymentForm.style.display = 'block';

            // Update total amount in payment form
            const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
            const paymentTotal = document.getElementById('paymentTotal');//display total
            paymentTotal.textContent = `Total: $${total.toFixed(2)}`;
        }
}

// Reset cart function
function resetCart() {
    cart = [];
    displayCart();
    updateCartSummary();
}
