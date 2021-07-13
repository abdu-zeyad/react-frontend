import React, { Component } from "react";
// import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
export class Navbar2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      //   button: false,
    };
  }
  closeMobileMenu = () => {
    this.setState({
      click: false,
    });
  };
  handleClick = () => {
    if (this.state.click === true) {
      this.setState({
        click: false,
      });
    } else {
      this.setState({
        click: true,
      });
    }
  };
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={this.closeMobileMenu}>
              TRVL
              <i class="fab fa-typo3" />
            </Link>
            <div className="menu-icon" onClick={this.handleClick}>
              <i
                className={this.state.click ? "fas fa-times " : "fas fa-bars"}
              />
            </div>
            <ul className={this.state.click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-links"
                  onClick={this.closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={this.closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-links"
                  onClick={this.closeMobileMenu}
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/sign-up"
                  className="nav-links-mobile"
                  onClick={this.closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            {/* {this.state.button && (
              <Button buttonStyle="btn--outline">SIGN UP</Button>
            )} */}
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar2;
