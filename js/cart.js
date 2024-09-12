let cartItemsObjects;

onLoad();

// all funtion 
function onLoad() {
    loadCartItemsObjects();
    displayCartItems();
    displayCartTotal();
}


// Display Cart Total
function displayCartTotal() {
    let totalItem = cartItemsObjects.length;

    
  let totalPrice = 0;

  cartItemsObjects.forEach(addtocarts => {
      totalPrice += addtocarts.price
  });

  let  cartTotalElement = document.querySelector('#cartTotal');
  cartTotalElement.innerHTML = `
  <div class="price-header">Price Details (${totalItem} Items)</div>
  <span class="price-item-tag">Total Amount ₹ ${totalPrice}</span>
  <a href="./pay.html" class="checkout-btn">Place Order</a>
  `;
}

// Cart Items Objects
function loadCartItemsObjects() {
    console.log(cartItems);
    cartItemsObjects = cartItems.map(itemId => {
            for (let i = 0; i < products.length; i++) {
              if (itemId == products[i].id) {
                return products[i];
     }
   }
 });
 console.log(cartItems);
 }


// Display Cart Items 
function displayCartItems() {
    
    let containerElement = document.getElementById('cartItems');
    let innerHTML = '';
    cartItemsObjects.forEach(cartItem => {
        innerHTML += generateItemHTML(cartItem);
    });
   containerElement.innerHTML = innerHTML;
}

// Remove Form Cart Page
function removeCart(itemId) {
    cartItems = cartItems.filter(addtocartId => addtocartId != itemId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    loadCartItemsObjects();
    displayaddTocartIcon();
    displayCartItems(); 
    displayCartTotal();
    myFunction();
  }

// Generate Items In Cart

function generateItemHTML(item) {
    return `
    <div class="cart-item">
    <img src="${item.image}"  alt="${item.name}" class="product-img">
    <div class="cart-item-info">
    <h2 class="cart-item-title">${item.name}</h2>
    <h2 class="cart-item-price"> ₹ ${item.price.toFixed(2)}</h2>
    </div>
    <button class="remove-from-cart" data-id="${item.id}"  onclick="removeCart(${item.id})">Remove</button>
  </div>
    `;
}
