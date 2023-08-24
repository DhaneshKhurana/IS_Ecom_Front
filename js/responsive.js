<div class="carousel-item">
  <div class="card" style="width: 18rem">
    <img src="/img/women/dresses/1 (1).webp" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Dress 1</h5>
      <h6 class="card-title">$10</h6>
      <p class="card-text">
        A beautiful dress for beautiful women. It's every fibre conssits of fine
        organic cotton. No synthetic stuff is used.
      </p>
      <a href="#" class="btn btn-primary">
        Add to Cart
      </a>
    </div>
  </div>
</div>;

//this wil create the cards and insert the innerhtml to the page
function createCarousel(cardsPerCarousel) {
    const totalNoOfCards = 16;
    const noOfCarouselItem = totalNoOfCards/cardsPerCarousel;
    const cardsRemaining = totalNoOfCards;
    for (let i = 0; i < noOfCarouselItem; i++) {
        let txt = '<div class="carousel-item">';
        for (let j = 0; j < noOfCards && cardsRemaining>0; j++) {
            const element = array[j];

            
            
        }
        cardsRemaining--;
    }
    

}

//checking the screensize and acccoridng to that planning the layout of the dresses
function checkScreenSize() {
  if (window.matchMedia("(max-width: 576px)").matches) {
    createCarousel(1);
  } else if (window.matchMedia("(max-width: 768px)").matches) {
    createCarousel(2);
  } else {
    createCarousel(4);
  }
}

// Add event listener for resizing the window
window.addEventListener("resize", checkScreenSize);

// Call the function initially when the page loads
checkScreenSize();
