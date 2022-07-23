import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Dropdown} from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu'








class Navigation extends React.Component {
  constructor(props) {
    super(props);

    let width = window.innerWidth;
    this.state = { width: 0, height: 0 };

    if (width > 900) {
      this.state.renderComponent = (
        <React.Fragment>


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
                        


        </React.Fragment>
      );
    } else {
      this.state.renderComponent = (
        <React.Fragment>


          <div class="collapse navbar-collapse" id="navbarResponsive" style={{ paddingTop: "0px" }}>
          <ul class="navbar-nav ms-auto py-4 py-lg-0">
          <FontAwesomeIcon icon="fa-solid fa-bars" />
      <Menu right width={100}>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">Bye An Ape</a>
        <a id="contact" className="menu-item" href="/contact">Road Map</a>
        <a id="contact" className="menu-item" href="/contact">Team</a>
      </Menu>
      </ul>
      </div>
        </React.Fragment>
      );
    }
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }




  render() {
    return <React.Fragment>{this.state.renderComponent}</React.Fragment>;
  }
}

export default Navigation;
