//adding items to cart and storing in local storage
function appendItemsToCart(orderId, title, price, imgURL) {
  let cart = JSON.parse(localStorage.getItem("cart")) || {};
  cart[orderId] = { title, price, imgURL };
  localStorage.setItem("cart", JSON.stringify(cart));
  //console.log('cartjs:: appendItem: item added to cart', cart);

  //updating total in cartSummaryObject when adding object
  let cartSummary = JSON.parse(localStorage.getItem("cartSummary")) || {'cartTotal':0, 'totalCost':10};
  cartSummary['cartTotal'] = cartSummary['cartTotal']+price;
  cartSummary['totalCost'] = cartSummary['totalCost']+price;
  localStorage.setItem("cartSummary", JSON.stringify(cartSummary));
}

//updating summary on screen
function updateCartSummary(){
  let cartSummary = JSON.parse(localStorage.getItem("cartSummary")) || {'cartTotal':0, 'totalCost':10};
  document.getElementById('cartTotal').innerHTML = `$${cartSummary['cartTotal']}`;
  document.getElementById('totalCost').innerHTML = `$${cartSummary['totalCost']}`;
}

//updating summary in localstorage
function updateTotal(orderId, op){
  let cartSummary = JSON.parse(localStorage.getItem("cartSummary"));
  let cart = JSON.parse(localStorage.getItem("cart"));
  let { price } = cart[orderId];

  if(op=='+'){
    cartSummary['cartTotal'] = cartSummary['cartTotal']+price;
    cartSummary['totalCost'] = cartSummary['totalCost']+price;
  }else{
    cartSummary['cartTotal'] = cartSummary['cartTotal']-price;
    cartSummary['totalCost'] = cartSummary['totalCost']-price;
  }
  
  localStorage.setItem("cartSummary", JSON.stringify(cartSummary));
  updateCartSummary();
}

//building UI of items in cart
function buildCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || {};
  console.log("cartjs:: buildcart: cart", cart);
  let innerHTML = "";

  for (const key in cart) {
    const { title, price, imgURL } = cart[key];
    innerHTML += `<div class="row">
      <div class="col-3">
        <img src="${imgURL}" alt=""/>
      </div>
      <div class="col-9 col-sm-5">
        <div
          class="text-center justify-content-center align-content-center"
        >
          Dress ${title}
        </div>
        <div
          class="text-center justify-content-center align-content-center"
        >
          $${price}
        </div>
        <div
          class="text-center justify-content-center align-content-center"
        >
          <i class="fa fa-trash" aria-hidden="true" onclick='removeItemFromCart(${key})'></i>
        </div>
      </div>
      <div class="col-12 col-sm-4">
        <div class="input-group">
          <span class="input-group-text" onclick="updateCartItem(event, '-', ${key})"
            ><i class="fa fa-minus-square" aria-hidden="true"></i
          ></span>
          <input
            type="text"
            class="form-control"
            aria-label="Amount (to the nearest dollar)"
            value=1
            orderId=${key}
          />
          <span class="input-group-text" onclick="updateCartItem(event, '+', ${key})"
            ><i class="fa fa-plus-square" aria-hidden="true"></i
          ></span>
        </div>
      </div>
    </div>`;
  }
  const cartItems = document.getElementById("card-items");
  console.log("cartitems:", cartItems);
  cartItems.innerHTML = innerHTML;
  updateCartSummary();
}

//function to remove items from cart on clicking delete icon or minus icon
function removeItemFromCart(orderId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || {};
  delete cart[orderId];
  console.log("removeItemFromCart: updated cart", cart);
  localStorage.setItem("cart", JSON.stringify(cart));

  window.location.reload();
}

function updateCartItem(event, operation, orderId) {
  const currentElem = event.currentTarget;
  //console.log("cartjs:: updateCartItem: currentElem", currentElem);
  //console.log("cartjs:: updateCartItem: orderid", orderId);
  updateTotal(orderId, operation);

  if (operation == "+") {
    const inputElem = currentElem.previousElementSibling;
    inputElem.value = parseInt(inputElem.value)+1;    
  } else {
    if (currentVal == 1) {
      removeItemFromCart(orderId);
    } else {
      const inputElem = currentElem.nextElementSibling;
      //console.log("updateCart: inputelem2 ", inputElem);
      inputElem.value = parseInt(inputElem.value)-1;
    }
    
  }
}
