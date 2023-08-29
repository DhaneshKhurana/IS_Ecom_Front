//function to set header and footer dynamically to each page
function includeHeader(currentPage) {
  setHeader(currentPage);
  setFooter();
}

//setting footer by reading footer file component
function setFooter() {
  fetch("/components/footer.html")
    .then((res) => res.text())
    .then((txt) => {
      //console.log("inside setfooter with footer content");
      let footer = document.getElementById("footer");
      footer.innerHTML = txt;
    });
}

//setting header from header component
function setHeader(currentPage) {
  fetch("/components/header.html")
    .then((res) => res.text())
    .then((txt) => {
      //console.log("inside setHeader with Header content");
      let header = document.getElementById("header");
      header.innerHTML = txt;
      setActiveNavItem(currentPage);
    });
}

//adding active class to selected item and removing active class from rest
function setActiveNavItem(currentPage) {
  let navItems = document.getElementsByClassName("nav-link");
  //console.log("CommonJs:: setActiveNavItem: navitems recvd", navItems);
  for (const item of navItems) {
    if (item.textContent.toLowerCase() === currentPage.toLowerCase()) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  }
}
