import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <React.Fragment>
                   <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div class="container px-4 px-lg-5">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto py-4 py-lg-0">
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="">Home</a></li>
                        <a href="https://www.youtube.com/channel/UCB6R9NAjkgxQi_QEkc4O25Q"><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                        <FontAwesomeIcon icon="fa-brands fa-instagram" />
                        <a href="https://discord.gg/3P5K3dzgdB"><FontAwesomeIcon icon="fa-brands fa-discord" /></a>
                        <a href="https://twitter.com/BoredApeYC">                        <FontAwesomeIcon icon="fa-brands fa-twitter" /></a>


                    </ul>
                </div>
            </div>
        </nav>
        <div>
                <img src="https://ik.imagekit.io/bayc/assets/bayc-logo-z.png" class="d-inline-block align-top" alt="bored ape logo" height="75px" width="auto" />
                </div>

        
        <header>
        <img src="https://ik.imagekit.io/bayc/assets/bayc-mutant-hero.jpg" class="img-fluid px-0" usemap="#mutant" />
        </header>





        </React.Fragment>
    );
}

export default Header;