function includeHeader() {
  const header = document.getElementById("header");
  header.innerHTML = `
  <nav class="navbar navbar-expand-md" data-bs-theme="dark" id="firstNav">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">
        <img src="img/pnlogo.jpg" alt="logo" />
      </a>
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
        <ul class="navbar-nav d-flex justify-content-evenly "> <!-- Use ms-auto to float right -->
          <li class="nav-item"> <!-- Centered Search Bar -->
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="searchIconSpan"
              />
              <span class="input-group-text" id="searchIconSpan">
                <i class="fa-solid fa-magnifying-glass" id="searchIcon"></i>
              </span>
            </div>
          </li>
          <li class="nav-item d-flex "> <!-- Login Button -->
            <button
              type="submit"
              class="btn btn-primary"
              id="loginButton"
            >
              Login
            </button>
            <i class="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav class="navbar navbar-expand-md" data-bs-theme="dark" id="secondNav">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#categoryNav"
        aria-controls="categoryNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse bs-gutter-0" id="categoryNav">
        <ul class="navbar-nav d-flex justify-content-center"> <!-- Use ms-auto to float right -->
          <li class="nav-item"> <!-- Centered Search Bar -->
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item"> <!-- Login Button -->
            <a class="nav-link active" aria-current="page" href="#">All Products</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Women
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">All Products</a></li>
              <li><a class="dropdown-item" href="#">Dresses</a></li>
              <li><a class="dropdown-item" href="#">Pants</a></li>
              <li><a class="dropdown-item" href="#">Skirts</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Men
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">All Products</a></li>
              <li><a class="dropdown-item" href="#">Shirts</a></li>
              <li><a class="dropdown-item" href="#">Pants</a></li>
              <li><a class="dropdown-item" href="#">Hoodies</a></li>
            </ul>
          </li>
          <a class="nav-link" aria-current="page" href="#">Kids</a>
          <a class="nav-link active" aria-current="page" href="#">Contact</a>
        </ul>
      </div>
    </div>
  </nav>
  
`;
}
