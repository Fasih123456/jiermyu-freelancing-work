import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from '../Components/Navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//TODO: Turn nav-links into hamburger when screen size gets small
const Header = () => {
    return (
        <div class='main-header'>
            <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div class="container px-4 px-lg-5">

                    <Navigation />
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