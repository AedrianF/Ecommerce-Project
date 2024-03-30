(() => {

    // This will hide the nav when scrolled down and show the navbar when scrolled up
    const nav = document.querySelector("#navbar");
    let lastScrollY = window.scrollY;

    const setHeader = () => {
        const navbar = document.getElementById('navbar')
        navbar.innerHTML = ` <!-- Nav Bar Start-->
        <nav class="navbar navbar-expand-lg bg-dark text-end bg-opacity-50" id="navbar">
            <div class="container-fluid">
              <a class="navbar-brand text-light logo" href="#"><img src="./Assets/logo.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top navlogo"></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link active text-light" aria-current="page" href="index.html">Home</a>
                  <ul id="drop">
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle drop text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Products
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Product #1</a></li>
                        <li><a class="dropdown-item" href="#">Product #2</a></li>
                        <li><a class="dropdown-item" href="#">Product #3</a></li>
                        <li><a class="dropdown-item" href="#">Product #4</a></li>
                      </ul>
                    </li>
                  </ul>
                  <a class="nav-link active text-light ms-3" aria-current="page" href="#credits">About Us</a>
                  <a class="nav-link active text-light ms-3" aria-current="page" href="#credits">Sign In</a>
                </div>
              </div>
            </div>
          </nav>
        <!-- Nav Bar End -->`
    }

    document.addEventListener("DOMContentLoaded", () =>{
        setHeader();
        window.addEventListener("scroll", () =>{
            if (lastScrollY < window.scrollY){
                nav.classList.add("hidenav");
            }
            else {
                    nav.classList.remove("hidenav");
                }
                lastScrollY = window.scrollY;
            })
    })


})()