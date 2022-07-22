import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//TODO: Turn nav-links into hamburger when screen size gets small
const Header = () => {
    return (
        <div class='main-header'>
            <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div class="container px-4 px-lg-5">


                    <div class="collapse navbar-collapse" id="navbarResponsive" style={{ paddingTop: "0px" }}>
                        <ul class="navbar-nav ms-auto py-4 py-lg-0">
                            <li class="nav-item "><a class="nav-link px-lg-3 py-3 py-lg-4" href=""><p class='navigation-link-text'>Home</p></a></li>
                            <li class="nav-item "><a class="nav-link px-lg-3 py-3 py-lg-4" href=""><p class='navigation-link-text'>Buy An Ape</p></a></li>
                            <li class="nav-item "><a class="nav-link px-lg-3 py-3 py-lg-4" href=""><p class='navigation-link-text'>Road Map</p></a></li>
                            <li class="nav-item "><a class="nav-link px-lg-3 py-3 py-lg-4" href=""><p class='navigation-link-text'>Team</p></a></li>
                            

                            <a href="https://www.youtube.com/channel/UCB6R9NAjkgxQi_QEkc4O25Q" class='header-links'><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                            <a class='header-links'><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                            <a href="https://discord.gg/3P5K3dzgdB" class='header-links'><FontAwesomeIcon icon="fa-brands fa-discord" /></a>
                            <a href="https://twitter.com/BoredApeYC" class='header-links'>                        <FontAwesomeIcon icon="fa-brands fa-twitter" /></a>


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





        </div>
    );
}

export default Header;