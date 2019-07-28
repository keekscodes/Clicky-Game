import React, { Component } from "react";
import './Navbar.css';

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

class Navbar extends Component {
  render() {


    return (

      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="nav-menu-container">
        <div className="container-fluid">
         <a className="navbar-brand js-scroll-trigger" href="/">Clicky Game</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"  data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"    aria-label="Toggle navigation">
          </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto nav-menu">
                <li className="nav-item score">
                  Score: {this.props.score} Top Score: {this.props.topScore}</li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

export default Navbar;


