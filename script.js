var appearDiv = document.querySelectorAll(".appear");
var cart_appeardiv = document.getElementById("cart-appear");
var cartbtn = document.getElementById("cart-btn");
var icon_div = document.querySelectorAll(".new-icons");
var item_card = document.querySelectorAll(".card");
var add_card_btns = document.querySelectorAll(".add-to-cart");
var cart_list = document.getElementById("cart-list");
var total_cart = document.getElementById("cart-total");
console.log(total_cart.innerText);
cartbtn.addEventListener("click", (e) => {
  console.log("clicked ");
  console.log(cart_appeardiv);
  cart_appeardiv.classList.toggle("disappear");
});

/*var item_card_array = Array.from(item_card);

var add_list = (im, cn, p) => {
  var to_add = document.getElementById("added-list");
  var new_item = document.createElement("div");
  new_item.innerHTML = `
 <div>
 <img  src=${im} width="100" height="50">
 </div>
 <span>${cn}</span>
 <br>
 <span>${p}</span>
 
 <div id="btn2"><button onclick="window.open('https://esewa.com.np')"><a href="purchase.html">Buy Now</a></button></div>
  <div id="btn2"><button onclick="window.open('index.html')">Remove</button></div>
 
 `;
  to_add.appendChild(new_item);

  total_cart.innerText = `Total : Rs ${total_amt}`;
};
var total_amt = 0;
var add_total = (price) => {
  total_amt = price + total_amt;
};
add_card_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    var parent = btn.parentElement.parentNode.parentNode;
    var image_src = parent.childNodes[1].getAttribute("src");
    var club_name = parent.childNodes[3].childNodes[1].innerText;
    var price = parent.childNodes[3].childNodes[3].innerText;
    var price_arr = price.split(" ");
    console.log(price_arr);
    add_total(parseInt(price_arr[1]));
    add_list(image_src, club_name, price);
  });
});

console.log(total_amt);*/

let cartData = JSON.parse(localStorage.getItem("cartData")) || [];

const cartItemsContainer = document.getElementById("cartItems");
const emptyCartMessage = document.getElementById("emptyCartMessage");
const loginLink = document.getElementById("loginLink");

// Define the available products array with necessary details
const availableProducts = [
  {
    name: "Argentina",
    image: "images/p1.jpg",
    price: "Rs.2099",
  },
  {
    name: "PSG",
    image: "images/p2.jpg",
    price: "Rs.1599",
  },
  {
    name: "Barcelona",
    image: "images/p3.jpg",
    price: "Rs.1899",
  },
  {
    name: "Brazil",
    image: "images/p4.jpg",
    price: "Rs.1399",
  },
  {
    name: "Manchester City",
    image: "images/p5.jpg",
    price: "Rs.1499",
  },
  {
    name: "Manchester United",
    image: "images/p6.jpg",
    price: "Rs.1199",
  },
  {
    name: "Germany",
    image: "images/p7.jpg",
    price: "Rs.1500",
  },
  {
    name: "Real Madrid",
    image: "images/p8.jpg",
    price: "Rs.1099",
  },
];

function updateCartDisplay() {
  cartItemsContainer.innerHTML = ""; // Clear the existing cart items

  if (cartData.length > 0) {
    // Display the cart items
    cartData.forEach((product) => {
      // Check if the product exists in the shop's available products
      const availableProduct = availableProducts.find(
        (p) => p.name === product.name
      );
      if (availableProduct) {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        const productImage = document.createElement("img");
        productImage.src = availableProduct.image; // Set the correct image path
        productImage.alt = availableProduct.name;

        const cartItemDetails = document.createElement("div");
        cartItemDetails.classList.add("cart-item-details");

        const productName = document.createElement("p");
        productName.textContent = availableProduct.name;
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () =>
          removeItemFromCart(product.name)
        );

        const buyButton = createBuyButton(availableProduct);

        cartItemDetails.appendChild(productName);
        cartItemDetails.appendChild(removeButton);

        cartItem.appendChild(productImage);
        cartItem.appendChild(cartItemDetails);
        cartItem.appendChild(buyButton);

        cartItemsContainer.appendChild(cartItem);
      }
    });

    emptyCartMessage.textContent = ""; // Clear the empty cart message
  } else {
    // Show the "Your cart is empty" message
    emptyCartMessage.textContent = "Your cart is empty.";
  }
}

updateCartDisplay(); // Initial display on page load

function removeItemFromCart(productName) {
  // Remove the item from the cartData array
  cartData = cartData.filter((product) => product.name !== productName);

  // Update the cartdata in localStorage
  localStorage.setItem("cartData", JSON.stringify(cartData));

  updateCartDisplay(); // Update the cart display

  // Check if the cart is empty and show/hide the "Buy Now" button accordingly
  if (cartData.length === 0) {
    emptyCartMessage.textContent = "Your cart is empty.";
  }
}

function getAccountName() {
  return sessionStorage.getItem("accountName");
}
