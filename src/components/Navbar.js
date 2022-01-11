import React from 'react'

export default function Navbar() {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">our brand name</a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">our services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">contact us</a>
              </li>
            </ul>
            <form class=" justify-content-center d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>              
                <button class="btn btn-outline-success nav-item ms-3" aria-current="page" href="#">Login</button>
          </div>
        </div>
      </nav>
        </>
    )
}
