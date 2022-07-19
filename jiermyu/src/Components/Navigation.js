import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Dropdown} from 'react-bootstrap';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    let width = window.innerWidth;
    this.state = {width: window.innerWidth};

    if (width > 900) {
      this.state.renderComponent = (
        <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div class="container px-4 px-lg-5">
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto py-4 py-lg-0">

              <li class="nav-item">
                <a class="nav-link px-lg-3 py-3 py-lg-4" href="">
                  <p class="navigation-link-text">Home</p>
                </a>
              </li>
              <a href="https://www.youtube.com/channel/UCB6R9NAjkgxQi_QEkc4O25Q">
                <FontAwesomeIcon icon="fa-brands fa-youtube" />
              </a>
              <FontAwesomeIcon icon="fa-brands fa-instagram" />
              <a href="https://discord.gg/3P5K3dzgdB">
                <FontAwesomeIcon icon="fa-brands fa-discord" />
              </a>
              <a href="https://twitter.com/BoredApeYC">
                {" "}
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
              </a>
            </ul>
          </div>
        </div>
      </nav>
        </React.Fragment>
      );
    } else {
      this.state.renderComponent = (
        <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div class="container px-4 px-lg-5">
          <div class="" id="navbarResponsive">
            <ul class="navbar-nav ms-auto py-4 py-lg-0">

              <li class="nav-item">
                <a class="nav-link px-lg-3 py-3 py-lg-4" href="">
                  <p class="navigation-link-text">Home</p>
                </a>
              </li>
              <a href="https://www.youtube.com/channel/UCB6R9NAjkgxQi_QEkc4O25Q">
                <FontAwesomeIcon icon="fa-brands fa-youtube" />
              </a>
              <FontAwesomeIcon icon="fa-brands fa-instagram" />
              <a href="https://discord.gg/3P5K3dzgdB">
                <FontAwesomeIcon icon="fa-brands fa-discord" />
              </a>
              <a href="https://twitter.com/BoredApeYC">
                {" "}
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
              </a>
            </ul>
          </div>
        </div>
      </nav>
        </React.Fragment>
      );
    }
  }



  componentDidUpdate() {
    this.setState({width: window.innerWidth});
  }

  render() {
    return <React.Fragment>{this.state.renderComponent}</React.Fragment>;
  }
}

export default Navigation;
