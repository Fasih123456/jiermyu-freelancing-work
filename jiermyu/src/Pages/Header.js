import Navigation from "../Components/Navigation"

import React from "react";



const Header = () => {
    return (
        <React.Fragment>
        <div id="headerDiv">
        <nav style={{}} class="navbar navbar-expand-lg navbar-light" id="mainNav" >
            <div class="container header-container px-4 px-lg-5">
                <a class="navbar-brand" style={{color: "white"}} href="/" >
                    
<img src="https://ik.imagekit.io/bayc/assets/bayc-logo-z.png" class="d-inline-block align-top" alt="bored ape logo" height="75px" width="auto" />

                </a>
                <button  class="navbar-toggler"  style={{color: "black", backgroundColor: "transparent", borderColor: "transparent", border: "0px"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    M
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">

                    <Navigation />

                </div>
            </div>
        </nav>
        </div>
        <header>
                <img src="https://ik.imagekit.io/bayc/assets/bayc-mutant-hero.jpg" class="img-fluid px-0" usemap="#mutant" />
            </header>

        </React.Fragment>
    )
}

export default Header;