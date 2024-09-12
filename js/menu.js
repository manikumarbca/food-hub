let products = [
    {
        id:1,
        name: "Burger",
        price:40,
        image: "/img/burger.png"
    },
    {
        id:2,
        name: "Fried Chicken",
        price:80,
        image: "/img/f-chiken.png"
    },
    {
        id:3,
        name: "French Fries",
        price:50,
        image: "/img/french-fries.png"
    },

    {
        id:4,
        name: "Thakali",
        price:130,
        image: "/img/thakali-khana.png"
    },
    {
        id:5,
        name: "Gujrati Khana",
        price:100,
        image: "/img/gujrati.png"
    },
    {
        id:6,
        name: "Tandori",
        price:40,
        image: "/img/tandori.jpg"
    },
];

let cartItems;

onLoad();

// On load initiolizaton
function onLoad() {
    let cartItemsStr = localStorage.getItem('cartItems');
    cartItems = cartItemsStr ? JSON.parse(cartItemsStr) : [];
    displayItemsOnHomePage();
    displayaddTocartIcon();
}


//Display Items add to cart
function addToCart(item){
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayaddTocartIcon();
}


// Dispaly Items Count add to cart
function displayaddTocartIcon(){
    let iconCount = document.getElementById('cart-item-count');
    console.log('i am here')
    if (cartItems.length > 0){
        iconCount.style.visibility = 'visible'
        iconCount.innerText = cartItems.length;
    }
   else{
    iconCount.style.visibility = 'hidden'
   }
}


// displayItemsOnHomePage
function displayItemsOnHomePage() {
    const productElement = document.getElementById('productList');
    if (!productElement) {
        return;
      }
    const product = document.getElementById('productList');
    let innerHTML = '';
    items.forEach(item => {
        innerHTML += ` 
        <div class="product">
        <img src="${item.image}"  alt="${item.name}" class="product-img"/>
        <div class="product-info">
        <h2 class="product-title">${item.name}</h2>
        <p class="product-price"> ₹ ${item.price.toFixed(2)}</p>
        </div>
        <button class="add-to-cart" onclick="addToCart(${item.id})">Add to Bag</button>
        </div>  `
    })
    product.innerHTML = innerHTML ;
}
