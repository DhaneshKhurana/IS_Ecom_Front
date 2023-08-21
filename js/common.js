function includeHeader(){
    const header = document.getElementById("header");
    header.innerHTML=`
    <nav class="navbar navbar-expand-md bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">NG</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#headerNav"
        aria-controls="headerNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse bs-gutter-0" id="headerNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/menu.html">Our Menu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/aboutPage.html">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/contactPage.html">Contact Us</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>`;
}