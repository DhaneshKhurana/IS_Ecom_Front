//this wil create the cards and insert the innerhtml to the page
function createCarousel(cardsPerCarousel) {
  const totalNoOfCards = 16;
  const noOfCarouselItem = totalNoOfCards / cardsPerCarousel;
  let cardsRemaining = totalNoOfCards;
  let innerHTML = "";
  //the fist loop is to create the carousel item
  for (let i = 0; i < noOfCarouselItem; i++) {
    let txt =
      i == 0
        ? '<div class="carousel-item active">'
        : '<div class="carousel-item">';
    //the 2nd loop is to create no. of cards inside one carousel item based upon screen size
    for (let j = 0; j < cardsPerCarousel && cardsRemaining > 0; j++) {
      txt += `<div class="card">
                <img src="/img/women/dresses/1 (${cardsRemaining}).webp" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Dress ${17 - totalNoOfCards} </h5>
                    <h6 class="card-title">$10</h6>
                    <p class="card-text">
                        A beautiful dress for beautiful women. It\'s every fibre conssits of fine organic cotton. No synthetic stuff is used.
                    </p>
                    <button class="btn btn-primary" id="cartButton" onclick="appendItemsToCart(${cardsRemaining}, ${
        17 - totalNoOfCards
      }, 10, '/img/women/dresses/1 (${cardsRemaining}).webp'); addClass(this, 'disabled')">
                        Add to Cart
                    </button>
                </div>
            </div>`;
      cardsRemaining--;
    }

    innerHTML += txt + "</div>";
  }
  let elem = document.querySelector("div.carousel-inner");
  if (elem) {
    //console.log("womendress:: Found inner carousel");
    elem.innerHTML = innerHTML;
  } else {
    console.log("womendress:: inner carousel not found");
  }
}

//general purpose function to add any class to any element
function addClass(HtmlElem, cls){
  HtmlElem.classList.add(cls);
}

//checking the screensize and acccoridng to that planning the layout of the dresses
function checkScreenSize() {
  // Added event listener for resizing the window. Looking for its optimisation
  window.addEventListener("resize", checkScreenSize);

  if (window.matchMedia("(max-width: 576px)").matches) {
    createCarousel(1);
  } else if (window.matchMedia("(max-width: 768px)").matches) {
    createCarousel(2);
  }else if (window.matchMedia("(max-width: 996px)").matches) {
    createCarousel(3);
  } else {
    createCarousel(4);
  }
}
