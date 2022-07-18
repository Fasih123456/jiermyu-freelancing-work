import React from 'react';

import Header from './Header';
import Footer from './Footer';
import {Row, Col, Container} from 'react-bootstrap';

import '../css/styles.css';
import '../css/home-content.css'

const Home = () => {
    return(
        <div class='container px-4 px-lg-5'>
        <Header />

        <Container style={{paddingTop: "60px"}}>
        <Row>
            <Col sm={8}>
                <h1>WELCOME TO THE BORED APE YACHT CLUB</h1>
                <p>
                BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.
                </p>
            </Col>
            <Col sm={4}>        
                <Row>
                    <Col><img class="img-fluid" src="https://ik.imagekit.io/bayc/assets/ape1.png" alt="ape1" aria-label="ape1" /></Col>
                    <Col><img class="img-fluid" src="https://ik.imagekit.io/bayc/assets/ape2.png" alt="ape2" aria-label="ape2" /></Col>
                </Row>
                <Row>
                    <Col><img class="img-fluid" src="https://ik.imagekit.io/bayc/assets/ape3.png" alt="ape3" aria-label="ape3"/ ></Col>
                    <Col><img class="img-fluid" src="https://ik.imagekit.io/bayc/assets/ape4.png" aria-label="ape4" /></Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
        </Row>
        </Container>

        <Footer />

        </div>
    );
}

export default Home;