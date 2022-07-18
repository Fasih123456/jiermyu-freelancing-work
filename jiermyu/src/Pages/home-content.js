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
            <Col sm={4}>2 of 2</Col>
        </Row>
        <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
        </Row>
        </Container>

        <Footer />

        </div>
    );
}

export default Home;