//adding items to cart and storing in local storage
function appendItemsToCart(orderId, title, price, imgURL, qty = 1) {
  let cart = JSON.parse(localStorage.getItem("cart")) || {};
  cart[orderId] = { title, price, qty, imgURL };
  localStorage.setItem("cart", JSON.stringify(cart));
}

//building and updating cart summary in localstorage
//shipping is in total specified as $10
function buildCartSummary() {
  let cartSummary = JSON.parse(localStorage.getItem("cartSummary")) || {
    cartTotal: 0,
    totalCost: 10,
  };
  let cart = JSON.parse(localStorage.getItem("cart"));
  let cartTotal = 0;
  for (const orderId in cart) {
    const order = cart[orderId];
    cartTotal += order['price'] * order['qty'];
  }
  cartSummary["cartTotal"] = cartTotal;
  cartSummary["totalCost"] = cartTotal + 10;
  localStorage.setItem("cartSummary", JSON.stringify(cartSummary));

  updateCartSummaryOnScreen();
}

//updating summary on screen
function updateCartSummaryOnScreen() {
  let cartSummary = JSON.parse(localStorage.getItem("cartSummary")) || {
    cartTotal: 0,
    totalCost: 10,
  };
  document.getElementById(
    "cartTotal"
  ).innerHTML = `$${cartSummary["cartTotal"]}`;
  document.getElementById(
    "totalCost"
  ).innerHTML = `$${cartSummary["totalCost"]}`;
}

function updateCartItem(event, operation, orderId) {
  const currentElem = event.currentTarget;
  //console.log("cartjs:: updateCartItem: currentElem", currentElem);
  //console.log("cartjs:: updateCartItem: orderid", orderId);

  if (operation == "+") {
    incrementOrDecrementQty(orderId, currentElem.previousElementSibling, true);
  } else {
    incrementOrDecrementQty(orderId, currentElem.nextElementSibling, false);
  }

  buildCartSummary();
}

function incrementOrDecrementQty(orderId, inputElem, increment) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let order = cart[orderId];

  if (increment) {
    order['qty']+=1;
    inputElem.value = parseInt(inputElem.value) + 1;
  } else {
    const currentVal = inputElem.value;
    if (currentVal == 1) {
      removeItemFromCart(orderId);
    } else {
      order['qty']-=1;
      inputElem.value = parseInt(inputElem.value) - 1;
    }
  }
  //updating cart here
  cart[orderId] = order;
  localStorage.setItem("cart", JSON.stringify(cart));
}

//building UI of items in cart
function buildCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || {};
  console.log("cartjs:: buildcart: cart", cart);
  let innerHTML = "";

  for (const key in cart) {
    const { title, price, qty, imgURL } = cart[key];
    innerHTML += `<div class="row">
      <div class="col-12 col-sm-3 p-3">
        <img src="${imgURL}" alt=""/>
      </div>
      <div class="col-12 col-sm-5">
        <div
          class="text-center justify-content-center align-content-center"
        >
          ${title}
        </div>
        <div
          class="text-center justify-content-center align-content-center"
        >
          $${price}
        </div>
        <div
          class="text-center justify-content-center align-content-center"
        >
        <i class="fa fa-trash" aria-hidden="true" onclick="removeItemFromCart('${key}')"></i>
          
        </div>
      </div>
      <div class="col-12 col-sm-4">
        <div class="input-group">
          <span class="input-group-text" onclick="updateCartItem(event, '-', '${key}')"
            ><i class="fa fa-minus-square" aria-hidden="true"></i
          ></span>
          <input
            type="text"
            class="form-control"
            aria-label="Amount (to the nearest dollar)"
            value=${qty}
            orderId='${key}'
          />
          <span class="input-group-text" onclick="updateCartItem(event, '+', '${key}')"
            ><i class="fa fa-plus-square" aria-hidden="true"></i
          ></span>
        </div>
      </div>
    </div>`;
  }
  const cartItems = document.getElementById("card-items");
  //console.log("cartitems:", cartItems);
  cartItems.innerHTML = innerHTML;
  buildCartSummary();
}

//function to remove items from cart on clicking delete icon or minus icon
function removeItemFromCart(orderId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || {};
  delete cart[orderId];
  console.log("removeItemFromCart: updated cart", cart);
  localStorage.setItem("cart", JSON.stringify(cart));

  window.location.reload();
}
