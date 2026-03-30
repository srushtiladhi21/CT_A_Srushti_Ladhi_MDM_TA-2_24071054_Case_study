const products = [

    {name:"Milk", price:30, category:"Dairy", image:"https://images.unsplash.com/photo-1580910051074-3eb694886505"},
    {name:"Butter", price:50, category:"Dairy", image:"https://images.unsplash.com/photo-1589985270958-1d7d3f6bb77f"},
    {name:"Cheese", price:70, category:"Dairy", image:"https://images.unsplash.com/photo-1604908177522-040bd7c9d0a3"},
    {name:"Bread", price:25, category:"Bakery", image:"https://images.unsplash.com/photo-1608198093002-ad4e005484ec"},
    {name:"Cake", price:120, category:"Bakery", image:"https://images.unsplash.com/photo-1599785209707-a456fc1337bb"},
    {name:"Chips", price:20, category:"Snacks", image:"https://images.unsplash.com/photo-1599490659213-e2b9527bd087"},
    {name:"Biscuits", price:15, category:"Snacks", image:"https://images.unsplash.com/photo-1589302168068-964664d93dc0"},
    {name:"Juice", price:40, category:"Beverages", image:"https://images.unsplash.com/photo-1582719478185-7d76a6d4d1df"},
    {name:"Cold Drink", price:45, category:"Beverages", image:"https://images.unsplash.com/photo-1582450871972-ab5ca641643d"}
];

let cart = [];

// Load Products
function loadProducts(){

    let grid = document.getElementById("productGrid");

    products.forEach(p => {

        grid.innerHTML += `
            <div class="product">
                <img src="${p.image}">
                <h4>${p.name}</h4>
                <p>₹${p.price}</p>
                <button onclick="addToCart('${p.name}')">Add to Cart</button>
                <button onclick="recommend('${p.name}')">View Similar</button>
            </div>
        `;
    });
}

loadProducts();

// CART
function addToCart(name){

    cart.push(name);

    document.getElementById("cartCount").innerText = cart.length;

    showCart();
}

function showCart(){

    let items = document.getElementById("cartItems");

    items.innerHTML = "";

    cart.forEach(i => {
        items.innerHTML += `<p>${i}</p>`;
    });

    document.getElementById("totalItems").innerText = cart.length;
}

function toggleCart(){

    document.getElementById("cartPanel").classList.toggle("active");
}

// RECOMMENDATION
function recommend(productName){

    let category = "";

    products.forEach(p => {
        if(p.name === productName){
            category = p.category;
        }
    });

    let box = document.getElementById("recommendBox");

    box.innerHTML = "";

    products.forEach(p => {

        if(p.category === category && p.name !== productName){

            box.innerHTML += `
                <div class="product">
                    <img src="${p.image}">
                    <h4>${p.name}</h4>
                    <p>₹${p.price}</p>
                </div>
            `;
        }
    });
}