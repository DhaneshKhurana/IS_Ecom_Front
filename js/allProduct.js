//this wil create the cards and insert the innerhtml to the page
function createGrid(cardsPerCarousel) {
    const totalNoOfCards = 16;
    let innerHTML = "";
  
    for (let i = 0; i < totalNoOfCards; i++) {
        innerHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-3 ">
        <div class="card">
          <img
            src="/img/women/dresses/1 (${i+1}).webp"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Dress ${i+1}</h5>
            <h6 class="card-title">$10</h6>
            <p class="card-text">
              A beautiful dress for beautiful women. It's every fibre
              conssits of fine organic cotton. No synthetic stuff is used.
            </p>
            <button class="btn btn-primary" id="cartButton" onclick="appendItemsToCart('Dress ${i+1}', 'Dress ${i+1}', 10, '/img/women/dresses/1 (${i+1}).webp'); addClass(this, 'disabled')"> Add to Cart </button>
          </div>
        </div>
      </div>`;
      }
    let elem = document.querySelector("div.row");
    if (elem) {
      console.log("allProducts:: div found");
      elem.innerHTML = innerHTML;
    } else {
      console.log("Sorry bro, kuchh kuchh bhi nahi mil paya");
    }
  }

  function addClass(HtmlElem, cls){
    HtmlElem.classList.add(cls);
  }
  