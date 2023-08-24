function includeHeader(currentPage) {
  setHeader(currentPage);
  setFooter();
}

function setFooter() {
  fetch("/components/footer.html")
    .then((res) => res.text())
    .then((txt) => {
      console.log("inside setfooter with footer content");
      let footer = document.getElementById("footer");
      footer.innerHTML = txt;
    });
}

function setHeader(currentPage) {
  fetch("/components/header.html")
    .then((res) => res.text())
    .then((txt) => {
      console.log("inside setHeader with Header content");
      let header = document.getElementById("header");
      header.innerHTML = txt;
      setActiveNavItem(currentPage);
    });
}

function setActiveNavItem(currentPage) {
  let navItems = document.getElementsByClassName("nav-link");
  console.log("CommonJs:: setActiveNavItem: navitems recvd", navItems);
  for (const item of navItems) {
    console.log(
      "Nav-link item text and current Page ",
      item.textContent,
      currentPage
    );
    if (item.textContent.toLowerCase() === currentPage.toLowerCase()) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  }
}
