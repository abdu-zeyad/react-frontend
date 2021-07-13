import React, { Component } from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
export class Home extends Component {
  render() {
    return (
      <div>
        <HeroSection />
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default Home;
